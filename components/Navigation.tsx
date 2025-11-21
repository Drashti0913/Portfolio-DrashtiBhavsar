"use client";

import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Youtube, Instagram } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/", isHash: false },
  { name: "About Me", href: "/#about", isHash: true },
  { name: "Experience", href: "/experience", isHash: false },
  { name: "Projects", href: "/projects", isHash: false },
  { name: "Achievements", href: "/publications", isHash: false },
  { name: "Say Hello!", href: "/contact", isHash: false },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation when page loads
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  const handleNavClick = (href: string, isHash: boolean) => {
    setIsOpen(false);
    // If it's a hash link, handle scrolling after navigation
    if (isHash) {
      // If we're already on home page, scroll immediately
      if (pathname === "/") {
        const hash = href.split("#")[1];
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
      // Otherwise, Next.js Link will handle navigation and useEffect will handle scroll
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors">
              Drashti Bhavsar
            </Link>
          </div>

        

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.href, item.isHash)}
                    className={`px-2 py-2 text-sm font-normal transition-colors ${
                      pathname === item.href.split("#")[0] || (item.href === "/" && pathname === "/")
                        ? "text-gray-900 font-semibold"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href, item.isHash)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-normal transition-colors ${
                    pathname === item.href.split("#")[0] || (item.href === "/" && pathname === "/")
                      ? "text-gray-900 font-semibold"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="flex items-center gap-4 px-3 py-2 border-t border-gray-200 mt-2">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://linkedin.com/in/drashtibhavsar9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

