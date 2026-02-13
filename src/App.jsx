import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Clock, BookOpen, Music, Home, Map, ListMusic } from 'lucide-react'
import Timeline from './components/Timeline'
import Flashcards from './components/Flashcards'
import Compositions from './components/Compositions'
import HomePage from './components/HomePage'
import ComposerMap from './components/ComposerMap'
import ListeningList from './components/ListeningList'
import './App.css'

// Component to track page views
function GoogleAnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    // Send page view to Google Analytics on route change
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-27SJ2X7HF5', {
        page_path: location.pathname + location.search + location.hash,
      })
    }
  }, [location])

  return null
}

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const handleNavClick = (tabName, tabLabel) => {
    setActiveTab(tabName)
    
    // Send event to Google Analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'navigation_click', {
        event_category: 'Navigation',
        event_label: tabLabel,
        page_path: `/${tabName === 'home' ? '' : tabName}`
      })
    }
  }

  return (
    <Router>
      <GoogleAnalyticsTracker />
      <div className="app">
        <header className="app-header">
          <h1>מודרניזם במוזיקה - עזר למבחן</h1>
          <p className="subtitle">כל החומר ללימוד מקיף למבחן</p>
        </header>

        <nav className="main-nav">
          <Link 
            to="/" 
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home', 'דף הבית')}
          >
            <Home size={24} />
            <span>דף הבית</span>
          </Link>
          <Link 
            to="/timeline" 
            className={`nav-item ${activeTab === 'timeline' ? 'active' : ''}`}
            onClick={() => handleNavClick('timeline', 'ציר הזמן')}
          >
            <Clock size={24} />
            <span>ציר הזמן</span>
          </Link>
          <Link 
            to="/map" 
            className={`nav-item ${activeTab === 'map' ? 'active' : ''}`}
            onClick={() => handleNavClick('map', 'מפת מלחינים')}
          >
            <Map size={24} />
            <span>מפת מלחינים</span>
          </Link>
          <Link 
            to="/flashcards" 
            className={`nav-item ${activeTab === 'flashcards' ? 'active' : ''}`}
            onClick={() => handleNavClick('flashcards', 'כרטיסיות מושגים')}
          >
            <BookOpen size={24} />
            <span>כרטיסיות מושגים</span>
          </Link>
          <Link 
            to="/listening" 
            className={`nav-item ${activeTab === 'listening' ? 'active' : ''}`}
            onClick={() => handleNavClick('listening', 'רשימת האזנה')}
          >
            <ListMusic size={24} />
            <span>רשימת האזנה</span>
          </Link>
          <Link 
            to="/compositions" 
            className={`nav-item ${activeTab === 'compositions' ? 'active' : ''}`}
            onClick={() => handleNavClick('compositions', 'יצירות מפורטות')}
          >
            <Music size={24} />
            <span>יצירות מפורטות</span>
          </Link>
        </nav>

        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/map" element={<ComposerMap />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/listening" element={<ListeningList />} />
            <Route path="/compositions" element={<Compositions />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>© 2026 - אפליקציה ללימוד מודרניזם במוזיקה</p>
          <p className="exam-info">מבוסס על חומרי הקורס של פרופ' בלה ברובר-לובובסקי</p>
          
          <div className="disclaimer">
            <p>
              ⚠️ <strong>הצהרת אחריות:</strong> אתר זה נוצר למטרות לימודיות בלבד. 
              יוצרי האתר והתוכן אינם אחראים לנכונות, דיוק או שלמות המידע המוצג. 
              המידע באתר מבוסס על חומרי הקורס ועל סיכומים של סטודנטים, ואינו מהווה תחליף לחומרי הלימוד הרשמיים. 
              השימוש באתר הוא באחריות המשתמש בלבד.
            </p>
          </div>

          <div className="credits">
            <p className="credit-item">
              <span className="credit-label">איפיון ופיתוח:</span>
              <span className="credit-name">מוטי פרץ</span>
            </p>
            <p className="credit-item">
              <span className="credit-label">סיכום החומר:</span>
              <span className="credit-name">דניאל טרסולה</span>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App

