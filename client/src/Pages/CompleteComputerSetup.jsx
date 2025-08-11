import React from 'react';
import { Link } from 'react-router-dom';

const CompleteComputerSetup = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Complete Computer Setup
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Professional computer setup services including hardware installation, software configuration, and system optimization for both home and business use.
          </p>
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Link
              to="/contact-us"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4"
            >
              Get Started
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Computer Setup Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/complete computer setup/computersetup (1).jpg" 
                alt="Computer Setup Service 1" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hardware Installation</h3>
                <p className="text-gray-600">Professional installation of all computer components with proper cable management and optimization.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/complete computer setup/computersetup (2).jpg" 
                alt="Computer Setup Service 2" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Software Configuration</h3>
                <p className="text-gray-600">Complete software setup including operating system installation, drivers, and essential applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* On-Site IT Support Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">On-Site IT Support Services</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What is On-Site IT Support?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                On-site IT support is the ability of an organization or company to have physically-present IT technicians at the work or job site. There are times when remote support is just not enough. When PCs go down, when printers break, when network hardware malfunctions, an on-site IT support person can diagnose the problem and find the lowest-cost solution to the performance issue.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                IT technicians can also diagnose problems with software applications, provide basic user training in how to interact with the corporate computer systems, and generally troubleshoot user issues with the hardware or software at the business location. The company can maintain a central IT support office, and dispatch technicians to whichever office or building is reporting a problem. Small companies are often able to have on-site IT support by having a single IT person, or a tiny group of IT people, on staff.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* eSight Technology Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Can Do For You</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Computer Hardware On-Site Support</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>eSight Technology</strong> offers superior Technical Support & Computer Repair Services. If you are under a tight deadline, you cannot afford a technical mishap on your computer then our experienced staff provides computer service and repair, as well as technical support for customers across the country.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Immediate Response</h4>
                  <p className="text-gray-600">Fast on-site response when you need it most, especially during critical deadlines.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Expert Technicians</h4>
                  <p className="text-gray-600">Experienced staff with deep knowledge of computer hardware and software systems.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Nationwide Coverage</h4>
                  <p className="text-gray-600">Technical support services available for customers across the country.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Cost-Effective Solutions</h4>
                  <p className="text-gray-600">Find the lowest-cost solution to performance issues and technical problems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hardware Setup</h3>
              <p className="text-gray-600">Complete assembly and installation of desktop computers, laptops, and peripherals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Software Installation</h3>
              <p className="text-gray-600">Operating system installation, driver updates, and essential software configuration.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">System Optimization</h3>
              <p className="text-gray-600">Performance tuning, startup optimization, and system maintenance setup.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Setup</h3>
              <p className="text-gray-600">Antivirus installation, firewall configuration, and security best practices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Configuration</h3>
              <p className="text-gray-600">WiFi setup, network printer configuration, and internet connectivity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Migration</h3>
              <p className="text-gray-600">Safe transfer of data from old systems to new computers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Setup Service?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Setup</h3>
              <p className="text-gray-600">Quick and efficient computer setup to get you up and running in no time.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Technicians</h3>
              <p className="text-gray-600">Certified professionals with years of experience in computer setup.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Warranty</h3>
              <p className="text-gray-600">Full warranty on all setup work and ongoing support.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable</h3>
              <p className="text-gray-600">Competitive pricing for professional computer setup services.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Setup Process</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">Evaluate your needs and recommend the best setup approach.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Installation</h3>
              <p className="text-gray-600">Professional hardware assembly and software installation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Configuration</h3>
              <p className="text-gray-600">System optimization and security configuration.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Testing</h3>
              <p className="text-gray-600">Comprehensive testing to ensure everything works perfectly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Your Computer Set Up?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for professional computer setup services that will get you up and running quickly and efficiently.
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

export default CompleteComputerSetup;
