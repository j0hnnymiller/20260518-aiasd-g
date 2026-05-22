import { expect, test, type Page } from '@playwright/test'

async function clickSequence(page: Page, keys: string[]): Promise<void> {
  for (const key of keys) {
    await page.getByTestId(`btn-${key}`).click()
  }
}

test.describe('Calculator acceptance scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('12 + 7 = 19', async ({ page }) => {
    await clickSequence(page, ['1', '2', 'add', '7', 'equals'])
    await expect(page.getByTestId('display')).toHaveText('19')
  })

  test('9 / 3 = 3', async ({ page }) => {
    await clickSequence(page, ['9', 'divide', '3', 'equals'])
    await expect(page.getByTestId('display')).toHaveText('3')
  })

  test('5.5 * 2 = 11', async ({ page }) => {
    await clickSequence(page, ['5', 'decimal', '5', 'multiply', '2', 'equals'])
    await expect(page.getByTestId('display')).toHaveText('11')
  })

  test('Backspace changes 123 to 12', async ({ page }) => {
    await clickSequence(page, ['1', '2', '3', 'backspace'])
    await expect(page.getByTestId('display')).toHaveText('12')
  })

  test('AC and Escape reset display to 0', async ({ page }) => {
    await clickSequence(page, ['9', 'add', '1'])
    await page.getByTestId('btn-clear').click()
    await expect(page.getByTestId('display')).toHaveText('0')

    await clickSequence(page, ['8', 'add', '2'])
    await page.keyboard.press('Escape')
    await expect(page.getByTestId('display')).toHaveText('0')
  })

  test('mouse and keyboard produce identical result sequences', async ({ page }) => {
    await clickSequence(page, ['1', '2', 'add', '7', 'equals'])
    await expect(page.getByTestId('display')).toHaveText('19')

    await page.getByTestId('btn-clear').click()
    await expect(page.getByTestId('display')).toHaveText('0')

    await page.keyboard.type('12+7')
    await page.keyboard.press('Enter')
    await expect(page.getByTestId('display')).toHaveText('19')
  })
})
