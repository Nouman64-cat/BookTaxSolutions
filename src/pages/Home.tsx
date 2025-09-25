import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero";
import {
  FiCheckCircle,
  FiArrowRight,
  FiAward,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Quick Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Choose BookTaxSolutions?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We combine years of expertise with modern technology to deliver
              exceptional tax and accounting services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <FiAward className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Expert Team
              </h3>
              <p className="text-slate-600">
                Certified CPAs and EAs with 15+ years of experience in tax and
                accounting.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <FiUsers className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Personalized Service
              </h3>
              <p className="text-slate-600">
                Dedicated account managers who understand your unique financial
                situation.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <FiTrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Proven Results
              </h3>
              <p className="text-slate-600">
                98% client retention rate and over $2.5M in tax savings
                generated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive tax and accounting solutions for individuals and
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tax Preparation",
                description:
                  "Individual and business tax returns with maximum deduction optimization.",
                features: [
                  "Individual Returns",
                  "Business Returns",
                  "Multi-State Filing",
                ],
              },
              {
                title: "Bookkeeping Services",
                description:
                  "Professional bookkeeping to keep your finances organized and compliant.",
                features: [
                  "Monthly Reconciliation",
                  "Financial Statements",
                  "Payroll Processing",
                ],
              },
              {
                title: "Business Consulting",
                description:
                  "Strategic financial advice to help grow your business operations.",
                features: [
                  "Financial Planning",
                  "Cash Flow Analysis",
                  "Growth Strategy",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <FiCheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors group"
            >
              View All Services
              <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how we can help
            optimize your financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/about"
              className="border-2 border-slate-300 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
