import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin, Zap, CircuitBoard, Cpu } from 'lucide-react';
import AOS from 'aos';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easeInOut: 'ease-in-out'
    });

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Circuit Board */}
        <motion.div
          className="absolute top-1/4 left-1/4 opacity-10"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        >
          <svg width="400" height="300" viewBox="0 0 400 300">
            <rect width="400" height="300" fill="none" stroke="#3b82f6" strokeWidth="2" rx="20" />
            <circle cx="60" cy="60" r="8" fill="#3b82f6" />
            <circle cx="200" cy="60" r="8" fill="#8b5cf6" />
            <circle cx="340" cy="60" r="8" fill="#10b981" />
            <circle cx="60" cy="150" r="8" fill="#f59e0b" />
            <circle cx="200" cy="150" r="12" fill="#ef4444" />
            <circle cx="340" cy="150" r="8" fill="#06b6d4" />
            <circle cx="60" cy="240" r="8" fill="#8b5cf6" />
            <circle cx="200" cy="240" r="8" fill="#10b981" />
            <circle cx="340" cy="240" r="8" fill="#f59e0b" />
            
            {/* Circuit traces */}
            <path d="M60 60 L200 60 L340 60" stroke="#3b82f6" strokeWidth="2" fill="none" className="circuit-line" />
            <path d="M60 150 L200 150 L340 150" stroke="#8b5cf6" strokeWidth="2" fill="none" className="circuit-line" />
            <path d="M60 240 L200 240 L340 240" stroke="#10b981" strokeWidth="2" fill="none" className="circuit-line" />
            <path d="M60 60 L60 240" stroke="#f59e0b" strokeWidth="2" fill="none" className="circuit-line" />
            <path d="M200 60 L200 240" stroke="#ef4444" strokeWidth="2" fill="none" className="circuit-line" />
            <path d="M340 60 L340 240" stroke="#06b6d4" strokeWidth="2" fill="none" className="circuit-line" />
          </svg>
        </motion.div>

        {/* Floating Electronic Components */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {i % 3 === 0 && <Cpu className="w-8 h-8 text-blue-400" />}
            {i % 3 === 1 && <Zap className="w-8 h-8 text-purple-400" />}
            {i % 3 === 2 && <CircuitBoard className="w-8 h-8 text-green-400" />}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:text-left space-y-8">
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full glass border border-blue-500/30"
              data-aos="fade-down"
              data-aos-delay="100"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm text-slate-300">Available for Projects</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="block text-white">Electrical &</span>
                <span className="block gradient-text">Electronics</span>
                <span className="block text-white">Engineer</span>
              </motion.h1>

              <motion.p
                className="text-xl text-slate-400 max-w-2xl lg:max-w-none"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Designing innovative solutions through circuits, systems, and cutting-edge technology. 
                Passionate about power systems, embedded electronics, and sustainable energy solutions.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <motion.button
                className="btn-primary px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                <span>View Projects</span>
                <Zap className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                className="btn-secondary px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 glass rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - 3D Visualization */}
          <div className="lg:flex justify-center hidden">
            <motion.div
              className="relative w-96 h-96"
              data-aos="fade-left"
              data-aos-delay="600"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
              }}
            >
              {/* Main Circuit Board */}
              <div className="absolute inset-0 glass rounded-3xl p-8 border-2 border-blue-500/30">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Circuit Board Background */}
                  <rect width="300" height="300" fill="rgba(15, 23, 42, 0.8)" rx="15" />
                  
                  {/* Main Components */}
                  <rect x="50" y="50" width="60" height="40" fill="#3b82f6" rx="5" />
                  <text x="80" y="75" textAnchor="middle" className="text-xs fill-white font-mono">CPU</text>
                  
                  <rect x="190" y="50" width="60" height="40" fill="#8b5cf6" rx="5" />
                  <text x="220" y="75" textAnchor="middle" className="text-xs fill-white font-mono">GPU</text>
                  
                  <rect x="50" y="130" width="40" height="60" fill="#10b981" rx="5" />
                  <text x="70" y="165" textAnchor="middle" className="text-xs fill-white font-mono">RAM</text>
                  
                  <rect x="130" y="130" width="40" height="60" fill="#f59e0b" rx="5" />
                  <text x="150" y="165" textAnchor="middle" className="text-xs fill-white font-mono">SSD</text>
                  
                  <rect x="210" y="130" width="40" height="60" fill="#ef4444" rx="5" />
                  <text x="230" y="165" textAnchor="middle" className="text-xs fill-white font-mono">PSU</text>
                  
                  <rect x="100" y="230" width="100" height="20" fill="#06b6d4" rx="5" />
                  <text x="150" y="245" textAnchor="middle" className="text-xs fill-white font-mono">MOTHERBOARD</text>
                  
                  {/* Circuit Traces */}
                  <path d="M110 70 L190 70" stroke="#3b82f6" strokeWidth="2" className="circuit-line" />
                  <path d="M80 90 L80 130" stroke="#8b5cf6" strokeWidth="2" className="circuit-line" />
                  <path d="M220 90 L220 130" stroke="#10b981" strokeWidth="2" className="circuit-line" />
                  <path d="M90 160 L130 160" stroke="#f59e0b" strokeWidth="2" className="circuit-line" />
                  <path d="M170 160 L210 160" stroke="#ef4444" strokeWidth="2" className="circuit-line" />
                  <path d="M150 190 L150 230" stroke="#06b6d4" strokeWidth="2" className="circuit-line" />
                  
                  {/* Connection Points */}
                  {[
                    [80, 70], [220, 70], [80, 130], [150, 130], [230, 130],
                    [90, 160], [170, 160], [150, 190], [150, 230]
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="3" fill="#fff" opacity="0.8">
                      <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                    </circle>
                  ))}
                </svg>
              </div>

              {/* Floating Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToNext}
        >
          <div className="flex flex-col items-center space-y-2 text-slate-400 hover:text-white transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;