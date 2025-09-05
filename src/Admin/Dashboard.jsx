// import React, { useEffect } from 'react';
// import '../AdminStyles/Dashboard.css'
// import {
//     AddBox,
//     AttachMoney,
//     CheckCircle,
//     Dashboard as DashboardIcon,
//     Error,
//     Instagram,
//     Inventory,
//     LinkedIn,
//     People,
//     ShoppingCart,
//     Star,
//     YouTube
// } from '@mui/icons-material'
// import Navbar from '../components/Navbar';
// import PageTitle from '../components/PageTitle';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAdminProducts, fetchAllOrders } from '../features/admin/adminSlice';

// function Dashboard() {
//     const {products,orders,totalAmount}=useSelector(state=>state.admin);
//     const dispatch=useDispatch();
//     useEffect(()=>{
//         dispatch(fetchAdminProducts())
//         dispatch(fetchAllOrders())
//     },[dispatch])
//     const totalProducts=products.length;
//     const totalOrders=orders.length;
//     const outOfStock=products.filter(product=>product.stock===0).length;
//     const inStock=products.filter(product=>product.stock>0).length;
//     const totalReviews=products.reduce((acc,product)=>acc+(product.reviews.length ||0),0)
//   return (
//    <>
//    <Navbar/>
//    <PageTitle title="Admin Dashboard"/>
//     <div className="dashboard-container">
//         <div className="sidebar">
//             <div className="logo">
//                 <DashboardIcon  className="logo-icon"/>
//                 Admin Dashboard
//             </div>
//             <nav className="nav-menu">
//                 <div className="nav-section">
//                     <h3>Products</h3>
//                     <Link to="/admin/products">
//                     <Inventory className='nav-icon'/>
//                     All Products
//                     </Link>
//                     <Link to="/admin/product/create">
//                     <AddBox className='nav-icon'/>
//                     Create Product
//                     </Link>
//                 </div>

//                 <div className="nav-section">
//                     <h3>Users</h3>
//                     <Link to="/admin/users">
//                     <People className='nav-icon'/>
//                     All Users
//                     </Link>
                
//                 </div>

//                 <div className="nav-section">
//                     <h3>Orders</h3>
//                     <Link to="/admin/orders">
//                     <ShoppingCart className='nav-icon'/>
//                     All Orders
//                     </Link>
                
//                 </div>

//                 <div className="nav-section">
//                     <h3>Reviews</h3>
//                     <Link to="/admin/reviews">
//                     <Star className='nav-icon'/>
//                     All Reviews
//                     </Link>
                
//                 </div>
//             </nav>
//         </div>

//         <div className="main-content">
//           <div className="stats-grid">
//             <div className="stat-box">
//                 <Inventory className='icon'/>
//                 <h3>Total Products</h3>
//                 <p>{totalProducts}</p>
//             </div>

//             <div className="stat-box">
//                 <ShoppingCart className='icon'/>
//                 <h3>Total Orders</h3>
//                 <p>{totalOrders}</p>
//             </div>

//             <div className="stat-box">
//                 <Star className='icon'/>
//                 <h3>Total Reviews</h3>
//                 <p>{totalReviews}</p>
//             </div>

//             <div className="stat-box">
//                 <AttachMoney className='icon'/>
//                 <h3>Total Revenue</h3>
//                 <p>{totalAmount}/-</p>
//             </div>

//             <div className="stat-box">
//                 <Error className='icon'/>
//                 <h3>Out Of Stock</h3>
//                 <p>{outOfStock}</p>
//             </div>

//             <div className="stat-box">
//                 <CheckCircle className='icon'/>
//                 <h3>In Stock</h3>
//                 <p>{inStock}</p>
//             </div>
//           </div>

//           <div className="social-stats">
//             <div className="social-box instagram">
//                 <Instagram/>
//                 <h3>Instagram</h3>
//                 <p>123K Followers</p>
//                 <p>12 posts</p>
//             </div>

//             <div className="social-box linkedin">
//                 <LinkedIn/>
//                 <h3>LinkedIn</h3>
//                 <p>55K Followers</p>
//                 <p>6 posts</p>
//             </div>

//             <div className="social-box youtube">
//                 <YouTube/>
//                 <h3>YouTube</h3>
//                 <p>45K Followers</p>
//                 <p>500 posts</p>
//             </div>
//           </div>
//         </div>
//     </div>
//    </>
//   )
// }

// export default Dashboard



// import React, { useEffect, useState } from 'react';
// import {
//   AddBox,
//   AttachMoney,
//   CheckCircle,
//   Dashboard as DashboardIcon,
//   Error,
//   Instagram,
//   Inventory,
//   LinkedIn,
//   People,
//   ShoppingCart,
//   Star,
//   YouTube,
//   Menu,
//   Close
// } from '@mui/icons-material';
// import Navbar from '../components/Navbar';
// import PageTitle from '../components/PageTitle';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAdminProducts, fetchAllOrders } from '../features/admin/adminSlice';

