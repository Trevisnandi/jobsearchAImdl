import React, { useState } from 'react';
import { Plus, Search, Filter, Eye, Users, Calendar, MapPin, DollarSign, Briefcase, Star, MessageSquare, CheckCircle } from 'lucide-react';

interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'Remote' | 'Hybrid' | 'On-site';
  salary: string;
  status: 'active' | 'paused' | 'closed';
  applicants: number;
  views: number;
  posted: string;
  deadline: string;
}

interface Applicant {
  id: number;
  name: string;
  title: string;
  location: string;
  match: number;
  appliedDate: string;
  status: 'new' | 'reviewed' | 'interview' | 'offer' | 'rejected';
  avatar: string;
  skills: string[];
  experience: string;
}

const EmployerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const jobPostings: JobPosting[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Remote',
      salary: '$95,000 - $120,000',
      status: 'active',
      applicants: 45,
      views: 234,
      posted: '2025-01-10',
      deadline: '2025-02-10',
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Hybrid',
      salary: '$110,000 - $140,000',
      status: 'active',
      applicants: 67,
      views: 189,
      posted: '2025-01-08',
      deadline: '2025-02-08',
    },
    {
      id: 3,
      title: 'UX Designer',
      department: 'Design',
      location: 'Austin, TX',
      type: 'On-site',
      salary: '$80,000 - $100,000',
      status: 'paused',
      applicants: 23,
      views: 156,
      posted: '2025-01-05',
      deadline: '2025-02-05',
    },
  ];

  const applicants: Applicant[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Frontend Developer',
      location: 'San Francisco, CA',
      match: 95,
      appliedDate: '2025-01-15',
      status: 'new',
      avatar: '👩‍💻',
      skills: ['React', 'TypeScript', 'Node.js'],
      experience: '5+ years',
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Frontend Developer',
      location: 'Remote',
      match: 87,
      appliedDate: '2025-01-14',
      status: 'reviewed',
      avatar: '👨‍💼',
      skills: ['React', 'JavaScript', 'CSS'],
      experience: '3-5 years',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Full Stack Developer',
      location: 'New York, NY',
      match: 92,
      appliedDate: '2025-01-13',
      status: 'interview',
      avatar: '👩‍🎨',
      skills: ['React', 'Python', 'PostgreSQL'],
      experience: '4+ years',
    },
  ];

  const stats = [
    { label: 'Active Jobs', value: '12', change: '+2', icon: Briefcase },
    { label: 'Total Applicants', value: '234', change: '+45', icon: Users },
    { label: 'Interviews Scheduled', value: '18', change: '+6', icon: Calendar },
    { label: 'Offers Extended', value: '5', change: '+2', icon: CheckCircle },
  ];

  const statusConfig = {
    active: { color: 'bg-green-100 text-green-800', label: 'Active' },
    paused: { color: 'bg-yellow-100 text-yellow-800', label: 'Paused' },
    closed: { color: 'bg-gray-100 text-gray-800', label: 'Closed' },
  };

  const applicantStatusConfig = {
    new: { color: 'bg-blue-100 text-blue-800', label: 'New' },
    reviewed: { color: 'bg-yellow-100 text-yellow-800', label: 'Reviewed' },
    interview: { color: 'bg-purple-100 text-purple-800', label: 'Interview' },
    offer: { color: 'bg-green-100 text-green-800', label: 'Offer' },
    rejected: { color: 'bg-red-100 text-red-800', label: 'Rejected' },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Employer Dashboard</h1>
            <p className="text-gray-600">Manage your job postings and find the perfect candidates</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <span>🏢</span>
              <span>Employer Preview Mode</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Post New Job</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
                <span className="text-sm text-gray-600"> this week</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="flex space-x-8 mb-8 border-b border-gray-200">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'jobs', label: 'Job Postings' },
          { id: 'applicants', label: 'Applicants' },
          { id: 'analytics', label: 'Analytics' },
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
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">5 new applications received</p>
                  <p className="text-xs text-gray-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Interview scheduled with Sarah Johnson</p>
                  <p className="text-xs text-gray-600">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">New job posting published</p>
                  <p className="text-xs text-gray-600">1 day ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Performing Jobs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performing Jobs</h3>
            <div className="space-y-4">
              {jobPostings.slice(0, 3).map((job) => (
                <div key={job.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{job.title}</p>
                    <p className="text-sm text-gray-600">{job.applicants} applicants</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{job.views} views</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${statusConfig[job.status].color}`}>
                      {statusConfig[job.status].label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Job Postings Tab */}
      {activeTab === 'jobs' && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search job postings..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {jobPostings.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusConfig[job.status].color}`}>
                        {statusConfig[job.status].label}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{job.department}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{job.applicants} applicants</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{job.views} views</span>
                      </div>
                      <span>Posted {new Date(job.posted).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 ml-4">
                    <button className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      Edit
                    </button>
                    <button
                      onClick={() => setSelectedJob(job.id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      View Applicants
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Applicants Tab */}
      {activeTab === 'applicants' && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search applicants..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Jobs</option>
              <option>Senior Frontend Developer</option>
              <option>Product Manager</option>
              <option>UX Designer</option>
            </select>
          </div>

          {/* Applicant List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {applicants.map((applicant) => (
              <div key={applicant.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                      {applicant.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{applicant.name}</h3>
                      <p className="text-gray-600">{applicant.title}</p>
                      <p className="text-sm text-gray-500">{applicant.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="w-4 h-4 text-green-500 fill-current" />
                      <span className="text-sm font-medium text-green-600">{applicant.match}% match</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${applicantStatusConfig[applicant.status].color}`}>
                      {applicantStatusConfig[applicant.status].label}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Experience: {applicant.experience}</p>
                  <div className="flex flex-wrap gap-1">
                    {applicant.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>Applied: {new Date(applicant.appliedDate).toLocaleDateString()}</span>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm">
                    View CV
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm flex items-center justify-center space-x-1">
                    <MessageSquare className="w-3 h-3" />
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Coming Soon</h3>
          <p className="text-gray-600">
            Detailed analytics and insights about your job postings and recruitment performance will be available here.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmployerDashboard;