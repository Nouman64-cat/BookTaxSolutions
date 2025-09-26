import React from "react";
import { FiAward, FiUsers, FiTrendingUp, FiShield } from "react-icons/fi";

const About: React.FC = () => {
  const features = [
    {
      icon: FiAward,
      title: "Certified Expertise",
      description:
        "Licensed CPAs and EAs with advanced certifications and continuous education.",
      gradient: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: FiUsers,
      title: "Personalized Service",
      description:
        "Dedicated account managers who understand your unique financial situation.",
      gradient: "from-emerald-500 to-green-600",
      iconBg: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      icon: FiTrendingUp,
      title: "Growth Focused",
      description:
        "Strategic financial planning to help your business scale and prosper.",
      gradient: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: FiShield,
      title: "Secure & Compliant",
      description:
        "Bank-level security and full compliance with all tax regulations.",
      gradient: "from-orange-500 to-red-500",
      iconBg: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
  ];

  const stats = [
    { number: "500+", label: "Satisfied Clients" },
    { number: "$2.5M+", label: "Tax Savings Generated" },
    { number: "15+", label: "Years of Experience" },
    { number: "98%", label: "Client Retention Rate" },
  ];

  return (
    <section
      id="about"
      className="py-20 relative bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/3 to-purple-500/3"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 text-slate-700 mb-6">
            <FiAward className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium">Excellence Since 2008</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About BookTax
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={feature.title} className="group">
              <div
                className={`bg-white/80 backdrop-blur-sm border ${feature.borderColor} rounded-2xl p-8 text-center space-y-6 hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full`}
              >
                <div className="relative">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-shadow`}
                  >
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl p-8 lg:p-12 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 mb-6">
                <FiTrendingUp className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium">Track Record</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Trusted by
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Hundreds of Clients
                </span>
              </h3>
              <p className="text-slate-300">
                Our track record speaks for itself
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-slate-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
