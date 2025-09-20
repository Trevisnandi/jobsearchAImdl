import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import JobSearch from './components/JobSearch';
import LearningCenter from './components/LearningCenter';
import Profile from './components/Profile';
import AuthForm from './components/AuthForm';
import LandingPage from './components/LandingPage';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    setShowLanding(false);
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setCurrentView('dashboard');
    setShowLanding(false);
  };

  const handlePreviewMode = () => {
    setShowLanding(false);
    setIsLoggedIn(false);
  };

  const handleBackToLanding = () => {
    setShowLanding(true);
    setIsLoggedIn(false);
    setCurrentView('dashboard');
  };

  if (showLanding) {
    return (
      <LandingPage 
        onLogin={() => setShowLanding(false)}
        onPreview={handlePreviewMode}
      />
    );
  }

  if (!isLoggedIn && !showLanding) {
    return <AuthForm onAuthSuccess={handleAuthSuccess} />;
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'jobs':
        return <JobSearch />;
      case 'learning':
        return <LearningCenter />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        isLoggedIn={isLoggedIn}
        onAuthToggle={handleAuthToggle}
        onBackToLanding={handleBackToLanding}
      />
      {renderCurrentView()}
    </div>
  );
}

export default App;