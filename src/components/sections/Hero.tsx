import React from "react";
import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiArrowRight,
  FiPlay,
  FiStar,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiAward,
} from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Light Theme Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100/50 to-purple-100/50"></div>
        </div>

        {/* Floating geometric shapes - light theme */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/40 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-slate-700 shadow-sm">
            <FiAward className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium">
              Trusted by 500+ Clients Since 2008
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              <span className="block">Transform Your</span>
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Financial Future
              </span>
              <span className="block">with Expert Care</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Professional tax preparation, strategic bookkeeping, and
              personalized financial consulting that saves you money and
              maximizes your growth potential.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/contact"
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <span className="flex items-center">
                Start Free Consultation
                <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </Link>

            <button className="group flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors">
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors shadow-sm">
                <FiPlay className="h-5 w-5 ml-1" />
              </div>
              <span className="font-medium">Watch Our Story</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <FiUsers className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">500+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <FiTrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">$2.5M+</div>
              <div className="text-slate-600">Tax Savings</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <FiShield className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <FiStar className="h-8 w-8 text-amber-500" />
              </div>
              <div className="text-3xl font-bold text-slate-900">98%</div>
              <div className="text-slate-600">Success Rate</div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <FiCheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Maximum Refunds</h3>
              </div>
              <p className="text-slate-600 text-sm">
                We guarantee to find every deduction and credit you qualify for
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FiShield className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Audit Protection</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Complete IRS audit support and representation included
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FiUsers className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Year-Round Support</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Dedicated account manager available whenever you need help
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Light theme */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
