"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { SITE_CONFIG } from "@/lib/constants";

interface NavigationItem {
  name: string;
  href: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navigation: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };

  const mobileNavItemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/80 backdrop-blur-md border-b border-amber-400/10"
          : "bg-transparent"
      }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center group">
            <div className="relative w-10 h-10 mr-3">
              <Image
                src="/logo.png"
                alt={`${SITE_CONFIG.name} Logo`}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-amber-50/70 hover:text-white"
                }`}>
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400"
                    layoutId="active-nav-underline"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              asChild
              size="lg"
              className="hidden lg:flex bg-amber-400 text-gray-900 font-bold hover:bg-orange-500 hover:scale-105 transition-all">
              <Link href="/request">
                Get a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-amber-50 hover:bg-white/10 transition-colors"
              aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}>
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-amber-400/10">
                {navigation.map((item) => (
                  <motion.div key={item.name} variants={mobileNavItemVariants}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-3 text-base font-medium rounded-lg ${
                        isActive(item.href)
                          ? "text-white bg-amber-400/10"
                          : "text-amber-50/70 hover:text-white hover:bg-amber-400/5"
                      }`}>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={mobileNavItemVariants} className="pt-4">
                  <Button
                    asChild
                    className="w-full bg-amber-400 text-gray-900 font-bold">
                    <Link href="/request">Get a Quote</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
