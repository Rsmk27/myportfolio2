import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Cpu, 
  Settings, 
  Code, 
  Wrench, 
  Award,
  TrendingUp,
  Target,
  Layers,
  Wifi
} from 'lucide-react';
import AOS from 'aos';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const skillCategories = {
    technical: {
      title: 'Technical Skills',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Circuit Design', level: 95, icon: '🔌', description: 'Analog & Digital Circuit Design' },
        { name: 'PCB Layout', level: 90, icon: '🔧', description: 'High-speed & RF PCB Design' },
        { name: 'Power Electronics', level: 88, icon: '⚡', description: 'Power Systems & Converters' },
        { name: 'Embedded Systems', level: 92, icon: '💾', description: 'Microcontrollers & RTOS' },
        { name: 'Signal Processing', level: 85, icon: '📊', description: 'DSP & Digital Filters' },
        { name: 'VLSI Design', level: 78, icon: '🔬', description: 'ASIC & FPGA Development' }
      ]
    },
    programming: {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python', level: 95, icon: '🐍', description: 'Data Analysis & ML' },
        { name: 'C/C++', level: 90, icon: '⚙️', description: 'Embedded Programming' },
        { name: 'MATLAB', level: 88, icon: '📈', description: 'Simulation & Modeling' },
        { name: 'Verilog/VHDL', level: 85, icon: '🔌', description: 'Hardware Description' },
        { name: 'JavaScript', level: 80, icon: '🌐', description: 'Web Development' },
        { name: 'LabVIEW', level: 75, icon: '🔬', description: 'Test Automation' }
      ]
    },
    tools: {
      title: 'Tools & Software',
      icon: Wrench,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Altium Designer', level: 95, icon: '🔧', description: 'PCB Design Suite' },
        { name: 'SPICE Simulation', level: 90, icon: '📊', description: 'Circuit Simulation' },
        { name: 'Cadence Tools', level: 85, icon: '🔬', description: 'IC Design Suite' },
        { name: 'ANSYS', level: 80, icon: '🧮', description: 'FEA & Simulation' },
        { name: 'SolidWorks', level: 78, icon: '📐', description: '3D CAD Design' },
        { name: 'KiCad', level: 82, icon: '⚡', description: 'Open Source PCB' }
      ]
    },
    soft: {
      title: 'Professional Skills',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Project Management', level: 90, icon: '📋', description: 'Agile & Waterfall' },
        { name: 'Team Leadership', level: 88, icon: '👥', description: 'Cross-functional Teams' },
        { name: 'Technical Writing', level: 85, icon: '📝', description: 'Documentation & Reports' },
        { name: 'Problem Solving', level: 95, icon: '🧩', description: 'Analytical Thinking' },
        { name: 'Communication', level: 87, icon: '💬', description: 'Stakeholder Management' },
        { name: 'Innovation', level: 92, icon: '💡', description: 'Creative Solutions' }
      ]
    }
  };

  const certifications = [
    { name: 'Professional Engineer (PE)', issuer: 'NCEES', year: '2023', color: 'text-blue-400' },
    { name: 'PMP Certification', issuer: 'PMI', year: '2023', color: 'text-green-400' },
    { name: 'IPC-A-610 Certified', issuer: 'IPC', year: '2022', color: 'text-purple-400' },
    { name: 'AWS IoT Specialty', issuer: 'Amazon', year: '2022', color: 'text-orange-400' },
    { name: 'Six Sigma Green Belt', issuer: 'ASQ', year: '2021', color: 'text-yellow-400' },
    { name: 'FE Electrical', issuer: 'NCEES', year: '2020', color: 'text-cyan-400' }
  ];

  const achievements = [
    { title: 'Patent Holder', count: '3', description: 'Granted patents in power electronics' },
    { title: 'IEEE Member', count: '5+', description: 'Years of active membership' },
    { title: 'Publications', count: '12', description: 'Peer-reviewed research papers' },
    { title: 'Awards', count: '8', description: 'Industry recognition' }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="skills-circuit" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
              {/* CPU representation */}
              <rect x="40" y="40" width="100" height="100" fill="none" stroke="#3b82f6" strokeWidth="2" />
              <rect x="60" y="60" width="60" height="60" fill="#3b82f6" opacity="0.2" />
              
              {/* Pins */}
              {[...Array(10)].map((_, i) => (
                <React.Fragment key={i}>
                  <rect x={35 + i * 11} y="30" width="2" height="10" fill="#8b5cf6" />
                  <rect x={35 + i * 11} y="140" width="2" height="10" fill="#8b5cf6" />
                  <rect x="30" y={35 + i * 11} width="10" height="2" fill="#10b981" />
                  <rect x="140" y={35 + i * 11} width="10" height="2" fill="#10b981" />
                </React.Fragment>
              ))}
              
              {/* Internal connections */}
              <path d="M60 90 L120 90 M90 60 L90 120" stroke="#f59e0b" strokeWidth="1" className="circuit-line" />
              <circle cx="90" cy="90" r="8" fill="#ef4444" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skills-circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-6"
            data-aos="fade-up"
          >
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A comprehensive overview of my technical capabilities, professional certifications, and engineering expertise.
          </motion.p>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-3xl font-bold gradient-text mb-2">{achievement.count}</h3>
              <h4 className="text-white font-semibold mb-2">{achievement.title}</h4>
              <p className="text-slate-400 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="glass rounded-3xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Layers className="w-6 h-6 text-blue-400 mr-2" />
                Categories
              </h3>
              <div className="space-y-3">
                {Object.entries(skillCategories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full flex items-center space-x-3 p-4 rounded-xl font-medium transition-all duration-300 ${
                      activeCategory === key
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    {React.createElement(category.icon, { className: "w-5 h-5" })}
                    <span className="text-sm">{category.title}</span>
                  </button>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Award className="w-5 h-5 text-yellow-400 mr-2" />
                  Certifications
                </h4>
                <div className="space-y-3">
                  {certifications.slice(0, 3).map((cert, index) => (
                    <div key={index} className="text-sm">
                      <p className={`font-medium ${cert.color}`}>{cert.name}</p>
                      <p className="text-slate-400">{cert.issuer} • {cert.year}</p>
                    </div>
                  ))}
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    View all certifications →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl p-8"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${skillCategories[activeCategory].color} bg-opacity-20`}>
                  {React.createElement(skillCategories[activeCategory].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-white">{skillCategories[activeCategory].title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                          <h4 className="text-white font-semibold">{skill.name}</h4>
                          <p className="text-slate-400 text-sm">{skill.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-blue-400">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                      
                      {/* Skill level indicator */}
                      <motion.div
                        className="absolute -top-1 w-4 h-4 bg-white rounded-full border-2 border-blue-500"
                        style={{ left: `${skill.level}%` }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + 0.5 }}
                      />
                    </div>

                    {/* Hover Effect */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-slate-800 rounded-lg border border-slate-600 text-sm text-white z-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        Proficiency: {skill.level}%
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skills Visualization */}
        <motion.div
          className="mt-16 glass rounded-3xl p-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
            Skill Development Over Time
          </h3>
          
          <div className="relative h-64 flex items-end justify-center space-x-4">
            {['2019', '2020', '2021', '2022', '2023', '2024'].map((year, index) => (
              <div key={year} className="flex flex-col items-center">
                <motion.div
                  className="w-8 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg mb-2"
                  style={{ height: `${60 + index * 20}px` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${60 + index * 20}px` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
                <span className="text-slate-400 text-sm">{year}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-slate-400">Continuous learning and skill enhancement across multiple domains</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;