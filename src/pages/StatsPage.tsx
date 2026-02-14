import { Link } from 'react-router-dom'

export default function StatsPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h1>Statistics</h1>
      <p>Your study stats will appear here once you start using the app.</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '1rem', color: '#2563eb' }}>
        ← Back to Home
      </Link>
    </main>
  )
}
