from playwright.sync_api import sync_playwright, Page, expect

def test_login_page_loads(page: Page):
    """
    This test verifies that the login page loads correctly from the production build.
    """
    # 1. Navigate to the login page on the production server.
    page.goto("http://localhost:8000/login")

    # 2. Explicitly wait for the heading to be present in the DOM.
    heading_selector = "h2:has-text('Acesse sua conta')"
    page.wait_for_selector(heading_selector, timeout=10000)

    # 3. Assert that the main heading is visible.
    heading = page.locator(heading_selector)
    expect(heading).to_be_visible()

    # 4. Take the final screenshot for visual verification.
    page.screenshot(path="jules-scratch/verification/login_page.png")

# Boilerplate to run the test
if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_login_page_loads(page)
        finally:
            browser.close()