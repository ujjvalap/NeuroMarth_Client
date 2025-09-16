import React, { useEffect } from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/user/userSlice';
import UserDashboard from './components/user/UserDashboard';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/auth/UpdatePassword';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import OrderConfirm from './components/cart/OrderConfirm';
import Payment from './components/cart/Payment';
import PaymentSuccess from './components/cart/PaymentSuccess';
import MyOrders from './components/orders/MyOrders';
import OrderDetails from './components/orders/OrderDetails';
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import CreateProduct from './components/admin/CreateProduct';
import UpdateProduct from './components/admin/UpdateProduct';
import UsersList from './components/admin/UsersList';
import UpdateRole from './components/admin/UpdateRole';
import OrdersList from './components/admin/OrdersList';
import UpdateOrder from './components/admin/UpdateOrder';
import ReviewsList from './components/admin/ReviewsList';

import NotFound from './shared/Notfound';

function App() {
  const {isAuthenticated,user}=useSelector(state=>state.user);
  const dispatch=useDispatch()
  useEffect(()=>{
    if(isAuthenticated){
      dispatch(loadUser())
    }
  },[dispatch])
  
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:keyword" element={<Products/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<ProtectedRoute element={<Profile/>}/>}/>
      <Route path="/profile/update" element={<ProtectedRoute element={<UpdateProfile/>}/>}/>
      <Route path="/password/update" element={<ProtectedRoute element={<UpdatePassword/>}/>}/>
      <Route path="/password/forgot" element={<ForgotPassword/>}/>
      <Route path="/reset/:token" element={<ResetPassword/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/shipping" element={<ProtectedRoute element={<Shipping/>}/>}/>
      <Route path="/order/confirm" element={<ProtectedRoute element={<OrderConfirm/>}/>}/>
      <Route path="/process/payment" element={<ProtectedRoute element={<Payment/>}/>}/>
      <Route path="/paymentSuccess" element={<ProtectedRoute element={<PaymentSuccess/>}/>}/>
      <Route path="/orders/user" element={<ProtectedRoute element={<MyOrders/>}/>}/>
      <Route path="/order/:orderId" element={<ProtectedRoute element={<OrderDetails/>}/>}/>
      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<ProtectedRoute element={<Dashboard/>} adminOnly={true}/>}/>
      <Route path="/admin/products" element={<ProtectedRoute element={<ProductsList/>} adminOnly={true}/>}/>
      <Route path="/admin/product/create" element={<ProtectedRoute element={<CreateProduct/>} adminOnly={true}/>}/>
      <Route path="/admin/product/:updateId" element={<ProtectedRoute element={<UpdateProduct/>} adminOnly={true}/>}/>
      <Route path="/admin/users" element={<ProtectedRoute element={<UsersList/>} adminOnly={true}/>}/>
      <Route path="/admin/user/:userId" element={<ProtectedRoute element={<UpdateRole/>} adminOnly={true}/>}/>
      <Route path="/admin/orders" element={<ProtectedRoute element={<OrdersList/>} adminOnly={true}/>}/>
      <Route path="/admin/order/:orderId" element={<ProtectedRoute element={<UpdateOrder/>} adminOnly={true}/>}/>
      <Route path="/admin/reviews" element={<ProtectedRoute element={<ReviewsList/>} adminOnly={true}/>}/>


      {/* Catch-all Route for NotFound Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    {isAuthenticated && <UserDashboard user={user}/>}

    
      
   </Router>
  )
}

export default App
