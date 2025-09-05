// import React, { useEffect, useState } from 'react';
// import '../UserStyles/Form.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import {useSelector,useDispatch} from 'react-redux';
// import { register, removeErrors, removeSuccess } from '../features/user/userSlice';
// function Register() {
//     const [user,setUser]=useState({
//         name:'',
//         email:'',
//         password:''
//     })
//     const [avatar,setAvatar]=useState("");
//     const [avatarPreview,setAvatarPreview]=useState('./images/profile.png')
//     const {name,email,password}=user;
//     const {success,loading,error}=useSelector(state=>state.user)
//     const dispatch=useDispatch()
//     const navigate=useNavigate();
//     const registerDataChange=(e)=>{
//         if(e.target.name==='avatar'){
//             const reader=new FileReader();
//             reader.onload=()=>{
//                 if(reader.readyState===2){
//                     setAvatarPreview(reader.result)
//                     setAvatar(reader.result)
//                 }
//             }
//             reader.readAsDataURL(e.target.files[0]);
//         }else{
//             setUser({...user,[e.target.name]:e.target.value})            
//         }
//     }

//     const registerSubmit=(e)=>{
//         e.preventDefault();
//         if(!name || !email || !password){
//             toast.error('Please fill out all the required fields',{position:'top-center',autoClose:3000})
//             return;
//         }
//        const myForm= new FormData();
//        myForm.set('name',name)
//        myForm.set('email',email)
//        myForm.set('password',password)
//        myForm.set('avatar',avatar)
//        dispatch(register(myForm))
//     }
//       useEffect(()=>{
//         if(error){
//           toast.error(error,{position:'top-center',autoClose:3000});
//           dispatch(removeErrors())
//         }
//       },[dispatch,error])
//       useEffect(()=>{
//         if(success){
//           toast.success("Registration SuccessFul",{position:'top-center',autoClose:3000});
//           dispatch(removeSuccess())
//           navigate('/login')
//         }
//       },[dispatch,success])
//   return (
//     <div className="form-container container">
//         <div className="form-content">
//             <form className="form" onSubmit={registerSubmit} encType="multipart/form-data">
//                 <h2>Sign Up</h2>
//                 <div className="input-group">
//                     <input type="text" placeholder='Username' name="name" value={name} onChange={registerDataChange}/>
//                 </div>
//                 <div className="input-group">
//                     <input type="email" placeholder='Email' name="email" value={email} onChange={registerDataChange}/>
//                 </div>
//                 <div className="input-group">
//                     <input type="password" placeholder='Password' name="password" value={password} onChange={registerDataChange}/>
//                 </div>
//                 <div className="input-group avatar-group">
//                     <input type="file" name="avatar" className='file-input' accept='image/'onChange={registerDataChange}/>
//                     <img src={avatarPreview} alt="Avatar Preview" className='avatar'/>
//                 </div>
//                 <button className="authBtn">{loading?'Signing Up':'Sign Up'}</button>
//                 <p className="form-links">
//                 Already have an account?<Link to="/login">Sign in here</Link>
//                 </p>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Register




import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register, removeErrors, removeSuccess } from "../features/user/userSlice";

function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/images/profile.png");

  const { name, email, password } = user;
  const { success, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill out all the required fields", { position: "top-center", autoClose: 3000 });
      return;
    }
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { position: "top-center", autoClose: 3000 });
      dispatch(removeErrors());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (success) {
      toast.success("Registration Successful", { position: "top-center", autoClose: 3000 });
      dispatch(removeSuccess());
      navigate("/login");
    }
  }, [dispatch, success, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-lg p-8 space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>

        <form onSubmit={registerSubmit} encType="multipart/form-data" className="space-y-6">
          <input
            type="text"
            name="name"
            value={name}
            onChange={registerDataChange}
            placeholder="Username"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
            aria-label="Username"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={registerDataChange}
            placeholder="Email"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
            aria-label="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={registerDataChange}
            placeholder="Password"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
            aria-label="Password"
          />

          <div className="flex items-center space-x-6">
            <label
              htmlFor="avatar"
              className="cursor-pointer rounded-full overflow-hidden border-2 border-gray-300 hover:border-indigo-500 transition"
            >
              <img src={avatarPreview} alt="Avatar Preview" className="w-20 h-20 object-cover" />
            </label>
            <input
              id="avatar"
              name="avatar"
              type="file"
              accept="image/*"
              onChange={registerDataChange}
              className="hidden"
              aria-label="Upload avatar"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold rounded-xl shadow-lg hover:from-indigo-700 hover:to-purple-800 transition transform duration-300 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-indigo-500 flex justify-center items-center gap-3"
          >
            {loading ? (
              <svg
                className="animate-spin h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:text-indigo-800 font-semibold">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
