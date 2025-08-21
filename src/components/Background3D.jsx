import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Background3D = () => {
  const circuitRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (circuitRef.current) {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;
        
        circuitRef.current.style.transform = `translate(-${x/10}px, -${y/10}px)`;
      }
    };

    const handleScroll = () => {
      if (circuitRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        circuitRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Circuit Board Pattern */}
      <div ref={circuitRef} className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="circuit-bg" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Circuit nodes */}
              <circle cx="20" cy="20" r="3" fill="#3b82f6" />
              <circle cx="80" cy="20" r="3" fill="#8b5cf6" />
              <circle cx="20" cy="80" r="3" fill="#10b981" />
              <circle cx="80" cy="80" r="3" fill="#f59e0b" />
              <circle cx="50" cy="50" r="4" fill="#ef4444" />
              
              {/* Circuit lines */}
              <line x1="20" y1="20" x2="80" y2="20" stroke="#3b82f6" strokeWidth="1" className="circuit-line" />
              <line x1="80" y1="20" x2="80" y2="80" stroke="#8b5cf6" strokeWidth="1" className="circuit-line" />
              <line x1="80" y1="80" x2="20" y2="80" stroke="#10b981" strokeWidth="1" className="circuit-line" />
              <line x1="20" y1="80" x2="20" y2="20" stroke="#f59e0b" strokeWidth="1" className="circuit-line" />
              <line x1="20" y1="20" x2="50" y2="50" stroke="#ef4444" strokeWidth="1" className="circuit-line" />
              <line x1="80" y1="20" x2="50" y2="50" stroke="#ef4444" strokeWidth="1" className="circuit-line" />
              <line x1="80" y1="80" x2="50" y2="50" stroke="#ef4444" strokeWidth="1" className="circuit-line" />
              <line x1="20" y1="80" x2="50" y2="50" stroke="#ef4444" strokeWidth="1" className="circuit-line" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-bg)" />
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            {i % 3 === 0 && (
              <div className="w-16 h-16 border-2 border-blue-500 rotate-45" />
            )}
            {i % 3 === 1 && (
              <div className="w-12 h-12 rounded-full border-2 border-purple-500" />
            )}
            {i % 3 === 2 && (
              <div className="w-14 h-14">
                <svg viewBox="0 0 24 24" className="w-full h-full stroke-green-500 fill-none stroke-2">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-purple-950/20" />
      
      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Background3D;