import { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";
import Logo from "./Logo";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Blogs", to: "/blogs" },
];

const BookTaxSolution_STUDIO_URL = import.meta.env
  .VITE_BookTaxSolution_STUDIO_APP;

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-overlay backdrop-blur transition-colors">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-muted transition-colors hover:text-foreground",
                  isActive &&
                    "text-foreground underline underline-offset-8 decoration-[var(--color-primary)]"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className="flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-foreground"
          >
            Contact us <FiArrowUpRight />
          </Link>
          {/* <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary-button bg-secondary-button text-foreground transition-colors hover:bg-secondary-button-hover"
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button> */}
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors md:hidden"
          onClick={toggle}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {open && (
          <div className="absolute inset-x-0 top-full border-b border-border bg-gradient-to-br from-indigo-600 via-surface-elevated to-surface  backdrop-blur-md px-4 pb-6 pt-4 shadow-lg shadow-black/20 md:hidden transition-colors shadow-theme-card">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={close}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg px-3 py-2 text-base font-medium text-muted transition-colors hover:bg-accent-soft hover:text-foreground",
                      isActive && "bg-accent-soft text-foreground"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <hr className="border-border" />
              <Link
                to={`${BookTaxSolution_STUDIO_URL}/studio`}
                onClick={close}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-accent transition-colors hover:bg-accent-soft hover:text-foreground"
              >
                Contact us <FiArrowUpRight />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavigationBar;
