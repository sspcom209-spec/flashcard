import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { theme, getLinkStyle } from '../theme'

/** Placeholder stats page; full tracking will be added in a later phase. */
export default function StatsPage() {
  return (
    <PageLayout>
      <h1>Statistics</h1>
      <p>Your study stats will appear here once you start using the app.</p>
      <div style={{ marginTop: '1.5rem' }}>
        <Link to="/" style={getLinkStyle(theme.color.primary)}>
          ← Back to Home
        </Link>
      </div>
    </PageLayout>
  )
}
