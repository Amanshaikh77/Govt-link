import re
import json
import requests
from concurrent.futures import ThreadPoolExecutor

TARGET_FILE = "data.js"
requests.packages.urllib3.disable_warnings()

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

def is_url_live(url):
    try:
        resp = requests.head(url, headers=headers, timeout=5, allow_redirects=True, verify=False)
        if resp.status_code < 400:
            return True
        resp = requests.get(url, headers=headers, timeout=5, allow_redirects=True, verify=False, stream=True)
        return resp.status_code < 400
    except Exception:
        return False

with open(TARGET_FILE, "r", encoding="utf-8") as f:
    content = f.read()

matches = re.findall(r'name:\s*"([^"]+)",[^}]+url:\s*"([^"]+)"', content)
broken = [m for m in matches if "broken-dead-test-link" in m[1] or not is_url_live(m[1])]

print(f"\n==========================================")
print(f"🤖 AGENT: Detected {len(broken)} / {len(matches)} Broken Links")
print(f"==========================================\n")

if not broken:
    print("✅ Sabhi links active hain!")
    exit(0)

OFFICIAL_FALLBACKS = {
    "PAN": "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html",
    "Passport": "https://www.passportindia.gov.in/",
    "Aadhaar": "https://myaadhaar.uidai.gov.in/",
    "Voter": "https://voters.eci.gov.in/",
    "Driving": "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do",
    "Vehicle": "https://vahan.parivahan.gov.in/vahanservice/",
    "Pension": "https://npstrust.org.in/",
    "DigiLocker": "https://www.digilocker.gov.in/",
    "Bihar": "https://serviceonline.bihar.gov.in/",
    "Scholarship": "https://scholarships.gov.in/",
    "Ration": "https://nfsa.gov.in/portal/ration_card_state_portals_aa"
}

fixed_count = 0
for name, old_url in broken:
    # 1. Official portal match
    target_url = None
    for key, url in OFFICIAL_FALLBACKS.items():
        if key.lower() in name.lower():
            target_url = url
            break
    
    if not target_url:
        target_url = "https://www.india.gov.in/"

    # 2. Strict Ping Verification
    if is_url_live(target_url):
        pattern = rf'({re.escape(name)}"[^}}]+url:\s*")[^"]+(")'
        content = re.sub(pattern, rf'\g<1>{target_url}\g<2>', content)
        print(f"✓ Fixed & Verified: {name} ➔ {target_url}")
        fixed_count += 1
    else:
        print(f"✗ Failed Ping: {target_url}")

with open(TARGET_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print(f"\n🎉 Completed: {fixed_count}/{len(broken)} links live ping verify hokar update ho gaye!")
