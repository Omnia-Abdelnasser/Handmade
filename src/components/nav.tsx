"use client";

import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState<string>("home");

  const handleClick = (id: string) => {
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      dir="rtl"
      className="border-b shadow-sm bg-gray-50 dark:bg-gray-900 fixed top-0 w-full z-50"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo/WhatsApp Image 2025-09-03 at 23.18.45_db20e454.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              onClick={() => handleClick("home")}
              className={`text-lg px-3 py-2 font-medium transition-colors ${
                activeLink === "home" ? "text-pink-500" : "dark:text-gray-50 "
              }`}
            >
              الرئيسية
            </a>
            <a
              href="#Mandeel"
              onClick={() => handleClick("products")}
              className={`text-lg px-3 py-2 font-medium transition-colors ${
                activeLink === "products"
                  ? "text-pink-500"
                  : "dark:text-gray-50 "
              }`}
            >
              المنتجات
            </a>
            <a
              href="#about"
              onClick={() => handleClick("about")}
              className={`text-lg px-3 py-2 font-medium transition-colors ${
                activeLink === "about" ? "text-pink-500" : "dark:text-gray-50 "
              }`}
            >
              من انا
            </a>
            <a
              href="#contact"
              onClick={() => handleClick("contact")}
              className={`text-lg px-3 py-2 font-medium transition-colors ${
                activeLink === "contact"
                  ? "text-pink-500"
                  : "dark:text-gray-50 "
              }`}
            >
              تواصل معي
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ModeToggle />

            <div className="md:hidden">
              <Button
                aria-label="Toggle Menu"
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-pink-600 hover:bg-pink-100"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="mt-2 space-y-1 rounded-lg px-2 pb-3 pt-2">
            <a
              href="#home"
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                activeLink === "home" ? "text-pink-500" : "dark:text-gray-50 "
              }`}
            >
              الرئيسية
            </a>
            <a
              href="#Mandeel"
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                activeLink === "Mandeel"
                  ? "text-pink-500"
                  : "dark:text-gray-50 "
              }`}
            >
              المنتجات
            </a>
            <a
              href="#about"
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                activeLink === "about" ? "text-pink-500" : "dark:text-gray-50 "
              }`}
            >
              من نحن
            </a>
            <a
              href="#contact"
              onClick={() => handleClick("contact")}
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                activeLink === "contact"
                  ? "text-pink-500"
                  : "dark:text-gray-50 "
              }`}
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
