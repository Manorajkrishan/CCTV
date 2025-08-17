import React from 'react';
import { Link } from 'react-router-dom';

const Networking = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Networking Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Professional networking services for businesses and homes. From WiFi setup to complex network infrastructure, we ensure seamless connectivity.
          </p>
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4"
            >
              Get Quote
            </Link>
            <a
              href="tel:+94706063010"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Networking Solutions</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                In today's always-connected business environment, your IT networks are the backbone of your company. Your business IT networks must be capable of meeting current data demands whilst scalable enough to meet the demands of tomorrow.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Computer hardware Networking is a broad field encompassing many tools, techniques and procedures used to repair computer hardware, software or network/Internet problems.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">What We Can Do for You - Networking Solution:</h3>
                <p className="text-blue-700 leading-relaxed">
                  <strong>eSight Technology</strong> specialize in computer repair and computer networking support services. It offers networking services for home and business. Whether you need a simple network for your home to share printers and Internet access or a robust, fault-tolerant and secure setup for your business, we can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Networking Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/Networking/com.jpg" 
                alt="Networking Service 1" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Network Infrastructure</h3>
                <p className="text-gray-600">Complete network setup including routers, switches, and cabling for optimal performance.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/Networking/computing-uws-5.jpg" 
                alt="Networking Service 2" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Wireless Solutions</h3>
                <p className="text-gray-600">WiFi network design, installation, and optimization for maximum coverage and speed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Networking Services We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Design</h3>
              <p className="text-gray-600">Custom network architecture designed for your specific needs and requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">WiFi Installation</h3>
              <p className="text-gray-600">Professional WiFi setup with optimal coverage and security configuration.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cabling</h3>
              <p className="text-gray-600">Structured cabling for data, voice, and video networks with proper organization.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Security</h3>
              <p className="text-gray-600">Firewall setup, VPN configuration, and security monitoring systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Monitoring</h3>
              <p className="text-gray-600">24/7 network monitoring and proactive issue resolution.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Troubleshooting</h3>
              <p className="text-gray-600">Quick diagnosis and resolution of network connectivity issues.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Networking Service?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Setup</h3>
              <p className="text-gray-600">Quick network installation and configuration to minimize downtime.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Engineers</h3>
              <p className="text-gray-600">Certified networking professionals with extensive experience.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure</h3>
              <p className="text-gray-600">Enterprise-grade security measures to protect your network.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective</h3>
              <p className="text-gray-600">Competitive pricing for professional networking solutions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Networking Process</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">Evaluate your current network and identify improvement opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600">Create a custom network architecture tailored to your needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Installation</h3>
              <p className="text-gray-600">Professional installation of all network components and equipment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Testing</h3>
              <p className="text-gray-600">Comprehensive testing to ensure optimal network performance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Network?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for professional networking solutions that will keep your business connected and secure.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+94706063010"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Networking;
