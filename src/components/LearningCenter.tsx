import React, { useState } from 'react';
import { BookOpen, Play, Clock, Star, Users, Award, ChevronRight, Filter } from 'lucide-react';

const LearningCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'technical', name: 'Technical Skills' },
    { id: 'soft-skills', name: 'Soft Skills' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'business', name: 'Business' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Advanced React Development',
      instructor: 'John Smith',
      duration: '8 hours',
      rating: 4.8,
      students: 12450,
      level: 'Advanced',
      category: 'technical',
      thumbnail: '🚀',
      price: 'Free',
      progress: 0,
      description: 'Master advanced React patterns, hooks, and performance optimization techniques.',
    },
    {
      id: 2,
      title: 'Leadership in Tech',
      instructor: 'Sarah Johnson',
      duration: '6 hours',
      rating: 4.9,
      students: 8930,
      level: 'Intermediate',
      category: 'leadership',
      thumbnail: '👑',
      price: '$49',
      progress: 35,
      description: 'Develop leadership skills specifically for technical teams and environments.',
    },
    {
      id: 3,
      title: 'Data Structures & Algorithms',
      instructor: 'Mike Chen',
      duration: '12 hours',
      rating: 4.7,
      students: 15680,
      level: 'Intermediate',
      category: 'technical',
      thumbnail: '🧮',
      price: 'Free',
      progress: 0,
      description: 'Essential algorithms and data structures for coding interviews and better programming.',
    },
    {
      id: 4,
      title: 'Effective Communication',
      instructor: 'Lisa Rodriguez',
      duration: '4 hours',
      rating: 4.6,
      students: 9240,
      level: 'Beginner',
      category: 'soft-skills',
      thumbnail: '💬',
      price: '$29',
      progress: 60,
      description: 'Improve your communication skills for better collaboration and career growth.',
    },
  ];

  const skillPaths = [
    {
      id: 1,
      title: 'Frontend Developer Path',
      courses: 8,
      duration: '40 hours',
      level: 'Beginner to Advanced',
      description: 'Complete path to become a professional frontend developer',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript'],
      progress: 25,
    },
    {
      id: 2,
      title: 'Full Stack Developer Path',
      courses: 12,
      duration: '60 hours',
      level: 'Intermediate to Advanced',
      description: 'Comprehensive training for full stack development',
      skills: ['Frontend', 'Backend', 'Databases', 'DevOps'],
      progress: 10,
    },
    {
      id: 3,
      title: 'Tech Leadership Path',
      courses: 6,
      duration: '25 hours',
      level: 'Advanced',
      description: 'Develop leadership skills for technical roles',
      skills: ['Team Management', 'Strategy', 'Communication', 'Mentoring'],
      progress: 0,
    },
  ];

  const achievements = [
    {
      id: 1,
      title: 'React Master',
      description: 'Completed 5 React courses',
      icon: '🏆',
      earned: true,
    },
    {
      id: 2,
      title: 'Quick Learner',
      description: 'Completed 3 courses in one month',
      icon: '⚡',
      earned: true,
    },
    {
      id: 3,
      title: 'Problem Solver',
      description: 'Solved 100 coding challenges',
      icon: '🧩',
      earned: false,
    },
    {
      id: 4,
      title: 'Consistent Learner',
      description: 'Learned for 30 days straight',
      icon: '📚',
      earned: false,
    },
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Center</h1>
            <p className="text-gray-600">Enhance your skills and advance your career with personalized learning</p>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <span>📚</span>
            <span>Preview Mode - Sign up to track progress</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-8 mb-8 border-b border-gray-200">
        {[
          { id: 'courses', label: 'Courses' },
          { id: 'paths', label: 'Learning Paths' },
          { id: 'achievements', label: 'Achievements' },
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

      {/* Courses Tab */}
      {activeTab === 'courses' && (
        <>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl">
                  {course.thumbnail}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.level}
                    </span>
                    <span className={`text-sm font-semibold ${
                      course.price === 'Free' ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {course.price}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                  <p className="text-sm text-gray-500 mb-3">by {course.instructor}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {course.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium text-gray-900">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium">
                    <Play className="w-4 h-4" />
                    <span>{course.progress > 0 ? 'Continue Learning' : 'Start Course'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Learning Paths Tab */}
      {activeTab === 'paths' && (
        <div className="space-y-6">
          {skillPaths.map((path) => (
            <div key={path.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{path.title}</h3>
                  <p className="text-gray-600 mb-3">{path.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{path.courses} courses</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{path.level}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  {path.progress > 0 && (
                    <div className="mb-2">
                      <span className="text-sm font-medium text-gray-900">{path.progress}% complete</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${path.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                    <span>{path.progress > 0 ? 'Continue Path' : 'Start Path'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {path.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`bg-white rounded-xl shadow-sm border-2 p-6 text-center transition-all duration-200 ${
                achievement.earned
                  ? 'border-yellow-300 bg-yellow-50'
                  : 'border-gray-200 opacity-75'
              }`}
            >
              <div className="text-6xl mb-4">{achievement.icon}</div>
              <h3 className={`text-lg font-bold mb-2 ${
                achievement.earned ? 'text-yellow-800' : 'text-gray-600'
              }`}>
                {achievement.title}
              </h3>
              <p className={`text-sm ${
                achievement.earned ? 'text-yellow-700' : 'text-gray-500'
              }`}>
                {achievement.description}
              </p>
              {achievement.earned && (
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-200 text-yellow-800">
                    <Award className="w-3 h-3 mr-1" />
                    Earned
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LearningCenter;