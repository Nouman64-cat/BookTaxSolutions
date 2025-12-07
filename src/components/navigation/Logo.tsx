import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "default" | "compact";
}

const Logo = ({ variant = "default" }: LogoProps) => {
  if (variant === "compact") {
    return (
      <Link to="/" className="inline-flex items-center gap-2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="url(#logo-gradient-compact)" />
          <path d="M12 28V12h8c2.5 0 4.5 0.8 6 2.4 1.5 1.6 2.2 3.6 2.2 6 0 2.4-0.8 4.4-2.2 6-1.5 1.6-3.5 2.4-6 2.4h-8v-0.8h1.6V12.8H12V12z M16.4 27.2h3.2c1.8 0 3.2-0.6 4.2-1.8 1-1.2 1.6-2.8 1.6-4.8 0-2-0.5-3.6-1.6-4.8-1-1.2-2.4-1.8-4.2-1.8h-3.2v13.2z" fill="white"/>
          <defs>
            <linearGradient id="logo-gradient-compact" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4f46e5"/>
              <stop offset="0.5" stopColor="#6366f1"/>
              <stop offset="1" stopColor="#818cf8"/>
            </linearGradient>
          </defs>
        </svg>
      </Link>
    );
  }

  return (
    <Link to="/" className="group inline-flex items-center gap-3">
      {/* Logo Mark */}
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-[1.02]">
        <rect width="44" height="44" rx="11" fill="url(#logo-gradient)" />
        <path d="M13 30V13h9c2.8 0 5 0.9 6.6 2.6 1.7 1.8 2.5 4 2.5 6.7 0 2.7-0.8 4.9-2.5 6.7-1.6 1.7-3.8 2.6-6.6 2.6h-9v-0.9h1.8V13.9H13V13z M17.5 29.1h3.5c2 0 3.6-0.7 4.7-2 1.1-1.3 1.7-3.1 1.7-5.3 0-2.2-0.6-4-1.7-5.3-1.1-1.3-2.7-2-4.7-2h-3.5v14.6z" fill="white"/>
        {/* Accent line at bottom left - inspired by Graphite */}
        <rect x="4" y="36" width="26" height="2" rx="1" fill="#eec585"/>
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4f46e5"/>
            <stop offset="0.5" stopColor="#6366f1"/>
            <stop offset="1" stopColor="#818cf8"/>
          </linearGradient>
        </defs>
      </svg>
      
      {/* Logo Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-semibold tracking-tight text-gray-900">
          BookTax<span className="text-indigo-600">Solutions</span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
