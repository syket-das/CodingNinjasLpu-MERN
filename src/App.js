import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import EventsPage from './pages/events/EventsPage';
import HomePage from './pages/home/HomePage';
import TeamPage from './pages/team/TeamPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contactUs" element={<ContactPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
