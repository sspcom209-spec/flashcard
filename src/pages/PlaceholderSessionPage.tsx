import { Link, useParams } from 'react-router-dom'

export default function PlaceholderSessionPage() {
  const { category } = useParams<{ category: string }>()
  const pathname = window.location.pathname
  const isStudy = pathname.startsWith('/study')

  return (
    <main style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h1>{isStudy ? 'Study' : 'Quiz'} — {category}</h1>
      <p>Session view will be implemented in the next phase.</p>
      <Link to={isStudy ? '/study/category' : '/quiz/category'} style={{ color: '#2563eb' }}>
        ← Back to category selection
      </Link>
    </main>
  )
}
