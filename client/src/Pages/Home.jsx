import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Banner auto-passing state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Banner slides data - using pictures from public/Home folder
  const slides = [
    {
      image: '/Home/CCTVH2.jpg',
      title: 'Your Complete Security Partner in',
      subtitle: 'Sri Lanka',
      description: 'We offer a comprehensive range of IT and security solutions from computer setup to CCTV systems, ensuring complete protection for your home and business.'
    },
    {
      image: '/Home/joe-gadd-DYLsNF8hNho-unsplash.jpg',
      title: 'Professional Security Systems &',
      subtitle: 'Advanced Technology',
      description: 'State-of-the-art security solutions with cutting-edge technology to protect your home and business with the highest level of security.'
    }
  ];

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Navigation functions
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Services data
  const services = [
    {
      id: 1,
      title: "Complete Computer Setup",
      description: "Professional computer setup services including hardware installation, software configuration, and system optimization for both home and business use.",
      image: "/Service/complete computer setup/computersetup (1).jpg",
      link: "/complete-computer-setup"
    },
    {
      id: 2,
      title: "Computer Repairs",
      description: "Expert computer repair services for all types of hardware and software issues. Fast, reliable, and cost-effective solutions.",
      image: "/Service/computer repair/computer repairs  (1).jpg",
      link: "/computer-repairs"
    },
    {
      id: 3,
      title: "Networking",
      description: "Complete networking solutions including LAN setup, WiFi installation, network security, and infrastructure management.",
      image: "/Service/Networking/com.jpg",
      link: "/networking"
    },
    {
      id: 4,
      title: "Server Maintenance",
      description: "Professional server maintenance and management services ensuring optimal performance and security for your business infrastructure.",
      image: "/Service/Server/server_129.jpg",
      link: "/server-maintenance"
    },
    {
      id: 5,
      title: "CCTV Installation",
      description: "Professional CCTV camera installation services with modern IP and wireless solutions for comprehensive security coverage.",
      image: "/Service/CCTV install/1745060392756.jpg",
      link: "/cctv-installation"
    },
    {
      id: 6,
      title: "IP PBX",
      description: "Advanced IP PBX phone systems for modern business communication with features like call forwarding, voicemail, and conference calling.",
      image: "/Service/ip pbx/telecom-about.jpg",
      link: "/ip-pbx"
    },
    {
      id: 7,
      title: "Data Recovery",
      description: "Professional data recovery services for all types of storage devices. Recover lost, deleted, or corrupted data safely and securely.",
      image: "/Service/Data recovery/Data-Recovery-Process.jpg",
      link: "/data-recovery"
    },
    {
      id: 8,
      title: "Maintenance Contract-AMC",
      description: "Annual Maintenance Contracts (AMC) for comprehensive system maintenance, regular checkups, and priority support services.",
      image: "/Service/contract/sign-a-contract-1200x557-1.jpeg",
      link: "/maintenance-contract-amc"
    }
  ];

  // Stats data
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

  // Features data
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
      {/* Hero Section - Auto-Passing Banner */}
      <section className="relative text-white">
        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
          {/* Banner slides */}
          {slides.map((slide, idx) => (
            <img
              key={idx}
              src={slide.image}
              alt={`Banner ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                {slides[currentSlide].title}
                <span className="block text-blue-300">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Get a Free Quote
                </Link>
                <Link 
                  to="/all-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors text-center"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button onClick={prevSlide} aria-label="Previous slide" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button onClick={nextSlide} aria-label="Next slide" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute z-10 bottom-5 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/90'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your Trusted Partner in IT & Security Solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors underline"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
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
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner for Comprehensive Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At eSight Technology, we're dedicated to providing innovative and reliable solutions for both domestic and industrial clients in Sri Lanka. With a wide range of services under one roof, we're your one-stop destination for all your IT and security needs.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From state-of-the-art security systems to advanced IT solutions, our expertise spans across various industries. Our commitment to excellence ensures that we deliver top-quality services that meet and exceed your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/about"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Learn More About Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  to="/all-services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center"
                >
                  Explore Our Services
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/Techeye/tech1.jpg" 
                alt="eSight Technology Team" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose eSight Technology?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-blue-300 mb-2">{stat.number}</p>
                <p className="text-lg text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver excellence in every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <div className="text-4xl mb-4 transition-transform duration-300 hover:rotate-12">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and quote. Our expert team is ready to help you choose the perfect solution.
          </p>
          <div className="flex flex-col gap-4 justify-center items-center">
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Get Free Quote
            </Link>
            <Link 
              to="/all-services"
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              View All Services
            </Link>
            <a 
              href="tel:+94703978967"
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Call Now: +94 703978967
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
