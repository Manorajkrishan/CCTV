import React from 'react';
import { Link } from 'react-router-dom';

const Networking = () => {
  const networkServices = [
    {
      icon: "🌐",
      title: "LAN Setup",
      description: "Complete Local Area Network setup for offices and businesses with proper cable management and organization."
    },
    {
      icon: "📶",
      title: "WiFi Installation",
      description: "High-speed WiFi installation with optimal coverage and security for homes and commercial spaces."
    },
    {
      icon: "🛡️",
      title: "Network Security",
      description: "Advanced network security solutions including firewalls, VPN setup, and intrusion detection systems."
    },
    {
      icon: "🔌",
      title: "Cable Management",
      description: "Professional cable installation and management for clean and organized network infrastructure."
    },
    {
      icon: "📡",
      title: "Wireless Solutions",
      description: "Wireless network solutions for areas where wired connections are not feasible or desired."
    },
    {
      icon: "⚡",
      title: "Network Optimization",
      description: "Performance optimization and bandwidth management for maximum network efficiency."
    }
  ];

  const networkTypes = [
    "Home Networks",
    "Small Office Networks",
    "Enterprise Networks",
    "Industrial Networks",
    "Wireless Networks",
    "VPN Networks"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Networking Solutions
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Professional networking services for homes and businesses. From LAN setup to WiFi installation, we ensure seamless connectivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Get Free Consultation
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
                src="/Oursrvices/systemsolution.jpg" 
                alt="Networking Solutions" 
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
              Our Networking Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive networking solutions for all your connectivity needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkServices.map((service, index) => (
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

      {/* Network Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Types of Networks We Handle
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {networkTypes.map((type, index) => (
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
                src="/Techeye/tech2.jpg" 
                alt="Network Infrastructure" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Networking Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to building reliable and secure networks
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">Site survey and requirements analysis</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Network architecture and planning</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">Professional installation and setup</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600">Comprehensive testing and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Professional Networking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why choose our networking services for your connectivity needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High Performance</h3>
              <p className="text-gray-600">Optimized networks for maximum speed and reliability</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure</h3>
              <p className="text-gray-600">Advanced security measures to protect your network</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable</h3>
              <p className="text-gray-600">Networks that grow with your business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-up">
            Need a Reliable Network?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Contact us today for a free network consultation and quote. Our experts will design the perfect solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
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

export default Networking;
