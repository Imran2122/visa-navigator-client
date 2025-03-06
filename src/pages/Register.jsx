import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createNewUsers, googleSignIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value || "defaultPhotoUrlHere.jpg"; 
    const password = e.target.password.value;

    createNewUsers(email, password)
      .then((result) => {
        const users = { name, email, photoUrl };
        console.log(result);
        fetch("http://localhost:5000/users", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(users),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire("User added to Firebase");
              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      setUser(result.user);
      navigate("/");
    } catch (error) {
      alert("Google Sign-In Failed: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleRegister}>
          {/* Full Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered input-primary w-full mt-2"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered input-primary w-full mt-2"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Profile Photo URL
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter your photo URL (optional)"
              className="input input-bordered input-primary w-full mt-2"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered input-primary w-full mt-2"
              required
            />
          </div>

          {/* Register Button */}
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full mt-3"
        >
          Sign in with Google
        </button>

        <p className="mt-3 text-center">
          Already have an account?
          <Link to="/login" className="text-blue-500 ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
