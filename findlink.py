import os
import re
import json
import time
import requests

TARGET_FILE = "data.js" if os.path.exists("data.js") else "links/data.js"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
}
requests.packages.urllib3.disable_warnings()

def is_live(url):
    try:
        r = requests.get(url, headers=headers, timeout=6, allow_redirects=True, verify=False, stream=True)
        return r.status_code in [200, 301, 302, 403]
    except Exception:
        return False

with open(TARGET_FILE, "r", encoding="utf-8") as f:
    content = f.read()

existing_names = set(re.findall(r'name:\s*"([^"]+)"', content))
existing_urls = set(re.findall(r'url:\s*"([^"]+)"', content))

print(f"\n=======================================================")
print(f"🌐 FIND-LINK AGENT: DISCOVERING NEW SITES VIA AI")
print(f"📁 Current Total Count: {len(existing_names)} Services")
print(f"=======================================================\n")

prompt = (
    "List 8 newly launched or important official Indian Central and Bihar Government portals or schemes that are currently active. "
    "Do NOT include basic old portals like basic Aadhaar, PAN, Voter. "
    "Return strictly JSON format: [{\"name\":\"Portal Name\",\"desc\":\"Short Description\",\"type\":\"bihar or india\",\"cat\":\"welfare or transport or identity\",\"url\":\"https://...\"}]. "
    "No introductory text, no markdown explanation."
)

print("🧠 Querying Pollinations AI for new government schemes and websites...")

parsed_items = []
try:
    res = requests.post(
        "https://text.pollinations.ai/",
        json={
            "messages": [
                {"role": "system", "content": "You are an Indian Government Open Data API. Respond ONLY with valid JSON array of objects."},
                {"role": "user", "content": prompt}
            ],
            "model": "openai"
        },
        timeout=35
    )
    raw_text = res.text.strip()
    match = re.search(r'\[\s*\{.*\}\s*\]', raw_text, re.DOTALL)
    if match:
        data = json.loads(match.group(0))
        for item in data:
            if isinstance(item, dict):
                parsed_items.append(item)
except Exception as e:
    print(f"AI Fetch Error: {e}")

added_count = 0
entries_to_append = []

for s in parsed_items:
    name = str(s.get("name", "")).strip()
    url = str(s.get("url", "")).strip()
    desc = str(s.get("desc", "Official Government Portal")).strip()
    s_type = str(s.get("type", "india")).strip()
    cat = str(s.get("cat", "welfare")).strip()

    if not name or not url or not url.startswith("http"):
        continue

    if name in existing_names or url in existing_urls:
        print(f"⏭️ Already Exists: {name}")
        continue

    print(f"Testing new discovered portal: {name} ({url}) ...", end=" ", flush=True)
    if is_live(url):
        print("✅ VERIFIED ACTIVE!")
        entry_str = f'    {{ name: "{name}", desc: "{desc}", type: "{s_type}", cat: "{cat}", url: "{url}" }},\n'
        entries_to_append.append(entry_str)
        existing_names.add(name)
        existing_urls.add(url)
        added_count += 1
    else:
        print("❌ Ping Failed. Skipped.")

if added_count > 0:
    closing_index = content.rfind("];")
    if closing_index != -1:
        new_content = content[:closing_index] + "".join(entries_to_append) + content[closing_index:]
        with open(TARGET_FILE, "w", encoding="utf-8") as f:
            f.write(new_content)
        
        if os.path.exists("links/data.js"):
            with open("links/data.js", "w", encoding="utf-8") as f:
                f.write(new_content)

        timestamp = int(time.time())
        if os.path.exists("index.html"):
            with open("index.html", "r", encoding="utf-8") as f:
                html = f.read()
            html = re.sub(r'data\.js(\?v=\d+)?', f'data.js?v={timestamp}', html)
            with open("index.html", "w", encoding="utf-8") as f:
                f.write(html)

        print(f"\n🎉 Successfully added {added_count} brand-new government portals to your homepage!")
    else:
        print("data.js format issue: closing bracket '];' nahi mila.")
else:
    print("\nKoi naya valid portal add nahi hua.")

print(f"=======================================================\n")
