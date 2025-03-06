// // import { createContext, useEffect, useState } from "react";

// // import {
// //   createUserWithEmailAndPassword,
// //   updateProfile,
// //   signInWithEmailAndPassword,
// //   onAuthStateChanged,
// //   signOut,
 
// //   GoogleAuthProvider,
// //   signInWithPopup,
// // } from "firebase/auth";

// // import { auth } from "../../firebase/firebase.config";

// // export const AuthContext = createContext(null);

// // const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   // ✅ User Registration Function
// //   const createNewUsers = (email, password) => {
// //     return createUserWithEmailAndPassword(auth, email, password);
// //   };

// //   // ✅ Profile Update Function (Fixes applied)
// //   const updateProfileData = async (user, { displayName, photoURL }) => {
// //     return updateProfile(user, { displayName, photoURL });
// //   };

// //   // ✅ User Login Function (Added this)
// //   const userLogin = (email, password) => {
// //     return signInWithEmailAndPassword(auth, email, password);
// //   };
// //   const googleSignIn = () => {
// //     return signInWithPopup(auth, GoogleAuthProvider);
// //   };

// //   // ✅ Logout Function
// //   const logout = async () => {
// //     console.log("Attempting to log out...");
// //     await signOut(auth);
// //     setUser(null); // Ensures UI updates
// //     console.log("User logged out successfully!");
// //   };

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         user,
// //         setUser,
// //         logout,
// //         createNewUsers,
// //         updateProfileData,
// //         userLogin,
// //         googleSignIn
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export default AuthProvider;

// import { createContext, useEffect, useState } from "react";
// import { auth } from "../../firebase/firebase.config";
// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
//   onAuthStateChanged,
//   signOut,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "firebase/auth";

// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   // User Registration Function
//   const createNewUsers = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // Google Sign-In Function ✅
//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     return signInWithPopup(auth, provider);
//   };

//   // Profile Update Function
//   const updateProfileData = async (user, profileData) => {
//     return updateProfile(user, profileData);
//   };

//   // Logout Function
//   const logout = async () => {
//     console.log("Attempting to log out...");
//     await signOut(auth);
//     setUser(null);
//     console.log("User logged out successfully!");
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, setUser, logout, createNewUsers, updateProfileData, googleSignIn }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

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


