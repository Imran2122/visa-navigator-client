


import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { AuthContext } from "../authprovider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = async () => {
    console.log("Logout button clicked!");
    await logout();
    window.location.reload(); 
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-white">
          Visa Navigator
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/all-visas" className="nav-link">All Visas</NavLink>
          {user && (
            <>
              <NavLink to="/add-visa" className="nav-link">Add Visa</NavLink>
              <NavLink to="/my-added-visas" className="nav-link">My Added Visas</NavLink>
              <NavLink to="/my-applications" className="nav-link">My Visa Applications</NavLink>
            </>
          )}
        </div>

        {/* Right Section: Theme Toggle + User Auth */}
        <div className="flex items-center space-x-4">
          {/* Dark/Light Mode Toggle */}
          <button onClick={toggleTheme} className="text-xl">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-500" />}
          </button>

          {/* Authentication */}
          {user ? (
            <div className="relative group">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border cursor-pointer"
              />
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-md p-3 rounded-lg top-12 right-0">
                <p className="text-sm font-semibold text-gray-700 dark:text-white">{user.displayName || "User"}</p>
                <button
                  onClick={handleLogout}
                  className="mt-2 block w-full text-center text-red-600 "
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <NavLink to="/login" className="nav-link">Login</NavLink>
              <NavLink to="/register" className="nav-link">Register</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

