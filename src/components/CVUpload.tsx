import React, { useState, useRef } from 'react';
import { Upload, FileText, Check, X, Eye, Download, Zap, Brain, Target } from 'lucide-react';

interface ParsedCV {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  skills: string[];
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  languages: string[];
}

const CVUpload: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [parsedCV, setParsedCV] = useState<ParsedCV | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock parsed CV data
  const mockParsedCV: ParsedCV = {
    personalInfo: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
    },
    summary: 'Passionate frontend developer with 5+ years of experience building scalable web applications. Specialized in React, TypeScript, and modern web technologies with a focus on user experience and performance optimization.',
    experience: [
      {
        title: 'Senior Frontend Developer',
        company: 'TechCorp Inc.',
        duration: '2022 - Present',
        description: 'Lead frontend development for major SaaS products. Mentored junior developers and implemented modern React patterns.',
      },
      {
        title: 'Frontend Developer',
        company: 'StartupXYZ',
        duration: '2020 - 2022',
        description: 'Built responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UIs.',
      },
    ],
    skills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'CSS/SCSS', 'GraphQL', 'AWS'],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of California, Berkeley',
        year: '2020',
      },
    ],
    languages: ['English (Native)', 'Spanish (Conversational)', 'French (Basic)'],
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileUpload = async (file: File) => {
    setUploadedFile(file);
    setIsUploading(true);
    
    // Simulate file upload
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsUploading(false);
    
    // Simulate CV parsing
    setIsParsing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsParsing(false);
    
    setParsedCV(mockParsedCV);
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setParsedCV(null);
    setShowPreview(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">CV Upload & Analysis</h1>
            <p className="text-gray-600">Upload your CV and let AI optimize it for better job matches</p>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
            <span>🤖</span>
            <span>AI-Powered CV Analysis</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="space-y-6">
          {!uploadedFile ? (
            <div
              className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors duration-200 cursor-pointer"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload your CV</h3>
              <p className="text-gray-600 mb-4">
                Drag and drop your CV here, or click to browse
              </p>
              <p className="text-sm text-gray-500">
                Supports PDF, DOC, DOCX files up to 10MB
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{uploadedFile.name}</h3>
                    <p className="text-sm text-gray-600">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleRemoveFile}
                  className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Upload Progress */}
              {isUploading && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Uploading...</span>
                    <span className="text-blue-600">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4 transition-all duration-300"></div>
                  </div>
                </div>
              )}

              {/* Parsing Progress */}
              {isParsing && (
                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-sm text-purple-600 mb-2">
                    <Brain className="w-4 h-4 animate-pulse" />
                    <span>AI is analyzing your CV...</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full w-2/3 transition-all duration-300"></div>
                  </div>
                </div>
              )}

              {/* Success State */}
              {parsedCV && !isUploading && !isParsing && (
                <div className="flex items-center space-x-2 text-green-600 mb-4">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">CV successfully analyzed!</span>
                </div>
              )}

              {parsedCV && (
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{showPreview ? 'Hide Preview' : 'Preview Analysis'}</span>
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* AI Features */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-4">AI-Powered Features</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">Smart CV Parsing</p>
                  <p className="text-sm text-purple-100">Extract and structure your experience automatically</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">Job Matching</p>
                  <p className="text-sm text-purple-100">Find roles that perfectly match your skills</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">Auto-Tailoring</p>
                  <p className="text-sm text-purple-100">Customize CV for each application automatically</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="space-y-6">
          {showPreview && parsedCV ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">CV Analysis Preview</h3>
              
              {/* Personal Info */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Personal Information</h4>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p><span className="font-medium">Name:</span> {parsedCV.personalInfo.name}</p>
                  <p><span className="font-medium">Email:</span> {parsedCV.personalInfo.email}</p>
                  <p><span className="font-medium">Phone:</span> {parsedCV.personalInfo.phone}</p>
                  <p><span className="font-medium">Location:</span> {parsedCV.personalInfo.location}</p>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Professional Summary</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">{parsedCV.summary}</p>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Skills Identified</h4>
                <div className="flex flex-wrap gap-2">
                  {parsedCV.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Experience</h4>
                <div className="space-y-4">
                  {parsedCV.experience.map((exp, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-medium text-gray-900">{exp.title}</h5>
                        <span className="text-sm text-gray-600">{exp.duration}</span>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-700 text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
                <div className="space-y-3">
                  {parsedCV.education.map((edu, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-medium text-gray-900">{edu.degree}</h5>
                      <p className="text-blue-600">{edu.institution}</p>
                      <p className="text-sm text-gray-600">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No CV uploaded yet</h3>
              <p className="text-gray-600">
                Upload your CV to see the AI analysis and structured preview
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVUpload;