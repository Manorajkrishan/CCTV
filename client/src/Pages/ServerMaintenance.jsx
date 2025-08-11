import React from 'react';
import { Link } from 'react-router-dom';

const ServerMaintenance = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Server Maintenance
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Professional server maintenance services to ensure your IT infrastructure runs smoothly and efficiently. Prevent downtime with proactive maintenance.
          </p>
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Server Maintenance Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/Server/server_129.jpg" 
                alt="Server Maintenance Service 1" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Server Infrastructure</h3>
                <p className="text-gray-600">Comprehensive maintenance of server hardware, operating systems, and applications.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/Server/ai-generated-8943034_1280.jpg" 
                alt="Server Maintenance Service 2" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Monitoring</h3>
                <p className="text-gray-600">Advanced monitoring and predictive maintenance using AI technology for optimal performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Server Maintenance Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Server Maintenance Services</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Server Maintenance is Critical</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If one or more of your servers crash, it could send your company into a frantic pursuit to restore your operating systems and IT framework. In the meantime, you can lose valuable time and even money as your employees abandon their daily work to fix your server.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                IT server management from <strong>Worldwide Services</strong> can ensure the health of your systems, applications and IT infrastructure while saving you from costly downtime. Count on us for all your server maintenance needs.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">The Cost of Server Failure</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• Lost productivity and revenue</li>
                    <li>• Employee time diverted to IT issues</li>
                    <li>• Potential data loss and security risks</li>
                    <li>• Customer service disruptions</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Benefits of Proactive Maintenance</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Prevent unexpected server crashes</li>
                    <li>• Maintain optimal performance</li>
                    <li>• Reduce costly downtime</li>
                    <li>• Protect your business operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Maintenance Services We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preventive Maintenance</h3>
              <p className="text-gray-600">Regular system checks and updates to prevent issues before they occur.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Monitoring</h3>
              <p className="text-gray-600">24/7 monitoring of server performance, uptime, and resource utilization.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Updates</h3>
              <p className="text-gray-600">Regular security patches and updates to protect against vulnerabilities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Backup Management</h3>
              <p className="text-gray-600">Automated backup systems and disaster recovery planning.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Optimization</h3>
              <p className="text-gray-600">Tuning and optimization for maximum server efficiency and speed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Support</h3>
              <p className="text-gray-600">24/7 emergency support for critical server issues and downtime.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Server Maintenance?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">99.9% Uptime</h3>
              <p className="text-gray-600">Proactive maintenance ensures maximum server availability and reliability.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Engineers</h3>
              <p className="text-gray-600">Certified server administrators with years of experience.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure</h3>
              <p className="text-gray-600">Regular security updates and vulnerability assessments.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective</h3>
              <p className="text-gray-600">Preventive maintenance saves money on costly repairs and downtime.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Maintenance Process</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">Comprehensive evaluation of your server infrastructure and needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600">Customized maintenance schedule and procedures for your environment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">Regular maintenance tasks and proactive issue resolution.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring</h3>
              <p className="text-gray-600">Continuous monitoring and reporting on server health and performance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Servers?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for professional server maintenance services that will keep your infrastructure running smoothly.
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

export default ServerMaintenance;
