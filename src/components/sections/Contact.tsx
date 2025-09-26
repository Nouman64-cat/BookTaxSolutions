import React, { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheck,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: "Phone",
      details: "(555) 123-4567",
      subtitle: "Call us anytime",
    },
    {
      icon: FiMail,
      title: "Email",
      details: "info@booktaxsolutions.com",
      subtitle: "We reply within 24 hours",
    },
    {
      icon: FiMapPin,
      title: "Address",
      details: "123 Business Ave, Suite 100",
      subtitle: "City, State 12345",
    },
    {
      icon: FiClock,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM",
      subtitle: "Sat: 10AM-2PM",
    },
  ];

  const services = [
    "Tax Preparation",
    "Bookkeeping Services",
    "Business Consulting",
    "Payroll Management",
    "Sales Tax Services",
    "Financial Planning",
    "Other",
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ready to take control of your finances? Contact us today for a free
            consultation. We're here to answer your questions and help you
            achieve your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Let's Start a Conversation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our team of experienced professionals is ready to help you
                navigate your tax and accounting needs. Reach out to us through
                any of the following methods, and we'll get back to you
                promptly.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-lg p-6 space-y-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <contact.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-slate-900">
                      {contact.title}
                    </h4>
                    <p className="text-slate-900 font-medium">
                      {contact.details}
                    </p>
                    <p className="text-sm text-slate-600">{contact.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-blue-50 rounded-lg p-6 space-y-4">
              <h4 className="text-lg font-semibold text-slate-900">
                Why Choose BookTaxSolutions?
              </h4>
              <div className="space-y-3">
                {[
                  "Free initial consultation",
                  "Experienced certified professionals",
                  "Competitive pricing with no hidden fees",
                  "Year-round support and guidance",
                  "Secure document handling",
                  "Quick turnaround times",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FiCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8">
            {!isSubmitted ? (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-slate-900"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-slate-900"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone and Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-slate-900"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-medium text-slate-900"
                      >
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-slate-900"
                    >
                      Message *
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your needs or questions..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center group"
                  >
                    Send Message
                    <FiSend className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </form>
              </>
            ) : (
              /* Success Message */
              <div className="text-center space-y-6 py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <FiCheck className="h-8 w-8 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Map removed per request */}
      </div>
    </section>
  );
};

export default Contact;
