import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from 'src/pages/home'
import CreateEventPage from './pages/events/create'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/new" element={<CreateEventPage />} />
      </Routes>
    </Router>
  )
}

export default App
