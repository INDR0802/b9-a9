import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import EstateDetails from "./components/EstateDetails";
import Register from "./components/Register";
import Login from "./components/Login";
import UpdateProfile from "./components/UpdateProfile";
import Page404 from "./components/Page404";
import UserProfile from "./components/UserProfile";
import PrivateRoute from "./components/PrivateRoute";
import ClientReview from "./components/ClientReview";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        path: "/clientReview",
        element: (
          <PrivateRoute>
            <ClientReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/estates/:id",
        loader: () => fetch("/EstateData.json"),
        element: (
          <PrivateRoute>
            <EstateDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <Page404 /> },
]);

export default router;