// function Dashboard() {
//   const { products, orders, totalAmount } = useSelector(state => state.admin);
//   const dispatch = useDispatch();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       await Promise.all([
//         dispatch(fetchAdminProducts()),
//         dispatch(fetchAllOrders())
//       ]);
//       setLoading(false);
//     };
//     loadData();
//   }, [dispatch]);

//   // Calculate statistics
//   const totalProducts = products.length;
//   const totalOrders = orders.length;
//   const outOfStock = products.filter(product => product.stock === 0).length;
//   const inStock = products.filter(product => product.stock > 0).length;
//   const totalReviews = products.reduce((acc, product) => acc + (product.reviews.length || 0), 0);

//   // Format currency
//   const formattedTotalAmount = new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: 'INR',
//     maximumFractionDigits: 0
//   }).format(totalAmount);

//   // Stats data for mapping
//   const stats = [
//     { icon: Inventory, title: 'Total Products', value: totalProducts, color: 'bg-blue-500' },
//     { icon: ShoppingCart, title: 'Total Orders', value: totalOrders, color: 'bg-green-500' },
//     { icon: Star, title: 'Total Reviews', value: totalReviews, color: 'bg-amber-500' },
//     { icon: AttachMoney, title: 'Total Revenue', value: formattedTotalAmount, color: 'bg-emerald-500' },
//     { icon: Error, title: 'Out Of Stock', value: outOfStock, color: 'bg-red-500' },
//     { icon: CheckCircle, title: 'In Stock', value: inStock, color: 'bg-teal-500' },
//   ];

//   // Social stats data
//   const socialStats = [
//     { icon: Instagram, name: 'Instagram', followers: '123K', posts: '12', color: 'bg-pink-500' },
//     { icon: LinkedIn, name: 'LinkedIn', followers: '55K', posts: '6', color: 'bg-blue-600' },
//     { icon: YouTube, name: 'YouTube', followers: '45K', posts: '500', color: 'bg-red-500' },
//   ];

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <PageTitle title="Admin Dashboard" />
      
//       {/* Mobile sidebar toggle */}
//       <div className="fixed top-4 left-4 z-50 md:hidden">
//         <button 
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="p-2 rounded-md bg-blue-600 text-white shadow-lg focus:outline-none"
//         >
//           {sidebarOpen ? <Close /> : <Menu />}
//         </button>
//       </div>

//       <div className="flex pt-16">
//         {/* Sidebar */}
//         <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//           <div className="flex items-center justify-center h-16 bg-gray-900 px-4">
//             <DashboardIcon className="text-white mr-2" />
//             <span className="text-white font-bold text-xl">Admin Dashboard</span>
//           </div>
          
//           <nav className="mt-8 px-4">
//             <div className="mb-6">
//               <h3 className="text-gray-400 uppercase text-xs font-semibold px-3 mb-3">Products</h3>
//               <Link 
//                 to="/admin/products" 
//                 className="flex items-center px-3 py-3 text-gray-300 hover:bg-gray-700 rounded-lg mb-1 transition-colors duration-200"
//                 onClick={() => setSidebarOpen(false)}
//               >
//                 <Inventory className="mr-3" />
//                 All Products
//               </Link>
//               <Link 
//                 to="/admin/product/create" 
//                 className="flex items-center px-3 py-3 text-gray-300 hover:bg-gray-700 rounded-lg mb-1 transition-colors duration-200"
//                 onClick={() => setSidebarOpen(false)}
//               >
//                 <AddBox className="mr-3" />
//                 Create Product
//               </Link>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-gray-400 uppercase text-xs font-semibold px-3 mb-3">Users</h3>
//               <Link 
//                 to="/admin/users" 
//                 className="flex items-center px-3 py-3 text-gray-300 hover:bg-gray-700 rounded-lg mb-1 transition-colors duration-200"
//                 onClick={() => setSidebarOpen(false)}
//               >
//                 <People className="mr-3" />
//                 All Users
//               </Link>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-gray-400 uppercase text-xs font-semibold px-3 mb-3">Orders</h3>
//               <Link 
//                 to="/admin/orders" 
//                 className="flex items-center px-3 py-3 text-gray-300 hover:bg-gray-700 rounded-lg mb-1 transition-colors duration-200"
//                 onClick={() => setSidebarOpen(false)}
//               >
//                 <ShoppingCart className="mr-3" />
//                 All Orders
//               </Link>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-gray-400 uppercase text-xs font-semibold px-3 mb-3">Reviews</h3>
//               <Link 
//                 to="/admin/reviews" 
//                 className="flex items-center px-3 py-3 text-gray-300 hover:bg-gray-700 rounded-lg mb-1 transition-colors duration-200"
//                 onClick={() => setSidebarOpen(false)}
//               >
//                 <Star className="mr-3" />
//                 All Reviews
//               </Link>
//             </div>
//           </nav>
//         </div>

