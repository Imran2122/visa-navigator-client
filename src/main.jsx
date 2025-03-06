import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";



import AuthProvider from "./authprovider/AuthProvider";
import { router } from "./routes/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
