from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    try:
        # Navigate to the running application
        page.goto("http://localhost:5173/")

        # Wait for the navbar to be visible to ensure the page has loaded
        navbar = page.locator(".navbar")
        expect(navbar).to_be_visible()

        # Take a screenshot of the entire page
        page.screenshot(path="jules-scratch/verification/navbar_verification.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)