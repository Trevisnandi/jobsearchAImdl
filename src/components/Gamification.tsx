import React, { useState } from 'react';
import { Trophy, Target, Zap, Star, Award, Calendar, TrendingUp, CheckCircle, Flame } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  progress?: number;
  maxProgress?: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  points: number;
}

interface Challenge {
  id: number;
  title: string;
  description: string;
  reward: string;
  deadline: string;
  progress: number;
  maxProgress: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

const Gamification: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentStreak, setCurrentStreak] = useState(7);
  const [totalPoints, setTotalPoints] = useState(2450);
  const [level, setLevel] = useState(12);
  const [levelProgress, setLevelProgress] = useState(75);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'First Application',
      description: 'Submit your first job application',
      icon: '🎯',
      earned: true,
      rarity: 'common',
      points: 50,
    },
    {
      id: 2,
      title: 'Speed Demon',
      description: 'Apply to 10 jobs in one day',
      icon: '⚡',
      earned: true,
      rarity: 'rare',
      points: 200,
    },
    {
      id: 3,
      title: 'Perfect Match',
      description: 'Get a 95%+ match on a job application',
      icon: '💎',
      earned: true,
      rarity: 'epic',
      points: 500,
    },
    {
      id: 4,
      title: 'Interview Master',
      description: 'Schedule 5 interviews in one month',
      icon: '👑',
      earned: false,
      progress: 3,
      maxProgress: 5,
      rarity: 'legendary',
      points: 1000,
    },
    {
      id: 5,
      title: 'Skill Builder',
      description: 'Complete 3 learning modules',
      icon: '📚',
      earned: false,
      progress: 2,
      maxProgress: 3,
      rarity: 'rare',
      points: 300,
    },
    {
      id: 6,
      title: 'Networking Pro',
      description: 'Connect with 20 professionals',
      icon: '🤝',
      earned: false,
      progress: 12,
      maxProgress: 20,
      rarity: 'epic',
      points: 750,
    },
  ];

  const challenges: Challenge[] = [
    {
      id: 1,
      title: 'Weekly Application Goal',
      description: 'Apply to 5 jobs this week',
      reward: '100 XP + Profile Boost',
      deadline: '2025-01-20',
      progress: 3,
      maxProgress: 5,
      difficulty: 'easy',
    },
    {
      id: 2,
      title: 'Skill Enhancement',
      description: 'Complete 2 courses this month',
      reward: '300 XP + Certificate Badge',
      deadline: '2025-01-31',
      progress: 1,
      maxProgress: 2,
      difficulty: 'medium',
    },
    {
      id: 3,
      title: 'Interview Champion',
      description: 'Schedule 3 interviews this month',
      reward: '500 XP + Premium Features',
      deadline: '2025-01-31',
      progress: 1,
      maxProgress: 3,
      difficulty: 'hard',
    },
  ];

  const rarityConfig = {
    common: { color: 'bg-gray-100 text-gray-800 border-gray-300', glow: '' },
    rare: { color: 'bg-blue-100 text-blue-800 border-blue-300', glow: 'shadow-blue-200' },
    epic: { color: 'bg-purple-100 text-purple-800 border-purple-300', glow: 'shadow-purple-200' },
    legendary: { color: 'bg-yellow-100 text-yellow-800 border-yellow-300', glow: 'shadow-yellow-200' },
  };

  const difficultyConfig = {
    easy: { color: 'bg-green-100 text-green-800', label: 'Easy' },
    medium: { color: 'bg-yellow-100 text-yellow-800', label: 'Medium' },
    hard: { color: 'bg-red-100 text-red-800', label: 'Hard' },
  };

  const getNextLevelXP = () => {
    return (level + 1) * 200;
  };

  const getCurrentLevelXP = () => {
    return Math.floor((levelProgress / 100) * getNextLevelXP());
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Progress</h1>
            <p className="text-gray-600">Track your achievements and level up your career journey</p>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
            <span>🎮</span>
            <span>Gamification Preview</span>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="text-3xl font-bold">Level {level}</div>
            <TrendingUp className="w-8 h-8" />
          </div>
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress to Level {level + 1}</span>
              <span>{getCurrentLevelXP()}/{getNextLevelXP()} XP</span>
            </div>
            <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-500"
                style={{ width: `${levelProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-2xl font-bold text-gray-900">{totalPoints.toLocaleString()}</div>
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-sm text-gray-600">Total Points</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-gray-900">{currentStreak}</div>
              <Flame className="w-6 h-6 text-orange-500" />
            </div>
            <Calendar className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-sm text-gray-600">Day Streak</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-2xl font-bold text-gray-900">{achievements.filter(a => a.earned).length}</div>
            <Trophy className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-sm text-gray-600">Achievements</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-8 mb-8 border-b border-gray-200">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'achievements', label: 'Achievements' },
          { id: 'challenges', label: 'Challenges' },
          { id: 'leaderboard', label: 'Leaderboard' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 px-2 text-sm font-medium border-b-2 transition-colors duration-200 ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Achievements */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Achievements</h3>
            <div className="space-y-4">
              {achievements.filter(a => a.earned).slice(0, 3).map((achievement) => {
                const config = rarityConfig[achievement.rarity];
                return (
                  <div key={achievement.id} className={`p-4 rounded-lg border-2 ${config.color} ${config.glow}`}>
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm opacity-80">{achievement.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">+{achievement.points}</div>
                        <div className="text-xs opacity-80">XP</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Challenges */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Active Challenges</h3>
            <div className="space-y-4">
              {challenges.map((challenge) => {
                const config = difficultyConfig[challenge.difficulty];
                const progressPercent = (challenge.progress / challenge.maxProgress) * 100;
                
                return (
                  <div key={challenge.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{challenge.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
                            {config.label}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{challenge.description}</p>
                        <p className="text-xs text-green-600 font-medium">Reward: {challenge.reward}</p>
                      </div>
                    </div>
                    
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{challenge.progress}/{challenge.maxProgress}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${progressPercent}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      Deadline: {new Date(challenge.deadline).toLocaleDateString()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => {
            const config = rarityConfig[achievement.rarity];
            return (
              <div
                key={achievement.id}
                className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                  achievement.earned 
                    ? `${config.color} ${config.glow} shadow-lg` 
                    : 'bg-gray-50 border-gray-200 opacity-75'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <h3 className={`font-bold mb-2 ${achievement.earned ? '' : 'text-gray-600'}`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm mb-4 ${achievement.earned ? 'opacity-80' : 'text-gray-500'}`}>
                    {achievement.description}
                  </p>
                  
                  {achievement.progress !== undefined && achievement.maxProgress && !achievement.earned && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{achievement.progress}/{achievement.maxProgress}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${config.color}`}>
                      {achievement.rarity.toUpperCase()}
                    </span>
                    <div className="text-right">
                      <div className="font-bold">{achievement.points}</div>
                      <div className="text-xs opacity-80">XP</div>
                    </div>
                  </div>
                  
                  {achievement.earned && (
                    <div className="mt-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Challenges Tab */}
      {activeTab === 'challenges' && (
        <div className="space-y-6">
          {challenges.map((challenge) => {
            const config = difficultyConfig[challenge.difficulty];
            const progressPercent = (challenge.progress / challenge.maxProgress) * 100;
            const isCompleted = challenge.progress >= challenge.maxProgress;
            
            return (
              <div key={challenge.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{challenge.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
                        {config.label}
                      </span>
                      {isCompleted && (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">{challenge.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Deadline: {new Date(challenge.deadline).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{challenge.reward}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">
                      {challenge.progress}/{challenge.maxProgress} completed
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        isCompleted ? 'bg-green-600' : 'bg-blue-600'
                      }`}
                      style={{ width: `${Math.min(progressPercent, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                {!isCompleted && (
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Continue Challenge
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Leaderboard Tab */}
      {activeTab === 'leaderboard' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-yellow-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Leaderboard Coming Soon</h3>
          <p className="text-gray-600">
            Compete with other job seekers and see how you rank in your career journey!
          </p>
        </div>
      )}
    </div>
  );
};

export default Gamification;