import { FiArrowRight, FiPlay } from "react-icons/fi";
import AccentButton from "../common/AccentButton";
import Container from "../common/Container";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 px-6 py-16 shadow-lg sm:px-12">
      {/* Light theme decorative gradient blob */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 rounded-l-[3rem] bg-gradient-to-l from-blue-100/60 to-transparent blur-3xl lg:block" />
      
      <Container className="relative z-10 max-w-4xl px-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-blue-600 shadow-sm">
          Beyond Accounting
          <span className="text-slate-500">We Build Financial Intelligence</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          At BookTaxSolutions, we empower startups with data-driven financial
          clarity.
        </h1>
        
        {/* Description */}
        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          From accounting and taxation to FP&A and AI-powered automation, we
          simplify your finances so you can focus on scaling what truly matters.
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <AccentButton to="/services" icon={<FiArrowRight />}>
            Explore our services
          </AccentButton>
          <AccentButton to="/contact" variant="secondary" icon={<FiPlay />}>
            Get free consultation
          </AccentButton>
        </div>
        
        {/* Stats Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { metric: "98%", label: "Client satisfaction" },
            { metric: "100+", label: "Trusted by 100+ businesses" },
            { metric: "24/7", label: "Global Support" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-white p-5 text-center text-sm text-slate-600 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-2xl font-semibold text-slate-900">
                {item.metric}
              </p>
              <p className="mt-2 capitalize tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
