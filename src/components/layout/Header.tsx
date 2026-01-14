import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logoEh from "@/assets/physio-rehab.png";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Facilities", href: "facilities" },
  { label: "Contact", href: "contact" },
];

const HEADER_OFFSET = 90;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;

      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        HEADER_OFFSET;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 150);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full overflow-x-hidden transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3"
        >
          <img
            src={logoEh}
            alt="EH Physio & Rehabilitation Centre"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-14">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Call Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="tel:9446191909"
            className={`flex items-center gap-2 font-semibold transition-transform hover:scale-105 ${
              isScrolled ? "text-[#E84D3D]" : "text-white"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isScrolled ? "bg-black/10" : "bg-white/20"
              }`}
            >
              <Phone className="w-5 h-5" />
            </div>
            <span>9446191909</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <X
              className={`w-6 h-6 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            />
          ) : (
            <Menu
              className={`w-6 h-6 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden w-full max-w-full bg-background border-t border-border overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile Call */}
              <a
                href="tel:9446191909"
                className="flex items-center gap-2 font-semibold mt-4 text-foreground hover:text-primary"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent/10">
                  <Phone className="w-5 h-5" />
                </div>
                <span>9446191909</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
