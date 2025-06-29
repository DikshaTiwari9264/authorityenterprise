import React from 'react';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <Menu className="h-5 w-5" />
          </button>
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">FASHION</h1>
          </div>
          
          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Women</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Men</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Kids</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Sale</a>
          </nav> */}
          
          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900" />
            <User className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900" />
            <div className="relative">
              <ShoppingBag className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;