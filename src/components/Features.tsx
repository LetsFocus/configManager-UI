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
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Features() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-accent/5 to-dark"></div>
      <div className="max-w-6xl mx-auto px-4 relative">
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
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-light">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}