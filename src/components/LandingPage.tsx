import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Globe, 
  Zap, 
  Shield, 
  Award, 
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Brain,
  Target,
  Rocket
} from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
  onPreview: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onPreview }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Job Matching',
      description: 'Our advanced AI analyzes your CV and matches you with the perfect opportunities based on your skills, experience, and career goals.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Career Planning Tools',
      description: 'Get personalized career roadmaps, skill gap analysis, and actionable insights to accelerate your professional growth.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'Access remote and on-site positions from companies worldwide. Connect with international employers and expand your horizons.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: BookOpen,
      title: 'Learning & Development',
      description: 'Upskill with curated courses, certifications, and learning paths tailored to your career objectives and industry trends.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const stats = [
    { number: '50K+', label: 'Active Jobs', icon: Briefcase },
    { number: '25K+', label: 'Companies', icon: Users },
    { number: '100K+', label: 'Professionals', icon: TrendingUp },
    { number: '95%', label: 'Success Rate', icon: Award },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'TechCorp',
      image: '👩‍💻',
      quote: 'TalentConnect AI helped me find my dream job in just 2 weeks. The AI matching was incredibly accurate!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'StartupXYZ',
      image: '👨‍💼',
      quote: 'The career planning tools gave me clear direction. I got promoted within 6 months of using the platform.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'Design Studio',
      image: '👩‍🎨',
      quote: 'Amazing platform! Found multiple remote opportunities and improved my skills through their learning center.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TalentConnect AI
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={onPreview}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
              >
                <Play className="w-4 h-4" />
                <span>Preview Platform</span>
              </button>
              <button
                onClick={onLogin}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>AI-Powered Career Platform</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Unlock Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Career </span>
                Potential
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with global opportunities, enhance your skills, and accelerate your career growth with our AI-powered platform. Join thousands of professionals who've transformed their careers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onLogin}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={onPreview}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Job Match Found!</h3>
                    <p className="text-sm text-gray-600">95% compatibility</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Senior Developer</span>
                    <span className="text-green-600 font-semibold">$120K</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-[95%]"></div>
                  </div>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">TypeScript</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Remote</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl animate-pulse">
                🚀
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Your Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines cutting-edge AI technology with intuitive design to deliver exceptional career growth experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeFeature === index
                        ? 'bg-white shadow-xl border-2 border-blue-200'
                        : 'bg-gray-50 hover:bg-white hover:shadow-lg'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-4 text-green-400 font-mono text-sm">
                  <div>$ analyzing_cv --skills --experience</div>
                  <div className="text-blue-400">✓ React: Expert Level (95%)</div>
                  <div className="text-blue-400">✓ TypeScript: Advanced (90%)</div>
                  <div className="text-blue-400">✓ Node.js: Intermediate (75%)</div>
                  <div className="text-yellow-400">⚡ Matching jobs...</div>
                  <div className="text-green-400">✅ Found 47 perfect matches</div>
                  <div className="text-purple-400">🎯 Career score: 92/100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See how TalentConnect AI has transformed careers across the globe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who've accelerated their careers with TalentConnect AI. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onLogin}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg"
            >
              <Rocket className="w-5 h-5" />
              <span>Get Started Free</span>
            </button>
            <button
              onClick={onPreview}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Try Preview Mode</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">TalentConnect AI</h3>
              </div>
              <p className="text-gray-400">
                Connecting talent with opportunities worldwide through the power of AI.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Job Search</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Planning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Learning Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Employers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TalentConnect AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;