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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90">
            <FiAward className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">
              Trusted by 500+ Clients Since 2008
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Transform Your</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Financial Future
              </span>
              <span className="block">with Expert Care</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
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

            <button className="group flex items-center space-x-3 text-white hover:text-blue-300 transition-colors">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <FiPlay className="h-5 w-5 ml-1" />
              </div>
              <span className="font-medium">Watch Our Story</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FiUsers className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-slate-300">Happy Clients</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white">$2.5M+</div>
              <div className="text-slate-300">Tax Savings</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FiShield className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FiStar className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-slate-300">Success Rate</div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <FiCheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="font-semibold text-white">Maximum Refunds</h3>
              </div>
              <p className="text-slate-300 text-sm">
                We guarantee to find every deduction and credit you qualify for
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FiShield className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white">Audit Protection</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Complete IRS audit support and representation included
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <FiUsers className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white">Year-Round Support</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Dedicated account manager available whenever you need help
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
