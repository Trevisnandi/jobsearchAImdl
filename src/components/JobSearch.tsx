import React, { useState } from 'react';
import { Search, MapPin, Clock, DollarSign, Filter, Star, Bookmark, ExternalLink, Briefcase } from 'lucide-react';

const JobSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    location: '',
    jobType: '',
    experience: '',
    salary: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      type: 'Full-time',
      salary: '$95,000 - $120,000',
      experience: '5+ years',
      description: 'Join our dynamic team building next-generation web applications using React, TypeScript, and modern tools.',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
      posted: '2 days ago',
      applicants: 45,
      match: 95,
      saved: false,
      logo: '🚀',
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      experience: '3-5 years',
      description: 'Build scalable web applications and APIs. Work with cutting-edge technologies in a fast-paced startup environment.',
      skills: ['React', 'Python', 'PostgreSQL', 'AWS'],
      posted: '1 day ago',
      applicants: 23,
      match: 87,
      saved: true,
      logo: '💡',
    },
    {
      id: 3,
      title: 'React Developer',
      company: 'Digital Agency',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$80,000 - $100,000',
      experience: '2-4 years',
      description: 'Create beautiful, responsive user interfaces for diverse clients. Opportunity to work on varied projects.',
      skills: ['React', 'CSS', 'JavaScript', 'Figma'],
      posted: '3 days ago',
      applicants: 67,
      match: 92,
      saved: false,
      logo: '🎨',
    },
    {
      id: 4,
      title: 'Software Engineer',
      company: 'Enterprise Corp',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$85,000 - $110,000',
      experience: '2-5 years',
      description: 'Develop enterprise software solutions. Great benefits and opportunities for career advancement.',
      skills: ['Java', 'Spring', 'React', 'MySQL'],
      posted: '1 week ago',
      applicants: 89,
      match: 78,
      saved: false,
      logo: '🏢',
    },
    {
      id: 5,
      title: 'UI/UX Developer',
      company: 'Design Studio',
      location: 'Remote',
      type: 'Part-time',
      salary: '$60,000 - $80,000',
      experience: '1-3 years',
      description: 'Bridge design and development. Create intuitive user experiences and implement them with modern web technologies.',
      skills: ['React', 'CSS', 'Figma', 'Adobe XD'],
      posted: '4 days ago',
      applicants: 34,
      match: 83,
      saved: true,
      logo: '🎯',
    },
  ];

  const filterOptions = {
    jobType: ['Full-time', 'Part-time', 'Contract', 'Internship'],
    experience: ['Entry Level', '1-3 years', '3-5 years', '5+ years'],
    salary: ['$50k - $70k', '$70k - $90k', '$90k - $120k', '$120k+'],
  };

  const toggleSaveJob = (jobId: number) => {
    // In a real app, this would update the backend
    console.log('Toggle save for job:', jobId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Job</h1>
            <p className="text-gray-600">Discover opportunities tailored to your skills and preferences</p>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
            <span>🔍</span>
            <span>Preview Mode - Sign up to apply for jobs</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job title, company, or skills..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={selectedFilters.location}
              onChange={(e) => setSelectedFilters({...selectedFilters, location: e.target.value})}
              placeholder="Location"
              className="w-full md:w-64 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-2"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                <select
                  value={selectedFilters.jobType}
                  onChange={(e) => setSelectedFilters({...selectedFilters, jobType: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Types</option>
                  {filterOptions.jobType.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                <select
                  value={selectedFilters.experience}
                  onChange={(e) => setSelectedFilters({...selectedFilters, experience: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Levels</option>
                  {filterOptions.experience.map((exp) => (
                    <option key={exp} value={exp}>{exp}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                <select
                  value={selectedFilters.salary}
                  onChange={(e) => setSelectedFilters({...selectedFilters, salary: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Ranges</option>
                  {filterOptions.salary.map((salary) => (
                    <option key={salary} value={salary}>{salary}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">{jobs.length} jobs found</p>
        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>Most Relevant</option>
          <option>Latest</option>
          <option>Highest Salary</option>
        </select>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 flex-1">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                  {job.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-gray-600 mb-2">{job.company}</p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-green-500 fill-current" />
                        <span className="text-sm font-medium text-green-600">{job.match}% match</span>
                      </div>
                      <button
                        onClick={() => toggleSaveJob(job.id)}
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                          job.saved
                            ? 'text-blue-600 bg-blue-100 hover:bg-blue-200'
                            : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <Bookmark className={`w-5 h-5 ${job.saved ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
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
                      <Clock className="w-4 h-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">{job.applicants} applicants</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>View Details</span>
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium">
          Load More Jobs
        </button>
      </div>
    </div>
  );
};

export default JobSearch;