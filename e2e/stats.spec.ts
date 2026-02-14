import { test, expect } from '@playwright/test'

test.describe('Stats Page', () => {
  test('shows Statistics heading and placeholder message', async ({ page }) => {
    await page.goto('/stats')
    await expect(page.getByRole('heading', { name: 'Statistics' })).toBeVisible()
    await expect(
      page.getByText(/Your study stats will appear here once you start using the app/)
    ).toBeVisible()
  })

  test('Back to Home returns to home page', async ({ page }) => {
    await page.goto('/stats')
    await page.getByRole('link', { name: '← Back to Home' }).click()
    await expect(page).toHaveURL('/')
    await expect(page.getByRole('heading', { name: 'Spanish Flashcards' })).toBeVisible()
  })
})
