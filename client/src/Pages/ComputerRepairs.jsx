import React from 'react';
import { Link } from 'react-router-dom';

const ComputerRepairs = () => {
  const repairServices = [
    {
      icon: "💻",
      title: "Hardware Repairs",
      description: "Repair and replacement of faulty components including motherboards, processors, RAM, and storage devices."
    },
    {
      icon: "🔧",
      title: "Software Issues",
      description: "Virus removal, operating system repair, driver updates, and software troubleshooting."
    },
    {
      icon: "🖥️",
      title: "Laptop Repairs",
      description: "Specialized laptop repair services including screen replacement, keyboard repair, and battery replacement."
    },
    {
      icon: "⚡",
      title: "Power Issues",
      description: "Diagnosis and repair of power supply problems, charging issues, and electrical faults."
    },
    {
      icon: "🌐",
      title: "Network Problems",
      description: "Internet connectivity issues, WiFi problems, and network configuration troubleshooting."
    },
    {
      icon: "🔄",
      title: "Data Recovery",
      description: "Recovery of lost or deleted data from various storage devices and systems."
    }
  ];

  const commonIssues = [
    "Computer won't turn on",
    "Blue screen errors",
    "Slow performance",
    "Virus and malware",
    "Hardware failures",
    "Software crashes",
    "Internet connectivity issues",
    "Noise from computer"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Computer Repairs
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Fast, reliable, and professional computer repair services. We fix all types of computer issues with guaranteed results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Get Free Diagnosis
                </Link>
                <a 
                  href="tel:+94706063010"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors text-center"
                >
                  Emergency Repair
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src="/Techeye/tech1.jpg" 
                alt="Computer Repair Services" 
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
              Our Repair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive repair solutions for all computer problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairServices.map((service, index) => (
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

      {/* Common Issues Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Common Computer Issues We Fix
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {commonIssues.map((issue, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in-left" style={{animationDelay: `${0.1 * index}s`}}>
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span className="text-gray-700">{issue}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src="/Techeye/tech2.jpg" 
                alt="Computer Troubleshooting" 
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
              Our Repair Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and efficient repair process to get your computer back to working condition
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Diagnosis</h3>
              <p className="text-gray-600">Free initial diagnosis to identify the problem</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quote</h3>
              <p className="text-gray-600">Transparent pricing with no hidden costs</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Repair</h3>
              <p className="text-gray-600">Professional repair by certified technicians</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600">Comprehensive testing to ensure quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Repair Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional, reliable, and cost-effective computer repair solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-600">Quick turnaround time with same-day service for urgent repairs</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable</h3>
              <p className="text-gray-600">Competitive pricing with no hidden costs or surprise fees</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Warranty</h3>
              <p className="text-gray-600">90-day warranty on all repairs and replacement parts</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-up">
            Computer Not Working?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Don't wait! Contact us today for a free diagnosis and quote. Our expert technicians are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Diagnosis
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

export default ComputerRepairs;
