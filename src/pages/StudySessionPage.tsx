import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCardsByCategory, type Flashcard as FlashcardType, CATEGORIES, type Category } from '../data/flashcards'
import Flashcard from '../components/Flashcard'
import PageLayout from '../components/PageLayout'
import { theme, getLinkStyle, getBlockLinkStyle, getButtonStyle } from '../theme'

function isValidCategory(category: string): category is Category {
  return CATEGORIES.includes(category as Category)
}

/**
 * Study session: one card at a time, flip to see English, mark Right/Wrong.
 * Tracks wrong cards for potential redo; shows session complete when done.
 */
export default function StudySessionPage() {
  const { category } = useParams<{ category: string }>()
  const [wrongCards, setWrongCards] = useState<FlashcardType[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  if (!category || !isValidCategory(category)) {
    return (
      <PageLayout>
        <p>Invalid category.</p>
        <div style={{ marginTop: '1rem' }}>
          <Link to="/study/category" style={getLinkStyle(theme.color.neutral)}>
            ← Back to category selection
          </Link>
        </div>
      </PageLayout>
    )
  }

  const cards = getCardsByCategory(category)
  const sessionComplete = currentIndex >= cards.length
  const currentCard = cards[currentIndex]

  const handleRight = () => {
    setFlipped(false)
    setCurrentIndex((i) => i + 1)
  }

  const handleWrong = () => {
    if (currentCard) setWrongCards((prev) => [...prev, currentCard])
    setFlipped(false)
    setCurrentIndex((i) => i + 1)
  }

  const handleNext = () => {
    setFlipped(false)
    setCurrentIndex((i) => i + 1)
  }

  if (sessionComplete) {
    return (
      <PageLayout>
        <h1>Session complete</h1>
        <p>
          You reviewed {cards.length} card{cards.length !== 1 ? 's' : ''}.
          {wrongCards.length > 0 && (
            <> {wrongCards.length} marked as wrong for later review.</>
          )}
        </p>
        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
          <Link to="/study/category" style={getBlockLinkStyle(theme.color.primary)}>
            Choose another category
          </Link>
          <Link to="/" style={getLinkStyle(theme.color.neutral)}>
            ← Back to Home
          </Link>
        </nav>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ margin: 0 }}>Study — {category}</h1>
        <span style={{ color: theme.color.textMuted }}>
          Card {currentIndex + 1} of {cards.length}
        </span>
      </div>

      <p style={{ marginBottom: '1rem', color: theme.color.textMuted, fontSize: '0.9rem' }}>
        {flipped
          ? 'Tap ✅ if you got it right, ❌ if wrong, or go to next card.'
          : 'Click the card to reveal the English translation.'}
      </p>

      <Flashcard
        card={currentCard}
        flipped={flipped}
        onFlip={() => setFlipped(true)}
      />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          justifyContent: 'center',
          marginTop: '1.5rem',
        }}
      >
        {flipped && (
          <>
            <button type="button" onClick={handleRight} style={getButtonStyle(theme.color.quiz)}>
              ✅ I got it right
            </button>
            <button type="button" onClick={handleWrong} style={getButtonStyle(theme.color.study)}>
              ❌ I got it wrong
            </button>
          </>
        )}
        <button type="button" onClick={handleNext} style={getButtonStyle(theme.color.primary)}>
          Next card →
        </button>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        <Link to="/study/category" style={getLinkStyle(theme.color.neutral)}>
          ← Back to category selection
        </Link>
      </div>
    </PageLayout>
  )
}
