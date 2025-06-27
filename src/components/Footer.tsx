import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RF</span>
              </div>
              <span className="text-xl font-bold">RewardFlow</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering users to earn rewards and withdraw funds securely to verified bank accounts. 
              Your trusted platform for seamless financial transactions.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Powered by</span>
              <a 
                href="https://razorpay.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
              >
                <span>Razorpay</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="text-gray-300 hover:text-white transition-colors">Refund Policy</Link></li>
              <li>
                <a 
                  href="https://razorpay.com/terms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Razorpay Terms</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">support@rewardflow.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+91-123-456-7890</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123, Business Park, Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 RewardFlow. All rights reserved. | Compliant with RBI Guidelines & IT Act, 2000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;