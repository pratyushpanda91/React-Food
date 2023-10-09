import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Sign from "./Components/Sign";
// // import food from "./Components/food";
// import Home from "./Components/Home";
// // import food from "./Components/food";
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<Sign />} />
//       <Route exact path="Home" element={<Home />} />
//     </Route>
//   )
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
