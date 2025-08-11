import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      id: 1,
      title: "Complete Computer Setup",
      description: "Professional computer setup services including hardware installation, software configuration, and system optimization for both home and business use.",
      image: "/Oursrvices/systemsolution.jpg",
      link: "/complete-computer-setup"
    },
    {
      id: 2,
      title: "Computer Repairs",
      description: "Expert computer repair services for all types of hardware and software issues. Fast, reliable, and cost-effective solutions.",
      image: "/Techeye/tech1.jpg",
      link: "/computer-repairs"
    },
    {
      id: 3,
      title: "Networking",
      description: "Complete networking solutions including LAN setup, WiFi installation, network security, and infrastructure management.",
      image: "/Oursrvices/systemsolution.jpg",
      link: "/networking"
    },
    {
      id: 4,
      title: "Server Maintenance",
      description: "Professional server maintenance and management services ensuring optimal performance and security for your business infrastructure.",
      image: "/Techeye/tech2.jpg",
      link: "/server-maintenance"
    },
    {
      id: 5,
      title: "CCTV Installation",
      description: "Professional CCTV camera installation services with modern IP and wireless solutions for comprehensive security coverage.",
      image: "/Oursrvices/CCTVH2.jpg",
      link: "/cctv-installation"
    },
    {
      id: 6,
      title: "IP PBX",
      description: "Advanced IP PBX phone systems for modern business communication with features like call forwarding, voicemail, and conference calling.",
      image: "/Oursrvices/viedio intercome solution.jpg",
      link: "/ip-pbx"
    },
    {
      id: 7,
      title: "Data Recovery",
      description: "Professional data recovery services for all types of storage devices. Recover lost, deleted, or corrupted data safely and securely.",
      image: "/Techeye/tech1.jpg",
      link: "/data-recovery"
    },
    {
      id: 8,
      title: "Maintenance Contract-AMC",
      description: "Annual Maintenance Contracts (AMC) for comprehensive system maintenance, regular checkups, and priority support services.",
      image: "/Techeye/tech2.jpg",
      link: "/maintenance-contract-amc"
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "700+", label: "Installations" },
    { number: "100%", label: "Customer Satisfaction" },
    { number: "500+", label: "Trusted Customers" },
    { number: "No 1", label: "Security Brands" },
    { number: "2yr", label: "Warranty" },
    { number: "24/7", label: "After-Sales Support" },
    { number: "Island+", label: "Island-Wide Service" }
  ];

  const features = [
    {
      icon: "🔒",
      title: "Prompt and Professional Service",
      description: "We pride ourselves on our fast and efficient approach, ensuring your security needs are met promptly."
    },
    {
      icon: "🤝",
      title: "Honest and Transparent",
      description: "Our commitment to integrity means you can trust us to provide honest advice and transparent pricing."
    },
    {
      icon: "⚡",
      title: "Quality Equipment",
      description: "We source only genuine, reliable security equipment to guarantee optimal performance and protection."
    },
    {
      icon: "🛡️",
      title: "Comprehensive Warranties",
      description: "Enjoy peace of mind with our comprehensive warranties on all products."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Your Complete Security Partner in
                <span className="block text-blue-300">Sri Lanka</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                We offer a comprehensive range of IT and security solutions from computer setup to CCTV systems, ensuring complete protection for your home and business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors text-center animate-bounce-in"
                >
                  Get a Free Quote
                </Link>
                <Link 
                  to="/all-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors text-center animate-scale-in"
                >
                  View All Services
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src="/Home/CCTVH2.jpg" 
                alt="CCTV Security Solutions" 
                className="rounded-lg shadow-2xl animate-float"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-4 rounded-lg shadow-lg animate-bounce-in">
                <p className="text-sm font-medium">Trusted by 500+ Customers</p>
                <p className="text-xs text-gray-600">Across Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your Trusted Partner in IT & Security Solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 animate-scale-in"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 animate-fade-in-left">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 animate-fade-in-right text-sm">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium animate-fade-in-up"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in-up">
            <Link 
              to="/all-services"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              View All Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner for Comprehensive Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At CCTV Security, we're dedicated to providing innovative and reliable solutions for both domestic and industrial clients in Sri Lanka. With a wide range of services under one roof, we're your one-stop destination for all your IT and security needs.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From state-of-the-art security systems to advanced IT solutions, our expertise spans across various industries. Our commitment to excellence ensures that we deliver top-quality services that meet and exceed your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/about"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center animate-bounce-in"
                >
                  Learn More About Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  to="/all-services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center animate-scale-in"
                >
                  Explore Our Services
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src="/Techeye/tech1.jpg" 
                alt="CCTV Security Team" 
                className="rounded-lg shadow-xl animate-float"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg animate-bounce-in">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Results
            </h2>
            <p className="text-xl text-blue-100">
              Your Trusted Partner in IT & Security Solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                <div className="text-3xl lg:text-4xl font-bold text-blue-300 mb-2 animate-bounce-in">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-blue-100 animate-fade-in-down">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your Trusted Partner in IT & Security Solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                <div className="text-4xl mb-4 animate-bounce-in">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 animate-fade-in-left">
                  {feature.title}
                </h3>
                <p className="text-gray-600 animate-fade-in-right">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Get in touch with us today for a free consultation and quote. Our expert team is ready to help you choose the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors animate-bounce-in"
            >
              Get Free Quote
            </Link>
            <Link 
              to="/all-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors animate-scale-in"
            >
              View All Services
            </Link>
            <a 
              href="tel:+94706063010"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors animate-scale-in"
            >
              Call Now: +94 70 606 3010
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
