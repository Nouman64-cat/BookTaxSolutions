import React from "react";
import { Link } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiArrowUp,
} from "react-icons/fi";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Tax Preparation",
    "Bookkeeping Services",
    "Business Consulting",
    "Payroll Management",
    "Sales Tax Services",
    "Financial Planning",
  ];

  const resources = [
    "Tax Calendar",
    "Tax Tips",
    "Business Resources",
    "Financial Calculators",
    "FAQ",
    "Client Portal",
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  BookTax<span className="text-blue-400">Solutions</span>
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Your trusted partner for comprehensive tax and accounting
                  services. Professional expertise you can count on for over 15
                  years.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiPhone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300">
                    info@booktaxsolutions.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300">
                    123 Business Ave, Suite 100
                    <br />
                    City, State 12345
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FiFacebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Business Hours */}
              <div className="space-y-3">
                <h5 className="font-semibold text-white">Business Hours</h5>
                <div className="text-sm text-slate-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to="/services"
                      className="text-slate-300 hover:text-white transition-colors text-left"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Certifications */}
              <div className="space-y-3">
                <h5 className="font-semibold text-white">Certifications</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-800 text-xs px-2 py-1 rounded">
                    CPA
                  </span>
                  <span className="bg-slate-800 text-xs px-2 py-1 rounded">
                    EA
                  </span>
                  <span className="bg-slate-800 text-xs px-2 py-1 rounded">
                    QuickBooks ProAdvisor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Stay Updated</h4>
              <p className="text-slate-300">
                Get the latest tax tips, financial insights, and company updates
                delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-slate-400">
              <p>&copy; {currentYear} BookTaxSolutions. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-slate-800 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors group"
              aria-label="Back to top"
            >
              <FiArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Professional Disclaimer */}
        <div className="border-t border-slate-800 py-6">
          <p className="text-xs text-slate-500 text-center max-w-4xl mx-auto">
            BookTaxSolutions is a professional tax and accounting firm. This
            website is for informational purposes only and does not constitute
            professional advice. Please consult with our certified professionals
            for advice specific to your situation. We are committed to
            protecting your privacy and maintaining the confidentiality of your
            financial information.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
