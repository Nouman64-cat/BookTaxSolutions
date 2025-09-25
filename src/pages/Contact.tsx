import React from "react";
import Contact from "../components/sections/Contact";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to take control of your finances? Get in touch with our expert
            team for a free consultation and personalized solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default ContactPage;
