import os
import re
import json
import time
import urllib3
from urllib.parse import quote_plus, unquote
from curl_cffi import requests as cffi_requests
import requests as std_requests

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
TARGET_FILE = "data.js" if os.path.exists("data.js") else "links/data.js"

# Multi-Sector Deep Queries: Services, Schemes, Utilities AND Colleges Together
UNIFIED_SEARCH_QUERIES = [
    ("site:bihar.gov.in online registration application citizen service", "Bihar Special"),
    ("site:bihar.gov.in certificate rtps ration revenue dakhil", "Bihar Special"),
    ("site:gov.in bihar scholarship student dbt credit card", "Education & Career"),
    ("site:gov.in portal farmer kisan kcc subsidy agriculture bihar", "Welfare & Schemes"),
    ("site:ac.in bihar university college examination portal", "Colleges & Higher Education"),
    ("site:edu.in bihar medical engineering technology institute", "Colleges & Higher Education"),
    ("site:bihar.gov.in hospital health clinic opd booking", "Health & Medical"),
    ("site:gov.in pension social security public grievance bihar", "Welfare & Schemes"),
    ("site:parivahan.gov.in bihar driving licence vehicle registration", "Transport"),
    ("site:bihar.gov.in municipal holding tax water bill electricity", "Utilities & Bills")
]

