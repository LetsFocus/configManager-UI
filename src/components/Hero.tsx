import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const pickupLineRef = useRef(null);

  useEffect(() => {
    // Simple animation for pickup lines (cycling effect)
    const pickupLines = [
      "Your perfect Go companion 🚀",
      "Type-safe and stress-free coding!",
      "Making configuration easy, one app at a time 🌟",
    ];
    let index = 0;

    const interval = setInterval(() => {
      if (pickupLineRef.current) {
        pickupLineRef.current.textContent = pickupLines[index];
        index = (index + 1) % pickupLines.length;
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-8">
          <Sparkles className="w-4 h-4 animate-spin-slow" />
          <span
            ref={pickupLineRef}
            className="text-sm font-medium transition-opacity duration-300"
          >
            Your perfect Go companion 🚀
          </span>
        </div>
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-light via-accent to-light bg-clip-text text-transparent animate-gradient"
        >
          config<span className="text-accent">Manager</span>
        </h1>
        <p
          ref={contentRef}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          A modern, type-safe configuration management solution for Go applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/docs"
            className="group flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-dark px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://github.com/LetsFocus/configManager"
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-light px-8 py-4 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
