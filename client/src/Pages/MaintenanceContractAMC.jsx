import React from 'react';
import { Link } from 'react-router-dom';

const MaintenanceContractAMC = () => {
  const amcServices = [
    {
      icon: "🔧",
      title: "Preventive Maintenance",
      description: "Regular scheduled maintenance to prevent system failures and ensure optimal performance."
    },
    {
      icon: "📊",
      title: "System Monitoring",
      description: "24/7 monitoring of your systems with proactive alert management and issue detection."
    },
    {
      icon: "🛡️",
      title: "Security Updates",
      description: "Regular security patches and updates to protect your systems from vulnerabilities."
    },
    {
      icon: "📞",
      title: "Priority Support",
      description: "Dedicated support line with faster response times for AMC contract holders."
    },
    {
      icon: "💾",
      title: "Backup Management",
      description: "Regular backup verification and testing to ensure data recovery capabilities."
    },
    {
      icon: "📋",
      title: "Performance Reports",
      description: "Monthly performance reports and recommendations for system optimization."
    }
  ];

  const contractTypes = [
    "Basic AMC",
    "Standard AMC",
    "Premium AMC",
    "Enterprise AMC",
    "Custom AMC"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Maintenance Contract-AMC
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Annual Maintenance Contracts (AMC) for comprehensive system maintenance, regular checkups, and priority support services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Get AMC Quote
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
                src="/Techeye/tech2.jpg" 
                alt="Maintenance Contract AMC" 
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
              AMC Services Included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance services covered under your annual contract
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amcServices.map((service, index) => (
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

      {/* Contract Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                AMC Contract Types
              </h2>
              <div className="space-y-4">
                {contractTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in-left" style={{animationDelay: `${0.1 * index}s`}}>
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">{type}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                Choose the plan that best fits your business needs and budget requirements.
              </p>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src="/Techeye/tech1.jpg" 
                alt="AMC Contract Types" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of AMC Contracts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why annual maintenance contracts are essential for business continuity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Effective</h3>
              <p className="text-gray-600">Predictable costs and reduced emergency repair expenses</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prevent Downtime</h3>
              <p className="text-gray-600">Proactive maintenance prevents costly system failures</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Peace of Mind</h3>
              <p className="text-gray-600">24/7 support and guaranteed response times</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Maintenance Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular maintenance schedule to ensure optimal system performance
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maintenance</h3>
              <p className="text-gray-600">Scheduled maintenance and system optimization</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">Quarterly</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep Review</h3>
              <p className="text-gray-600">Comprehensive system review and planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-up">
            Protect Your Business Systems
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Contact us today for a comprehensive AMC quote. Our maintenance contracts ensure your systems run smoothly year-round.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get AMC Quote
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

export default MaintenanceContractAMC;
