import { FiArrowRight } from "react-icons/fi";
import AccentButton from "../common/AccentButton";

const HeroSection = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      {/* Minimal background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Centered Content */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Minimal Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-600 mb-8">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          Financial Intelligence for Modern Businesses
        </div>

        {/* Main Headline - Clean & Bold */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          Empowering startups with
          <span className="block text-blue-600 mt-2">data-driven financial clarity</span>
        </h1>

        {/* Minimal Description */}
        <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          From accounting and taxation to FP&A and AI-powered automation — 
          we simplify your finances so you can focus on growth.
        </p>

        {/* Single CTA - Minimal */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <AccentButton to="/contact" icon={<FiArrowRight />}>
            Get Started
          </AccentButton>
          <a 
            href="/services" 
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Learn more →
          </a>
        </div>

        {/* Minimal Stats - Inline */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-900">100+</span>
            <span>Clients</span>
          </div>
          <div className="w-px h-8 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-900">98%</span>
            <span>Satisfaction</span>
          </div>
          <div className="w-px h-8 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-900">24/7</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