//         {/* Main content */}
//         <div className="flex-1 p-6 md:ml-0">
//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//             {stats.map((stat, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div className="flex items-center">
//                   <div className={`p-3 rounded-full ${stat.color} text-white mr-4`}>
//                     <stat.icon />
//                   </div>
//                   <div>
//                     <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
//                     <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
//                   </div>
//                 </div>
//                 <div className="mt-4 pt-4 border-t border-gray-100">
//                   <span className="text-xs text-gray-500">Updated just now</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Social Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {socialStats.map((social, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div className="flex items-center mb-4">
//                   <div className={`p-3 rounded-full ${social.color} text-white mr-3`}>
//                     <social.icon />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800">{social.name}</h3>
//                 </div>
//                 <div className="space-y-2">
//                   <p className="flex justify-between">
//                     <span className="text-gray-600">Followers:</span>
//                     <span className="font-medium">{social.followers}</span>
//                   </p>
//                   <p className="flex justify-between">
//                     <span className="text-gray-600">Posts:</span>
//                     <span className="font-medium">{social.posts}</span>
//                   </p>
//                 </div>
//                 <button className="mt-4 w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-200 text-sm font-medium">
//                   View Analytics
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Quick Actions */}
//           <div className="mt-8 bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//               <Link 
//                 to="/admin/product/create" 
//                 className="flex flex-col items-center justify-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
//               >
//                 <AddBox className="text-blue-600 mb-2" />
//                 <span className="text-blue-600 font-medium">Add Product</span>
//               </Link>
//               <Link 
//                 to="/admin/orders" 
//                 className="flex flex-col items-center justify-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200"
//               >
//                 <ShoppingCart className="text-green-600 mb-2" />
//                 <span className="text-green-600 font-medium">View Orders</span>
//               </Link>
//               <Link 
//                 to="/admin/users" 
//                 className="flex flex-col items-center justify-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200"
//               >
//                 <People className="text-purple-600 mb-2" />
//                 <span className="text-purple-600 font-medium">Manage Users</span>
//               </Link>
//               <Link 
//                 to="/admin/reviews" 
//                 className="flex flex-col items-center justify-center p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors duration-200"
//               >
//                 <Star className="text-amber-600 mb-2" />
//                 <span className="text-amber-600 font-medium">Check Reviews</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Overlay for mobile sidebar */}
//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;




import React, { useEffect, useState } from 'react';
import {
  AddBox,
  AttachMoney,
  CheckCircle,
  Dashboard as DashboardIcon,
  Error,
  Instagram,
  Inventory,
  LinkedIn,
  People,
  ShoppingCart,
  Star,
  YouTube,
  Menu,
  Close
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminProducts, fetchAllOrders } from '../features/admin/adminSlice';

