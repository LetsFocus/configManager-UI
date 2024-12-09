import React from 'react';
import { Facebook, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-light mb-4">About ConfigManager</h3>
            <p className="text-sm leading-relaxed">
              ConfigManager is a modern, type-safe configuration management tool designed for developers. Built for performance, security, and flexibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-light mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/docs" 
                  className="hover:text-accent transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="/features" 
                  className="hover:text-accent transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/LetsFocus/configManager" 
                  className="hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-xl font-bold text-light mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">
              Follow us on social media and stay updated with the latest news and releases.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ConfigManager. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="/privacy" 
              className="text-sm hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-sm hover:text-accent transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
