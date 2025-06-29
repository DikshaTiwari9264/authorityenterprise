import { ChevronDown, Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
  <>
  <header className="bg-white border-b border-jl-border">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-jl-black font-light text-lg tracking-wider">
                JOHN LEWIS
                <div className="text-xs tracking-widest">& PARTNERS</div>
              </div>
            </div>
           
            {/* Right side icons */}
            <div className="flex items-center space-x-6">
              <button className="text-jl-black hover:text-jl-gray transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>
               {/* Navigation */}
                <nav className="hidden lg:flex space-x-8">
              <div className="relative group">
                <button className="flex items-center text-jl-black hover:text-jl-gray transition-colors duration-200">
                  Categories
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </nav>
              <div className="flex items-center space-x-1 text-jl-black hover:text-jl-gray transition-colors duration-200 cursor-pointer">
                <User className="h-5 w-5" />
                <span className="text-sm">Sign in</span>
              </div>

              <button className="text-jl-black hover:text-jl-gray transition-colors duration-200">
                <Heart className="h-5 w-5" />
              </button>

              <button className="relative text-jl-black hover:text-jl-gray transition-colors duration-200">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-jl-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-jl-black font-light text-base tracking-wider">
                JOHN LEWIS
                <div className="text-xs tracking-widest">& PARTNERS</div>
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="text-jl-black hover:text-jl-gray transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>

              <button className="relative text-jl-black hover:text-jl-gray transition-colors duration-200">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-jl-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-jl-black hover:text-jl-gray transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-jl-border bg-white">
            <div className="px-4 py-4 space-y-4">
              <div className="flex items-center space-x-2 text-jl-black">
                <User className="h-5 w-5" />
                <span>Sign in</span>
              </div>
              
              <div className="flex items-center space-x-2 text-jl-black">
                <Heart className="h-5 w-5" />
                <span>Wishlist</span>
              </div>

              <div className="pt-4 border-t border-jl-border">
                <button className="flex items-center justify-between w-full text-jl-black">
                  <span>Categories</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  </>
  )
}

export default Header