import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { theme, getBlockLinkStyle } from '../theme'

/** Home page: entry point with links to Study, Quiz, and Stats. */
export default function HomePage() {
  return (
    <PageLayout>
      <h1>Spanish Flashcards</h1>
      <p>Choose how you want to practice.</p>
      <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
        <Link to="/study/category" style={getBlockLinkStyle(theme.color.study)}>
          Study Mode
        </Link>
        <Link to="/quiz/category" style={getBlockLinkStyle(theme.color.quiz)}>
          Quiz Mode
        </Link>
        <Link to="/stats" style={getBlockLinkStyle(theme.color.primary)}>
          Stats Page
        </Link>
      </nav>
    </PageLayout>
  )
}
