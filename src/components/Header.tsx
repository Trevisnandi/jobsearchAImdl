import React, { useState } from 'react';
import { Search, Bell, User, Menu, X, Briefcase, BookOpen, TrendingUp } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
  isLoggedIn: boolean;
  onAuthToggle: () => void;
  onBackToLanding?: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange, isLoggedIn, onAuthToggle, onBackToLanding }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'jobs', label: 'Find Jobs', icon: Briefcase },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button 
                onClick={onBackToLanding}
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TalentConnect AI
                </h1>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                placeholder="Search jobs, skills, companies..."
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {(isLoggedIn || onBackToLanding) && (
              <>
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onViewChange(item.id)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        currentView === item.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
                <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition duration-200">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
              </>
            )}
            {!isLoggedIn && onBackToLanding && (
              <div className="flex items-center space-x-2 text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                <span>👁️</span>
                <span>Preview Mode</span>
              </div>
            )}
            <button
              onClick={onAuthToggle}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-200 ${
                isLoggedIn
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isLoggedIn ? 'Sign Out' : 'Sign In'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {(isLoggedIn || onBackToLanding) && navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onViewChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                      currentView === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
              <div className="pt-2 border-t border-gray-200">
                <button
                  onClick={() => {
                    onAuthToggle();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg font-medium transition duration-200"
                >
                  {isLoggedIn ? 'Sign Out' : 'Sign In'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;