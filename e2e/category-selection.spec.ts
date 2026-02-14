import { test, expect } from '@playwright/test'

test.describe('Category Selection', () => {
  test('Study mode lists all 3 categories (animals, food, verbs)', async ({ page }) => {
    await page.goto('/study/category')
    await expect(page.getByRole('link', { name: 'animals' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'food' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'verbs' })).toBeVisible()
  })

  test('clicking animals in study mode proceeds to study session', async ({ page }) => {
    await page.goto('/study/category')
    await page.getByRole('link', { name: 'animals' }).click()
    await expect(page).toHaveURL('/study/animals')
    await expect(page.getByRole('heading', { name: 'Study — animals' })).toBeVisible()
  })

  test('clicking food in study mode proceeds to study session', async ({ page }) => {
    await page.goto('/study/category')
    await page.getByRole('link', { name: 'food' }).click()
    await expect(page).toHaveURL('/study/food')
    await expect(page.getByRole('heading', { name: 'Study — food' })).toBeVisible()
  })

  test('Quiz mode lists categories and clicking one goes to quiz session', async ({ page }) => {
    await page.goto('/quiz/category')
    await expect(page.getByRole('link', { name: 'animals' })).toBeVisible()
    await page.getByRole('link', { name: 'animals' }).click()
    await expect(page).toHaveURL('/quiz/animals')
    await expect(page.getByRole('heading', { name: /Quiz.*animals/ })).toBeVisible()
  })

  test('Back to Home from category selection returns to home', async ({ page }) => {
    await page.goto('/study/category')
    await page.getByRole('link', { name: '← Back to Home' }).click()
    await expect(page).toHaveURL('/')
    await expect(page.getByRole('heading', { name: 'Spanish Flashcards' })).toBeVisible()
  })
})
