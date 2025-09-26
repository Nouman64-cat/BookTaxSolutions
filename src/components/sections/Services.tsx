import React from "react";
import {
  FiFileText,
  FiBook,
  FiTrendingUp,
  FiUsers,
  FiCreditCard,
  FiPieChart,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

const Services: React.FC = () => {
  const services = [
    {
      icon: FiFileText,
      title: "Tax Preparation",
      description:
        "Complete individual and business tax preparation with maximum deduction optimization.",
      features: [
        "Individual Tax Returns",
        "Business Tax Returns",
        "Amended Returns",
        "Multi-State Filing",
      ],
      price: "Starting at $99",
      popular: false,
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
        "QuickBooks Setup",
      ],
      price: "Starting at $200/month",
      popular: true,
    },
    {
      icon: FiTrendingUp,
      title: "Business Consulting",
      description:
        "Strategic financial advice to help grow and optimize your business operations.",
      features: [
        "Financial Planning",
        "Cash Flow Analysis",
        "Business Structure",
        "Growth Strategy",
      ],
      price: "Starting at $150/hour",
      popular: false,
    },
    {
      icon: FiUsers,
      title: "Payroll Management",
      description:
        "Complete payroll solutions including tax deposits and compliance reporting.",
      features: [
        "Payroll Processing",
        "Tax Deposits",
        "W-2/1099 Preparation",
        "State Compliance",
      ],
      price: "Starting at $50/month",
      popular: false,
    },
    {
      icon: FiCreditCard,
      title: "Sales Tax Services",
      description:
        "Sales tax registration, filing, and compliance for multi-state businesses.",
      features: [
        "Registration Setup",
        "Monthly/Quarterly Filing",
        "Audit Support",
        "Nexus Analysis",
      ],
      price: "Starting at $75/month",
      popular: false,
    },
    {
      icon: FiPieChart,
      title: "Financial Planning",
      description:
        "Comprehensive financial planning and retirement strategy development.",
      features: [
        "Retirement Planning",
        "Investment Analysis",
        "Estate Planning",
        "Risk Assessment",
      ],
      price: "Starting at $200/hour",
      popular: false,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-20 relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/3 to-purple-500/3"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 text-slate-700 mb-6">
            <FiFileText className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium">Professional Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Professional
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tax and accounting solutions designed to meet your
            unique needs. From individual tax returns to complex business
            consulting, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:scale-105 ${
                service.popular ? "ring-2 ring-blue-500 shadow-blue-500/20" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-6">
                {/* Icon and Title */}
                <div className="space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <FiCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-900">
                      {service.price}
                    </span>
                  </div>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center group ${
                      service.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-2xl transform hover:scale-105"
                        : "bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white hover:border-blue-300 text-slate-700 hover:text-blue-600 shadow-md hover:shadow-lg"
                    }`}
                  >
                    Get Started
                    <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 text-blue-700">
                  <FiTrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    Specialized Expertise
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">
                  Additional Specialized
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Services
                  </span>
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Beyond our core offerings, we provide specialized services for
                unique situations and complex financial needs. Our expertise
                extends to various industries and special circumstances.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Tax Services</h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• IRS Audit Representation</li>
                    <li>• Tax Problem Resolution</li>
                    <li>• Innocent Spouse Relief</li>
                    <li>• Installment Agreements</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">
                    Business Services
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• Entity Formation</li>
                    <li>• Business Valuations</li>
                    <li>• Succession Planning</li>
                    <li>• CFO Services</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-blue-50 via-purple-50/50 to-slate-100 rounded-2xl p-8 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-4 right-4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10 text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <FiBook className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900">
                  Need a Custom Solution?
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Every business is unique. Contact us to discuss your specific
                  needs and get a customized service package.
                </p>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Simple Process
            </h3>
            <p className="text-slate-600">
              Getting started is easy. Here's how we work together to achieve
              your financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                id: "consultation",
                step: "1",
                title: "Initial Consultation",
                description:
                  "Free 30-minute consultation to understand your needs",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                id: "proposal",
                step: "2",
                title: "Proposal & Agreement",
                description:
                  "Detailed proposal with transparent pricing and timeline",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                id: "execution",
                step: "3",
                title: "Work Execution",
                description:
                  "Professional service delivery with regular updates",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                id: "support",
                step: "4",
                title: "Ongoing Support",
                description: "Continued support and annual review meetings",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((process) => (
              <div key={process.id} className="text-center space-y-4 group">
                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${process.gradient} text-white rounded-2xl flex items-center justify-center mx-auto text-xl font-bold shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-300`}
                  >
                    {process.step}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                  {process.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
