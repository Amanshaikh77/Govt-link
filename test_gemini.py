import os
import requests
import json

API_KEY = os.environ.get("GEMINI_API_KEY")
print(f"1. Checking GEMINI_API_KEY...")
if not API_KEY:
    print("❌ GEMINI_API_KEY set nahi hai! Pehle export karein.")
    exit(1)
print(f"✓ API Key found (starts with: {API_KEY[:8]}...)\n")

print("2. Fetching available models from Google API...")
for version in ["v1beta", "v1"]:
    url = f"https://generativelanguage.googleapis.com/{version}/models?key={API_KEY}"
    try:
        res = requests.get(url, timeout=10)
        print(f"--> Testing [{version}] endpoint: Status {res.status_code}")
        if res.status_code == 200:
            models = res.json().get("models", [])
            gen_models = [m["name"] for m in models if "generateContent" in m.get("supportedGenerationMethods", [])]
            print(f"✓ Available generateContent models in {version}:")
            for m in gen_models[:6]:
                print(f"   • {m}")
            
            # Ab pehle model se ek test prompt call karte hain
            if gen_models:
                test_model = gen_models[0]
                print(f"\n3. Sending Test Prompt to: {test_model}...")
                test_url = f"https://generativelanguage.googleapis.com/{version}/{test_model}:generateContent?key={API_KEY}"
                payload = {
                    "contents": [{"parts": [{"text": "Reply with only the word: WORKING"}]}]
                }
                t_res = requests.post(test_url, json=payload, headers={"Content-Type": "application/json"}, timeout=15)
                print(f"--> Test Call Status: {t_res.status_code}")
                if t_res.status_code == 200:
                    answer = t_res.json()["candidates"][0]["content"]["parts"][0]["text"].strip()
                    print(f"🎉 SUCCESS! Gemini responded: '{answer}'")
                    print(f"\n✅ YOUR WORKING ENDPOINT:")
                    print(f"URL: https://generativelanguage.googleapis.com/{version}/{test_model}:generateContent?key=$GEMINI_API_KEY")
                    break
                else:
                    print(f"❌ Test prompt failed: {t_res.status_code} - {t_res.text}")
        else:
            print(f"❌ Error {res.status_code}: {res.text[:150]}")
    except Exception as e:
        print(f"Request exception: {e}")

