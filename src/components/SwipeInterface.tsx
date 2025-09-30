import React, { useState, useRef, useEffect } from 'react';
import { Heart, X, MapPin, DollarSign, Clock, Building, Wifi, Users, Star, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: 'Remote' | 'Hybrid' | 'On-site';
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
  match: number;
  logo: string;
  companySize: string;
  industry: string;
}

interface SwipeInterfaceProps {
  onSwipe: (jobId: number, direction: 'left' | 'right') => void;
}

const SwipeInterface: React.FC<SwipeInterfaceProps> = ({ onSwipe }) => {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Remote',
      salary: '$95,000 - $120,000',
      description: 'Join our dynamic team building next-generation web applications using React, TypeScript, and modern tools. We\'re looking for a passionate developer who loves creating exceptional user experiences.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'Modern CSS/SCSS', 'GraphQL knowledge'],
      benefits: ['Health insurance', 'Remote work', '401k matching', 'Learning budget'],
      posted: '2 days ago',
      match: 95,
      logo: '🚀',
      companySize: '100-500',
      industry: 'Technology',
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      type: 'Hybrid',
      salary: '$110,000 - $140,000',
      description: 'Build scalable web applications and APIs in a fast-paced startup environment. Work with cutting-edge technologies and have direct impact on product direction.',
      requirements: ['React/Node.js experience', 'Database design', 'AWS/Cloud platforms', 'Agile methodology'],
      benefits: ['Equity package', 'Flexible hours', 'Health coverage', 'Gym membership'],
      posted: '1 day ago',
      match: 87,
      logo: '💡',
      companySize: '10-50',
      industry: 'Fintech',
    },
    {
      id: 3,
      title: 'React Developer',
      company: 'Digital Agency',
      location: 'Austin, TX',
      type: 'On-site',
      salary: '$80,000 - $100,000',
      description: 'Create beautiful, responsive user interfaces for diverse clients. Opportunity to work on varied projects across different industries and build your portfolio.',
      requirements: ['3+ years React', 'Responsive design', 'Figma/Design tools', 'Client communication'],
      benefits: ['Creative environment', 'Project variety', 'Professional development', 'Team events'],
      posted: '3 days ago',
      match: 92,
      logo: '🎨',
      companySize: '50-100',
      industry: 'Marketing',
    },
  ];

  const currentJob = jobs[currentJobIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (currentJob) {
      onSwipe(currentJob.id, direction);
      setCurrentJobIndex((prev) => (prev + 1) % jobs.length);
      setDragOffset(0);
      setShowDetails(false);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const offset = e.clientX - centerX;
      setDragOffset(Math.max(-200, Math.min(200, offset)));
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      if (Math.abs(dragOffset) > 100) {
        handleSwipe(dragOffset > 0 ? 'right' : 'left');
      } else {
        setDragOffset(0);
      }
      setIsDragging(false);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setDragOffset(0);
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [isDragging]);

  const getCardRotation = () => {
    return dragOffset * 0.1;
  };

  const getCardOpacity = () => {
    return Math.max(0.7, 1 - Math.abs(dragOffset) * 0.002);
  };

  if (!currentJob) return null;

  return (
    <div className="max-w-md mx-auto relative h-[600px] perspective-1000">
      {/* Background Cards */}
      {jobs.slice(currentJobIndex + 1, currentJobIndex + 3).map((job, index) => (
        <div
          key={job.id}
          className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-gray-200"
          style={{
            transform: `scale(${0.95 - index * 0.05}) translateY(${index * 10}px)`,
            zIndex: 10 - index,
            opacity: 0.8 - index * 0.2,
          }}
        />
      ))}

      {/* Main Card */}
      <div
        ref={cardRef}
        className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-gray-200 cursor-grab active:cursor-grabbing overflow-hidden"
        style={{
          transform: `translateX(${dragOffset}px) rotate(${getCardRotation()}deg)`,
          opacity: getCardOpacity(),
          zIndex: 20,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out, opacity 0.3s ease-out',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Match Indicator */}
        <div className="absolute top-4 right-4 z-30">
          <div className="flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            <Star className="w-4 h-4 fill-current" />
            <span>{currentJob.match}% match</span>
          </div>
        </div>

        {/* Swipe Indicators */}
        {dragOffset !== 0 && (
          <>
            <div
              className={`absolute inset-0 flex items-center justify-center z-20 ${
                dragOffset > 0 ? 'bg-green-500' : 'bg-red-500'
              } bg-opacity-20 transition-opacity duration-200`}
            >
              <div
                className={`w-24 h-24 rounded-full border-4 flex items-center justify-center ${
                  dragOffset > 0
                    ? 'border-green-500 text-green-500'
                    : 'border-red-500 text-red-500'
                }`}
              >
                {dragOffset > 0 ? (
                  <Heart className="w-12 h-12 fill-current" />
                ) : (
                  <X className="w-12 h-12" />
                )}
              </div>
            </div>
          </>
        )}

        {/* Card Content */}
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-2xl">
                {currentJob.logo}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{currentJob.title}</h2>
                <p className="text-blue-100">{currentJob.company}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{currentJob.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4" />
                <span>{currentJob.salary}</span>
              </div>
              <div className="flex items-center space-x-2">
                {currentJob.type === 'Remote' ? <Wifi className="w-4 h-4" /> : 
                 currentJob.type === 'Hybrid' ? <Building className="w-4 h-4" /> : 
                 <Building className="w-4 h-4" />}
                <span>{currentJob.type}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{currentJob.posted}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {!showDetails ? (
              <>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">About the Role</h3>
                  <p className="text-gray-700 leading-relaxed">{currentJob.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Requirements</h3>
                  <div className="space-y-2">
                    {currentJob.requirements.slice(0, 3).map((req, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setShowDetails(true)}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
                >
                  <span>View more details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 mb-4"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back to overview</span>
                </button>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">All Requirements</h3>
                    <div className="space-y-2">
                      {currentJob.requirements.map((req, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Benefits</h3>
                    <div className="space-y-2">
                      {currentJob.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Company Info</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>{currentJob.companySize} employees</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4 text-gray-400" />
                        <span>{currentJob.industry}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex space-x-4">
              <button
                onClick={() => handleSwipe('left')}
                className="flex-1 bg-red-100 text-red-600 py-3 rounded-xl hover:bg-red-200 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
              >
                <X className="w-5 h-5" />
                <span>Pass</span>
              </button>
              <button
                onClick={() => handleSwipe('right')}
                className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
              >
                <Heart className="w-5 h-5" />
                <span>Apply</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Boost Indicator */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
          <Zap className="w-4 h-4" />
          <span>AI will tailor your CV for this role</span>
        </div>
      </div>
    </div>
  );
};

export default SwipeInterface;