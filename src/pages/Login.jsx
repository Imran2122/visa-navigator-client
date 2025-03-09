// import React, { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../authprovider/AuthProvider";

// const Login = () => {
//   const { userLogin, googleLogin, setUser } = useContext(AuthContext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     const form = new FormData(e.target);
//     const email = form.get("email");
//     const password = form.get("password");

//     try {
//       const result = await userLogin(email, password);
//       setUser(result.user);
//       navigate(location?.state?.from?.pathname || "/");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await googleLogin();
//       setUser(result.user);
//       navigate(location?.state?.from?.pathname || "/");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

//         {error && <p className="text-red-500 text-center">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               className="input input-bordered input-primary w-full mt-2"
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               className="input input-bordered input-primary w-full mt-2"
//               required
//             />
//           </div>

//           <button type="submit" className="btn btn-primary w-full">Login</button>
//         </form>

//         <div className="divider my-4">OR</div>

//         <button 
//           onClick={handleGoogleLogin} 
//           className="btn btn-outline w-full flex items-center justify-center"
//         >
//           <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Google_Toolbar.png" alt="Google" className="w-5 h-5 mr-2"/>
//           Continue with Google
//         </button>

//         <p className="mt-4 text-center">
//           Don’t Have An Account?{" "}
//           <Link to="/register" className="text-blue-500">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../authprovider/AuthProvider";

// const Login = () => {
//   const { userLogin, googleSignIn, setUser } = useContext(AuthContext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     const form = new FormData(e.target);
//     const email = form.get("email");
//     const password = form.get("password");

//     try {
//       const result = await userLogin(email, password);
//       setUser(result.user);
//       navigate(location?.state?.from?.pathname || "/");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await googleSignIn(); // Correct function name
//       setUser(result.user);
//       navigate(location?.state?.from?.pathname || "/");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

//         {error && <p className="text-red-500 text-center">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               className="input input-bordered input-primary w-full mt-2"
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               className="input input-bordered input-primary w-full mt-2"
//               required
//             />
//           </div>

//           <button type="submit" className="btn btn-primary w-full">Login</button>
//         </form>

//         <div className="divider my-4">OR</div>

//         <button 
//           onClick={handleGoogleLogin} 
//           className="btn btn-outline w-full flex items-center justify-center"
//         >
//           <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Google_Toolbar.png" alt="Google" className="w-5 h-5 mr-2"/>
//           Continue with Google
//         </button>

//         <p className="mt-4 text-center">
//           Don’t Have An Account?{" "}
//           <Link to="/register" className="text-blue-500">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../authprovider/AuthProvider";
// import Swal from "sweetalert2";

// const Login = () => {
//   const { userLogin, googleSignIn, setUser } = useContext(AuthContext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     const form = new FormData(e.target);
//     const email = form.get("email");
//     const password = form.get("password");

//     try {
//       const result = await userLogin(email, password);
//       setUser(result.user);
//       Swal.fire({
//         icon: "success",
//         title: "Login Successful",
//         text: "Welcome back!",
//       });
//       navigate(location?.state?.from?.pathname || "/");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await googleSignIn();
//       setUser(result.user);
//       Swal.fire({
//         icon: "success",
//         title: "Google Login Successful",
//         text: "Welcome back!",
//       });
//       navigate(location?.state?.from?.pathname || "/");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-10">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

//         {error && <p className="text-red-500 text-center">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               className="input input-bordered input-primary w-full mt-2"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               className="input input-bordered input-primary w-full mt-2"
//               required
//             />
//           </div>

//           <div className="flex justify-between items-center mb-4">
//             <Link to="/forgot-password" className="text-blue-500 text-sm">
//               Forgot Password?
//             </Link>
//           </div>

//           <button type="submit" className="btn btn-primary w-full">Login</button>
//         </form>

//         <div className="divider my-4">OR</div>

//         <button 
//           onClick={handleGoogleLogin} 
//           className="btn btn-outline w-full flex items-center justify-center"
//         >
//           <img 
//             src="https://upload.wikimedia.org/wikipedia/commons/0/09/Google_Toolbar.png" 
//             alt="Google" 
//             className="w-5 h-5 mr-2"
//             onError={(e) => e.target.src = "https://via.placeholder.com/20"}
//           />
//           Continue with Google
//         </button>

//         <p className="mt-4 text-center">
//           Don’t Have An Account?{" "}
//           <Link to="/register" className="text-blue-500">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";

const Login = () => {
  const { userLogin, googleSignIn, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    try {
      const result = await userLogin(email, password);
      setUser(result.user);
      navigate(location?.state?.from?.pathname || "/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleSignIn();
      setUser(result.user);
      navigate(location?.state?.from?.pathname || "/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered input-primary w-full mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered input-primary w-full mt-2"
              required
            />
          </div>

          <div className="mb-6 text-right">
            <Link to="/forgot-password" className="text-blue-500 text-sm">Forgot Password?</Link>
          </div>

          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>

        <div className="divider my-4">OR</div>

        {/* Google Login Button */}
        <button 
          onClick={handleGoogleLogin} 
          className="btn btn-outline w-full flex items-center justify-center"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" 
            alt="Google" 
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        <p className="mt-4 text-center">
          Don’t Have An Account?{" "}
          <Link to="/register" className="text-blue-500">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;



