"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="top-0 left-0 right-0 z-50 w-full p-4 lg:p-8">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Empty div for mobile layout balance */}
          <div className="md:hidden w-10"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:block w-full">
            <div className="flex items-center justify-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? (
                <AiOutlineClose className="h-10 w-10" />
              ) : (
                <AiOutlineMenu className="h-10 w-10" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden relative">
          <div className="absolute w-full px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
