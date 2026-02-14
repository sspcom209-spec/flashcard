import { Link, useLocation } from 'react-router-dom'
import { CATEGORIES } from '../data/flashcards'

export default function CategorySelectionPage() {
  const { pathname } = useLocation()
  const isStudy = pathname.startsWith('/study')
  const basePath = isStudy ? '/study' : '/quiz'

  return (
    <main style={{ padding: '2rem', margin: '0 auto' }}>
      <h1>{isStudy ? 'Study Mode' : 'Quiz Mode'} — Choose a category</h1>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        {CATEGORIES.map((cat, i) => {
          const colors = ['#dc2626', '#16a34a', '#2563eb']
          const bg = colors[i % colors.length]
          return (
            <li key={cat}>
              <Link
                to={`${basePath}/${cat}`}
                style={{
                  display: 'block',
                  width: '100%',
                  maxWidth: 320,
                  padding: '1rem 1.5rem',
                  background: bg,
                  color: 'white',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                }}
              >
                {cat}
              </Link>
            </li>
          )
        })}
      </ul>
      <div style={{ marginTop: '1.5rem' }}>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginTop: '1.5rem',
          padding: '0.75rem 1.25rem',
          background: '#64748b',
          color: 'white',
          textDecoration: 'none',
          borderRadius: 8,
          fontWeight: 600,
        }}
      >
        ← Back to Home
      </Link>
      </div>
    </main>
  )
}
