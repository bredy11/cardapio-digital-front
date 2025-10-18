from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        page.goto("http://localhost:5173/cadastrar-cardapio")

        # Fill out the form
        page.get_by_label("Nome do Item").fill("Espeto de Carne")
        page.locator("#itemValue input").fill("25")
        page.get_by_label("Descrição Breve").fill("Delicioso espeto de contra-filé")
        chips_input = page.locator("#itemCategories input")
        chips_input.type("Pratos Principais")
        chips_input.press("Enter")
        page.locator("#itemServes input").fill("2")

        # Set a file for the upload component to test clearing it
        page.locator('input[type="file"]').set_input_files('README.md')

        # Click the clear button
        page.get_by_role("button", name="Limpar Formulário").click()

        # Take screenshot to verify the form is cleared
        page.screenshot(path="jules-scratch/verification/verification_clear.png")

    except Exception as e:
        page.screenshot(path="jules-scratch/verification/error.png")
        raise e
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)