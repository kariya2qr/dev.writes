import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe.jsx'
import AboutPoem from './components/AboutPoem.jsx'
import AboutBook from './components/AboutBook.jsx'
import BookPDF from './components/BookPDF.jsx'

function App() {
  const [section, setSection] = useState('aboutMe')

  const renderSection = () => {
    switch (section) {
      case 'aboutMe':
        return <AboutMe />
      case 'aboutPoem':
        return <AboutPoem />
      case 'aboutBook':
        return <AboutBook />
      case 'bookPDF':
        return <BookPDF />
      default:
        return <AboutMe />
    }
  }

  return (
    <div className="app-container">
      <header>
        <h1>My Book Website</h1>
      <nav className="nav-group">
        <button className={section === 'aboutMe' ? 'active' : ''} onClick={() => setSection('aboutMe')}>About Me</button>
        <button className={section === 'aboutPoem' ? 'active' : ''} onClick={() => setSection('aboutPoem')}>About My Poem</button>
      </nav>
      <nav className="nav-group">
        <button className={section === 'aboutBook' ? 'active' : ''} onClick={() => setSection('aboutBook')}>About My Book</button>
        <button className={section === 'bookPDF' ? 'active' : ''} onClick={() => setSection('bookPDF')}>My Book PDF</button>
      </nav>
      </header>
      <main>{renderSection()}</main>
    </div>
  )
}

export default App
