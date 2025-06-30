import React from 'react';
import { Crown, Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Crown className="w-6 h-6 text-lebron-gold" />
            <div>
              <span className="text-white font-bold text-lg">Lebronify</span>
              <p className="text-gray-400 text-sm">Made with respect to the GOAT</p>
            </div>
          </div>

          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="#"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <div className="flex items-center space-x-4 mb-2">
              <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded">Firebase</span>
              <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">React</span>
            </div>
            <p className="text-gray-400 text-sm">© 2025 Lebronify, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;