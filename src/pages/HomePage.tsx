import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', margin: '0 auto' }}>
      <h1>Spanish Flashcards</h1>
      <p>Welcome! Choose how you want to practice.</p>
      <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
        <Link
          to="/study/category"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: 320,
            padding: '1rem 1.5rem',
            background: '#dc2626',
            color: 'white',
            textDecoration: 'none',
            borderRadius: 8,
            fontWeight: 600,
          }}
        >
          Study Mode
        </Link>
        <Link
          to="/quiz/category"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: 320,
            padding: '1rem 1.5rem',
            background: '#16a34a',
            color: 'white',
            textDecoration: 'none',
            borderRadius: 8,
            fontWeight: 600,
          }}
        >
          Quiz Mode
        </Link>
        <Link
          to="/stats"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: 320,
            padding: '1rem 1.5rem',
            background: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: 8,
            fontWeight: 600,
          }}
        >
          Stats Page
        </Link>
      </nav>
    </main>
  )
}
