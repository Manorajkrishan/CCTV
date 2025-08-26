import React from 'react';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring the highest quality standards in all our services."
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "We maintain the highest ethical standards and build lasting relationships based on trust and transparency."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We continuously embrace new technologies and innovative solutions to meet evolving security needs."
    },
    {
      icon: "👥",
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do, and we're committed to exceeding their expectations."
    }
  ];

  const milestones = [
    { year: "2014", title: "Company Founded", description: "Started as a small security solutions provider" },
    { year: "2016", title: "First Major Project", description: "Completed our first large-scale CCTV installation" },
    { year: "2018", title: "Service Expansion", description: "Added alarm systems and access control services" },
    { year: "2020", title: "Digital Transformation", description: "Launched online consultation and remote support" },
    { year: "2022", title: "Market Leader", description: "Became one of Sri Lanka's top security solution providers" },
    { year: "2024", title: "Future Ready", description: "Investing in AI-powered security solutions" }
  ];

  const team = [
    {
      name: "Thulash Lakmal",
      position: "IT Admin",
      avatar: "👨‍💼",
      description: "15+ years of experience in security systems and business management.",
      email: "lakmal@esighttechnology.com",
      phone: "+94 706978967"
    },
    {
      name: "Mahesh Mangala",
      position: "Marketing / Operation",
      avatar: "👨‍💼",
      description: "Specializes in project management and customer service excellence.",
      email: "mahesh@esighttechnology.com",
      phone: "+94 706978920"
    },
    {
      name: "Supul Eduwara",
      position: "Technical Support",
      avatar: "👨‍💼",
      description: "Expert in CCTV technology and system integration with 12+ years experience.",
      email: "info@esighttechnology.com",
      phone: "+94 706978972"
    },
    {
      name: "Dilshan Kumara",
      position: "Technical Support",
      avatar: "👨‍💼",
      description: "Network infrastructure expert with deep knowledge of enterprise security solutions.",
      email: "info@esighttechnology.com",
      phone: "+94 706978969"
    },
    {
      name: "Pasan Madushanka",
      position: "Technical Support",
      avatar: "👨‍💼",
      description: "Dedicated to ensuring customer satisfaction and building long-term relationships.",
      email: "info@esighttechnology.com",
      phone: "+94 706978968"
    },
    {
      name: "Fathima",
      position: "Accounts",
      avatar: "👩‍💼",
      description: "Certified security professional with expertise in advanced surveillance systems.",
      email: "accounts@esighttechnology.com",
      phone: "+94 706978970"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-down">
            About eSight Technology
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto px-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Your trusted partner in comprehensive security solutions across Sri Lanka
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="animate-fade-in-left order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Founded in 2014, eSight Technology has grown from a small startup to become one of Sri Lanka's most trusted security solution providers. Our journey began with a simple mission: to make advanced security technology accessible to everyone.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Over the years, we've expanded our services to include comprehensive security solutions, from traditional CCTV systems to cutting-edge AI-powered surveillance. Our commitment to quality, innovation, and customer satisfaction has remained constant throughout our growth.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Today, we're proud to serve over 500 satisfied customers across the island, with a team of experienced professionals dedicated to providing the best security solutions for homes, businesses, and institutions.
              </p>
            </div>
            <div className="relative animate-fade-in-right order-1 lg:order-2 mb-8 lg:mb-0">
              <img 
                src="/Home/CCTVH2.jpg" 
                alt="eSight Technology Office" 
                className="w-full h-auto rounded-lg shadow-xl animate-float"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-blue-600 text-white p-4 sm:p-6 rounded-lg animate-bounce-in">
                <p className="text-xl sm:text-2xl font-bold">10+</p>
                <p className="text-xs sm:text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in-up">
              <div className="text-3xl sm:text-4xl mb-4 animate-bounce-in">🎯</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                To provide innovative, reliable, and affordable security solutions that protect what matters most to our customers, while maintaining the highest standards of quality and service excellence.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl sm:text-4xl mb-4 animate-bounce-in">🔮</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                To be the leading security solutions provider in Sri Lanka, known for innovation, reliability, and customer satisfaction, while contributing to a safer and more secure society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 animate-bounce-in">{value.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 animate-fade-in-left">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 animate-fade-in-right leading-relaxed px-1">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Key milestones in our company's growth and development
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                } animate-fade-in-up`} style={{animationDelay: `${0.1 * index}s`}}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg animate-scale-in">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg animate-bounce-in"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
              Experienced professionals dedicated to your security
            </p>
            
            {/* Team Photo */}
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-2">
              <img 
                src="/aboutus/team.jpg" 
                alt="eSight Technology Team" 
                className="w-full h-auto rounded-lg shadow-xl animate-fade-in-up"
                style={{animationDelay: '0.3s'}}
              />
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                <div className="p-6 sm:p-8 text-center">
                  {/* Avatar */}
                  <div className="relative mx-auto mb-4 sm:mb-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                      <div className="text-3xl sm:text-4xl font-bold text-blue-600 flex items-center justify-center h-full">
                        {member.avatar}
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{member.position}</p>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed px-1">{member.description}</p>
                  
                  {/* Contact Info */}
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center justify-center text-gray-500">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="break-all text-center">{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-500">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="break-all text-center">{member.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Get in touch with us today for a free consultation and quote. Our expert team is ready to help you choose the perfect solution.
          </p>
          <div className="flex flex-col gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors animate-bounce-in text-center"
            >
              Get Free Quote
            </Link>
            <Link 
              to="/services"
              className="w-full sm:w-auto bg-blue-600 text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-colors animate-scale-in text-center"
            >
              View All Services
            </Link>
            <a 
              href="tel:+94703978967"
              className="w-full sm:w-auto bg-blue-600 text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-colors animate-scale-in text-center"
            >
              Call Now: +94 703978967
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
