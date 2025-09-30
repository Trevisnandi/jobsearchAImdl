import React, { useState } from 'react';
import { Clock, Send, Calendar, CheckCircle, XCircle, Eye, MessageSquare, FileText, ExternalLink } from 'lucide-react';

interface Application {
  id: number;
  jobTitle: string;
  company: string;
  appliedDate: string;
  status: 'draft' | 'sent' | 'interview' | 'offer' | 'rejected';
  lastUpdate: string;
  salary: string;
  location: string;
  type: string;
  notes?: string;
  interviewDate?: string;
  logo: string;
}

const ApplicationTracker: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const applications: Application[] = [
    {
      id: 1,
      jobTitle: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      appliedDate: '2025-01-15',
      status: 'interview',
      lastUpdate: '2025-01-16',
      salary: '$95,000 - $120,000',
      location: 'Remote',
      type: 'Full-time',
      interviewDate: '2025-01-18',
      logo: '🚀',
      notes: 'Technical interview scheduled with the engineering team.',
    },
    {
      id: 2,
      jobTitle: 'Full Stack Engineer',
      company: 'StartupXYZ',
      appliedDate: '2025-01-14',
      status: 'sent',
      lastUpdate: '2025-01-14',
      salary: '$110,000 - $140,000',
      location: 'New York, NY',
      type: 'Full-time',
      logo: '💡',
    },
    {
      id: 3,
      jobTitle: 'React Developer',
      company: 'Digital Agency',
      appliedDate: '2025-01-13',
      status: 'offer',
      lastUpdate: '2025-01-16',
      salary: '$80,000 - $100,000',
      location: 'Austin, TX',
      type: 'Full-time',
      logo: '🎨',
      notes: 'Offer received! Deadline to respond: January 20th.',
    },
    {
      id: 4,
      jobTitle: 'Software Engineer',
      company: 'Enterprise Corp',
      appliedDate: '2025-01-12',
      status: 'rejected',
      lastUpdate: '2025-01-15',
      salary: '$85,000 - $110,000',
      location: 'Chicago, IL',
      type: 'Full-time',
      logo: '🏢',
      notes: 'Position filled internally. Encouraged to apply for future openings.',
    },
    {
      id: 5,
      jobTitle: 'UI/UX Developer',
      company: 'Design Studio',
      appliedDate: '2025-01-16',
      status: 'draft',
      lastUpdate: '2025-01-16',
      salary: '$60,000 - $80,000',
      location: 'Remote',
      type: 'Part-time',
      logo: '🎯',
      notes: 'CV and cover letter generated, pending final review.',
    },
  ];

  const statusConfig = {
    draft: { 
      label: 'Draft', 
      color: 'bg-gray-100 text-gray-800', 
      icon: FileText,
      description: 'Application being prepared'
    },
    sent: { 
      label: 'Sent', 
      color: 'bg-blue-100 text-blue-800', 
      icon: Send,
      description: 'Application submitted'
    },
    interview: { 
      label: 'Interview', 
      color: 'bg-yellow-100 text-yellow-800', 
      icon: Calendar,
      description: 'Interview scheduled'
    },
    offer: { 
      label: 'Offer', 
      color: 'bg-green-100 text-green-800', 
      icon: CheckCircle,
      description: 'Offer received'
    },
    rejected: { 
      label: 'Rejected', 
      color: 'bg-red-100 text-red-800', 
      icon: XCircle,
      description: 'Application declined'
    },
  };

  const filteredApplications = selectedStatus === 'all' 
    ? applications 
    : applications.filter(app => app.status === selectedStatus);

  const getStatusCounts = () => {
    const counts = applications.reduce((acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return {
      total: applications.length,
      ...counts,
    };
  };

  const statusCounts = getStatusCounts();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Application Tracker</h1>
            <p className="text-gray-600">Track your job applications through every stage</p>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <span>📊</span>
            <span>Preview Mode - Real tracking available after signup</span>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-gray-900">{statusCounts.total}</div>
          <div className="text-sm text-gray-600">Total</div>
        </div>
        {Object.entries(statusConfig).map(([status, config]) => {
          const Icon = config.icon;
          const count = statusCounts[status] || 0;
          return (
            <div key={status} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <div className="flex items-center space-x-2 mb-1">
                <Icon className="w-4 h-4 text-gray-600" />
                <div className="text-2xl font-bold text-gray-900">{count}</div>
              </div>
              <div className="text-sm text-gray-600">{config.label}</div>
            </div>
          );
        })}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedStatus('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
            selectedStatus === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Applications ({statusCounts.total})
        </button>
        {Object.entries(statusConfig).map(([status, config]) => {
          const count = statusCounts[status] || 0;
          return (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedStatus === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {config.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {Object.entries(statusConfig).map(([status, config]) => {
          const Icon = config.icon;
          const statusApplications = applications.filter(app => app.status === status);
          
          return (
            <div key={status} className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Icon className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">{config.label}</h3>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {statusApplications.length}
                </span>
              </div>
              
              <div className="space-y-3">
                {statusApplications.map((application) => (
                  <div
                    key={application.id}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                        {application.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm truncate">
                          {application.jobTitle}
                        </h4>
                        <p className="text-xs text-gray-600">{application.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-xs text-gray-600 mb-3">
                      <div>Applied: {formatDate(application.appliedDate)}</div>
                      <div>Updated: {formatDate(application.lastUpdate)}</div>
                      {application.interviewDate && (
                        <div className="text-yellow-600 font-medium">
                          Interview: {formatDate(application.interviewDate)}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">{application.location}</span>
                      <span className={`px-2 py-1 rounded-full ${config.color}`}>
                        {config.label}
                      </span>
                    </div>
                    
                    {application.notes && (
                      <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-700">
                        {application.notes}
                      </div>
                    )}
                    
                    <div className="flex space-x-2 mt-3">
                      <button className="flex-1 text-xs bg-gray-100 text-gray-700 py-1 px-2 rounded hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>View</span>
                      </button>
                      <button className="flex-1 text-xs bg-blue-100 text-blue-700 py-1 px-2 rounded hover:bg-blue-200 transition-colors duration-200 flex items-center justify-center space-x-1">
                        <MessageSquare className="w-3 h-3" />
                        <span>Note</span>
                      </button>
                    </div>
                  </div>
                ))}
                
                {statusApplications.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Icon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No applications</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Application List View (Mobile) */}
      <div className="lg:hidden mt-8">
        <div className="space-y-4">
          {filteredApplications.map((application) => {
            const config = statusConfig[application.status];
            const Icon = config.icon;
            
            return (
              <div
                key={application.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl">
                      {application.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{application.jobTitle}</h3>
                      <p className="text-gray-600">{application.company}</p>
                      <p className="text-sm text-gray-500">{application.location} • {application.type}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
                    {config.label}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                  <div>Applied: {formatDate(application.appliedDate)}</div>
                  <div>Updated: {formatDate(application.lastUpdate)}</div>
                  <div>Salary: {application.salary}</div>
                  {application.interviewDate && (
                    <div className="text-yellow-600 font-medium">
                      Interview: {formatDate(application.interviewDate)}
                    </div>
                  )}
                </div>
                
                {application.notes && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-700">{application.notes}</p>
                  </div>
                )}
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Job</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApplicationTracker;