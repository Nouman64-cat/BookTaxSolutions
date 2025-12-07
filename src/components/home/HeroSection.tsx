import { FiArrowRight } from "react-icons/fi";
import AccentButton from "../common/AccentButton";

const HeroSection = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-visible">
      {/* Dotted Background Pattern - Full Width Breakout */}
      <div 
        className="absolute inset-y-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen -z-10 bg-white"
      >
        {/* Dot pattern using radial gradient - uniform 20px spacing */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(148, 163, 184, 0.5) 2px, transparent 2px)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0',
          }}
        />
        {/* Subtle edge fade - only at the very edges, not covering the main area */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, white 0%, transparent 3%, transparent 97%, white 100%),
              linear-gradient(to bottom, white 0%, transparent 5%, transparent 95%, white 100%)
            `,
          }}
        />
        {/* Center fade to reduce dot visibility behind content */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 70% at 50% 50%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.5) 40%, transparent 70%)`,
          }}
        />
        {/* Subtle center glow - reduced opacity so dots remain visible */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      {/* Centered Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Minimal Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-1.5 text-xs font-medium text-slate-600 mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
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
