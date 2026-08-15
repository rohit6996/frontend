import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-nagpur-blue-primary p-2 rounded-lg inline-block">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg text-nagpur-navy">Eco Move Nagpur</span>
            </Link>
            <p className="text-nagpur-text-secondary text-sm leading-relaxed">
              Smart, connected and sustainable mobility for Nagpur.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-nagpur-navy mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#features" className="text-nagpur-text-secondary hover:text-nagpur-blue-primary text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="text-nagpur-text-secondary hover:text-nagpur-blue-primary text-sm transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/#sustainability" className="text-nagpur-text-secondary hover:text-nagpur-blue-primary text-sm transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-nagpur-navy mb-4">Account</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/login" className="text-nagpur-text-secondary hover:text-nagpur-blue-primary text-sm transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-nagpur-text-secondary hover:text-nagpur-blue-primary text-sm transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-nagpur-navy mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/app" className="text-nagpur-blue-primary font-medium hover:text-blue-700 text-sm transition-colors">
                  Plan Your Journey →
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Eco Move Nagpur
          </p>
          <div className="flex gap-6">
            <span className="text-gray-400 text-sm hover:text-gray-600 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-gray-400 text-sm hover:text-gray-600 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
