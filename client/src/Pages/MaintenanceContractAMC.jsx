import React from 'react';
import { Link } from 'react-router-dom';

const MaintenanceContractAMC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Maintenance Contract - AMC
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Annual Maintenance Contracts (AMC) for comprehensive IT infrastructure support. Proactive maintenance, 24/7 monitoring, and guaranteed response times.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintenance Contract - AMC</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your business has turned out to be profoundly reliant on PCs and you fear the thought about your PC building up an issue at the wrong minute, when you require it the most.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Why don't you get an annual maintenance contract with us and relax?
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are expert in giving nearby PC & server repair administrations and system support for all measured business, on location PC & server and system benefits that are helpful and solid, why bother with dismantling your system from your home and convey it to a repair shop each time when it has the issues?
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Simply Log the protest for on location PC administration whether you need to enhance your PC's execution with a redesign or introduce a remote system or have any kind of equipment or programming issues.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our AMC Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/contract/sign-a-contract-1200x557-1.jpeg" 
                alt="AMC Contract Service 1" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Contracts</h3>
                <p className="text-gray-600">Comprehensive maintenance contracts with clear terms, conditions, and service level agreements.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/contract/6298414ba89dd1d032d8dd1f_AdobeStock_279617660 3 copy.png" 
                alt="AMC Contract Service 2" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Partnership</h3>
                <p className="text-gray-600">Long-term partnership approach with dedicated support teams and personalized service plans.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">AMC Services We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preventive Maintenance</h3>
              <p className="text-gray-600">Regular scheduled maintenance to prevent system failures and optimize performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Monitoring</h3>
              <p className="text-gray-600">Continuous monitoring of your IT infrastructure with proactive issue detection.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Support</h3>
              <p className="text-gray-600">Round-the-clock emergency support with guaranteed response times.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Updates</h3>
              <p className="text-gray-600">Regular security patches and updates to protect your systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Optimization</h3>
              <p className="text-gray-600">Continuous optimization to maintain peak system performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Reports</h3>
              <p className="text-gray-600">Detailed monthly reports on system health and maintenance activities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our AMC Service?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective</h3>
              <p className="text-gray-600">Predictable costs with no surprise charges or hidden fees.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Team</h3>
              <p className="text-gray-600">Assigned support team familiar with your infrastructure.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Guaranteed SLA</h3>
              <p className="text-gray-600">Service level agreements with guaranteed response times.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proactive Support</h3>
              <p className="text-gray-600">Preventive maintenance to avoid costly downtime.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our AMC Process</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">Comprehensive evaluation of your IT infrastructure and maintenance needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contract Design</h3>
              <p className="text-gray-600">Custom AMC contract tailored to your specific requirements and budget.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">Setup of monitoring systems and implementation of maintenance schedules.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">Continuous maintenance, monitoring, and support throughout the contract period.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Reliable IT Maintenance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for comprehensive AMC contracts that will keep your IT infrastructure running smoothly and efficiently.
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

export default MaintenanceContractAMC;
