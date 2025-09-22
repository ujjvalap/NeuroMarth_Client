import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isAuthenticated } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?keyword=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate(`/products`);
    }
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-indigo-700 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl md:text-4xl font-extrabold tracking-wide 
            bg-gradient-to-r from-pink-500 via-yellow-400 to-indigo-500 
            bg-clip-text text-transparent drop-shadow-lg
            hover:scale-110 hover:rotate-1 hover:skew-x-1
            transition-all duration-300 ease-in-out"
        >
          Neuromart
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <ul className="flex gap-8">
            <li>
              <Link
                to="/"
                className="text-white hover:text-indigo-200 font-medium transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-white hover:text-indigo-200 font-medium transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-white hover:text-indigo-200 font-medium transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-white hover:text-indigo-200 font-medium transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side: Search + Cart + Auth */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <form
            className={`flex items-center transition-all duration-300 ${
              isSearchOpen ? "w-52" : "w-10"
            }`}
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              className={`py-1 px-3 rounded-l-md border-none focus:outline-none 
                focus:ring-2 focus:ring-indigo-400 transition-all bg-white 
                text-indigo-700 ${isSearchOpen ? "w-full opacity-100" : "w-0 opacity-0"}`}
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus={isSearchOpen}
            />
            <button
              type="button"
              className="p-1 text-white hover:text-indigo-300 transition-colors"
              onClick={() => setIsSearchOpen((v) => !v)}
            >
              <SearchIcon />
            </button>
          </form>

          {/* Cart */}
          <div className="relative">
            <Link
              to="/cart"
              className="text-white hover:text-indigo-200 transition-colors"
            >
              <ShoppingCartIcon />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          {/* Register / User */}
          {!isAuthenticated && (
            <Link
              to="/register"
              className="text-white hover:text-indigo-200 transition-colors flex items-center"
            >
              <PersonAddIcon />
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-indigo-700 px-6 py-4 border-t border-indigo-500 shadow-md animate-fadeIn">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-indigo-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-white hover:text-indigo-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-white hover:text-indigo-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-white hover:text-indigo-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
