# ✅ Spanish Flashcards Web App — Implementation TODO Roadmap

Organized from **easiest → hardest**, grouped into progressive phases.
Each task includes **clear acceptance criteria** so you can validate completion.

---

# 🟢 Phase 1 — Project Setup & Static Structure (Foundation)

## ⬜ 1. Initialize Project (Vite + React + TypeScript)

**Acceptance Criteria**

* App runs locally with `npm run dev`
* TypeScript compiles without errors
* Clean project structure:

  ```
  src/
    components/
    pages/
    data/
  ```

---

## ⬜ 2. Create Static Flashcard Data

* Create static data file (e.g., `cards.ts`)
* Include categories: Animals, Food, Verbs
* Each card includes:

  * category
  * spanish
  * english
  * quiz config

**Acceptance Criteria**

* Data file exports typed array of cards
* At least 5 cards per category
* No TypeScript type errors
* Console logging the data works

---

## ⬜ 3. Setup Basic Routing

Pages:

* Home
* Category Selection
* Study
* Quiz
* Stats

**Acceptance Criteria**

* Navigation works using React Router
* Each route renders placeholder content
* No full page reloads

---

# 🟡 Phase 2 — Category Selection Flow

## ⬜ 4. Build Home Page UI

* Welcome message
* Buttons:

  * Study Mode
  * Quiz Mode
  * Stats Page

**Acceptance Criteria**

* Buttons navigate correctly
* Layout renders cleanly
* No console errors

---

## ⬜ 5. Build Category Selection Page

* Show:

  * Animals
  * Food
  * Verbs
* User selects category
* User selects mode (Study / Quiz)

**Acceptance Criteria**

* Category selection stored in state
* Mode selection stored in state
* Proceed button navigates to correct page
* Selected category persists into next screen

---

# 🟠 Phase 3 — Study Mode Core Logic

## ⬜ 6. Render Single Flashcard

* Show Spanish word
* Only one card visible at a time

**Acceptance Criteria**

* Correct category cards load
* First card renders automatically
* No English translation visible initially

---

## ⬜ 7. Implement Flip Behavior

* Clicking card toggles Spanish ↔ English

**Acceptance Criteria**

* Flip toggles state correctly
* English visible only after click
* Clicking again flips back

---

## ⬜ 8. Add “Right” / “Wrong” Buttons

* Buttons appear only after flip
* Clicking moves to next card

**Acceptance Criteria**

* Button click advances to next card
* Wrong answers stored in state
* Study session ends after last card

---

## ⬜ 9. Track Incorrect Cards (In Memory)

**Acceptance Criteria**

* Incorrect cards saved in array
* Correct cards NOT added
* Array resets when starting new session

---

# 🔵 Phase 4 — Redo Mode

## ⬜ 10. Implement Redo Mode Logic

* Shows only previously incorrect cards

**Acceptance Criteria**

* Redo only appears if wrong cards exist
* Only failed cards render
* Same UI as Study Mode

---

## ⬜ 11. Add Reset Wrong Cards Option

**Acceptance Criteria**

* Reset button clears wrong cards
* Redo mode disabled after reset
* No stale data remains

---

# 🟣 Phase 5 — Quiz Mode (Intermediate Complexity)

## ⬜ 12. Build Quiz Mode Layout

* Display Spanish word
* Show either:

  * Multiple choice options
  * Input field (fill-in-the-blank)

**Acceptance Criteria**

* Quiz renders based on card.quiz.type
* Correct UI appears for each type

---

## ⬜ 13. Implement Multiple Choice Logic

**Acceptance Criteria**

* 4 options render
* Only one correct answer
* Clicking option shows feedback
* Automatically advances after feedback

---

## ⬜ 14. Implement Fill-in-the-Blank Logic

**Acceptance Criteria**

* User input field works
* Case-insensitive exact match validation
* Feedback shown immediately
* Advances to next question

---

## ⬜ 15. Track Quiz Correct / Incorrect Counts

**Acceptance Criteria**

* Correct counter increments properly
* Incorrect counter increments properly
* Results displayed at end

---

# 🔴 Phase 6 — Statistics System (State Design Challenge)

## ⬜ 16. Create Global Stats State

Track:

* Cards studied per category
* Correct answers
* Incorrect answers

**Acceptance Criteria**

* Stats update after study session
* Stats update after quiz session
* No duplicate counting

---

## ⬜ 17. Build Statistics Page UI

Display:

* Per-category totals
* Correct vs Incorrect
* Accuracy %

**Acceptance Criteria**

* Accuracy calculation correct:

  ```
  correct / (correct + incorrect) * 100
  ```
* Data renders clearly
* No divide-by-zero errors

---

## ⬜ 18. Persist Stats with localStorage (Optional Enhancement)

**Acceptance Criteria**

* Stats saved after refresh
* Stats restored on app load
* Clearing localStorage resets stats

---

# 🟤 Phase 7 — Polish & UX Improvements (Hardest)

## ⬜ 19. Add End-of-Session Summary Screen

**Acceptance Criteria**

* Displays:

  * Total studied
  * Correct
  * Incorrect
* Button to:

  * Restart
  * Go Home
  * Redo wrong cards (if available)

---

## ⬜ 20. Improve UX & Edge Cases

Handle:

* Empty category
* No wrong cards for redo
* Quiz with fewer than 4 options
* Button disable states

**Acceptance Criteria**

* No crashes
* Clear user messaging
* No console warnings

---

# 🏁 Final Validation Checklist

Before considering complete:

* ⬜ Study mode works for all categories
* ⬜ Redo mode works correctly
* ⬜ Both quiz types work
* ⬜ Stats accurate across sessions
* ⬜ App reload preserves stats (if enabled)
* ⬜ No TypeScript errors
* ⬜ No runtime crashes

---

# 💡 Suggested Implementation Order Summary

| Phase   | Focus                  | Difficulty   |
| ------- | ---------------------- | ------------ |
| Phase 1 | Setup & Data           | ⭐ Easy       |
| Phase 2 | Navigation & Selection | ⭐ Easy       |
| Phase 3 | Study Mode             | ⭐⭐ Moderate  |
| Phase 4 | Redo Mode              | ⭐⭐ Moderate  |
| Phase 5 | Quiz Mode              | ⭐⭐⭐ Medium   |
| Phase 6 | Stats & Persistence    | ⭐⭐⭐ Hard     |
| Phase 7 | Polish & UX            | ⭐⭐⭐⭐ Hardest |

---

If you'd like, I can also generate:

* 🗂 A recommended folder architecture
* 🧠 A suggested state structure design
* 🧩 A component hierarchy diagram
* 📝 GitHub issue-ready task breakdown
* 🧪 Testing checklist for each phase

Just tell me what would help your workflow most.