function Dashboard() {
  const { products, orders, totalAmount } = useSelector(state => state.admin);
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([
        dispatch(fetchAdminProducts()),
        dispatch(fetchAllOrders())
      ]);
      setLoading(false);
    };
    loadData();
  }, [dispatch]);

  const totalProducts = products.length;
  const totalOrders = orders.length;
  const outOfStock = products.filter(product => product.stock === 0).length;
  const inStock = products.filter(product => product.stock > 0).length;
  const totalReviews = products.reduce((acc, product) => acc + (product.reviews.length || 0), 0);

  const formattedTotalAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(totalAmount);

  const stats = [
    { icon: Inventory, title: 'Total Products', value: totalProducts, color: 'bg-blue-600' },
    { icon: ShoppingCart, title: 'Total Orders', value: totalOrders, color: 'bg-green-600' },
    { icon: Star, title: 'Total Reviews', value: totalReviews, color: 'bg-yellow-400' },
    { icon: AttachMoney, title: 'Total Revenue', value: formattedTotalAmount, color: 'bg-emerald-600' },
    { icon: Error, title: 'Out Of Stock', value: outOfStock, color: 'bg-red-600' },
    { icon: CheckCircle, title: 'In Stock', value: inStock, color: 'bg-teal-600' },
  ];

  const socialStats = [
    { icon: Instagram, name: 'Instagram', followers: '123K', posts: '12', color: 'bg-pink-500' },
    { icon: LinkedIn, name: 'LinkedIn', followers: '55K', posts: '6', color: 'bg-blue-700' },
    { icon: YouTube, name: 'YouTube', followers: '45K', posts: '500', color: 'bg-red-600' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      <PageTitle title="Admin Dashboard" />

      {/* Mobile sidebar toggle */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-3 rounded-lg bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? <Close fontSize="medium" /> : <Menu fontSize="medium" />}
        </button>
      </div>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-gray-300 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 rounded-r-lg shadow-xl
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
          aria-label="Sidebar Navigation"
        >
          <div className="flex items-center justify-center h-16 bg-gray-800 rounded-r-lg shadow-inner px-6 border-b border-gray-700">
            <DashboardIcon className="text-white mr-3" fontSize="large" />
            <h1 className="text-white font-extrabold text-xl tracking-wide select-none">Admin Dashboard</h1>
          </div>

          <nav className="mt-10 px-4" aria-label="Main navigation">
            {[{
              heading: 'Products',
              links: [
                { to: "/admin/products", icon: Inventory, label: "All Products" },
                { to: "/admin/product/create", icon: AddBox, label: "Create Product" }
              ]
            }, {
              heading: 'Users',
              links: [
                { to: "/admin/users", icon: People, label: "All Users" }
              ]
            }, {
              heading: 'Orders',
              links: [
                { to: "/admin/orders", icon: ShoppingCart, label: "All Orders" }
              ]
            }, {
              heading: 'Reviews',
              links: [
                { to: "/admin/reviews", icon: Star, label: "All Reviews" }
              ]
            }].map(({ heading, links }, i) => (
              <div key={i} className="mb-8">
                <h3 className="uppercase text-xs font-semibold tracking-wide text-gray-500 mb-4 pl-3 select-none">{heading}</h3>
                {links.map(({ to, icon: IconComp, label }) => (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <IconComp className="mr-3 text-lg" />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 md:ml-0">
          {/* Stats Grid */}
          <section aria-label="Statistics overview" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {stats.map(({ icon: IconComp, title, value, color }, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow duration-300 focus-within:ring-4 focus-within:ring-blue-400"
                tabIndex={0}
              >
                <div className="flex items-center">
                  <div className={`p-4 rounded-full ${color} text-white shadow-md mr-5 flex items-center justify-center`}>
                    <IconComp fontSize="large" />
                  </div>
                  <div>
                    <h2 className="text-gray-400 font-medium text-sm tracking-wide">{title}</h2>
                    <p className="text-3xl font-extrabold text-gray-900">{value}</p>
                  </div>
                </div>
                <p className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 select-none">Updated just now</p>
              </div>
            ))}
          </section>

          {/* Social Stats */}
          <section aria-label="Social media overview" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {socialStats.map(({ icon: IconComp, name, followers, posts, color }, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 focus-within:ring-4 focus-within:ring-blue-400"
                tabIndex={0}
              >
                <header className="flex items-center mb-4">
                  <div className={`${color} p-3 rounded-full text-white shadow-md mr-4 flex items-center justify-center`}>
                    <IconComp fontSize="large" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                </header>
                <div className="space-y-2 text-gray-700 font-medium select-none">
                  <p className="flex justify-between">
                    <span>Followers:</span> <span>{followers}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Posts:</span> <span>{posts}</span>
                  </p>
                </div>
                <button
                  className="mt-6 w-full py-3 bg-gray-100 rounded-lg text-gray-900 font-semibold hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={`View analytics for ${name}`}
                >
                  View Analytics
                </button>
              </article>
            ))}
          </section>

          {/* Quick Actions */}
          <section aria-label="Quick administrative actions" className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 select-none">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <Link
                to="/admin/product/create"
                className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-400"
                aria-label="Add a new product"
              >
                <AddBox className="text-blue-600 mb-3" fontSize="large" />
                <span className="text-blue-600 font-semibold text-lg">Add Product</span>
              </Link>
              <Link
                to="/admin/orders"
                className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-green-400"
                aria-label="View orders"
              >
                <ShoppingCart className="text-green-600 mb-3" fontSize="large" />
                <span className="text-green-600 font-semibold text-lg">View Orders</span>
              </Link>
              <Link
                to="/admin/users"
                className="flex flex-col items-center justify-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-purple-400"
                aria-label="Manage users"
              >
                <People className="text-purple-600 mb-3" fontSize="large" />
                <span className="text-purple-600 font-semibold text-lg">Manage Users</span>
              </Link>
              <Link
                to="/admin/reviews"
                className="flex flex-col items-center justify-center p-6 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-amber-400"
                aria-label="Check reviews"
              >
                <Star className="text-amber-600 mb-3" fontSize="large" />
                <span className="text-amber-600 font-semibold text-lg">Check Reviews</span>
              </Link>
            </div>
          </section>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          aria-label="Close sidebar"
        />
      )}
    </div>
  );
}

export default Dashboard;
