
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, // ✅ Import login function
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // User Registration Function ✅
  const createNewUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login Function ✅ (Fix)
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Sign-In Function ✅
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Profile Update Function ✅
  const updateProfileData = async (user, profileData) => {
    return updateProfile(user, profileData);
  };

  // Logout Function ✅
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, userLogin, logout, createNewUsers, updateProfileData, googleSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


