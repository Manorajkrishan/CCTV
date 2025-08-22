import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const services = [
    { name: "Complete Computer Setup", link: "/complete-computer-setup" },
    { name: "Computer Repairs", link: "/computer-repairs" },
    { name: "Networking", link: "/networking" },
    { name: "Server Maintenance", link: "/server-maintenance" },
    { name: "CCTV Installation", link: "/cctv-installation" },
    { name: "IP PBX", link: "/ip-pbx" },
    { name: "Data Recovery", link: "/data-recovery" },
    { name: "Maintenance Contract-AMC", link: "/maintenance-contract-amc" }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center animate-fade-in-left">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/Home/logo.png" 
                alt="CCTV Security Logo" 
                className="h-12 w-auto animate-bounce-in"
              />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-gray-800 animate-fade-in-up">CCTV Security</h1>
                <p className="text-sm text-gray-600 animate-fade-in-up" style={{animationDelay: '0.1s'}}>Your Complete Security Partner</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 animate-fade-in-down">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              } animate-fade-in-up`}
              style={{animationDelay: '0.1s'}}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  isActive('/all-services') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                } animate-fade-in-up`}
                style={{animationDelay: '0.2s'}}
              >
                All Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-fade-in-down">
                  {services.map((service, index) => (
                    <Link
                      key={service.name}
                      to={service.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      style={{animationDelay: `${0.1 * index}s`}}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              } animate-fade-in-up`}
              style={{animationDelay: '0.3s'}}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              } animate-fade-in-up`}
              style={{animationDelay: '0.4s'}}
            >
              Contact Us
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6 animate-fade-in-right">
            <div className="text-right animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <p className="text-sm text-gray-600">Call us today</p>
              <p className="text-lg font-semibold text-blue-600">+94 703978967/68</p>
              
            </div>
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors animate-bounce-in"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden animate-fade-in-right">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 animate-pulse-slow"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in-top">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                } animate-fade-in-left`}
                style={{animationDelay: '0.1s'}}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 flex items-center justify-between"
                >
                  All Services
                  <svg className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    {services.map((service, index) => (
                      <Link
                        key={service.name}
                        to={service.link}
                        className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                to="/about" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/about') ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                } animate-fade-in-left`}
                style={{animationDelay: '0.3s'}}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/contact') ? 'text-blue-600 bg-blue-100' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                } animate-fade-in-left`}
                style={{animationDelay: '0.4s'}}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="pt-4 border-t border-gray-200 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <p className="px-3 py-2 text-sm text-gray-600">Call us: +94 70 606 3010</p>
                <Link 
                  to="/contact" 
                  className="block mx-3 mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors animate-bounce-in"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
