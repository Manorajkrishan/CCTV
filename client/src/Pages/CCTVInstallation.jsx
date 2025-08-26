import React from 'react';
import { Link } from 'react-router-dom';

const CCTVInstallation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CCTV Installation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional CCTV installation services for homes and businesses. High-quality surveillance systems with remote monitoring capabilities.
          </p>
          <div>
            <Link
              to="/contact-us"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4"
            >
              Get Quote
            </Link>
            <a
              href="tel:+1234567890"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our CCTV Installation Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/CCTV install/1745060392756.jpg" 
                alt="CCTV Installation Service 1" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Installation</h3>
                <p className="text-gray-600">Expert installation of CCTV cameras and monitoring systems for optimal coverage.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/CCTV install/Depositphotos_282950500_S.jpg" 
                alt="CCTV Installation Service 2" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Surveillance Systems</h3>
                <p className="text-gray-600">Complete surveillance solutions with high-definition cameras and recording systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* eSight Technology Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">CCTV Installation Services</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">eSight Technology & Solution</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>eSight Technology & Solution</strong> is a specialist provider of high end CCTV camera system for home and other premises security installations. We offer a range of products of brand new CCTV security surveillance system in the industry.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are able to provide our security services and solutions from a small house to a large organization. Our expertise covers all types of premises, ensuring comprehensive security coverage tailored to your specific needs.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">High-End Systems</h4>
                  <p className="text-blue-700">Premium CCTV camera systems with cutting-edge technology for maximum security and reliability.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Scalable Solutions</h4>
                  <p className="text-green-700">From small residential installations to large enterprise security systems, we scale to your needs.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">Industry Expertise</h4>
                  <p className="text-purple-700">Specialized knowledge in the latest CCTV security surveillance technology and industry best practices.</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">Comprehensive Coverage</h4>
                  <p className="text-orange-700">Complete security solutions including installation, configuration, and ongoing support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">CCTV Services We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Camera Installation</h3>
              <p className="text-gray-600">Professional installation of indoor and outdoor surveillance cameras.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring Systems</h3>
              <p className="text-gray-600">Central monitoring stations with real-time video feeds and recording.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Remote Access</h3>
              <p className="text-gray-600">Mobile app access to view cameras from anywhere in the world.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Recording Solutions</h3>
              <p className="text-gray-600">DVR and NVR systems with extended storage and backup options.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Integration</h3>
              <p className="text-gray-600">Integration with alarm systems and access control for comprehensive security.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance</h3>
              <p className="text-gray-600">Regular maintenance and support to ensure optimal system performance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our CCTV Installation?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Installers</h3>
              <p className="text-gray-600">Certified technicians with years of CCTV installation experience.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Systems</h3>
              <p className="text-gray-600">Advanced encryption and security features to protect your footage.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Setup</h3>
              <p className="text-gray-600">Fast installation with minimal disruption to your daily operations.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable</h3>
              <p className="text-gray-600">Competitive pricing for professional CCTV installation services.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Installation Process</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Site Survey</h3>
              <p className="text-gray-600">Comprehensive assessment of your property and security requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">System Design</h3>
              <p className="text-gray-600">Custom camera placement and system configuration for optimal coverage.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Installation</h3>
              <p className="text-gray-600">Professional installation of cameras, wiring, and monitoring equipment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Testing</h3>
              <p className="text-gray-600">Comprehensive testing and training to ensure everything works perfectly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for professional CCTV installation services that will give you peace of mind and protect your property.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact-us"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+1234567890"
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

export default CCTVInstallation;
