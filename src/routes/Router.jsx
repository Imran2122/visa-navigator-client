// import { createBrowserRouter } from "react-router-dom";
// import Root from "../layouts/Root";
// //import ErrorPage from "../pages/ErrorPage";
// import Home from "../pages/Home";
// import AllVisas from "../pages/AllVisas";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import AddVisa from "../pages/AddVisa";
// import MyAddedVisas from "../pages/MyAddedVisas";
// import MyVisaApplications from "../pages/MyVisaApplications";
// import PrivateRoute from "./PrivateRoute";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     // errorElement: <ErrorPage />,
//     children: [
//       { path: "/", element: <Home /> },
//       {
//         path: "/all-visas",
//         element: <AllVisas />,
//         loader: () => fetch("http://localhost:5000/add-visa"),
//       },
//       {
//         path:'path="/visa/:id"',

//         // loader:({params})=>fetch(`http://localhost:5000/add-visa${params.id}`)

//       },
//       { path: "/login", element: <Login /> },

//       { path: "/register", element: <Register /> },

//       // 🔒 Private Routes (User Logged In Required)
//       {
//         path: "/add-visa",
//         element: (
//           <PrivateRoute>
//             <AddVisa />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/my-added-visas",
//         element: (
//           <PrivateRoute>
//             <MyAddedVisas />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/my-visa-applications",

//         element: (
//           <PrivateRoute>
//             <MyVisaApplications />
//           </PrivateRoute>
//         ),
//       },
//     ],
//   },
// ]);
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
// import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllVisas from "../pages/AllVisas";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVisa from "../pages/AddVisa";
import MyAddedVisas from "../pages/MyAddedVisas";
import MyVisaApplications from "../pages/MyVisaApplications";

import PrivateRoute from "./PrivateRoute";
import VisaDetails from "../pages/VisaDetails";
import UpdateVisa from "../pages/UpdateVisa";
import ErrorPage from "../pages/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/all-visas",
        element: <AllVisas />,
        loader: () => fetch("http://localhost:5000/add-visa"),
      },
      {
        path: "/updateVisa/:id",
        element:<UpdateVisa></UpdateVisa>,
        loader:({params})=>fetch(`http://localhost:5000/add-visa/${params.id}`)

      },
      {
        path: "/visa/:id",
        element: <VisaDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/visa/${params.id}`).then((res) => {
            if (!res.ok) {
              throw new Response("Visa not found", { status: 404 });
            }
            return res.json();
          }),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },

    
      {
        path: "/add-visa",
        element: (
          <PrivateRoute>
            <AddVisa />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-added-visas",
        element: (
          <PrivateRoute>
            <MyAddedVisas />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/add-visa"),
      },
      {
        path: "/my-visa-applications",
        element: (
          <PrivateRoute>
            <MyVisaApplications />
          </PrivateRoute>
        ),
        loader:()=>fetch('http://localhost:5000/users')

    
      },
    ],
  },
]);
