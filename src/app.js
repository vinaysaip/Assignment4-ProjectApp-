import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeadingComponent";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUSComponent from "./Components/AboutUs.js";
import ErrorPage from "./Components/ErrorPage";
import SearchResultsComponent from "./Components/ResultsComponent";
import SelectedProfile from "./Components/SelectedProfile";
import "bootstrap/dist/css/bootstrap.min.css";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <AboutUSComponent />,
        errorElement: <ErrorPage />,
      },
      {
        path: "search",
        element: <SearchResultsComponent />,
        errorElement: <ErrorPage />,
      },
      {
        path: "selected-profile/:loginid",
        element: <SelectedProfile />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

export default AppLayout;
