import React from 'react';
import { Link } from 'react-router-dom';

const DataRecovery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Data Recovery Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Professional data recovery services for all types of storage devices. Recover your important files from damaged, corrupted, or deleted storage media.
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
              Emergency Recovery
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Recovery Services</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>eSight Technology</strong> has been restoring lost data for clients for over a decade. Hard disk recovery, recovering deleted files, restoring lost data from failed RAID arrays are all routine services for our company.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We can work with all brands and model hard drives, including Seagate, Western Digital, Hitachi, Fujitsu, Toshiba, and many others. We are the hard drive recovery professionals you need.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We will exhaust every possible option in our effort to recover your lost information. We can tackle the most extreme cases of media failure. All of our work is backed by a 100% customer satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Data Recovery Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/Data recovery/Data-Recovery-Process.jpg" 
                alt="Data Recovery Service 1" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Recovery Process</h3>
                <p className="text-gray-600">Advanced data recovery techniques using specialized equipment and software for maximum success rates.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/Service/Data recovery/istockphoto-627196844-612x612.jpg" 
                alt="Data Recovery Service 2" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Storage Device Recovery</h3>
                <p className="text-gray-600">Recovery from hard drives, SSDs, USB drives, memory cards, and other storage media.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Data Recovery Services We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hard Drive Recovery</h3>
              <p className="text-gray-600">Recovery from failed, damaged, or corrupted hard disk drives and SSDs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Recovery</h3>
              <p className="text-gray-600">Data recovery from smartphones, tablets, and mobile storage devices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🗑️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deleted File Recovery</h3>
              <p className="text-gray-600">Recovery of accidentally deleted files and formatted storage devices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Corrupted Data</h3>
              <p className="text-gray-600">Recovery from corrupted files, databases, and damaged storage systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💿</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Optical Media</h3>
              <p className="text-gray-600">Recovery from CDs, DVDs, and Blu-ray discs with data extraction.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Recovery</h3>
              <p className="text-gray-600">Recovery of data from cloud storage services and online accounts.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Data Recovery Service?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art recovery equipment and software for maximum success rates.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Technicians</h3>
              <p className="text-gray-600">Certified data recovery specialists with years of experience.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure</h3>
              <p className="text-gray-600">Complete confidentiality and secure handling of your sensitive data.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-600">Quick turnaround times with emergency recovery options available.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Data Recovery Process</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">Free evaluation of your storage device and recovery possibilities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Recovery</h3>
              <p className="text-gray-600">Professional data recovery using specialized tools and techniques.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verification</h3>
              <p className="text-gray-600">Thorough verification of recovered data integrity and completeness.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Delivery</h3>
              <p className="text-gray-600">Secure delivery of recovered data on new storage media.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Lost Important Data?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for professional data recovery services. Our experts can recover your valuable files from almost any storage device.
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

export default DataRecovery;
