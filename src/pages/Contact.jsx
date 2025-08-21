import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Calendar,
  Clock,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import AOS from 'aos';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex@electroforge.com',
      href: 'mailto:alex@electroforge.com',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
      color: 'text-purple-400'
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM PST',
      href: '#',
      color: 'text-orange-400'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="contact-circuit" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
              {/* Communication symbols */}
              <circle cx="40" cy="40" r="15" fill="none" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="40" cy="40" r="8" fill="#3b82f6" opacity="0.3" />
              
              <circle cx="120" cy="40" r="15" fill="none" stroke="#8b5cf6" strokeWidth="2" />
              <circle cx="120" cy="40" r="8" fill="#8b5cf6" opacity="0.3" />
              
              <circle cx="40" cy="120" r="15" fill="none" stroke="#10b981" strokeWidth="2" />
              <circle cx="40" cy="120" r="8" fill="#10b981" opacity="0.3" />
              
              <circle cx="120" cy="120" r="15" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <circle cx="120" cy="120" r="8" fill="#f59e0b" opacity="0.3" />
              
              {/* Signal waves */}
              <path d="M55 40 Q80 30 105 40" stroke="#3b82f6" strokeWidth="1" fill="none" className="circuit-line" />
              <path d="M55 45 Q80 35 105 45" stroke="#3b82f6" strokeWidth="1" fill="none" className="circuit-line" />
              <path d="M40 55 Q30 80 40 105" stroke="#8b5cf6" strokeWidth="1" fill="none" className="circuit-line" />
              <path d="M45 55 Q35 80 45 105" stroke="#8b5cf6" strokeWidth="1" fill="none" className="circuit-line" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-6"
            data-aos="fade-up"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ready to discuss your next electrical engineering project? Let's connect and explore innovative solutions together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Details */}
            <motion.div
              className="glass rounded-3xl p-8"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center space-x-4 group cursor-pointer"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 glass rounded-xl group-hover:bg-slate-700/50 transition-all duration-300">
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="glass rounded-3xl p-8"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`p-4 glass rounded-xl text-slate-400 ${social.color} transition-all duration-300 group`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
              <p className="text-slate-400 text-sm mt-4">
                Follow me for updates on latest projects and industry insights.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="glass rounded-3xl p-8"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Clock className="w-5 h-5 text-green-400 mr-2" />
                Response Time
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Email Response</span>
                  <span className="text-green-400 font-semibold">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Project Discussion</span>
                  <span className="text-blue-400 font-semibold">&lt; 48 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Consultation Call</span>
                  <span className="text-purple-400 font-semibold">Same week</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              className="glass rounded-3xl p-8"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Send className="w-6 h-6 text-blue-400 mr-3" />
                Send a Message
              </h3>

              {/* Form Status */}
              {formStatus.message && (
                <motion.div
                  className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
                    formStatus.type === 'success' 
                      ? 'bg-green-500/20 border border-green-500/30' 
                      : 'bg-red-500/20 border border-red-500/30'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  )}
                  <p className={`${formStatus.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>
                    {formStatus.message}
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative group">
                    <User className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 transition-all duration-300"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 transition-all duration-300"
                  />
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or ask any questions..."
                    rows="6"
                    required
                    className="w-full p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 ${
                    isSubmitting
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'btn-primary hover:scale-105'
                  }`}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-700/50 text-center">
                <p className="text-slate-400 text-sm">
                  For urgent matters, feel free to call me directly at{' '}
                  <a href="tel:+15551234567" className="text-blue-400 hover:text-blue-300 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;