import React from "react";
import About from "../components/sections/About";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            About BookTax<span className="text-blue-600">Solutions</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your trusted partner in financial success for over 15 years.
            Discover our story, values, and commitment to excellence.
          </p>
        </div>
      </section>

      {/* About Section */}
      <About />
    </div>
  );
};

export default AboutPage;
