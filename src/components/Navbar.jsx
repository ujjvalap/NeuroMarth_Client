import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useSelector } from 'react-redux';

function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { isAuthenticated } = useSelector(state => state.user);
    const { cartItems } = useSelector(state => state.cart);
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
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-4xl font-extrabold tracking-wide 
  bg-gradient-to-r from-pink-500 via-yellow-400 to-indigo-500 
  bg-clip-text text-transparent drop-shadow-lg
  animate-gradient-x
  hover:scale-110 hover:rotate-1 hover:skew-x-1
  transition-all duration-300 ease-in-out"
                >
                    Neuromart
                </Link>

                {/* Nav Links Desktop */}
                <div className="flex-1 ml-8 hidden md:block">
                    <ul className="flex gap-10">
                        <li><Link to="/" className="text-white hover:text-indigo-200 font-medium transition-colors">Home</Link></li>
                        <li><Link to="/products" className="text-white hover:text-indigo-200 font-medium transition-colors">Products</Link></li>
                        <li><Link to="/about-us" className="text-white hover:text-indigo-200 font-medium transition-colors">About Us</Link></li>
                        <li><Link to="/contact-us" className="text-white hover:text-indigo-200 font-medium transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Icons + Search */}
                <div className="flex items-center gap-6 w-64">
                    {/* Search Input Animation */}
                    <div className="relative flex items-center">
                        <form
                            className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'w-52' : 'w-10'}`}
                            onSubmit={handleSearchSubmit}
                        >
                            <input
                                type="text"
                                className={`py-1 px-3 rounded-l-md border-none focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all bg-white text-indigo-700 ${isSearchOpen ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus={isSearchOpen}
                            />
                            <button
                                type="button"
                                className="p-1 text-white hover:text-indigo-300 transition-colors outline-none focus:outline-none"
                                onClick={() => setIsSearchOpen((v) => !v)}
                                tabIndex={0}
                            >
                                <SearchIcon />
                            </button>
                        </form>
                    </div>

                    {/* Cart */}
                    <div className="relative flex items-center">
                        <Link to="/cart" className="text-white hover:text-indigo-200 transition-colors cursor-pointer">
                            <ShoppingCartIcon />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-indigo-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Register */}
                    {!isAuthenticated && (
                        <Link to="/register" className="text-white hover:text-indigo-200 transition-colors flex items-center">
                            <PersonAddIcon />
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile Nav */}
            {/* ...keep mobile nav as in your code, just update bg-indigo-700 color */}
            <div className={`md:hidden absolute top-16 left-0 right-0 bg-indigo-700 py-4 px-6 border-t border-indigo-300 shadow-md transition-all duration-300 ${isSearchOpen ? "hidden" : "block"}`}>
                <ul className="flex flex-col gap-4">
                    <li><Link to="/" className="text-white hover:text-indigo-200 font-medium">Home</Link></li>
                    <li><Link to="/products" className="text-white hover:text-indigo-200 font-medium">Products</Link></li>
                    <li><Link to="/about-us" className="text-white hover:text-indigo-200 font-medium">About Us</Link></li>
                    <li><Link to="/contact-us" className="text-white hover:text-indigo-200 font-medium">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
