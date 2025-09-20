import React, { useState } from 'react';
import { User, Camera, MapPin, Mail, Phone, Calendar, Award, Briefcase, GraduationCap, Plus, Edit, Download, Share2, ExternalLink } from 'lucide-react';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const profile = {
    name: 'Sarah Johnson',
    title: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'January 2024',
    profileImage: '👩‍💼',
    bio: 'Passionate frontend developer with 5+ years of experience building scalable web applications. Specialized in React, TypeScript, and modern web technologies.',
    skills: [
      { name: 'React', level: 95, category: 'Frontend' },
      { name: 'TypeScript', level: 90, category: 'Frontend' },
      { name: 'JavaScript', level: 95, category: 'Frontend' },
      { name: 'Node.js', level: 80, category: 'Backend' },
      { name: 'Python', level: 70, category: 'Backend' },
      { name: 'CSS/SCSS', level: 90, category: 'Frontend' },
      { name: 'GraphQL', level: 75, category: 'Backend' },
      { name: 'AWS', level: 65, category: 'DevOps' },
    ],
    experience: [
      {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'TechCorp Inc.',
        period: '2022 - Present',
        location: 'San Francisco, CA',
        description: 'Lead frontend development for major SaaS products. Mentored junior developers and implemented modern React patterns.',
        achievements: [
          'Increased application performance by 40%',
          'Led team of 5 developers',
          'Implemented new design system',
        ],
      },
      {
        id: 2,
        title: 'Frontend Developer',
        company: 'StartupXYZ',
        period: '2020 - 2022',
        location: 'Remote',
        description: 'Built responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UIs.',
        achievements: [
          'Developed 3 major product features',
          'Reduced bug reports by 30%',
          'Implemented automated testing',
        ],
      },
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of California, Berkeley',
        period: '2016 - 2020',
        gpa: '3.8/4.0',
      },
    ],
    certifications: [
      {
        id: 1,
        name: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        date: '2023',
        verified: true,
      },
      {
        id: 2,
        name: 'React Developer Certification',
        issuer: 'Meta',
        date: '2022',
        verified: true,
      },
    ],
    projects: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution built with React, Node.js, and PostgreSQL',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        link: 'https://github.com/sarah/ecommerce',
      },
      {
        id: 2,
        title: 'Task Management App',
        description: 'Real-time collaborative task management application',
        technologies: ['React', 'Socket.io', 'MongoDB'],
        link: 'https://github.com/sarah/taskapp',
      },
    ],
  };

  const skillCategories = ['All', 'Frontend', 'Backend', 'DevOps'];
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('All');

  const filteredSkills = selectedSkillCategory === 'All' 
    ? profile.skills 
    : profile.skills.filter(skill => skill.category === selectedSkillCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
            {/* Profile Header */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 h-32">
              <div className="absolute -bottom-12 left-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl border-4 border-white shadow-lg relative">
                  {profile.profileImage}
                  <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-16 pb-6 px-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
                  <p className="text-gray-600">{profile.title}</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <Edit className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {profile.joinDate}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm font-medium">
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-2">
          {/* Preview Mode Banner */}
          <div className="bg-purple-100 border border-purple-200 rounded-xl p-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">👤</div>
              <div>
                <h3 className="font-semibold text-purple-900">Preview Mode - Sample Profile</h3>
                <p className="text-sm text-purple-700">This is a demo profile. Sign up to create your own professional profile and track your career progress.</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-6 mb-8 border-b border-gray-200">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'experience', label: 'Experience' },
              { id: 'skills', label: 'Skills' },
              { id: 'education', label: 'Education' },
              { id: 'projects', label: 'Projects' },
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
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">About</h3>
                <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Top Skills</h3>
                <div className="space-y-3">
                  {profile.skills.slice(0, 5).map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Achievements</h3>
                <div className="space-y-3">
                  {profile.certifications.map((cert) => (
                    <div key={cert.id} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{cert.name}</p>
                        <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                      </div>
                      {cert.verified && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Verified</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              {profile.experience.map((exp) => (
                <div key={exp.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-600">{exp.period} • {exp.location}</p>
                    </div>
                    <button className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium">
                <Plus className="w-4 h-4" />
                <span>Add Experience</span>
              </button>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {skillCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedSkillCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      selectedSkillCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Skills</h3>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
                    <Plus className="w-4 h-4" />
                    <span>Add Skill</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {filteredSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium text-gray-900">{skill.name}</span>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{skill.category}</span>
                        </div>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-500 ${
                            skill.level >= 90 ? 'bg-green-500' :
                            skill.level >= 70 ? 'bg-blue-500' :
                            'bg-yellow-500'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              {profile.education.map((edu) => (
                <div key={edu.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium">{edu.school}</p>
                        <p className="text-sm text-gray-600">{edu.period}</p>
                        <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                    <button className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium">
                <Plus className="w-4 h-4" />
                <span>Add Education</span>
              </button>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              {profile.projects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                      <p className="text-gray-700 mt-2">{project.description}</p>
                    </div>
                    <a
                      href={project.link}
                      className="text-blue-600 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium">
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;