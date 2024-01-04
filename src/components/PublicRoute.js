import React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}


// import React from "react";
// import { Navigate } from "react-router-dom";

// export default function PublicRoute({ children }) {
//   const isAuthenticated = !!localStorage.getItem("token");

//   if (isAuthenticated) {
//     return <Navigate to="/" />;
//   } else {
//     return children;
//   }
// }


// import React from "react";
// import { Navigate } from "react-router-dom";

// export default function PublicRoute({ children }) {
//   const isGuest = localStorage.getItem("isGuest");

//   if (isGuest) {
//     // Redirect to the dashboard or any other route for guests
//     return <Navigate to="/dashboard" />;
//   } else if (localStorage.getItem("token")) {
//     // Redirect authenticated users to the home page
//     return <Navigate to="/" />;
//   } else {
//     // Allow unauthenticated users (guests)
//     return children;
//   }
// }

