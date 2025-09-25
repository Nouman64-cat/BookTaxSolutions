import React from "react";
import Services from "../components/sections/Services";

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Professional Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive tax and accounting solutions designed to meet your
            unique needs. From individual tax returns to complex business
            consulting, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <Services />
    </div>
  );
};

export default ServicesPage;
