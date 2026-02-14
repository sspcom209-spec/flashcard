import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('shows intro message and app title', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Spanish Flashcards' })).toBeVisible()
    await expect(page.getByText('Choose how you want to practice.')).toBeVisible()
  })

  test('has Study Mode link that navigates to category selection for study', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Study Mode' }).click()
    await expect(page).toHaveURL('/study/category')
    await expect(page.getByRole('heading', { name: /Study Mode.*Choose a category/ })).toBeVisible()
  })

  test('has Quiz Mode link that navigates to quiz category selection', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Quiz Mode' }).click()
    await expect(page).toHaveURL('/quiz/category')
    await expect(page.getByRole('heading', { name: /Quiz Mode.*Choose a category/ })).toBeVisible()
  })

  test('has Stats Page link that navigates to statistics page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Stats Page' }).click()
    await expect(page).toHaveURL('/stats')
    await expect(page.getByRole('heading', { name: 'Statistics' })).toBeVisible()
  })
})
