import React, { useEffect, useState } from "react";
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
} from "react-icons/fi";
import { blogService } from "../services/blogService";
import type { Blog } from "../types/blog";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Quick Overview Section */}
      <section className="py-20 relative bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 text-slate-700 mb-6">
              <FiAward className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Excellence Since 2008</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                BookTaxSolutions?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We combine years of expertise with modern technology to deliver
              exceptional tax and accounting services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-8 text-center space-y-6 hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-blue-500/25 transition-shadow">
                    <FiAward className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Expert Team
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Certified CPAs and EAs with 15+ years of experience in tax and
                  accounting excellence.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-8 text-center space-y-6 hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-green-500/25 transition-shadow">
                    <FiUsers className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Personalized Service
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Dedicated account managers who understand your unique
                  financial situation and goals.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-8 text-center space-y-6 hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-purple-500/25 transition-shadow">
                    <FiTrendingUp className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Proven Results
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  98% client retention rate and over $2.5M in tax savings
                  generated for our clients.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-8 text-center space-y-6 hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-orange-500/25 transition-shadow">
                    <FiShield className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Secure & Compliant
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Bank-level security and full compliance with all tax
                  regulations and standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 mb-6">
              <FiFileText className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium">Professional Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive tax and accounting solutions designed for
              individuals and businesses seeking excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FiFileText,
                title: "Tax Preparation",
                description:
                  "Individual and business tax returns with maximum deduction optimization and expert guidance.",
                features: [
                  "Individual Returns",
                  "Business Returns",
                  "Multi-State Filing",
                ],
                gradient: "from-blue-500 to-blue-600",
                iconBg: "bg-blue-500/20",
                borderColor: "border-blue-500/20",
              },
              {
                icon: FiBook,
                title: "Bookkeeping Services",
                description:
                  "Professional bookkeeping to keep your finances organized, compliant, and growth-ready.",
                features: [
                  "Monthly Reconciliation",
                  "Financial Statements",
                  "Payroll Processing",
                ],
                gradient: "from-emerald-500 to-green-600",
                iconBg: "bg-emerald-500/20",
                borderColor: "border-emerald-500/20",
              },
              {
                icon: FiPieChart,
                title: "Business Consulting",
                description:
                  "Strategic financial advice and consulting to accelerate your business growth and success.",
                features: [
                  "Financial Planning",
                  "Cash Flow Analysis",
                  "Growth Strategy",
                ],
                gradient: "from-purple-500 to-purple-600",
                iconBg: "bg-purple-500/20",
                borderColor: "border-purple-500/20",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div
                  className={`bg-white/10 backdrop-blur-sm border ${service.borderColor} rounded-2xl p-8 space-y-6 hover:bg-white/15 hover:scale-105 transition-all duration-300 h-full`}
                >
                  <div className="relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-shadow`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                          <FiCheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-slate-200 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <div
                      className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Services</span>
              <div className="ml-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <FiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Tax Season Timeline */}
      <section className="py-20 relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 text-slate-700 mb-6">
              <FiCalendar className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium">Stay Organized</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Tax Season
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Timeline
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of important tax deadlines throughout the year with our
              comprehensive timeline and expert guidance.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 h-full rounded-full"></div>
            <div className="space-y-12">
              {[
                {
                  month: "January",
                  title: "Tax Document Collection",
                  description:
                    "Gather W-2s, 1099s, and other essential tax documents for accurate filing",
                  icon: FiFileText,
                  gradient: "from-blue-500 to-blue-600",
                  position: "left",
                },
                {
                  month: "March",
                  title: "Business Tax Deadline",
                  description:
                    "S-Corp and Partnership returns due with proper extensions filed",
                  icon: FiCalendar,
                  gradient: "from-orange-500 to-red-500",
                  position: "right",
                },
                {
                  month: "April",
                  title: "Individual Tax Deadline",
                  description:
                    "Individual tax returns and payments due - don't miss this critical date",
                  icon: FiTarget,
                  gradient: "from-red-500 to-pink-500",
                  position: "left",
                },
                {
                  month: "October",
                  title: "Extension Deadline",
                  description:
                    "Extended individual tax returns due - final deadline for the year",
                  icon: FiClock,
                  gradient: "from-purple-500 to-purple-600",
                  position: "right",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    item.position === "left" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      item.position === "left"
                        ? "pr-12 text-right"
                        : "pl-12 text-left"
                    }`}
                  >
                    <div className="group">
                      <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <div
                          className={`flex items-center space-x-4 mb-6 ${
                            item.position === "left"
                              ? "flex-row-reverse space-x-reverse"
                              : ""
                          }`}
                        >
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}
                          >
                            <item.icon className="h-8 w-8 text-white" />
                          </div>
                          <div
                            className={
                              item.position === "left"
                                ? "text-right"
                                : "text-left"
                            }
                          >
                            <h4 className="text-2xl font-bold text-slate-900 mb-2">
                              {item.title}
                            </h4>
                            <div
                              className={`inline-flex px-4 py-2 bg-gradient-to-r ${item.gradient} text-white text-sm font-bold rounded-full`}
                            >
                              {item.month}
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 bg-gradient-to-r ${item.gradient} rounded-full border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2`}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {[
              {
                month: "January",
                title: "Tax Document Collection",
                description:
                  "Gather W-2s, 1099s, and other essential tax documents for accurate filing",
                icon: FiFileText,
                gradient: "from-blue-500 to-blue-600",
              },
              {
                month: "March",
                title: "Business Tax Deadline",
                description:
                  "S-Corp and Partnership returns due with proper extensions filed",
                icon: FiCalendar,
                gradient: "from-orange-500 to-red-500",
              },
              {
                month: "April",
                title: "Individual Tax Deadline",
                description:
                  "Individual tax returns and payments due - don't miss this critical date",
                icon: FiTarget,
                gradient: "from-red-500 to-pink-500",
              },
              {
                month: "October",
                title: "Extension Deadline",
                description:
                  "Extended individual tax returns due - final deadline for the year",
                icon: FiClock,
                gradient: "from-purple-500 to-purple-600",
              },
            ].map((item, index) => (
              <div key={index} className="relative pl-12">
                <div
                  className={`absolute left-0 top-2 w-8 h-8 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                {index < 3 && (
                  <div className="absolute left-4 top-10 w-px h-16 bg-gradient-to-b from-current to-transparent opacity-30"></div>
                )}
                <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-slate-900 text-lg">
                          {item.title}
                        </h4>
                        <div
                          className={`px-3 py-1 bg-gradient-to-r ${item.gradient} text-white text-xs font-bold rounded-full`}
                        >
                          {item.month}
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
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
      <section className="py-20 relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 mb-6">
              <FiStar className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">
                Client Success Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our exceptional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Small Business Owner",
                company: "Johnson Consulting LLC",
                quote:
                  "BookTaxSolutions saved my business thousands in taxes and helped streamline our bookkeeping process. Their expertise is truly unmatched!",
                rating: 5,
                image: "SJ",
                gradient: "from-pink-500 to-rose-500",
                savings: "$15,000",
              },
              {
                name: "Michael Chen",
                role: "Freelance Consultant",
                company: "Chen Digital Solutions",
                quote:
                  "As a freelancer, I was overwhelmed with tax complications. Their team made everything simple and maximized my deductions perfectly.",
                rating: 5,
                image: "MC",
                gradient: "from-blue-500 to-cyan-500",
                savings: "$8,500",
              },
              {
                name: "Jennifer Martinez",
                role: "Restaurant Owner",
                company: "Martinez Family Restaurant",
                quote:
                  "Professional, reliable, and always available when I need them. They've been handling our books for 3 years with excellence.",
                rating: 5,
                image: "JM",
                gradient: "from-purple-500 to-indigo-500",
                savings: "$22,000",
              },
            ].map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:scale-105 transition-all duration-300 h-full">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center space-x-1 bg-yellow-400/20 backdrop-blur-sm rounded-full px-4 py-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mb-8">
                    <div className="text-6xl text-white/20 font-serif leading-none mb-4">
                      "
                    </div>
                    <p className="text-slate-200 italic text-lg leading-relaxed -mt-8 pl-8">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-lg">
                        {testimonial.image}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-slate-300 text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-slate-400 text-xs">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-lg">
                        {testimonial.savings}
                      </div>
                      <div className="text-slate-400 text-xs">Tax Savings</div>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`mt-6 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-slate-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-slate-400">Retention Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$2.5M+</div>
                <div className="text-slate-400">Tax Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90">
                  <FiTarget className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-medium">Free Consultation</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Ready to
                  <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Optimize
                  </span>
                  Your Finances?
                </h2>

                <p className="text-xl text-slate-300 leading-relaxed">
                  Get a comprehensive consultation and discover how we can save
                  you money while ensuring full compliance and maximizing your
                  financial potential.
                </p>

                {/* Value Propositions */}
                <div className="space-y-4">
                  {[
                    {
                      icon: FiDollarSign,
                      text: "Maximize tax savings & deductions",
                    },
                    { icon: FiShield, text: "100% compliance guarantee" },
                    { icon: FiClock, text: "Quick response within 24 hours" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-slate-200">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <div className="mr-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <FiCalendar className="h-4 w-4" />
                  </div>
                  Schedule Consultation
                </Link>
                <a
                  href="tel:555-123-4567"
                  className="group border-2 border-white/40 backdrop-blur-sm hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <div className="mr-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-slate-900/20 transition-colors">
                    <FiPhone className="h-4 w-4" />
                  </div>
                  Call Now
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <FiPhone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        (555) 123-4567
                      </div>
                      <div className="text-slate-400 text-sm">Direct line</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <FiMail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        info@booktaxsolutions.com
                      </div>
                      <div className="text-slate-400 text-sm">
                        Email us anytime
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <FiClock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        Mon-Fri: 9AM-6PM
                      </div>
                      <div className="text-slate-400 text-sm">
                        EST Business Hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Satisfaction Guarantee */}
              <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiAward className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  100% Satisfaction Guarantee
                </h4>
                <p className="text-slate-300 text-sm">
                  Risk-free consultation with no obligations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 relative bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 text-slate-700 mb-6">
              <FiBook className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium">Expert Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Latest Tax &
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Accounting Insights
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with our expert articles on tax planning, financial
              strategies, and business growth insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fetch real blogs and show up to 3 cards. If fetch fails, fall back to static posts. */}
            <HomeBlogCards />
          </div>

          <div className="text-center mt-16">
            <Link
              to="/blogs"
              className="group inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Articles</span>
              <div className="ml-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <FiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// Small internal component to render up to 3 blog cards on the Home page
const HomeBlogCards: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetch = async () => {
      try {
        const data = await blogService.getAllBlogs();
        if (mounted) setBlogs(data.slice(0, 3));
      } catch {
        // fallback static posts
        if (mounted)
          setBlogs([
            {
              slug: "2024-tax-changes",
              title: "2024 Tax Changes: What You Need to Know",
              excerpt:
                "Important updates and changes for the upcoming tax season that could significantly affect your filing strategy and potential savings...",
              image: { url: "" },
              content: { markdown: "" },
            },
            {
              slug: "small-business-bookkeeping",
              title: "Small Business Bookkeeping Best Practices",
              excerpt:
                "Essential bookkeeping practices that can help your business maintain accurate financial records and improve cash flow management...",
              image: { url: "" },
              content: { markdown: "" },
            },
            {
              slug: "maximizing-deductions",
              title: "Maximizing Business Deductions Guide",
              excerpt:
                "Learn about often-overlooked business deductions that could save your company thousands in taxes and improve your bottom line...",
              image: { url: "" },
              content: { markdown: "" },
            },
          ]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetch();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return null;

  return (
    <>
      {blogs.map((blog) => (
        <article key={blog.slug} className="group">
          <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full">
            <div className="h-48 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
              {blog.image?.url ? (
                <img
                  src={blog.image.url}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // fallback to a safe public asset if the image can't be loaded
                    const target = e.currentTarget as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/vite.svg";
                  }}
                />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="relative text-slate-700 text-center px-6">
                    <div className="text-4xl mb-2">📄</div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span
                  className={`bg-slate-100 text-slate-800 px-3 py-1 rounded-full font-medium text-xs`}
                >
                  Article
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                {blog.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">{blog.excerpt}</p>

              <div className="pt-4">
                <Link
                  to={`/blog/${blog.slug}`}
                  className={`inline-flex items-center text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text font-bold hover:scale-105 transition-transform group-hover:gap-2`}
                >
                  <span>Read Full Article</span>
                  <FiArrowRight className="ml-1 h-4 w-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div
              className={`h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-60 group-hover:opacity-100 transition-opacity`}
            ></div>
          </div>
        </article>
      ))}
    </>
  );
};
