import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useSelector } from 'react-redux';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
   

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
    };

    return (
        <nav className="fixed top-0 w-full bg-slate-300 shadow-sm z-50 ">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between ">
                {/* Logo */}

                <div>
                    <Link
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent 
                                    drop-shadow-lg transition-all duration-500 ease-in-out 
                                    hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]"> Neuromart</Link>
                </div>


                {/* Navigation Links - Desktop */}
                <div className="flex-1 ml-8 hidden md:block">
                    <ul className="flex list-none gap-10 m-0 p-0">
                        <li onClick={() => setIsMenuOpen(false)}>
                            <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200">Home</Link>
                        </li>
                        <li>
                            <Link to="/products" className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200">Products</Link>
                        </li>
                        <li>
                            <Link to="/about-us" className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Icons Section */}
                <div className="flex items-center gap-6 w-64">
                    {/* Search Container */}
                    <div className="relative">
                        <form
                            className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'w-56' : 'w-10'}`}
                            onSubmit={handleSearchSubmit}
                        >
                            <input
                                type="text"
                                className={`py-1 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${isSearchOpen ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
                                placeholder="Search products.."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                type="button"
                                className="p-1 text-gray-700 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
                                onClick={toggleSearch}
                            >
                                <SearchIcon />
                            </button>
                        </form>
                    </div>

                    {/* Cart Container */}
                    <div className="relative flex items-center">
                        <Link
                            to="/cart"
                            className="text-gray-700 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
                        >
                            <ShoppingCartIcon />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center min-w-5">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Register Link */}
                    {!isAuthenticated && (
                        <Link
                            to="/register"
                            className="text-gray-700 hover:text-blue-500 transition-colors duration-200 cursor-pointer no-underline flex items-center"
                        >
                            <PersonAddIcon />
                        </Link>
                    )}
                    
                </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className={`md:hidden absolute top-16 left-0 right-0 bg-white py-4 px-6 border-t border-gray-200 shadow-md transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col list-none gap-4 m-0 p-0">
                    <li className="py-2" onClick={() => setIsMenuOpen(false)}>
                        <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200 block">Home</Link>
                    </li>
                    <li className="py-2">
                        <Link to="/products" className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200 block">Products</Link>
                    </li>
                    <li className="py-2">
                        <Link to="/about-us" className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200 block">About Us</Link>
                    </li>
                    <li className="py-2">
                        <Link to="/contact-us" className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200 block">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

