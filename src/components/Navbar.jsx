"use client";

import { navlinks } from "@/constants/data";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState, useEffect } from "react";
// import { MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/* <MessageCircle className="h-6 w-6 text-white" /> */}
            <span className="font-bold text-xl text-white">Lets Chat</span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navlinks.map((link) => (
              <Link key={link.id} href={link.path}>
                <span className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                  {link.page}
                </span>
              </Link>
            ))}

            <div className="ml-4">
              <UserButton />
            </div>
          </div>

          <button
            className="lg:hidden block text-white hover:bg-white/10 p-2 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/10 backdrop-blur-lg border-t border-white/20">
          <div className="container mx-auto px-4">
            <ul className="py-4 space-y-4">
              {navlinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.path}>
                    <span className="block text-white/90 hover:text-white transition-colors duration-200 font-medium">
                      {link.page}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="py-4 border-t border-white/10">
              <UserButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
