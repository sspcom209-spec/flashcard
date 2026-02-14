import { Link, useLocation } from 'react-router-dom'
import { CATEGORIES } from '../data/flashcards'
import PageLayout from '../components/PageLayout'
import { theme, getBlockLinkStyle, getLinkStyle } from '../theme'

/** Category colors for Study/Quiz selection list (rotates per category). */
const categoryColors = [theme.color.study, theme.color.quiz, theme.color.primary] as const

/** Lets user pick a category for Study or Quiz based on current route. */
export default function CategorySelectionPage() {
  const { pathname } = useLocation()
  const isStudy = pathname.startsWith('/study')
  const basePath = isStudy ? '/study' : '/quiz'

  return (
    <PageLayout>
      <h1>{isStudy ? 'Study Mode' : 'Quiz Mode'} — Choose a category</h1>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        {CATEGORIES.map((cat, i) => (
          <li key={cat}>
            <Link
              to={`${basePath}/${cat}`}
              style={{
                ...getBlockLinkStyle(categoryColors[i % categoryColors.length]),
                textTransform: 'capitalize',
              }}
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '1.5rem' }}>
        <Link to="/" style={getLinkStyle(theme.color.neutral)}>
          ← Back to Home
        </Link>
      </div>
    </PageLayout>
  )
}
