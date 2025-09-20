import React, { useState } from 'react';
import { TrendingUp, Briefcase, Users, BookOpen, Target, Calendar, Award, ChevronRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Applications Sent',
      value: '24',
      change: '+12%',
      changeType: 'positive',
      icon: Briefcase,
    },
    {
      title: 'Profile Views',
      value: '156',
      change: '+8%',
      changeType: 'positive',
      icon: Users,
    },
    {
      title: 'Skills Learned',
      value: '12',
      change: '+3',
      changeType: 'positive',
      icon: BookOpen,
    },
    {
      title: 'Career Score',
      value: '85%',
      change: '+5%',
      changeType: 'positive',
      icon: Target,
    },
  ];

  const recentJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      salary: '$95,000 - $120,000',
      match: 95,
      applied: false,
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      salary: '$110,000 - $140,000',
      match: 87,
      applied: true,
    },
    {
      id: 3,
      title: 'React Developer',
      company: 'Digital Agency',
      location: 'New York, NY',
      salary: '$80,000 - $100,000',
      match: 92,
      applied: false,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Interview with TechCorp',
      date: '2025-01-18',
      time: '2:00 PM',
      type: 'interview',
    },
    {
      id: 2,
      title: 'React Masterclass',
      date: '2025-01-20',
      time: '10:00 AM',
      type: 'learning',
    },
    {
      id: 3,
      title: 'Career Planning Session',
      date: '2025-01-22',
      time: '3:00 PM',
      type: 'planning',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h1>
            <p className="text-gray-600">Here's your personalized career dashboard</p>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <span>👁️</span>
            <span>Preview Mode - Sign up to save your progress</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <div className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AI Recommended Jobs */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">AI Recommended Jobs</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {recentJobs.map((job) => (
              <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{job.company} • {job.location}</p>
                    <p className="text-gray-700 text-sm mb-3">{job.salary}</p>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-green-600">{job.match}% match</span>
                      </div>
                      {job.applied && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Applied</span>
                      )}
                    </div>
                  </div>
                  <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    job.applied
                      ? 'bg-gray-100 text-gray-600 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                    {job.applied ? 'Applied' : 'Apply Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming</h2>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{event.title}</p>
                    <p className="text-xs text-gray-600">{event.date} at {event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Progress */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Career Progress</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Profile Completion</span>
                  <span className="font-medium text-gray-900">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Skills Development</span>
                  <span className="font-medium text-gray-900">72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-[72%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Network Growth</span>
                  <span className="font-medium text-gray-900">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Badge */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-3">
              <Award className="w-8 h-8 text-yellow-300" />
              <div>
                <h3 className="font-bold">Achievement Unlocked!</h3>
                <p className="text-sm text-purple-100">Profile Champion</p>
              </div>
            </div>
            <p className="text-sm text-purple-100">You've completed 85% of your profile. Keep going to increase your visibility!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;