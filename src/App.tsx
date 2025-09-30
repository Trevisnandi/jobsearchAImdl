import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SwipeInterface from './components/SwipeInterface';
import ApplicationTracker from './components/ApplicationTracker';
import CVUpload from './components/CVUpload';
import LearningCenter from './components/LearningCenter';
import Profile from './components/Profile';
import EmployerDashboard from './components/EmployerDashboard';
import Gamification from './components/Gamification';
import AuthForm from './components/AuthForm';
import LandingPage from './components/LandingPage';

function App() {
  const [currentView, setCurrentView] = useState('swipe');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [userType, setUserType] = useState<'jobseeker' | 'employer'>('jobseeker');

  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    setShowLanding(false);
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setCurrentView(userType === 'jobseeker' ? 'swipe' : 'employer-dashboard');
    setShowLanding(false);
  };

  const handlePreviewMode = () => {
    setShowLanding(false);
    setIsLoggedIn(false);
  };

  const handleBackToLanding = () => {
    setShowLanding(true);
    setIsLoggedIn(false);
    setCurrentView('swipe');
  };

  const handleSwipe = (jobId: number, direction: 'left' | 'right') => {
    console.log(`Job ${jobId} swiped ${direction}`);
    if (direction === 'right') {
      // In a real app, this would trigger CV tailoring and application submission
      console.log('Starting AI CV tailoring process...');
    }
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
    return <AuthForm onAuthSuccess={handleAuthSuccess} onUserTypeChange={setUserType} />;
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'swipe':
        return <SwipeInterface onSwipe={handleSwipe} />;
      case 'dashboard':
        return <Dashboard />;
      case 'applications':
        return <ApplicationTracker />;
      case 'cv-upload':
        return <CVUpload />;
      case 'learning':
        return <LearningCenter />;
      case 'progress':
        return <Gamification />;
      case 'profile':
        return <Profile />;
      case 'employer-dashboard':
        return <EmployerDashboard />;
      default:
        return userType === 'jobseeker' ? <SwipeInterface onSwipe={handleSwipe} /> : <EmployerDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        isLoggedIn={isLoggedIn}
        userType={userType}
        onAuthToggle={handleAuthToggle}
        onBackToLanding={handleBackToLanding}
      />
      {renderCurrentView()}
    </div>
  );
}

export default App;