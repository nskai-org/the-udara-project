"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Program", href: "#program" },
  { name: "About", href: "#udara" },
  { name: "Contact us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="relative w-[200px] h-[40px] [@media(min-width:940px)]:w-[331px] [@media(min-width:940px)]:h-[54px]">
          <Image
            src="/udara-project.svg"
            alt="Udara Project Logo"
            fill
            className="select-none pointer-events-none object-contain"
          />
        </div>

        {/* Desktop Nav — visible from 940px and up */}
        <div className="hidden [@media(min-width:940px)]:flex items-center gap-8 select-none">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-dark text-base hover:text-gray-700 transition-colors"
            >
              {item.name}
            </a>
          ))}

          {/* Sign Up Button */}
          <a
            href="/signup"
            className="ml-4 px-5 py-2 rounded-[5px] bg-dark text-white text-base font-medium hover:bg-dark transition-colors cursor-pointer"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button — visible below 940px */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="[@media(min-width:940px)]:hidden text-gray-700 hover:text-gray-900 focus:outline-none z-[60]"
        >
          {menuOpen ? (
            // Close icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white z-50 flex flex-col p-6 pt-24 space-y-4 select-none"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-dark text-base transition-colors"
                >
                  {item.name}
                </a>
              ))}

              {/* Sign Up Button for mobile */}
              <a
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-5 py-2 rounded-[5px] bg-dark text-white font-medium hover:bg-dark transition-colors text-center"
              >
                Sign Up
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
