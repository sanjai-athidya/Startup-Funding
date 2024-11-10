import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Rocket className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">StartupFund</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
            <a href="#pitch" className="text-gray-700 hover:text-indigo-600 transition">Pitch Deck</a>
            <a href="#team" className="text-gray-700 hover:text-indigo-600 transition">Team</a>
            <a href="#invest" className="text-gray-700 hover:text-indigo-600 transition">Invest</a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#pitch" 
                className="text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Pitch Deck
              </a>
              <a 
                href="#team" 
                className="text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Team
              </a>
              <a 
                href="#invest" 
                className="text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Invest
              </a>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}