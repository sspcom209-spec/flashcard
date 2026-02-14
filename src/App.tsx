import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategorySelectionPage from './pages/CategorySelectionPage'
import StatsPage from './pages/StatsPage'
import StudySessionPage from './pages/StudySessionPage'
import PlaceholderSessionPage from './pages/PlaceholderSessionPage'

/** Root app: defines routes for Home, Study/Quiz category & session, and Stats. */
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/study/category" element={<CategorySelectionPage />} />
      <Route path="/study/:category" element={<StudySessionPage />} />
      <Route path="/quiz/category" element={<CategorySelectionPage />} />
      <Route path="/quiz/:category" element={<PlaceholderSessionPage />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  )
}

export default App
