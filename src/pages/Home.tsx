import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero";
import {
  FiCheckCircle,
  FiArrowRight,
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiClock,
  FiDollarSign,
  FiFileText,
  FiBook,
  FiPieChart,
  FiStar,
  FiPhone,
  FiMail,
  FiCalendar,
  FiTarget,
  FiTrendingDown,
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <FiShield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Secure & Compliant
              </h3>
              <p className="text-slate-600">
                Bank-level security and full compliance with all tax
                regulations.
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
                icon: FiFileText,
                title: "Tax Preparation",
                description:
                  "Individual and business tax returns with maximum deduction optimization.",
                features: [
                  "Individual Returns",
                  "Business Returns",
                  "Multi-State Filing",
                ],
                color: "blue",
              },
              {
                icon: FiBook,
                title: "Bookkeeping Services",
                description:
                  "Professional bookkeeping to keep your finances organized and compliant.",
                features: [
                  "Monthly Reconciliation",
                  "Financial Statements",
                  "Payroll Processing",
                ],
                color: "green",
              },
              {
                icon: FiPieChart,
                title: "Business Consulting",
                description:
                  "Strategic financial advice to help grow your business operations.",
                features: [
                  "Financial Planning",
                  "Cash Flow Analysis",
                  "Growth Strategy",
                ],
                color: "purple",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 space-y-4 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4`}
                >
                  <service.icon
                    className={`h-6 w-6 text-${service.color}-600`}
                  />
                </div>
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

      {/* Tax Season Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Tax Season Timeline
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Stay on top of important tax deadlines throughout the year with
              our comprehensive timeline.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            <div className="space-y-8">
              {[
                {
                  month: "January",
                  title: "Tax Document Collection",
                  description: "Gather W-2s, 1099s, and other tax documents",
                  icon: FiFileText,
                  color: "blue",
                },
                {
                  month: "March",
                  title: "Business Tax Deadline",
                  description:
                    "S-Corp and Partnership returns due (with extension)",
                  icon: FiCalendar,
                  color: "orange",
                },
                {
                  month: "April",
                  title: "Individual Tax Deadline",
                  description: "Individual tax returns and payments due",
                  icon: FiTarget,
                  color: "red",
                },
                {
                  month: "October",
                  title: "Extension Deadline",
                  description: "Extended individual tax returns due",
                  icon: FiClock,
                  color: "purple",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-lg shadow-sm p-6 border hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3 mb-3">
                        <div
                          className={`w-10 h-10 bg-${item.color}-100 rounded-full flex items-center justify-center`}
                        >
                          <item.icon
                            className={`h-5 w-5 text-${item.color}-600`}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-500">{item.month}</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {[
              {
                month: "January",
                title: "Tax Document Collection",
                description: "Gather W-2s, 1099s, and other tax documents",
                icon: FiFileText,
                color: "blue",
              },
              {
                month: "March",
                title: "Business Tax Deadline",
                description:
                  "S-Corp and Partnership returns due (with extension)",
                icon: FiCalendar,
                color: "orange",
              },
              {
                month: "April",
                title: "Individual Tax Deadline",
                description: "Individual tax returns and payments due",
                icon: FiTarget,
                color: "red",
              },
              {
                month: "October",
                title: "Extension Deadline",
                description: "Extended individual tax returns due",
                icon: FiClock,
                color: "purple",
              },
            ].map((item, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                {index < 3 && (
                  <div className="absolute left-3 top-7 w-px h-12 bg-blue-200"></div>
                )}
                <div className="bg-white rounded-lg shadow-sm p-4 border hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3 mb-3">
                    <div
                      className={`w-10 h-10 bg-${item.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-slate-900 text-sm">
                          {item.title}
                        </h4>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                          {item.month}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Small Business Owner",
                quote:
                  "BookTaxSolutions saved my business thousands in taxes and helped streamline our bookkeeping process. Their expertise is unmatched!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Freelance Consultant",
                quote:
                  "As a freelancer, I was overwhelmed with tax complications. Their team made everything simple and maximized my deductions.",
                rating: 5,
              },
              {
                name: "Jennifer Martinez",
                role: "Restaurant Owner",
                quote:
                  "Professional, reliable, and always available when I need them. They've been handling our books for 3 years now.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We serve clients across various industries with specialized
              knowledge and tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Healthcare",
              "Technology",
              "Retail",
              "Construction",
              "Professional Services",
              "Real Estate",
              "Manufacturing",
              "Non-Profit",
              "Hospitality",
              "Agriculture",
              "Transportation",
              "Finance",
            ].map((industry, index) => (
              <div
                key={index}
                className="text-center p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <h4 className="font-medium text-slate-900 text-sm">
                  {industry}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Ready to Optimize Your Finances?
              </h2>
              <p className="text-xl text-blue-100">
                Get a free consultation and discover how we can save you money
                while ensuring full compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <FiCalendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
                <a
                  href="tel:555-123-4567"
                  className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <FiPhone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FiPhone className="h-5 w-5" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiMail className="h-5 w-5" />
                    <span>info@booktaxsolutions.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiClock className="h-5 w-5" />
                    <span>Mon-Fri: 9AM-6PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Latest Tax & Accounting Insights
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Stay informed with our latest articles on tax planning, financial
              strategies, and business insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "2024 Tax Changes: What You Need to Know",
                excerpt:
                  "Important updates and changes for the upcoming tax season that could affect your filing...",
                date: "March 15, 2024",
                category: "Tax Planning",
              },
              {
                title: "Small Business Bookkeeping Best Practices",
                excerpt:
                  "Essential bookkeeping practices that can help your business maintain accurate financial records...",
                date: "February 28, 2024",
                category: "Bookkeeping",
              },
              {
                title: "Maximizing Business Deductions Guide",
                excerpt:
                  "Learn about often-overlooked business deductions that could save your company thousands...",
                date: "January 20, 2024",
                category: "Business Tax",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
                  <div className="text-slate-500 text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <div className="text-sm">Blog Image</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="text-slate-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                  <Link
                    to="/blogs"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                  >
                    Read More
                    <FiArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blogs"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors group"
            >
              View All Articles
              <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
