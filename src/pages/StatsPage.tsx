import { Link } from 'react-router-dom'

export default function StatsPage() {
  return (
    <main style={{ padding: '2rem', margin: '0 auto' }}>
      <h1>Statistics</h1>
      <p>Your study stats will appear here once you start using the app.</p>
      <div style={{ marginTop: '1.5rem' }}>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginTop: '1.5rem',
          padding: '0.75rem 1.25rem',
          background: '#2563eb',
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
