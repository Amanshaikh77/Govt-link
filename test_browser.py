from curl_cffi import requests

url = "https://myaadhaar.uidai.gov.in/"
print(f"Requesting {url} with Chrome TLS Signature...")

try:
    response = requests.get(url, impersonate="chrome120", timeout=10)
    print("✓ Success! Status Code:", response.status_code)
except Exception as e:
    print("❌ Error:", e)
