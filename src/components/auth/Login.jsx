// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login, removeErrors, removeSuccess } from "../../redux/user/userSlice";
// import { toast } from "react-toastify";

// function Login() {
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const { error, loading, success, isAuthenticated } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const redirect = new URLSearchParams(location.search).get("redirect") || "/";

//   const loginSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login({ email: loginEmail, password: loginPassword }));
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error, { position: "top-center", autoClose: 3000 });
//       dispatch(removeErrors());
//     }
//   }, [dispatch, error]);

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate(redirect);
//     }
//   }, [isAuthenticated, navigate, redirect]);

//   useEffect(() => {
//     if (success) {
//       toast.success("Login Successful", { position: "top-center", autoClose: 3000 });
//       dispatch(removeSuccess());
//     }
//   }, [dispatch, success]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-lg">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
//         <form className="mt-8 space-y-6" onSubmit={loginSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="email-address" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={loginEmail}
//                 onChange={(e) => setLoginEmail(e.target.value)}
//                 className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//               />
//             </div>
//             <div className="pt-4">
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 value={loginPassword}
//                 onChange={(e) => setLoginPassword(e.target.value)}
//                 className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//               />
//             </div>
//           </div>

//           <button
//             disabled={loading}
//             type="submit"
//             className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
//           >
//             {loading ? "Signing In..." : "Sign In"}
//           </button>

//           <div className="flex flex-col items-center mt-4 space-y-2 text-sm text-gray-600">
//             <Link to="/password/forgot" className="text-indigo-600 hover:text-indigo-800">
//               Forgot your password?
//             </Link>
//             <span>
//               Don't have an account?{" "}
//               <Link to="/register" className="text-indigo-600 hover:text-indigo-800 font-semibold">
//                 Sign up here
//               </Link>
//             </span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?keyword=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/products");
    }
    setSearchQuery("");
  };

  return (
    <nav className="bg-blue-600 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold hover:text-gray-100">
            Neuromart
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 ml-8 items-center justify-between">
            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className="flex flex-1 max-w-xl items-center rounded bg-white overflow-hidden"
            >
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="px-3 bg-yellow-400 text-black hover:bg-yellow-500 transition"
              >
                <FaSearch />
              </button>
            </form>

            {/* Links and Icons */}
            <div className="flex items-center gap-6 ml-6">
              <Link
                to="/products"
                className="hover:text-gray-200 font-medium"
              >
                Products
              </Link>
              <Link
                to="/about-us"
                className="hover:text-gray-200 font-medium"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="hover:text-gray-200 font-medium"
              >
                Contact Us
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative flex items-center hover:text-gray-200"
              >
                <HiOutlineShoppingCart className="text-2xl" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 text-xs bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              {/* Profile */}
              {isAuthenticated ? (
                <Link
                  to="/profile"
                  className="flex items-center gap-2 hover:text-gray-200"
                >
                  <img
                    src={user.avatar?.url || "/images/profile.png"}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <span className="hidden sm:block font-semibold">
                    {user.name}
                  </span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 font-semibold hover:text-gray-200"
                >
                  <HiOutlineUser className="text-2xl" />
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenu ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-blue-600 px-4 pt-4 pb-2 space-y-3">
          <form onSubmit={handleSearch} className="flex items-center w-full mb-2">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-3 py-2 text-gray-800 rounded-l focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="px-3 bg-yellow-400 text-black rounded-r hover:bg-yellow-500"
            >
              <FaSearch />
            </button>
          </form>

          <Link to="/products" className="block hover:text-gray-200 font-medium">
            Products
          </Link>
          <Link to="/about-us" className="block hover:text-gray-200 font-medium">
            About Us
          </Link>
          <Link to="/contact-us" className="block hover:text-gray-200 font-medium">
            Contact Us
          </Link>
          <Link to="/cart" className="relative block hover:text-gray-200 font-medium">
            Cart ({cartItems.length})
          </Link>
          {isAuthenticated ? (
            <Link
              to="/profile"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <img
                src={user.avatar?.url || "/images/profile.png"}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <span>{user.name}</span>
            </Link>
          ) : (
            <Link to="/login" className="flex items-center gap-2 hover:text-gray-200 font-semibold">
              <HiOutlineUser className="text-2xl" />
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
