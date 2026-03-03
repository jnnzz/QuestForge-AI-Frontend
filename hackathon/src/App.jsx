import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import DashboardPage from './pages/DashboardPage'
import SyllabusPage from './pages/SyllabusPage'
import BossArenaPage from './pages/BossArenaPage'
import SkillPassportPage from './pages/SkillPassportPage'
import QuestsPage from './pages/QuestsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { getFieldById } from './data/fields'
import './App.css'

function AppContent() {
  const [isBossMode, setIsBossMode] = useState(false);
  const [selectedField, setSelectedField] = useState(null);
  const location = useLocation();

  // Load selected field from localStorage on mount
  useEffect(() => {
    const savedFieldId = localStorage.getItem('selectedFieldId');
    if (savedFieldId) {
      const field = getFieldById(savedFieldId);
      setSelectedField(field);
    }
  }, []);

  // Reload selected field when navigating to protected routes or when location changes
  useEffect(() => {
    if (location.pathname.startsWith('/login/') && location.pathname !== '/login') {
      const savedFieldId = localStorage.getItem('selectedFieldId');
      if (savedFieldId) {
        const field = getFieldById(savedFieldId);
        // Update state if field changed
        if (!selectedField || selectedField.id !== field.id) {
          setSelectedField(field);
        }
      }
    }
  }, [location.pathname]);

  // Turn off boss mode when leaving boss arena
  useEffect(() => {
    if (location.pathname !== '/login/bossArena') {
      setIsBossMode(false);
    }
  }, [location.pathname]);

  const handleBossModeChange = (isActive) => {
    setIsBossMode(isActive);
  };

  return (
    <Routes>
      {/* Login route */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Register route */}
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Protected routes with MainLayout */}
      <Route path="/login/*" element={
        <MainLayout isBossMode={isBossMode}>
          <Routes>
            <Route path="dashboard" element={<DashboardPage selectedField={selectedField} />} />
            <Route path="syllabus" element={<SyllabusPage />} />
            <Route path="quests" element={<QuestsPage selectedField={selectedField} />} />
            <Route path="bossArena" element={<BossArenaPage onBossModeChange={handleBossModeChange} />} />
            <Route path="skill" element={<SkillPassportPage />} />
          </Routes>
        </MainLayout>
      } />

      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
