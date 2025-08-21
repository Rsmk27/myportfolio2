import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, Users, Coffee, BookOpen, Lightbulb } from 'lucide-react';
import AOS from 'aos';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const stats = [
    { icon: Zap, label: 'Projects Completed', value: '50+', color: 'text-blue-400' },
    { icon: Award, label: 'Certifications', value: '15+', color: 'text-purple-400' },
    { icon: Users, label: 'Clients Satisfied', value: '25+', color: 'text-green-400' },
    { icon: Coffee, label: 'Coffee Consumed', value: '1000+', color: 'text-orange-400' },
  ];

  const education = [
    {
      degree: 'Master of Science in Electrical Engineering',
      institution: 'Stanford University',
      year: '2022-2024',
      specialization: 'Power Systems & Renewable Energy',
      gpa: '3.9/4.0'
    },
    {
      degree: 'Bachelor of Technology in Electronics & Communication',
      institution: 'MIT',
      year: '2018-2022',
      specialization: 'Digital Signal Processing',
      gpa: '3.8/4.0'
    }
  ];

  const experience = [
    {
      role: 'Senior Electrical Engineer',
      company: 'Tesla Inc.',
      duration: '2024 - Present',
      description: 'Leading battery management system design for Model S vehicles. Developed advanced charging algorithms reducing charging time by 25%.',
      achievements: ['Led team of 8 engineers', 'Patent pending for BMS optimization', 'Reduced power consumption by 15%']
    },
    {
      role: 'Electronics Design Engineer',
      company: 'Apple Inc.',
      duration: '2022 - 2024',
      description: 'Designed PCB layouts for iPhone components. Specialized in high-frequency circuit design and EMI/EMC compliance.',
      achievements: ['Optimized circuit efficiency by 20%', 'Reduced board size by 30%', 'Zero EMI violations']
    }
  ];

  const skills = [
    { category: 'Circuit Design', items: ['PCB Design', 'Analog Circuits', 'Digital Circuits', 'VLSI Design'] },
    { category: 'Programming', items: ['MATLAB', 'Python', 'C/C++', 'Verilog/VHDL'] },
    { category: 'Tools & Software', items: ['Altium Designer', 'SPICE', 'Cadence', 'LabVIEW'] },
    { category: 'Specializations', items: ['Power Electronics', 'Signal Processing', 'Embedded Systems', 'IoT'] }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="about-circuit" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="5" fill="#3b82f6" />
              <circle cx="125" cy="25" r="5" fill="#8b5cf6" />
              <circle cx="75" cy="75" r="8" fill="#10b981" />
              <circle cx="25" cy="125" r="5" fill="#f59e0b" />
              <circle cx="125" cy="125" r="5" fill="#ef4444" />
              
              <path d="M25 25 L125 25 L75 75 L25 125 L125 125 L75 75 L25 25" 
                    stroke="#3b82f6" strokeWidth="1" fill="none" className="circuit-line" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-6"
            data-aos="fade-up"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Passionate electrical engineer with a drive for innovation and sustainable technology solutions.
            Combining theoretical knowledge with practical experience to create impactful engineering solutions.
          </motion.p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1">
            <motion.div
              className="glass rounded-3xl p-8 sticky top-24"
              data-aos="fade-right"
            >
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-glow"></div>
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Profile" 
                    className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Alex Johnson</h3>
                <p className="text-blue-400 mb-4">Electrical Engineer</p>
                <div className="flex justify-center space-x-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-400">Available for projects</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Location</span>
                  <span className="text-white">San Francisco, CA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Experience</span>
                  <span className="text-white">6+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Email</span>
                  <span className="text-white">alex@electroforge.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Phone</span>
                  <span className="text-white">+1 (555) 123-4567</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 text-yellow-400 mr-2" />
                  Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Renewable Energy', 'IoT', 'Robotics', 'AI/ML', 'Sustainability'].map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Detailed Info */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 glass rounded-2xl p-2">
              {[
                { id: 'education', label: 'Education', icon: BookOpen },
                { id: 'experience', label: 'Experience', icon: Zap },
                { id: 'skills', label: 'Skills', icon: Award }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl p-8"
            >
              {activeTab === 'education' && (
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-blue-500/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                      <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                      <p className="text-blue-400 mb-1">{edu.institution}</p>
                      <p className="text-slate-400 text-sm mb-2">{edu.year}</p>
                      <p className="text-slate-300 mb-2">Specialization: {edu.specialization}</p>
                      <p className="text-green-400 text-sm">GPA: {edu.gpa}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-purple-500/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                      <p className="text-purple-400 mb-1">{exp.company}</p>
                      <p className="text-slate-400 text-sm mb-3">{exp.duration}</p>
                      <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-4">
                      <h3 className="text-lg font-semibold text-white flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                        {skillGroup.category}
                      </h3>
                      <div className="space-y-3">
                        {skillGroup.items.map((skill, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-slate-300">{skill}</span>
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, j) => (
                                <div
                                  key={j}
                                  className={`w-2 h-2 rounded-full ${
                                    j < 4 ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-slate-600'
                                  }`}
                                ></div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;