# Curated Baseline of Missing Essential Services + Top Colleges Combined
STATIC_UNIFIED_POOL = [
    # --- CITIZEN SCHEMES & PUBLIC SERVICES ---
    {"name": "Bihar RTPS Income Certificate Apply", "category": "Bihar Special", "desc": "Official circle level income certificate application portal.", "url": "https://serviceonline.bihar.gov.in/"},
    {"name": "Bihar RTPS Caste Certificate Apply", "category": "Bihar Special", "desc": "Apply for SC, ST, EBC and BC caste certificates online.", "url": "https://serviceonline.bihar.gov.in/"},
    {"name": "Bihar RTPS Residence Domicile Certificate", "category": "Bihar Special", "desc": "Direct application for residential and domicile certificate Bihar.", "url": "https://serviceonline.bihar.gov.in/"},
    {"name": "Bihar RTPS Non-Creamy Layer (NCL) Certificate", "category": "Bihar Special", "desc": "OBC / BC Non-Creamy layer certificate application Bihar.", "url": "https://serviceonline.bihar.gov.in/"},
    {"name": "Bihar Bhumi Jamabandi View (Register II)", "category": "Bihar Special", "desc": "Check digitized land records and Jamabandi register online.", "url": "https://biharbhumi.bihar.gov.in/Biharbhumi/ViewJamabandi.aspx"},
    {"name": "Bihar Bhumi Dakhil Kharij (Land Mutation)", "category": "Bihar Special", "desc": "Online application portal for land mutation across Bihar circles.", "url": "https://biharbhumi.bihar.gov.in/Biharbhumi/"},
    {"name": "Bihar Student Credit Card (MNSSBY)", "category": "Education & Career", "desc": "Higher education 4 lakh collateral-free credit loan scheme.", "url": "https://www.7nishchay-yuvaupmission.bihar.gov.in/"},
    {"name": "Bihar Kushal Yuva Program (KYP Registration)", "category": "Education & Career", "desc": "Skill training registration portal under Bihar Skill Mission.", "url": "https://skillmissionbihar.org/"},
    {"name": "Bihar Mukhyamantri Udyami Yojana", "category": "Business & Tax", "desc": "10 lakh business loan with 5 lakh grant for entrepreneurs.", "url": "https://udyami.bihar.gov.in/"},
    {"name": "Bihar Agriculture DBT Registration", "category": "Welfare & Schemes", "desc": "Farmer registration portal for input, seed, and machinery subsidy.", "url": "https://dbtagriculture.bihar.gov.in/"},
    {"name": "Bihar Rajya Beej Nigam (BRBN Seed Booking)", "category": "Welfare & Schemes", "desc": "Subsidized certified agricultural seeds booking with doorstep delivery.", "url": "https://brbn.bihar.gov.in/"},
    {"name": "South Bihar Power Bill Quick Payment (SBPDCL)", "category": "Utilities & Bills", "desc": "Instant online electricity bill payment for southern Bihar.", "url": "https://sbpdcl.co.in/"},
    {"name": "North Bihar Power Bill Quick Payment (NBPDCL)", "category": "Utilities & Bills", "desc": "Instant online electricity bill payment for northern Bihar.", "url": "https://nbpdcl.co.in/"},
    {"name": "Patna Municipal Corporation (PMC Online)", "category": "Utilities & Bills", "desc": "Online property holding tax payment and municipal services Patna.", "url": "https://www.pmc.bihar.gov.in/"},
    {"name": "Bihar Police Citizen Services Online", "category": "Citizen Services", "desc": "Online lost article report, tenant and domestic help verification.", "url": "https://police.bihar.gov.in/"},
    {"name": "Patna High Court Case Tracking Portal", "category": "Legal & Rights", "desc": "CNR search, case orders, and daily cause list Patna High Court.", "url": "https://patnahighcourt.gov.in/"},

    # --- TOP UNIVERSITIES, MEDICAL & ENGINEERING COLLEGES ---
    {"name": "Patna University Official Student Portal", "category": "Colleges & Higher Education", "desc": "Official undergraduate and postgraduate admissions Patna University.", "url": "https://pup.ac.in/"},
    {"name": "Patliputra University Admissions (PPU)", "category": "Colleges & Higher Education", "desc": "Degree admission, registration, and marksheet portal Patna.", "url": "https://ppup.ac.in/"},
    {"name": "Babasaheb Bhimrao Ambedkar Bihar University (BRABU)", "category": "Colleges & Higher Education", "desc": "Degree examinations and student admit card portal Muzaffarpur.", "url": "https://www.brabu.net/"},
    {"name": "Magadh University Bodh Gaya Student Portal", "category": "Colleges & Higher Education", "desc": "Degree marksheet publication and academic notices Bodh Gaya.", "url": "https://magadhuniversity.ac.in/"},
    {"name": "Lalit Narayan Mithila University (LNMU)", "category": "Colleges & Higher Education", "desc": "Student admission and examination registration Darbhanga.", "url": "https://lnmu.ac.in/"},
    {"name": "Aryabhatta Knowledge University (AKU Patna)", "category": "Colleges & Higher Education", "desc": "Technical and engineering degree examinations portal Patna.", "url": "http://akubihar.ac.in/"},
    {"name": "Chanakya National Law University (CNLU Patna)", "category": "Colleges & Higher Education", "desc": "National Law University student notices and academic portal.", "url": "https://cnlu.ac.in/"},
    {"name": "Central University of South Bihar (CUSB Gaya)", "category": "Colleges & Higher Education", "desc": "Central university degree programs and admission portal Gaya.", "url": "https://www.cusb.ac.in/"},
    {"name": "Mahatma Gandhi Central University (MGCU Motihari)", "category": "Colleges & Higher Education", "desc": "Central university degree courses and examination portal.", "url": "https://mgcub.ac.in/"},
    {"name": "IIT Patna Official Institute Portal", "category": "Colleges & Higher Education", "desc": "Indian Institute of Technology Patna academic and research portal.", "url": "https://www.iitp.ac.in/"},
    {"name": "NIT Patna Student Academic Portal", "category": "Colleges & Higher Education", "desc": "National Institute of Technology Patna academic portal.", "url": "https://www.nitp.ac.in/"},
    {"name": "AIIMS Patna Patient OPD Registration", "category": "Health & Medical", "desc": "All India Institute of Medical Sciences Patna online OPD portal.", "url": "https://aiimspatna.edu.in/"},
    {"name": "Patna Medical College Hospital (PMCH Desk)", "category": "Health & Medical", "desc": "Historic hospital healthcare services and student information.", "url": "http://patnamedicalcollege.com/"},
    {"name": "Indira Gandhi Institute of Medical Sciences (IGIMS OPD)", "category": "Health & Medical", "desc": "Super-specialty hospital online OPD registration Patna.", "url": "http://www.igims.org/"},
    {"name": "Nalanda Medical College Hospital (NMCH Patna)", "category": "Health & Medical", "desc": "Official medical college hospital OPD and healthcare desk.", "url": "http://nmchpatna.org/"},
    {"name": "Muzaffarpur Institute of Technology (MIT)", "category": "Colleges & Higher Education", "desc": "Government engineering college academic portal Muzaffarpur.", "url": "https://www.mitmuzaffarpur.org/"},
    {"name": "Bhagalpur College of Engineering (BCE)", "category": "Colleges & Higher Education", "desc": "Government engineering degree portal Bhagalpur.", "url": "https://www.bcebhagalpur.ac.in/"},
    {"name": "Gaya College of Engineering (GCE Gaya)", "category": "Colleges & Higher Education", "desc": "Government technical engineering degree portal Gaya.", "url": "https://www.gcegaya.ac.in/"},
    {"name": "Bakhtiyarpur College of Engineering (BCE Patna)", "category": "Colleges & Higher Education", "desc": "Government engineering college student services portal.", "url": "https://www.bcepatna.ac.in/"}
]

def crawl_live_web_links(query_str):
    url = f"https://html.duckduckgo.com/html/?q={quote_plus(query_str)}"
    results = []
    try:
        headers = {"User-Agent": "Mozilla/5.0 (Linux; Android 14) Chrome/128.0.0.0 Safari/537.36"}
        r = std_requests.get(url, headers=headers, timeout=8)
        if r.status_code == 200:
            raw_links = re.findall(r'uddg=([^&"\']+)', r.text)
            for raw in raw_links:
                decoded = unquote(raw)
                if any(dom in decoded for dom in [".gov.in", ".nic.in", ".ac.in", ".edu.in", ".org.in", ".bihar.gov.in"]):
                    if not any(bad in decoded for bad in ["duckduckgo", "wikipedia", "facebook", "youtube", "twitter"]):
                        clean_u = decoded.split("?")[0].rstrip("/")
                        results.append(clean_u)
    except Exception:
        pass
    return list(dict.fromkeys(results))

def is_live_clean(url):
    if not url or "broken" in url or "invalid" in url:
        return False
    try:
        r = cffi_requests.get(url, impersonate="chrome120", timeout=8, verify=False)
        if r.status_code in [200, 301, 302, 403]:
            return True
    except Exception:
        pass
    try:
        headers = {"User-Agent": "Mozilla/5.0 (Linux; Android 14) Chrome/128.0.0.0 Safari/537.36"}
        r = std_requests.get(url, headers=headers, timeout=8, verify=False)
        if r.status_code in [200, 301, 302, 403]:
            return True
    except Exception:
        pass
    return False

# Read existing data.js
with open(TARGET_FILE, "r", encoding="utf-8") as f:
    content = f.read()

existing_items = re.findall(r'name:\s*"([^"]+)"', content)
existing_urls = set(re.findall(r'url:\s*"([^"]+)"', content))
existing_names_set = set(k.strip().lower() for k in existing_items)

print(f"\n=======================================================")
print(f"🔍 STAGE 1: DEEP SEARCH (SERVICES + SCHEMES + COLLEGES)")
print(f"📁 Target Database : {TARGET_FILE}")
print(f"📊 Current Link Count : {len(existing_items)}")
print(f"=======================================================\n")

unadded_candidates = []
seen_candidate_urls = set()

# Ingest static pool first
for item in STATIC_UNIFIED_POOL:
    u = item["url"].strip()
    n = item["name"].strip()
    if u not in existing_urls and n.lower() not in existing_names_set:
        unadded_candidates.append(item)
        seen_candidate_urls.add(u)

print(f"• Pre-loaded {len(unadded_candidates)} baseline portals from master pool.")
print("• Live searching web for active citizen services and colleges in Bihar...")

# Live crawl queries to cross 100+ candidates
for query, cat in UNIFIED_SEARCH_QUERIES:
    print(f"  ↳ Scanning: '{query}'...", end=" ", flush=True)
    crawled = crawl_live_web_links(query)
    added_from_q = 0
    for link in crawled:
        if link not in existing_urls and link not in seen_candidate_urls:
            domain_name = link.split("/")[2].replace("www.", "").split(".")[0].capitalize()
            entry = {
                "name": f"Bihar {domain_name} Official Portal",
                "category": cat,
                "desc": f"Official {cat.lower()} portal for citizens and students in Bihar.",
                "url": link
            }
            unadded_candidates.append(entry)
            seen_candidate_urls.add(link)
            added_from_q += 1
    print(f"✓ {added_from_q} fresh links.")
    if len(unadded_candidates) >= 120:
        break
    time.sleep(0.3)

total_found = len(unadded_candidates)
print(f"\n🎯 STAGE 1 COMPLETED: Aggregated {total_found} unadded portals (Services + Colleges).")

print(f"\n=======================================================")
print(f"🚀 STAGE 2: LIVE AUDITING & AUTOMATIC INGESTION")
print(f"=======================================================\n")

added_entries = []

for idx, item in enumerate(unadded_candidates, 1):
    name = item["name"].strip()
    category = item["category"].strip()
    desc = item["desc"].strip()
    url = item["url"].strip()

    print(f"[{idx}/{total_found}] 🌐 Testing: {name}")
    print(f"        Category : {category}")
    print(f"        URL      : {url}")
    print(f"        Live Ping ...", end=" ", flush=True)

    if is_live_clean(url):
        print("🟢 PASSED (Live & Functional)")
        js_block = (
            f"  {{\n"
            f'    name: "{name}",\n'
            f'    category: "{category}",\n'
            f'    desc: "{desc}",\n'
            f'    url: "{url}"\n'
            f"  }}"
        )
        added_entries.append(js_block)
        existing_urls.add(url)
        existing_names_set.add(name.lower())
    else:
        print("🔴 Offline / Dropped. Skipped.")

    time.sleep(0.15)

if added_entries:
    injection_text = ",\n" + ",\n".join(added_entries) + "\n];"
    new_content = re.sub(r'\];\s*$', injection_text, content.strip())

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

    print(f"\n=======================================================")
    print(f"🎉 MASTER INGESTION COMPLETE:")
    print(f"   • Total Discovered Candidates   : {total_found}")
    print(f"   • Newly Added (Services + Univ) : {len(added_entries)}")
    print(f"   • Total Active Tools Now Live   : {len(existing_items) + len(added_entries)}")
    print(f"=======================================================\n")
else:
    print(f"\nℹ️ Sabhi tested portals pehle se database me hain. Total links: {len(existing_items)}")
