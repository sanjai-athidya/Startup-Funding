import React from 'react';
import { ArrowRight, BarChart, Users, Target, Rocket, Shield, Globe } from 'lucide-react';
import Navbar from './components/Navbar';
import TeamMember from './components/TeamMember';
import InvestmentTier from './components/InvestmentTier';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center min-h-screen" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative container mx-auto px-4 h-full flex items-center pt-16">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Revolutionizing the Future of Tech</h1>
            <p className="text-xl mb-8">Join us in building the next generation of AI-powered solutions. Invest in innovation that matters.</p>
            <div className="flex gap-4">
              <a href="#invest" className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition duration-200 flex items-center">
                Invest Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#pitch" className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition duration-200">
                View Pitch Deck
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 p-6 rounded-lg bg-gray-50">
              <BarChart className="w-12 h-12 text-indigo-600" />
              <div>
                <h3 className="text-3xl font-bold text-gray-900">$2.5M</h3>
                <p className="text-gray-600">Revenue</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-lg bg-gray-50">
              <Users className="w-12 h-12 text-indigo-600" />
              <div>
                <h3 className="text-3xl font-bold text-gray-900">50K+</h3>
                <p className="text-gray-600">Active Users</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-lg bg-gray-50">
              <Target className="w-12 h-12 text-indigo-600" />
              <div>
                <h3 className="text-3xl font-bold text-gray-900">95%</h3>
                <p className="text-gray-600">Growth Rate</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-lg bg-gray-50">
              <Globe className="w-12 h-12 text-indigo-600" />
              <div>
                <h3 className="text-3xl font-bold text-gray-900">20+</h3>
                <p className="text-gray-600">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Invest in Us?</h2>
            <p className="text-xl text-gray-600">
              We're building the future of AI-powered enterprise solutions, helping businesses 
              streamline operations and drive growth through innovative technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Rocket className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovative Technology</h3>
              <p className="text-gray-600">
                Our proprietary AI algorithms are revolutionizing how businesses handle data 
                processing and decision-making.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">
                Built with enterprise-grade security from the ground up, ensuring data 
                protection at every level.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Globe className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Scale</h3>
              <p className="text-gray-600">
                Already serving clients across 20+ countries with infrastructure built 
                for global scale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div id="team" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Sarah Chen"
              role="CEO & Founder"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              linkedin="https://linkedin.com"
            />
            <TeamMember
              name="David Rodriguez"
              role="CTO"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              linkedin="https://linkedin.com"
            />
            <TeamMember
              name="Emily Williams"
              role="Head of Product"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              linkedin="https://linkedin.com"
            />
          </div>
        </div>
      </div>

      {/* Investment Tiers */}
      <div id="invest" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Investment Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <InvestmentTier
              name="Seed"
              amount="$10,000"
              features={[
                "Basic investor updates",
                "Annual meeting invitation",
                "Early access to new features"
              ]}
            />
            <InvestmentTier
              name="Growth"
              amount="$50,000"
              features={[
                "Quarterly investor updates",
                "Board meeting attendance",
                "Priority support channel",
                "Strategic advisory role"
              ]}
              recommended
            />
            <InvestmentTier
              name="Enterprise"
              amount="$100,000"
              features={[
                "Monthly investor updates",
                "Board seat opportunity",
                "Direct access to founders",
                "Strategic partnership options",
                "Custom integration support"
              ]}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="h-6 w-6 text-indigo-400" />
                <span className="text-xl font-bold">StartupFund</span>
              </div>
              <p className="text-gray-400">Building the future of enterprise AI solutions.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white transition">About</a>
                <a href="#pitch" className="block text-gray-400 hover:text-white transition">Pitch Deck</a>
                <a href="#team" className="block text-gray-400 hover:text-white transition">Team</a>
                <a href="#invest" className="block text-gray-400 hover:text-white transition">Invest</a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="text-gray-400">contact@startupfund.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest news</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 StartupFund. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;