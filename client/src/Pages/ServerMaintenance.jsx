import React from 'react';
import { Link } from 'react-router-dom';

const ServerMaintenance = () => {
  const maintenanceServices = [
    {
      icon: "🖥️",
      title: "Server Monitoring",
      description: "24/7 server monitoring to detect and prevent issues before they impact your business operations."
    },
    {
      icon: "🔧",
      title: "Performance Optimization",
      description: "Regular optimization of server performance, memory usage, and processing efficiency."
    },
    {
      icon: "🛡️",
      title: "Security Updates",
      description: "Timely installation of security patches and updates to protect against vulnerabilities."
    },
    {
      icon: "💾",
      title: "Backup Management",
      description: "Automated backup systems and regular testing to ensure data recovery capabilities."
    },
    {
      icon: "📊",
      title: "Health Checks",
      description: "Regular health assessments and preventive maintenance to avoid downtime."
    },
    {
      icon: "🚨",
      title: "Emergency Support",
      description: "24/7 emergency support for critical server issues and rapid response times."
    }
  ];

  const serverTypes = [
    "Web Servers",
    "Database Servers",
    "File Servers",
    "Mail Servers",
    "Application Servers",
    "Cloud Servers"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Server Maintenance
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Professional server maintenance and management services ensuring optimal performance and security for your business infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Get Maintenance Plan
                </Link>
                <a 
                  href="tel:+94706063010"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors text-center"
                >
                  Emergency Support
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src="/Techeye/tech2.jpg" 
                alt="Server Maintenance" 
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
              Our Maintenance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive server maintenance to keep your infrastructure running smoothly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceServices.map((service, index) => (
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

      {/* Server Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Types of Servers We Maintain
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {serverTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in-left" style={{animationDelay: `${0.1 * index}s`}}>
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                alt="Server Infrastructure" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Maintenance Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular maintenance schedule to ensure optimal server performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">Daily</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-gray-600">24/7 system monitoring and alert management</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">Weekly</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Health Checks</h3>
              <p className="text-gray-600">Performance analysis and system health assessment</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">Monthly</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Updates</h3>
              <p className="text-gray-600">Security patches and system updates</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">Quarterly</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep Clean</h3>
              <p className="text-gray-600">Comprehensive maintenance and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Regular Maintenance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why proactive server maintenance is crucial for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prevent Downtime</h3>
              <p className="text-gray-600">Identify and fix issues before they cause system failures</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Security</h3>
              <p className="text-gray-600">Keep your servers protected with latest security updates</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Better Performance</h3>
              <p className="text-gray-600">Optimized servers for maximum efficiency and speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-up">
            Protect Your Server Infrastructure
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Contact us today for a comprehensive server maintenance plan. Our experts will ensure your servers run at peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Maintenance Plan
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

export default ServerMaintenance;
