import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "#home" && location === "/") return true;
    return false;
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm py-3" : "bg-white/95 py-4"}`}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold font-poppins text-primary flex items-center">
            <span className="text-secondary">AK</span>NEXUS
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-primary hover:text-secondary transition ${isActive(link.href) ? "active" : ""}`}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    window.scrollTo({
                      top: element.getBoundingClientRect().top + window.scrollY - 80,
                      behavior: "smooth",
                    });
                  }
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Contact Button */}
        <div className="hidden md:block">
          <a 
            href="#contact"
            className="bg-secondary hover:bg-accent text-white px-6 py-2 rounded-md transition font-medium inline-block"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#contact");
              if (element) {
                window.scrollTo({
                  top: element.getBoundingClientRect().top + window.scrollY - 80,
                  behavior: "smooth",
                });
              }
            }}
          >
            Get in Touch
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white border-t border-gray-100 shadow-md transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link py-2 text-primary hover:text-secondary transition"
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                const element = document.querySelector(link.href);
                if (element) {
                  window.scrollTo({
                    top: element.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-secondary hover:bg-accent text-white px-6 py-2 rounded-md transition font-medium inline-block text-center"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              const element = document.querySelector("#contact");
              if (element) {
                window.scrollTo({
                  top: element.getBoundingClientRect().top + window.scrollY - 80,
                  behavior: "smooth",
                });
              }
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
