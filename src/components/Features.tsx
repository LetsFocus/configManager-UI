import React from 'react';
import { Code2, Zap, Shield, Workflow, Box, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Type-Safe',
    description: 'Full type safety with Go struct tags and automatic validation'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Optimized for performance with smart caching'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure',
    description: 'Built-in security features and encryption support'
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: 'Multiple Sources',
    description: 'Load from .env, JSON, YAML, and environment variables'
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: 'Nested Configs',
    description: 'Support for complex nested configuration structures'
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Validation',
    description: 'Built-in validation with custom rules support'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function Features() {
  return (
    <section className="py-24 relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-accent/5 to-dark -z-10"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center text-4xl md:text-5xl font-extrabold mb-16 text-light"
        >
          Why Choose Us?
        </motion.h2>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group p-8 rounded-2xl bg-gradient-to-b from-dark/40 to-dark/80 border border-white/10 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent to-blue-500 text-dark flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
