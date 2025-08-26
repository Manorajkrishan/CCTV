import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToPolicy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreeToPolicy: false
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Office Numbers",
      details: ["+94 703978967", "+94 703978968"],
      link: "tel:+94703978967"
    },
    {
      icon: "✉️",
      title: "Email Address",
      details: ["info@cctvsecurity.lk"],
      link: "mailto:info@cctvsecurity.lk"
    },
    {
      icon: "📍",
      title: "Office Location",
      details: ["Bandiyamulla, 397 Colombo Rd,", "Gampaha 11000, Sri Lanka"],
      link: "#"
    }
  ];

  const services = [
    "CCTV System Solutions",
    "Alarm System Solutions", 
    "Access Control Solutions",
    "Video Intercom System",
    "Network Solutions"
  ];

  // Initialize Leaflet map
  useEffect(() => {
    // Fix Leaflet icon issue
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });

    // Create map instance
    const map = L.map('map').setView([7.0907, 79.8513], 15);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add marker for eSight Technology office
    const officeMarker = L.marker([7.0907, 79.8513]).addTo(map);
    
    // Add popup with office information
    officeMarker.bindPopup(`
      <div style="text-align: center; padding: 10px;">
        <h3 style="margin: 0 0 10px 0; color: #1e40af; font-weight: bold;">eSight Technology</h3>
        <p style="margin: 5px 0; font-size: 14px;">Bandiyamulla, 397 Colombo Rd</p>
        <p style="margin: 5px 0; font-size: 14px;">Gampaha 11000, Sri Lanka</p>
        <p style="margin: 10px 0 0 0; font-size: 12px; color: #6b7280;">📍 Click to view location</p>
      </div>
    `);

    // Add a circle to highlight the area
    L.circle([7.0907, 79.8513], {
      color: '#1e40af',
      fillColor: '#3b82f6',
      fillOpacity: 0.2,
      radius: 500
    }).addTo(map);

    // Cleanup function
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-down">
            Get in Touch
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Have questions or need assistance? Fill out the form below, and our friendly team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                Send us a Message
              </h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-bounce-in">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div className="animate-fade-in-up" style={{animationDelay: '0.15s'}}>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div className="animate-fade-in-up" style={{animationDelay: '0.25s'}}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your security needs..."
                  ></textarea>
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.35s'}}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="agreeToPolicy"
                      checked={formData.agreeToPolicy}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in-up"
                  style={{animationDelay: '0.4s'}}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-right">
              <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 animate-fade-in-left" style={{animationDelay: `${0.3 + index * 0.05}s`}}>
                      <div className="text-2xl">{info.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.link !== "#" ? (
                          <a href={info.link} className="text-blue-600 hover:text-blue-800 transition-colors">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600">{detail}</p>
                            ))}
                          </a>
                        ) : (
                          info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">{detail}</p>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Our Services
                </h3>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center text-gray-600 animate-fade-in-left" style={{animationDelay: `${0.5 + index * 0.05}s`}}>
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                  <p><span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM</p>
                  <p><span className="font-medium">Sunday:</span> Closed</p>
                  <p className="text-blue-600 font-medium mt-2">24/7 Emergency Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-xl text-gray-600">
              Visit our office for a personal consultation
            </p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden animate-fade-in-up shadow-lg" style={{animationDelay: '0.2s'}}>
            <div id="map" className="w-full h-full"></div>
          </div>
          
          {/* Address Details */}
          <div className="mt-8 text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-blue-50 p-6 rounded-lg inline-block">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Office Address</h3>
              <p className="text-gray-700 text-lg">
                <strong>Bandiyamulla, 397 Colombo Rd,</strong><br />
                <strong>Gampaha 11000, Sri Lanka</strong>
              </p>
              <p className="text-gray-600 mt-2">
                📍 Located in the heart of Gampaha, easily accessible from Colombo
              </p>
            </div>
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
            Don't wait to secure your property. Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <a 
              href="tel:+94703978967"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors animate-bounce-in"
            >
              Call Now: +94 703978967
            </a>
            <a 
              href="mailto:info@cctvsecurity.lk"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors animate-scale-in"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
