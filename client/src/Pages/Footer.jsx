import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "CCTV System Solutions", link: "/contact" },
      { name: "Alarm System Solutions", link: "/contact" },
      { name: "Access Control Solutions", link: "/contact" },
      { name: "Video Intercom System", link: "/contact" },
      { name: "Network Solutions", link: "/contact" }
    ],
    company: [
      { name: "About Us", link: "/about" },
      { name: "Contact Us", link: "/contact" },
      { name: "Our Team", link: "/about" },
      { name: "Careers", link: "/contact" }
    ],
    support: [
      { name: "24/7 Support", link: "tel:+94706063010" },
      { name: "Installation Guide", link: "/contact" },
      { name: "Maintenance", link: "/contact" },
      { name: "Warranty", link: "/contact" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6 animate-fade-in-left">
              <img 
                src="/Home/logo.png" 
                alt="CCTV Security Logo" 
                className="h-10 w-auto animate-bounce-in"
              />
              <div>
                <h3 className="text-xl font-bold animate-fade-in-up">CCTV Security</h3>
                <p className="text-sm text-gray-400 animate-fade-in-up" style={{animationDelay: '0.1s'}}>Your Complete Security Partner</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At CCTV Security, we're committed to providing comprehensive electronic security system solutions that safeguard your home or business.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h4 className="text-lg font-semibold mb-6 text-white animate-fade-in-left">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index} className="animate-fade-in-left" style={{animationDelay: `${0.2 + index * 0.05}s`}}>
                  <Link 
                    to={service.link}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-lg font-semibold mb-6 text-white animate-fade-in-left">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <li key={index} className="animate-fade-in-left" style={{animationDelay: `${0.3 + index * 0.05}s`}}>
                  <Link 
                    to={item.link}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h4 className="text-lg font-semibold mb-6 text-white animate-fade-in-left">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((item, index) => (
                <li key={index} className="animate-fade-in-left" style={{animationDelay: `${0.4 + index * 0.05}s`}}>
                  <a 
                    href={item.link}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <h5 className="text-sm font-semibold text-white mb-3">Contact Info</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="animate-fade-in-left" style={{animationDelay: '0.6s'}}>📞 +94 70 606 3010</p>
                <p className="animate-fade-in-left" style={{animationDelay: '0.7s'}}>✉️ sales@cctvsecurity.lk</p>
                <p className="animate-fade-in-left" style={{animationDelay: '0.8s'}}>📍 Bandiyamulla, 397 Colombo Rd, Gampaha 11000, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 animate-fade-in-left">
              © {currentYear} CCTV Security. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 animate-fade-in-right">
              <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform duration-300">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform duration-300">
                Cookie Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

             {/* Back to Top Button */}
       <button 
         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
         className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 animate-bounce-in hover:scale-110 transition-transform duration-300"
         aria-label="Back to top"
       >
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
         </svg>
       </button>
    </footer>
  );
};

export default Footer;
