import { Link, useLocation, useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { theme, getLinkStyle } from '../theme'

/**
 * Placeholder for quiz session (Phase 4). Shown when user selects a category
 * from Quiz Mode until Multiple Choice / Fill-in-the-Blank are implemented.
 */
export default function PlaceholderSessionPage() {
  const { category } = useParams<{ category: string }>()
  const { pathname } = useLocation()
  const isQuiz = pathname.startsWith('/quiz')
  const backPath = isQuiz ? '/quiz/category' : '/study/category'

  return (
    <PageLayout>
      <h1>{isQuiz ? 'Quiz' : 'Study'} — {category}</h1>
      <p>Session view will be implemented in the next phase.</p>
      <div style={{ marginTop: '1.5rem' }}>
        <Link to={backPath} style={getLinkStyle(theme.color.neutral)}>
          ← Back to category selection
        </Link>
      </div>
    </PageLayout>
  )
}
