import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Props {
  code: string;
}

export default function CodePreview({ code }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-blue-400 rounded-xl opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative">
        <pre className="bg-dark/80 backdrop-blur-sm rounded-xl p-6 font-mono text-sm leading-relaxed overflow-x-auto">
          <code className="text-light">{code}</code>
        </pre>
        <button 
          onClick={handleCopy}
          className="absolute top-4 right-4 px-3 py-1.5 text-xs bg-accent text-dark font-medium rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-accent-600"
        >
          {copied ? (
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3" /> Copied!
            </span>
          ) : (
            'Copy'
          )}
        </button>
      </div>
    </motion.div>
  );
}