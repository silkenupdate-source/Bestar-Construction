"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: siteConfig.links.home },
    { name: "About Us", href: siteConfig.links.about },
    { name: "Services", href: siteConfig.links.services },
    { name: "Projects", href: siteConfig.links.projects },
    { name: "Contact", href: siteConfig.links.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm transition-all">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter text-blue-900 leading-none">
              BESTAR
            </span>
            <span className="text-xs font-semibold text-yellow-500 tracking-widest uppercase">
              Construction
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-yellow-600 ${
                pathname === item.href ? "text-blue-900 font-bold" : "text-gray-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${siteConfig.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-yellow-600 transition-colors">
            <Phone className="w-4 h-4" />
            {siteConfig.phones[0]}
          </a>
          <Button asChild className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold rounded-none">
            <Link href={siteConfig.links.contact}>Request a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col container mx-auto px-4 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-2 border-b border-gray-100 ${
                  pathname === item.href ? "text-blue-900" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <a href={`tel:${siteConfig.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-2 text-lg font-semibold text-blue-900">
                <Phone className="w-5 h-5" />
                {siteConfig.phones[0]}
              </a>
              <Button asChild className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold w-full">
                <Link href={siteConfig.links.contact} onClick={() => setIsOpen(false)}>
                  Request a Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
