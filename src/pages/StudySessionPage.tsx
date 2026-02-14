import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCardsByCategory, type Flashcard, CATEGORIES, type Category } from '../data/flashcards'
import Flashcard from '../components/Flashcard'

function isValidCategory(category: string): category is Category {
  return CATEGORIES.includes(category as Category)
}

export default function StudySessionPage() {
  const { category } = useParams<{ category: string }>()
  const [wrongCards, setWrongCards] = useState<Flashcard[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const linkButtonStyle = {
    display: 'inline-block' as const,
    padding: '0.75rem 1.25rem',
    color: 'white',
    textDecoration: 'none' as const,
    borderRadius: 8,
    fontWeight: 600,
  }

  if (!category || !isValidCategory(category)) {
    return (
      <main style={{ padding: '2rem', margin: '0 auto' }}>
        <p>Invalid category.</p>
        <div style={{ marginTop: '1rem' }}>
          <Link to="/study/category" style={{ ...linkButtonStyle, background: '#64748b' }}>
            ← Back to category selection
          </Link>
        </div>
      </main>
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
      <main style={{ padding: '2rem', margin: '0 auto' }}>
        <h1>Session complete</h1>
        <p>
          You reviewed {cards.length} card{cards.length !== 1 ? 's' : ''}.
          {wrongCards.length > 0 && (
            <> {wrongCards.length} marked as wrong for later review.</>
          )}
        </p>
        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
          <Link
            to="/study/category"
            style={{
              display: 'block',
              width: '100%',
              maxWidth: 320,
              padding: '0.75rem 1.25rem',
              background: '#2563eb',
              color: 'white',
              textDecoration: 'none',
              borderRadius: 8,
              fontWeight: 600,
            }}
          >
            Choose another category
          </Link>
          <Link to="/" style={{ ...linkButtonStyle, background: '#64748b' }}>
            ← Back to Home
          </Link>
        </nav>
      </main>
    )
  }

  return (
    <main style={{ padding: '2rem', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ margin: 0 }}>Study — {category}</h1>
        <span style={{ color: '#64748b' }}>
          Card {currentIndex + 1} of {cards.length}
        </span>
      </div>

      <p style={{ marginBottom: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
        {flipped ? '맞았으면 ✅, 틀렸으면 ❌를 누르거나 다음 카드로 넘어가세요.' : '카드를 클릭하면 영어 뜻을 볼 수 있어요.'}
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
            <button
              type="button"
              onClick={handleRight}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#16a34a',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              ✅ 맞았어요
            </button>
            <button
              type="button"
              onClick={handleWrong}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#dc2626',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              ❌ 틀렸어요
            </button>
          </>
        )}
        <button
          type="button"
          onClick={handleNext}
          style={{
            padding: '0.75rem 1.5rem',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          다음 카드 →
        </button>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        <Link to="/study/category" style={{ ...linkButtonStyle, background: '#64748b' }}>
          ← Back to category selection
        </Link>
      </div>
    </main>
  )
}
