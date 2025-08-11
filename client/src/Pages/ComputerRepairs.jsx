import React from 'react';
import { Link } from 'react-router-dom';

const ComputerRepairs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Computer Repairs
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Expert computer repair services for all types of hardware and software issues. Fast, reliable, and cost-effective solutions.
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
              Emergency Repair
            </a>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Computer Repair Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/computer repair/computer repairs  (1).jpg" 
                alt="Computer Repair Service 1" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hardware Repairs</h3>
                <p className="text-gray-600">Expert repair of motherboards, power supplies, hard drives, and other hardware components.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/computer repair/computer repairs  (2).jpg" 
                alt="Computer Repair Service 2" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Software Troubleshooting</h3>
                <p className="text-gray-600">Diagnosis and repair of software issues, virus removal, and system optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Computer Repair Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Computer Repair Services</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Computer Repairs Are Essential</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These days, there are very few households where there is no laptop and desktop that might require occasional trouble-shooting for a number of issues. This device is handy and light weight for carrying from one place to another. You can easily carry a sizable amount of data and information to the office on a laptop.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                However, at the possibility of even the tiniest of issues there can be potential threat to the security of all important details stored in the device. Stopped functionality requires the laptop and desktop repairs for keeping the device operational.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The trickiest task about repairing a laptop is probably the situation in which the problem is related to its screen. Be it the damage caused due to dropping of the laptop accidentally on floor or may be some internal problem leading to complete or partial blackout of the laptop screen, the owner of the device needs to spend considerable amount of time fixing it.
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Laptop and Desktop Repairing</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>eSight Technology</strong> focus on offering seamless solution to all problems related to laptops and desktops and troubles occurred in different parts of these devices. The company takes care of repair services for different kinds of computer devices owned individually at homes or at small business organizations.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Comprehensive Solutions</h4>
                  <p className="text-gray-600">Seamless solutions for all laptop and desktop problems across different device components.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Home & Business Support</h4>
                  <p className="text-gray-600">Repair services for individual home users and small business organizations.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Screen Repair Specialists</h4>
                  <p className="text-gray-600">Expert handling of laptop screen damage and display issues.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Security Protection</h4>
                  <p className="text-gray-600">Protect your important data and device security during repairs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Repair Services We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hardware Repairs</h3>
              <p className="text-gray-600">Motherboard, CPU, RAM, power supply, and peripheral device repairs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Laptop Repairs</h3>
              <p className="text-gray-600">Screen replacement, keyboard repair, battery replacement, and more.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🦠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Virus Removal</h3>
              <p className="text-gray-600">Complete malware and virus removal with system protection setup.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Issues</h3>
              <p className="text-gray-600">Slow computer diagnosis and optimization for better speed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Software Problems</h3>
              <p className="text-gray-600">Operating system issues, driver problems, and application errors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Recovery</h3>
              <p className="text-gray-600">Recovery of lost or deleted files from damaged storage devices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Repair Service?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-600">Quick diagnosis and repair to get your computer back working ASAP.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Technicians</h3>
              <p className="text-gray-600">Certified professionals with years of repair experience.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Warranty</h3>
              <p className="text-gray-600">All repairs come with a comprehensive warranty.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable</h3>
              <p className="text-gray-600">Competitive pricing with no hidden fees.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Repair Process</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diagnosis</h3>
              <p className="text-gray-600">Thorough examination to identify the root cause of the problem.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quote</h3>
              <p className="text-gray-600">Detailed cost breakdown with no surprise charges.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Repair</h3>
              <p className="text-gray-600">Professional repair using quality parts and tools.</p>
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
          <h2 className="text-3xl font-bold mb-6">Need Computer Repair?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for fast, reliable computer repair services. Our expert technicians are ready to help!
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

export default ComputerRepairs;
