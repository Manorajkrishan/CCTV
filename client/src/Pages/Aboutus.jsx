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
      name: "John Doe",
      position: "CEO & Founder",
      image: "/Techeye/tech2.jpg",
      description: "15+ years of experience in security systems and business management."
    },
    {
      name: "Jane Smith",
      position: "Technical Director",
      image: "/Techeye/tech1.jpg",
      description: "Expert in CCTV technology and system integration with 12+ years experience."
    },
    {
      name: "Mike Johnson",
      position: "Operations Manager",
      image: "/Techeye/tech2.jpg",
      description: "Specializes in project management and customer service excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-down">
            About CCTV Security
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Your trusted partner in comprehensive security solutions across Sri Lanka
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2014, CCTV Security has grown from a small startup to become one of Sri Lanka's most trusted security solution providers. Our journey began with a simple mission: to make advanced security technology accessible to everyone.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've expanded our services to include comprehensive security solutions, from traditional CCTV systems to cutting-edge AI-powered surveillance. Our commitment to quality, innovation, and customer satisfaction has remained constant throughout our growth.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we're proud to serve over 500 satisfied customers across the island, with a team of experienced professionals dedicated to providing the best security solutions for homes, businesses, and institutions.
              </p>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src="/Home/CCTVH2.jpg" 
                alt="CCTV Security Office" 
                className="rounded-lg shadow-xl animate-float"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg animate-bounce-in">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-up">
              <div className="text-4xl mb-4 animate-bounce-in">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide innovative, reliable, and affordable security solutions that protect what matters most to our customers, while maintaining the highest standards of quality and service excellence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl mb-4 animate-bounce-in">🔮</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading security solutions provider in Sri Lanka, known for innovation, reliability, and customer satisfaction, while contributing to a safer and more secure society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                <div className="text-5xl mb-4 animate-bounce-in">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 animate-fade-in-left">
                  {value.title}
                </h3>
                <p className="text-gray-600 animate-fade-in-right">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our company's growth and development
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } animate-fade-in-up`} style={{animationDelay: `${0.1 * index}s`}}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg animate-scale-in">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg animate-bounce-in"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your security
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover animate-scale-in"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 animate-fade-in-left">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3 animate-fade-in-right">{member.position}</p>
                  <p className="text-gray-600 animate-fade-in-up">{member.description}</p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Join hundreds of satisfied customers who trust us with their security needs. Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors animate-bounce-in"
            >
              Get Free Quote
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

export default Aboutus;
