import React from "react";
import { FiAward, FiUsers, FiTrendingUp, FiShield } from "react-icons/fi";

const About: React.FC = () => {
  const features = [
    {
      icon: FiAward,
      title: "Certified Expertise",
      description:
        "Licensed CPAs and EAs with advanced certifications and continuous education.",
    },
    {
      icon: FiUsers,
      title: "Personalized Service",
      description:
        "Dedicated account managers who understand your unique financial situation.",
    },
    {
      icon: FiTrendingUp,
      title: "Growth Focused",
      description:
        "Strategic financial planning to help your business scale and prosper.",
    },
    {
      icon: FiShield,
      title: "Secure & Compliant",
      description:
        "Bank-level security and full compliance with all tax regulations.",
    },
  ];

  const stats = [
    { number: "500+", label: "Satisfied Clients" },
    { number: "$2.5M+", label: "Tax Savings Generated" },
    { number: "15+", label: "Years of Experience" },
    { number: "98%", label: "Client Retention Rate" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About BookTax<span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Founded in 2008, BookTaxSolutions has been providing comprehensive
            tax and accounting services to individuals and businesses across the
            region. Our commitment to excellence and personalized service has
            made us a trusted partner in financial success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Your Financial Success is Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                At BookTaxSolutions, we believe that every client deserves
                personalized attention and expert guidance. Our team of
                certified professionals combines years of experience with the
                latest technology to deliver accurate, timely, and
                cost-effective solutions.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you're an individual looking to maximize your tax refund
                or a business seeking comprehensive financial management, we're
                here to help you navigate the complex world of taxes and
                accounting with confidence.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-slate-900">
                Our Core Values
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-slate-900">Integrity</h5>
                    <p className="text-slate-600 text-sm">
                      Honest, transparent, and ethical in all our dealings
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-slate-900">Excellence</h5>
                    <p className="text-slate-600 text-sm">
                      Committed to delivering the highest quality service
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-slate-900">Innovation</h5>
                    <p className="text-slate-600 text-sm">
                      Embracing technology to improve efficiency and accuracy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Team Photo Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                  <FiUsers className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900">
                  Our Expert Team
                </h4>
                <p className="text-slate-600">
                  Certified professionals dedicated to your financial success
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 border">
              <div className="flex items-center space-x-4 text-sm">
                <div className="text-center">
                  <div className="font-bold text-slate-900">CPA</div>
                  <div className="text-slate-600">Certified</div>
                </div>
                <div className="w-px h-8 bg-slate-300"></div>
                <div className="text-center">
                  <div className="font-bold text-slate-900">EA</div>
                  <div className="text-slate-600">Licensed</div>
                </div>
                <div className="w-px h-8 bg-slate-300"></div>
                <div className="text-center">
                  <div className="font-bold text-slate-900">QuickBooks</div>
                  <div className="text-slate-600">ProAdvisor</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-slate-900 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by Hundreds of Clients
            </h3>
            <p className="text-slate-300">Our track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
