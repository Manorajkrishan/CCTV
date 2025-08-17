import React from 'react';
import { Link } from 'react-router-dom';

const AllServices = () => {
  const allServices = [
    {
      id: 1,
      title: "Complete Computer Setup",
      description: "Professional computer setup services including hardware installation, software configuration, and system optimization for both home and business use.",
      image: "/Service/complete computer setup/computersetup (1).jpg",
      link: "/complete-computer-setup",
      icon: "💻"
    },
    {
      id: 2,
      title: "Computer Repairs",
      description: "Expert computer repair services for all types of hardware and software issues. Fast, reliable, and cost-effective solutions.",
      image: "/Service/computer repair/computer repairs  (1).jpg",
      link: "/computer-repairs",
      icon: "🔧"
    },
    {
      id: 3,
      title: "Networking",
      description: "Complete networking solutions including LAN setup, WiFi installation, network security, and infrastructure management.",
      image: "/Service/Networking/com.jpg",
      link: "/networking",
      icon: "🌐"
    },
    {
      id: 4,
      title: "Server Maintenance",
      description: "Professional server maintenance and management services ensuring optimal performance and security for your business infrastructure.",
      image: "/Service/Server/server_129.jpg",
      link: "/server-maintenance",
      icon: "🖥️"
    },
    {
      id: 5,
      title: "CCTV Installation",
      description: "Professional CCTV camera installation services with modern IP and wireless solutions for comprehensive security coverage.",
      image: "/Service/CCTV install/1745060392756.jpg",
      link: "/cctv-installation",
      icon: "📹"
    },
    {
      id: 6,
      title: "IP PBX",
      description: "Advanced IP PBX phone systems for modern business communication with features like call forwarding, voicemail, and conference calling.",
      image: "/Service/ip pbx/telecom-about.jpg",
      link: "/ip-pbx",
      icon: "📞"
    },
    {
      id: 7,
      title: "Data Recovery",
      description: "Professional data recovery services for all types of storage devices. Recover lost, deleted, or corrupted data safely and securely.",
      image: "/Service/Data recovery/Data-Recovery-Process.jpg",
      link: "/data-recovery",
      icon: "💾"
    },
    {
      id: 8,
      title: "Maintenance Contract-AMC",
      description: "Annual Maintenance Contracts (AMC) for comprehensive system maintenance, regular checkups, and priority support services.",
      image: "/Service/contract/sign-a-contract-1200x557-1.jpeg",
      link: "/maintenance-contract-amc",
      icon: "📋"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            All Our Services
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Comprehensive IT and Security Solutions for Your Business and Home
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From computer setup to security systems, we provide end-to-end solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allServices.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-up">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Contact us for a free consultation and quote. Our expert team is ready to help you choose the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
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

export default AllServices;
