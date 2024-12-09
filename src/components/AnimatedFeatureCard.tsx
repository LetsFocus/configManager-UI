import { motion } from 'framer-motion';
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

export default function AnimatedFeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="w-12 h-12 mb-4 text-primary-500 flex items-center justify-center text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}