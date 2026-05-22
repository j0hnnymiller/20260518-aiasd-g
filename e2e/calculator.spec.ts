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
})
