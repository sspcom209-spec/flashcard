import { Link, useParams } from 'react-router-dom'

export default function PlaceholderSessionPage() {
  const { category } = useParams<{ category: string }>()
  const pathname = window.location.pathname
  const isStudy = pathname.startsWith('/study')

  return (
    <main style={{ padding: '2rem', margin: '0 auto' }}>
      <h1>{isStudy ? 'Study' : 'Quiz'} — {category}</h1>
      <p>Session view will be implemented in the next phase.</p>
      <div style={{ marginTop: '1.5rem' }}>
      <Link
        to={isStudy ? '/study/category' : '/quiz/category'}
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.25rem',
          background: '#64748b',
          color: 'white',
          textDecoration: 'none',
          borderRadius: 8,
          fontWeight: 600,
        }}
      >
        ← Back to category selection
      </Link>
      </div>
    </main>
  )
}
