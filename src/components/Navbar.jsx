"use client";

import { navlinks } from "@/constants/data";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-10 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="font-bold text-xl">Your Logo</span>
        </Link>
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navlinks.map((link) => {
            return (
              <Link key={link.id} href={link.path}>
                <span className="hover:text-gray-500">{link.page}</span>
              </Link>
            );
          })}

          <div>
            <UserButton />
          </div>
        </div>
        <button
          className="lg:hidden block"
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

      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 absolute top-14 left-0 w-full">
          <ul className="p-4">
            {navlinks.map((link) => {
              return (
                <li className="my-2">
                  <Link key={link.id} href={link.path}>
                    <span className="block hover:text-gray-500">
                      {link.page}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
