import React from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Your Trusted
                <span className="text-blue-600 block">Tax & Accounting</span>
                Partner
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                Professional tax preparation, bookkeeping, and financial
                consulting services to help your business thrive. Over 15 years
                of expertise you can trust.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiCheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">
                  Maximum tax refunds guaranteed
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiCheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">
                  Year-round support and consultation
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiCheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">
                  IRS audit protection included
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center group"
              >
                Get Free Consultation
                <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Our Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">98%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual/Image */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              {/* Mock Dashboard/Report */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Tax Summary 2024
                  </h3>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Optimized
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Federal Refund</span>
                    <span className="text-2xl font-bold text-green-600">
                      $3,247
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">State Refund</span>
                    <span className="text-xl font-bold text-green-600">
                      $892
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-900 font-semibold">
                        Total Refund
                      </span>
                      <span className="text-3xl font-bold text-green-600">
                        $4,139
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm text-slate-600 mb-1">
                      <span>Deductions Applied</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-slate-600 mb-1">
                      <span>Tax Optimization</span>
                      <span>88%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-[88%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
              <FiCheckCircle className="h-8 w-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
              <span className="text-lg font-bold">CPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
