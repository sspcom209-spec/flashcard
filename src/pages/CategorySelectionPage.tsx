import { Link, useLocation } from 'react-router-dom'
import { CATEGORIES } from '../data/flashcards'

export default function CategorySelectionPage() {
  const { pathname } = useLocation()
  const isStudy = pathname.startsWith('/study')
  const basePath = isStudy ? '/study' : '/quiz'

  return (
    <main style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h1>{isStudy ? 'Study Mode' : 'Quiz Mode'} — Choose a category</h1>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {CATEGORIES.map((cat) => (
          <li key={cat}>
            <Link
              to={`${basePath}/${cat}`}
              style={{
                display: 'block',
                padding: '1rem',
                background: '#f1f5f9',
                borderRadius: 8,
                textDecoration: 'none',
                color: '#0f172a',
                textTransform: 'capitalize',
              }}
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/" style={{ display: 'inline-block', marginTop: '1.5rem', color: '#2563eb' }}>
        ← Back to Home
      </Link>
    </main>
  )
}
