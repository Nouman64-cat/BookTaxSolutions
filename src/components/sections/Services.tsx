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
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive tax and accounting solutions designed to meet your
            unique needs. From individual tax returns to complex business
            consulting, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105 ${
                service.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-6">
                {/* Icon and Title */}
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                    <service.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
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
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center group ${
                      service.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
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
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Additional Specialized Services
              </h3>
              <p className="text-slate-600 leading-relaxed">
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

            <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-xl p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                  <FiBook className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Need a Custom Solution?
                </h4>
                <p className="text-slate-600">
                  Every business is unique. Contact us to discuss your specific
                  needs and get a customized service package.
                </p>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
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
                step: "1",
                title: "Initial Consultation",
                description:
                  "Free 30-minute consultation to understand your needs",
              },
              {
                step: "2",
                title: "Proposal & Agreement",
                description:
                  "Detailed proposal with transparent pricing and timeline",
              },
              {
                step: "3",
                title: "Work Execution",
                description:
                  "Professional service delivery with regular updates",
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "Continued support and annual review meetings",
              },
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-lg font-bold">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-slate-900">
                  {process.title}
                </h4>
                <p className="text-sm text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
