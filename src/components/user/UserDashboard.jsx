import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { logout, removeSuccess } from '../../redux/user/userSlice';
import { HiOutlineLogout, HiOutlineShoppingCart, HiOutlineUser, HiOutlineCog, HiOutlineViewGrid } from 'react-icons/hi';

function UserDashboard({ user }) {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuVisible(false);
      }
    }
    if (menuVisible) document.addEventListener("mousedown", handleClick);
    else document.removeEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuVisible]);

  // Action handlers
  function orders() { navigate("/orders/user"); }
  function profile() { navigate("/profile"); }
  function myCart() { navigate("/cart"); }
  function logoutUser() {
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast.success('Logout Successful', { position: 'top-center', autoClose: 3000 });
        dispatch(removeSuccess());
        navigate('/login');
      })
      .catch((error) => {
        toast.error(error.message || 'Logout Failed', { position: 'top-center', autoClose: 3000 });
      });
  }
  function dashboard() { navigate("/admin/dashboard"); }

  // Menu options
  const options = [
    user.role === 'admin'
      ? { name: 'Admin Dashboard', funcName: dashboard, icon: <HiOutlineViewGrid /> }
      : null,
    { name: 'Orders', funcName: orders, icon: <HiOutlineCog /> },
    { name: 'Account', funcName: profile, icon: <HiOutlineUser /> },
    { name: `Cart (${cartItems.length})`, funcName: myCart, icon: <HiOutlineShoppingCart />, isCart: true },
    { name: 'Logout', funcName: logoutUser, icon: <HiOutlineLogout /> }
  ].filter(Boolean);

  return (
    <>
      {/* Profile Section fixed in Navbar */}
    <div className="fixed top-0 right-0 flex items-center h-16 pr-8 z-50 space-x   border-b ">
  {/* Profile Avatar */}
  <img
    src={user.avatar?.url || "/images/profile.png"}
    alt="Profile"
    className="w-12 h-12 rounded-full border-2 border-indigo-500 shadow-sm object-cover mr-3"
  />
  {/* User Name */}
  <span className="text-lg font-bold text-gray-100 hover:text-gray-600 transition-colors">
    {user.name || "User"}
  </span>
  {/* Dropdown Icon Toggle */}
  <button
    className="ml-2 p-2 rounded-full bg-transparent hover:bg-indigo-50 focus:bg-indigo-200 transition"
    onClick={() => setMenuVisible((v) => !v)}
    aria-label="Open user menu"
  >
    <HiOutlineUser className="text-2xl text-amber-400" />
  </button>
</div>


      {/* Overlay for dropdown */}
      {menuVisible && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          aria-label="Overlay"
          onClick={() => setMenuVisible(false)}
        ></div>
      )}

      {/* Profile Dropdown Menu */}
      <div
        ref={menuRef}
        className={`fixed top-20 right-8 z-50 min-w-[240px] bg-white shadow-xl rounded-xl border border-indigo-100 overflow-hidden transition-all duration-300 ${
          menuVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
        aria-label="User menu"
      >
        <div className="px-6 py-4 bg-indigo-50 flex flex-col items-center gap-2 border-b border-indigo-100">
          <img
            src={user.avatar?.url || '/images/profile.png'}
            alt="Profile"
            className="w-16 h-16 rounded-full border-4 border-indigo-300 object-cover"
          />
          <span className="font-bold text-indigo-800 text-lg">{user.name || "User"}</span>
          <span className="text-xs pt-2 text-indigo-400">
            {user.email || ""}
          </span>
        </div>
        <ul className="py-2">
          {options.map(({ name, funcName, icon, isCart }, idx) => (
            <li key={name}
                className="flex items-center px-6 py-3 hover:bg-indigo-100 transition cursor-pointer"
                onClick={() => { funcName(); setMenuVisible(false); }}>
              <span className={`mr-3 text-xl ${isCart ? "text-amber-600" : "text-indigo-700"}`}>{icon}</span>
              <span className={`font-medium text-gray-700 ${isCart ? "font-bold" : ""}`}>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UserDashboard;
