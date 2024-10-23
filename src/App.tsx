import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from 'src/pages/home'
import EventsPage from 'src/pages/events'
import CreateEventPage from 'src/pages/events/create'
import EditEventPage from 'src/pages/events/edit'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/new" element={<CreateEventPage />} />
        <Route path="/events/update/:id" element={<EditEventPage />} />
      </Routes>
    </Router>
  )
}

export default App
