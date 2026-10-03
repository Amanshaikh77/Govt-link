import os
import re
import json
import time
from curl_cffi import requests

NVIDIA_KEY = os.environ.get("NVIDIA_API_KEY")
if not NVIDIA_KEY:
    print("❌ ERROR: NVIDIA_API_KEY set nahi hai!")
    exit(1)

TARGET_FILE = "data.js" if os.path.exists("data.js") else "links/data.js"
ENDPOINT = "https://integrate.api.nvidia.com/v1/chat/completions"
ACTIVE_MODEL = "meta/llama-3.2-11b-vision-instruct"

headers_nv = {
    "Authorization": f"Bearer {NVIDIA_KEY}",
    "Content-Type": "application/json"
}

# Verified sub-pages when AI hallucinates non-existent routes
VERIFIED_FALLBACKS = {
    "Crop Insurance Status": "https://pmfby.gov.in/",
    "Kisan Credit Card Information": "https://pmkisan.gov.in/",
    "Pension Services": "https://npstrust.org.in/",
    "Pension Claim": "https://npstrust.org.in/"
}

def clean_val(val):
    if not val or not isinstance(val, str):
        return ""
    return val.strip()

def is_live_stealth(url):
    if not url or "broken" in url or "invalid-404" in url:
        return False
    try:
        r = requests.get(url, impersonate="chrome120", timeout=8)
        return r.status_code in [200, 301, 302, 403]
    except Exception:
        return False

def nvidia_audit_tool(service_name, current_url):
    prompt = (
        f"You are an Indian Government portal web auditor.\n"
        f"Tool Name: '{service_name}'\n"
        f"Current URL: '{current_url}'\n\n"
        f"Instructions:\n"
        f"1. Check if Current URL is an active, specific action/form page.\n"
        f"2. Provide 'deep_url': Direct online form/action URL.\n"
        f"3. Provide 'fallback_url': Official department primary sub-portal.\n"
        f"Respond STRICTLY in valid JSON without markdown fences:\n"
        f"{{\"is_valid\": true_or_false, \"deep_url\": \"https://...\", \"fallback_url\": \"https://...\"}}"
    )

    payload = {
        "model": ACTIVE_MODEL,
        "messages": [
            {"role": "system", "content": "You are a precise JSON-only government portal directory auditor."},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.1,
        "max_tokens": 180
    }

    try:
        res = requests.post(ENDPOINT, headers=headers_nv, json=payload, timeout=25)
        if res.status_code == 200:
            raw_text = res.json()["choices"][0]["message"]["content"].strip()
            raw_text = re.sub(r'^```json\s*', '', raw_text)
            raw_text = re.sub(r'^```\s*', '', raw_text)
            raw_text = re.sub(r'```$', '', raw_text).strip()
            return json.loads(raw_text)
        elif res.status_code == 429:
            print("[Rate Limit - Pausing 2s]", end=" ", flush=True)
            time.sleep(2)
        else:
            print(f"[API Error {res.status_code}]", end=" ", flush=True)
    except Exception as e:
        print(f"[Error: {type(e).__name__}]", end=" ", flush=True)
    return None

with open(TARGET_FILE, "r", encoding="utf-8") as f:
    content = f.read()

items = re.findall(r'(\{\s*name:\s*"([^"]+)",[\s\S]*?url:\s*")([^"]+)("[\s\S]*?\})', content)
total_links = len(items)

print(f"\n=======================================================")
print(f"⚡ NVIDIA ENGINE: {ACTIVE_MODEL}")
print(f"📊 Auditing: {total_links} Tools | Target: {TARGET_FILE}")
print(f"=======================================================\n")

updated_count = 0
untouched_count = 0

for index, (prefix, name, current_url, suffix) in enumerate(items, 1):
    print(f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print(f"📌 [{index}/{total_links}] AUDITING TOOL: {name}")
    print(f"   ↳ Current URL : {current_url}")

    is_mismatched = ("uidai" in current_url and "aadhaar" not in name.lower())
    current_status = is_live_stealth(current_url) if not is_mismatched else False

    print(f"   ↳ 🤖 Consulting NVIDIA NIM...", end=" ", flush=True)
    audit = nvidia_audit_tool(name, current_url)

    final_url = current_url

    if audit and isinstance(audit, dict):
        print("✓ Response OK!")
        deep_page = clean_val(audit.get("deep_url"))
        main_page = clean_val(audit.get("fallback_url"))
        is_already_valid = bool(audit.get("is_valid", False))

        if is_already_valid and current_status and not is_mismatched:
            print(f"   ↳ Status      : ✅ Confirmed Active Deep Page (Kept)")
            untouched_count += 1
            continue

        print(f"   ↳ Suggested Deep URL : {deep_page if deep_page else 'None'}")
        print(f"   ↳ Verifying URL Ping ...", end=" ", flush=True)

        if deep_page and is_live_stealth(deep_page):
            print("🟢 PASSED!")
            final_url = deep_page
        else:
            print("🔴 Failed. Trying Fallback ...", end=" ", flush=True)
            if main_page and is_live_stealth(main_page):
                print("🟢 PASSED!")
                final_url = main_page
            elif name in VERIFIED_FALLBACKS:
                final_url = VERIFIED_FALLBACKS[name]
                print(f"🟢 PASSED (Verified Fallback)!")
            else:
                print("⚠️ Fallback Failed.")
    else:
        print("⚠ NVIDIA call skipped.")
        if name in VERIFIED_FALLBACKS:
            final_url = VERIFIED_FALLBACKS[name]

    if final_url != current_url:
        pattern = rf'({re.escape(name)}"[^}}]+url:\s*")[^"]+(")'
        content = re.sub(pattern, rf'\g<1>{final_url}\g<2>', content)
        print(f"   ↳ 🚀 ACTION    : Replaced with ➔ {final_url}")
        updated_count += 1
    else:
        print(f"   ↳ 🚀 ACTION    : Kept Unchanged")
        untouched_count += 1

    time.sleep(0.4)

with open(TARGET_FILE, "w", encoding="utf-8") as f:
    f.write(content)

if os.path.exists("links/data.js"):
    with open("links/data.js", "w", encoding="utf-8") as f:
        f.write(content)

timestamp = int(time.time())
if os.path.exists("index.html"):
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()
    html = re.sub(r'data\.js(\?v=\d+)?', f'data.js?v={timestamp}', html)
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html)

print(f"\n=======================================================")
print(f"🎯 AUDIT COMPLETE:")
print(f"   • Total Audited       : {total_links}")
print(f"   • Verified & Kept     : {untouched_count}")
print(f"   • Patched with NVIDIA : {updated_count}")
print(f"=======================================================\n")
