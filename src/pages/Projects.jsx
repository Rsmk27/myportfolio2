import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Zap, Cpu, Wifi, Battery, CircuitBoard } from 'lucide-react';
import AOS from 'aos';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Smart Grid Management System',
      category: 'power-systems',
      description: 'Advanced IoT-based smart grid solution for efficient power distribution and monitoring.',
      longDescription: 'Developed a comprehensive smart grid management system using IoT sensors, machine learning algorithms, and real-time data analytics to optimize power distribution efficiency by 30%.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'TensorFlow', 'IoT', 'MQTT', 'React'],
      github: '#',
      demo: '#',
      features: ['Real-time monitoring', 'Predictive analytics', 'Load balancing', 'Energy optimization'],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Wireless Charging System',
      category: 'electronics',
      description: 'High-efficiency wireless power transfer system for electric vehicles.',
      longDescription: 'Designed and implemented a 50kW wireless charging system for electric vehicles with 95% efficiency using resonant inductive coupling technology.',
      image: '/api/placeholder/400/300',
      technologies: ['MATLAB', 'ANSYS', 'C++', 'Altium Designer'],
      github: '#',
      demo: '#',
      features: ['95% efficiency', 'Fast charging', 'Safety protocols', 'Universal compatibility'],
      icon: Battery,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Neural Network Processor',
      category: 'embedded',
      description: 'Custom ASIC design for accelerating machine learning inference.',
      longDescription: 'Developed a specialized neural network processing unit (NPU) capable of 1000 TOPS/W for edge AI applications, fabricated on 7nm process technology.',
      image: '/api/placeholder/400/300',
      technologies: ['Verilog', 'Cadence', 'Python', 'SystemC'],
      github: '#',
      demo: '#',
      features: ['Ultra-low power', 'High throughput', 'Scalable architecture', 'AI acceleration'],
      icon: Cpu,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'IoT Environmental Monitor',
      category: 'iot',
      description: 'Multi-sensor environmental monitoring system with cloud integration.',
      longDescription: 'Created a comprehensive environmental monitoring solution with 20+ sensors, real-time data visualization, and predictive environmental modeling.',
      image: '/api/placeholder/400/300',
      technologies: ['Arduino', 'ESP32', 'AWS IoT', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#',
      features: ['20+ sensors', 'Cloud analytics', 'Mobile app', 'Alert system'],
      icon: Wifi,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'PCB Design Automation',
      category: 'electronics',
      description: 'AI-powered tool for automated PCB layout optimization.',
      longDescription: 'Developed an intelligent PCB design automation tool using genetic algorithms and machine learning to optimize trace routing and component placement.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'OpenCV', 'Altium API', 'TensorFlow'],
      github: '#',
      demo: '#',
      features: ['Auto-routing', 'DRC checking', '50% faster design', 'ML optimization'],
      icon: CircuitBoard,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      title: 'Renewable Energy Controller',
      category: 'power-systems',
      description: 'Advanced MPPT controller for solar and wind energy systems.',
      longDescription: 'Designed a maximum power point tracking (MPPT) controller with 99.5% efficiency for hybrid renewable energy systems combining solar and wind power.',
      image: '/api/placeholder/400/300',
      technologies: ['C/C++', 'SPICE', 'LabVIEW', 'MATLAB Simulink'],
      github: '#',
      demo: '#',
      features: ['99.5% efficiency', 'Hybrid support', 'Weather adaptive', 'Grid integration'],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'power-systems', label: 'Power Systems', count: projects.filter(p => p.category === 'power-systems').length },
    { id: 'electronics', label: 'Electronics', count: projects.filter(p => p.category === 'electronics').length },
    { id: 'embedded', label: 'Embedded', count: projects.filter(p => p.category === 'embedded').length },
    { id: 'iot', label: 'IoT', count: projects.filter(p => p.category === 'iot').length },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="projects-circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect x="50" y="50" width="20" height="15" fill="#3b82f6" />
              <rect x="130" y="50" width="20" height="15" fill="#8b5cf6" />
              <rect x="50" y="135" width="20" height="15" fill="#10b981" />
              <rect x="130" y="135" width="20" height="15" fill="#f59e0b" />
              
              <path d="M70 57 L130 57 M70 142 L130 142 M60 65 L60 135 M140 65 L140 135" 
                    stroke="#3b82f6" strokeWidth="1" className="circuit-line" />
              
              {/* IC Pins */}
              {[...Array(8)].map((_, i) => (
                <circle key={i} cx={45 + (i * 15)} cy="35" r="2" fill="#3b82f6" />
              ))}
              {[...Array(8)].map((_, i) => (
                <circle key={i} cx={45 + (i * 15)} cy="165" r="2" fill="#8b5cf6" />
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projects-circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-6"
            data-aos="fade-up"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore my portfolio of innovative engineering solutions, from power systems to embedded electronics.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                    : 'glass text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{category.label}</span>
                <span className="px-2 py-1 bg-slate-700 rounded-full text-xs">{category.count}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 card-3d">
                  {/* Project Image with 3D Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <project.icon className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-sm px-4">{project.longDescription}</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        {project.github && (
                          <a
                            href={project.github}
                            className="p-2 glass rounded-lg hover:bg-blue-500/20 transition-all duration-300"
                          >
                            <Github className="w-4 h-4 text-slate-400 hover:text-white" />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            className="p-2 glass rounded-lg hover:bg-purple-500/20 transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4 text-slate-400 hover:text-white" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span className="text-xs text-slate-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-xs border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-500 pointer-events-none`}></div>
                </div>

                {/* 3D Floating Elements */}
                {hoveredProject === project.id && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    exit={{ scale: 0, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full h-full bg-white/20 rounded-full animate-pulse"></div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-slate-400 mb-6">Interested in collaborating on innovative projects?</p>
          <motion.button
            className="btn-primary px-8 py-4 rounded-xl font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;