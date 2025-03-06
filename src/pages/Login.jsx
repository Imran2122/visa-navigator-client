import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state
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

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered input-primary w-full mt-2"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered input-primary w-full mt-2"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>

        <p className="mt-4 text-center">
          Don’t Have An Account?{" "}
          <Link to="/register" className="text-blue-500">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
