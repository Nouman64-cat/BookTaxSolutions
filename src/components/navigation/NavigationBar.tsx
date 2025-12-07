import { useState, useRef, useEffect, type ReactNode } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiArrowRight,
  FiBook,
  FiFileText,
  FiClipboard,
  FiTrendingUp,
  FiDollarSign,
  FiFile,
  FiBookOpen,
  FiCheckCircle,
  FiShoppingBag,
  FiZap,
  FiShoppingCart,
  FiBriefcase,
  FiHome,
  FiUsers,
  FiStar,
  FiTarget,
  FiEdit3,
  FiGrid,
  FiPercent,
  FiLayout,
  FiHelpCircle,
} from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import "./NavigationBar.css";

// Types for menu items
interface SubMenuItem {
  label: string;
  description: string;
  to: string;
  icon?: ReactNode;
}

interface ResourceItem {
  title: string;
  description: string;
  to: string;
  icon?: ReactNode;
}

interface MenuItem {
  label: string;
  to: string;
  hasSubmenu?: boolean;
  submenuItems?: SubMenuItem[];
  resources?: ResourceItem[];
}

// Menu configuration - customize based on your services
const menuItems: MenuItem[] = [
  {
    label: "Services",
    to: "/services",
    hasSubmenu: true,
    submenuItems: [
      {
        label: "Accounting & Bookkeeping",
        description:
          "A one-stop-shop for fully-managed and industry specific accounting & bookkeeping",
        to: "/services",
        icon: <FiBook className="w-5 h-5" />,
      },
      {
        label: "Bill Pay & Invoicing",
        description:
          "We can pay your bills, invoice clients, run payroll, file your taxes and a lot more.",
        to: "/services",
        icon: <FiFileText className="w-5 h-5" />,
      },
      {
        label: "Tax Filing & Compliance",
        description:
          "We own your company's income tax filing & strategy, so you can focus on growth",
        to: "/services",
        icon: <FiClipboard className="w-5 h-5" />,
      },
      {
        label: "Financial Advisory",
        description:
          "Full-service financial modeling, FP&A and CFO, built to scale",
        to: "/services",
        icon: <FiTrendingUp className="w-5 h-5" />,
      },
      {
        label: "Payroll Services",
        description:
          "Streamlined payroll processing with compliance built-in",
        to: "/services",
        icon: <FiDollarSign className="w-5 h-5" />,
      },
    ],
    resources: [
      {
        title: "Free Financial Template",
        description:
          "Our financial templates are used by hundreds of successful businesses.",
        to: "/blogs",
        icon: <FiFile className="w-4 h-4" />,
      },
      {
        title: "Tax Planning Guide",
        description:
          "Complete guide to tax planning strategies for businesses.",
        to: "/blogs",
        icon: <FiBookOpen className="w-4 h-4" />,
      },
      {
        title: "Monthly Close Checklist",
        description:
          "We've designed month-end close processes for the best businesses.",
        to: "/blogs",
        icon: <FiCheckCircle className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Industries",
    to: "/services",
    hasSubmenu: true,
    submenuItems: [
      {
        label: "Small Businesses",
        description:
          "Tailored solutions for small business accounting and tax needs.",
        to: "/services",
        icon: <FiShoppingBag className="w-5 h-5" />,
      },
      {
        label: "Startups & Tech",
        description:
          "We have deep expertise in startup finance, from bookkeeping to forecasting.",
        to: "/services",
        icon: <FiZap className="w-5 h-5" />,
      },
      {
        label: "E-commerce",
        description:
          "Specialized eCommerce accounting including inventory and sales tax.",
        to: "/services",
        icon: <FiShoppingCart className="w-5 h-5" />,
      },
      {
        label: "Professional Services",
        description:
          "Accounting solutions for law firms, consultancies, and agencies.",
        to: "/services",
        icon: <FiBriefcase className="w-5 h-5" />,
      },
      {
        label: "Real Estate",
        description:
          "Property management accounting and real estate tax strategies.",
        to: "/services",
        icon: <FiHome className="w-5 h-5" />,
      },
    ],
  },
  {
    label: "About",
    to: "/about",
    hasSubmenu: true,
    submenuItems: [
      {
        label: "Our Team",
        description:
          "We are a team of CPAs, Accountants & Tax Professionals with vast experience.",
        to: "/about",
        icon: <FiUsers className="w-5 h-5" />,
      },
      {
        label: "Why Choose Us",
        description:
          "Discover why businesses trust BookTaxSolutions for their financial needs.",
        to: "/about",
        icon: <FiStar className="w-5 h-5" />,
      },
      {
        label: "Careers",
        description:
          "If you're passionate about helping businesses succeed, join our team!",
        to: "/about",
        icon: <FiTarget className="w-5 h-5" />,
      },
      {
        label: "Blog",
        description:
          "Insights, tips, and resources for business financial management.",
        to: "/blogs",
        icon: <FiEdit3 className="w-5 h-5" />,
      },
    ],
  },
  {
    label: "Resources",
    to: "/blogs",
    hasSubmenu: true,
    submenuItems: [
      {
        label: "Blog & Insights",
        description: "Expert articles on accounting, tax, and business finance.",
        to: "/blogs",
        icon: <FiGrid className="w-5 h-5" />,
      },
      {
        label: "Tax Calculator",
        description:
          "Estimate your business tax obligations with our free calculator.",
        to: "/blogs",
        icon: <FiPercent className="w-5 h-5" />,
      },
      {
        label: "Financial Templates",
        description:
          "Free downloadable templates for budgeting, forecasting, and more.",
        to: "/blogs",
        icon: <FiLayout className="w-5 h-5" />,
      },
      {
        label: "FAQ",
        description:
          "Answers to common questions about our services and processes.",
        to: "/about",
        icon: <FiHelpCircle className="w-5 h-5" />,
      },
    ],
  },
  {
    label: "Contact Us",
    to: "/contact",
    hasSubmenu: false,
  },
];

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(
    null
  );
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileActiveSubmenu(null);
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveSubmenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileActiveSubmenu((prev) => (prev === label ? null : label));
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="graphite-header">
      <nav ref={navRef} className="graphite-nav">
        <div className="graphite-container">
          {/* Logo */}
          <div className="graphite-logo">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <ul className="graphite-menu">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={`graphite-menu-item ${
                  item.hasSubmenu ? "has-submenu" : ""
                }`}
                onMouseEnter={() =>
                  item.hasSubmenu && handleMouseEnter(item.label)
                }
                onMouseLeave={handleMouseLeave}
              >
                {item.hasSubmenu ? (
                  <>
                    <button className="graphite-menu-link">
                      {item.label}
                      <FiChevronDown
                        className={`graphite-chevron ${
                          activeSubmenu === item.label ? "active" : ""
                        }`}
                      />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div
                      className={`graphite-submenu ${
                        activeSubmenu === item.label ? "active" : ""
                      } ${item.resources ? "has-resources" : ""}`}
                    >
                      <div className="graphite-submenu-nav">
                        <div className="graphite-submenu-header">
                          {item.label}
                        </div>
                        <ul className="graphite-submenu-list">
                          {item.submenuItems?.map((subItem) => (
                            <li
                              key={subItem.label}
                              className="graphite-submenu-item"
                            >
                              {subItem.icon && (
                                <span className="graphite-submenu-icon">
                                  {subItem.icon}
                                </span>
                              )}
                              <div>
                                <Link
                                  to={subItem.to}
                                  onClick={() => setActiveSubmenu(null)}
                                  className="graphite-submenu-link"
                                >
                                  {subItem.label}
                                  <FiArrowRight className="graphite-arrow" />
                                </Link>
                                <p className="graphite-submenu-description">
                                  {subItem.description}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Resources Section */}
                      {item.resources && (
                        <div className="graphite-submenu-resources">
                          <div className="graphite-submenu-header">
                            Latest Resources
                          </div>
                          {item.resources.map((resource) => (
                            <div
                              key={resource.title}
                              className="graphite-resource"
                            >
                              {resource.icon && (
                                <span className="graphite-resource-icon">
                                  {resource.icon}
                                </span>
                              )}
                              <div>
                                <Link
                                  to={resource.to}
                                  onClick={() => setActiveSubmenu(null)}
                                  className="graphite-resource-link"
                                >
                                  {resource.title}
                                </Link>
                                <p className="graphite-resource-description">
                                  {resource.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `graphite-menu-link ${isActive ? "active" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="graphite-cta">
            <Link to="/contact" className="graphite-cta-button">
              Get Started
              <FiArrowRight />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="graphite-mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`graphite-mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <ul className="graphite-mobile-list">
          {menuItems.map((item) => (
            <li key={item.label} className="graphite-mobile-item">
              {item.hasSubmenu ? (
                <>
                  <button
                    className={`graphite-mobile-link has-submenu ${
                      mobileActiveSubmenu === item.label ? "active" : ""
                    }`}
                    onClick={() => toggleMobileSubmenu(item.label)}
                  >
                    {item.label}
                    <FiChevronDown
                      className={`graphite-mobile-chevron ${
                        mobileActiveSubmenu === item.label ? "active" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`graphite-mobile-submenu ${
                      mobileActiveSubmenu === item.label ? "active" : ""
                    }`}
                  >
                    {item.submenuItems?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.to}
                        onClick={closeMobileMenu}
                        className="graphite-mobile-submenu-item"
                      >
                        {subItem.icon && (
                          <span className="graphite-mobile-submenu-icon">
                            {subItem.icon}
                          </span>
                        )}
                        <div>
                          <span className="graphite-mobile-submenu-title">
                            {subItem.label}
                          </span>
                          <span className="graphite-mobile-submenu-desc">
                            {subItem.description}
                          </span>
                        </div>
                      </Link>
                    ))}

                    {item.resources && (
                      <div className="graphite-mobile-resources">
                        <div className="graphite-mobile-resources-header">
                          Latest Resources
                        </div>
                        {item.resources.map((resource) => (
                          <Link
                            key={resource.title}
                            to={resource.to}
                            onClick={closeMobileMenu}
                            className="graphite-mobile-resource"
                          >
                            {resource.icon && (
                              <span className="graphite-mobile-resource-icon">
                                {resource.icon}
                              </span>
                            )}
                            <div>
                              <span className="graphite-mobile-resource-title">
                                {resource.title}
                              </span>
                              <span className="graphite-mobile-resource-desc">
                                {resource.description}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.to}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `graphite-mobile-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="graphite-mobile-cta">
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="graphite-mobile-cta-button"
          >
            Get Started
            <FiArrowRight />
          </Link>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div className="graphite-backdrop" onClick={closeMobileMenu} />
      )}
    </header>
  );
};

export default NavigationBar;
