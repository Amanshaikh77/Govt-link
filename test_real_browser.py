from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless=new")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--disable-gpu")
options.add_argument("user-agent=Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36")

print("Launching Real Chrome Engine in Termux...")
driver = webdriver.Chrome(options=options)

driver.get("https://myaadhaar.uidai.gov.in/")
print("Page Title Loaded:", driver.title)
print("Current URL:", driver.current_url)

driver.quit()
print("✓ Real Browser Engine Working Perfectly!")
