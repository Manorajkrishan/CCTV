import React from 'react';
import { Link } from 'react-router-dom';

const CCTVInstallation = () => {
  const cctvServices = [
    {
      icon: "📹",
      title: "IP Camera Systems",
      description: "High-definition IP cameras with remote viewing capabilities and advanced features for modern security needs."
    },
    {
      icon: "🔌",
      title: "Analog Systems",
      description: "Traditional analog CCTV systems with reliable performance and cost-effective solutions for basic security."
    },
    {
      icon: "📡",
      title: "Wireless Solutions",
      description: "Wireless CCTV systems for areas where cable installation is challenging or not desired."
    },
    {
      icon: "🌙",
      title: "Night Vision",
      description: "Advanced night vision cameras with infrared technology for 24/7 surveillance capabilities."
    },
    {
      icon: "📱",
      title: "Mobile Viewing",
      description: "Remote monitoring through mobile apps and web interfaces for real-time security access."
    },
    {
      icon: "💾",
      title: "Recording Systems",
      description: "DVR and NVR systems with extended storage and intelligent recording features."
    }
  ];

  const cameraTypes = [
    "Dome Cameras",
    "Bullet Cameras",
    "PTZ Cameras",
    "Hidden Cameras",
    "Thermal Cameras",
    "Panoramic Cameras"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                CCTV Installation
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Professional CCTV camera installation services with modern IP and wireless solutions for comprehensive security coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Get Free Quote
                </Link>
                <a 
                  href="tel:+94706063010"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src="/Oursrvices/CCTVH2.jpg" 
                alt="CCTV Installation" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our CCTV Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive CCTV solutions for all your security needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cctvServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camera Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Types of Cameras We Install
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {cameraTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in-left" style={{animationDelay: `${0.1 * index}s`}}>
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src="/Techeye/tech1.jpg" 
                alt="CCTV Camera Types" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional and systematic approach to CCTV installation
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Site Survey</h3>
              <p className="text-gray-600">Comprehensive site assessment and security analysis</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">System Design</h3>
              <p className="text-gray-600">Custom system design based on your requirements</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">Professional installation with minimal disruption</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600">Comprehensive testing and system handover</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced CCTV Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern security features for comprehensive protection
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Motion Detection</h3>
              <p className="text-gray-600">Smart motion detection with alert notifications</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High Resolution</h3>
              <p className="text-gray-600">4K and HD cameras for crystal clear footage</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Storage</h3>
              <p className="text-gray-600">Secure cloud storage for your video recordings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-up">
            Secure Your Property Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Contact us today for a free CCTV consultation and quote. Our experts will design the perfect security solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <a 
              href="tel:+94706063010"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Now: +94 70 606 3010
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CCTVInstallation;
