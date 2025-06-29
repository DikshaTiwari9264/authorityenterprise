import React from "react";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  ChevronDown,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Logo and Newsletter - Left Side */}
              <div className="col-span-5">
                <div className="mb-8">
                  <h2 className=" text-left text-2xl font-light tracking-wider text-gray-900 ">
                    JOHN LEWIS
                  </h2>
                  <p className=" text-left  text-sm text-gray-600 font-medium">
                    & PARTNERS
                  </p>
                </div>

                {/* Newsletter Signup */}
                <div className="mb-8">
                  <div className="flex items-center max-w-md">
                    <input
                      type="email"
                      placeholder="Get latest offers to your inbox"
                      className="flex-1 px-0 py-3 text-sm text-gray-700 placeholder-gray-500 bg-transparent border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors duration-200"
                    />
                    <button className="ml-4 p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 group">
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-0.5 transition-transform duration-200"
                      />
                    </button>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4">
                  <div className="w-9 h-9 cursor-pointer bg-white rounded-full flex items-center justify-center shadow">
                    <Facebook size={20} />
                  </div>
                  <div className="w-9 h-9 cursor-pointer bg-white rounded-full flex items-center justify-center shadow">
                    <Instagram size={20} />
                  </div>
                  <div className="w-9 h-9 cursor-pointer bg-white rounded-full flex items-center justify-center shadow">
                    <Twitter size={20} />
                  </div>
                  <div className="w-9 h-9 cursor-pointer bg-white rounded-full flex items-center justify-center shadow">
                    <Mail size={20} />
                  </div>
                </div>
              </div>

              {/* Footer Links - Right Side */}
              <div className="col-span-7">
                <div className="grid grid-cols-3 gap-8">
                  {/* Shop */}
                  <div className="">
                    <h3 className="text-sm font-medium text-gray-900 mb-4 text-start">
                      Shop
                    </h3>
                    <ul className="space-y-3 text-start">
                      <li className="">
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          My account
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          Login
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          Wishlist
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          Cart
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Information */}
                  <div>
                    <h3 className=" text-left text-sm font-medium text-gray-900 mb-4">
                      Information
                    </h3>
                    <ul className=" text-left space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          Shipping Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          Returns & Refunds
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          Cookies Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          Frequently asked
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Company */}
                  <div>
                    <h3 className=" text-left text-sm font-medium text-gray-900 mb-4">
                      Company
                    </h3>
                    <ul className=" text-left space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Logo */}
            <div className="mb-8 text-center">
              <h2 className="text-xl font-light tracking-wider text-gray-900 mb-2">
                JOHN LEWIS
              </h2>
              <p className="text-xs  text-gray-600 font-medium">& PARTNERS</p>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Get latest offers to your inbox"
                  className="flex-1 px-0 py-3 text-sm text-gray-700 placeholder-gray-500 bg-transparent border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors duration-200"
                />
                <button className="ml-4 p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Footer Links - Stacked */}
            <div className="space-y-8">
              {/* Shop */}
              <div className="">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Shop</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      My account
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Cart
                    </a>
                  </li>
                </ul>
              </div>

              {/* Information */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">
                  Information
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Shipping Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Returns & Refunds
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Cookies Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Frequently asked
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <p className="text-xs text-gray-500 text-center lg:text-left">
              © John Lewis plc 2001 - 2024
            </p>

            {/* Language and Currency Selectors */}
            <div className="flex items-center justify-center lg:justify-end space-x-6">
              {/* Language Selector */}
              <div className="relative">
                <button className="flex items-center space-x-2 text-xs text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <span className="w-4 h-3 bg-red-600 relative">
                    <span
                      className="absolute inset-0 bg-blue-600"
                      style={{
                        clipPath: "polygon(0 0, 60% 0, 40% 100%, 0% 100%)",
                      }}
                    ></span>
                    <span
                      className="absolute inset-0 bg-white"
                      style={{
                        clipPath:
                          "polygon(40% 0, 60% 0, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)",
                      }}
                    ></span>
                  </span>
                  <span>English</span>
                  <ChevronDown size={12} />
                </button>
              </div>

              {/* Currency Selector */}
              <div className="relative">
                <button className="flex items-center space-x-1 text-xs text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <span>USD</span>
                  <ChevronDown size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
