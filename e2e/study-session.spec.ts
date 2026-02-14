import { test, expect } from '@playwright/test'

test.describe('Study Session', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/study/animals')
  })

  test('displays Spanish word on card by default', async ({ page }) => {
    await expect(page.getByText('el gato')).toBeVisible()
  })

  test('shows card counter (e.g. Card 1 of 4)', async ({ page }) => {
    await expect(page.getByText(/Card 1 of 4/)).toBeVisible()
  })

  test('clicking card flips to show English translation', async ({ page }) => {
    await expect(page.getByText('el gato')).toBeVisible()
    await page.getByRole('button', { name: /Front: el gato/ }).click()
    await expect(page.getByText('the cat')).toBeVisible()
  })

  test('after flipping, Right and Wrong and Next card buttons are visible', async ({ page }) => {
    await page.getByRole('button', { name: /Front: el gato/ }).click()
    await expect(page.getByRole('button', { name: 'I got it right' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'I got it wrong' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Next card →' })).toBeVisible()
  })

  test('Next card button is visible even before flipping', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Next card →' })).toBeVisible()
  })

  test('clicking Next card advances to next card', async ({ page }) => {
    await expect(page.getByText('el gato')).toBeVisible()
    await page.getByRole('button', { name: 'Next card →' }).click()
    await expect(page.getByText(/Card 2 of 4/)).toBeVisible()
    await expect(page.getByText('el perro')).toBeVisible()
  })

  test('clicking Right advances to next card', async ({ page }) => {
    await page.getByRole('button', { name: /Front: el gato/ }).click()
    await expect(page.getByText('the cat')).toBeVisible()
    await page.getByRole('button', { name: 'I got it right' }).click()
    await expect(page.getByText(/Card 2 of 4/)).toBeVisible()
    await expect(page.getByText('el perro')).toBeVisible()
  })

  test('clicking Wrong advances to next card', async ({ page }) => {
    await page.getByRole('button', { name: /Front: el gato/ }).click()
    await page.getByRole('button', { name: 'I got it wrong' }).click()
    await expect(page.getByText(/Card 2 of 4/)).toBeVisible()
  })

  test('completing all cards shows session complete screen', async ({ page }) => {
    for (let i = 0; i < 4; i++) {
      await page.getByRole('button', { name: 'Next card →' }).click()
    }
    await expect(page.getByRole('heading', { name: 'Session complete' })).toBeVisible()
    await expect(page.getByText(/You reviewed 4 cards?/)).toBeVisible()
  })

  test('session complete has link to choose another category and back to home', async ({ page }) => {
    for (let i = 0; i < 4; i++) {
      await page.getByRole('button', { name: 'Next card →' }).click()
    }
    await expect(page.getByRole('link', { name: 'Choose another category' })).toBeVisible()
    await expect(page.getByRole('link', { name: '← Back to Home' })).toBeVisible()
  })

  test('Back to category selection from study session returns to study category page', async ({ page }) => {
    await page.getByRole('link', { name: '← Back to category selection' }).click()
    await expect(page).toHaveURL('/study/category')
    await expect(page.getByRole('heading', { name: /Study Mode.*Choose a category/ })).toBeVisible()
  })
})
