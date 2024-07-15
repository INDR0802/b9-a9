import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { HashLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  let context = useContext(AuthContext);
  let { user, loading } = context;
  let location = useLocation();

  if (loading) {
    return (
      <HashLoader color="#36d7b7" className="mx-auto my-[200px]" size={100} />
    );
  }

  if (user) {
    return <>{children}</>;
  }

  return (
    <>
      {toast.error("you must be logged in to access this page")}
      <Navigate to="/login" state={location?.pathname || "/"} />
    </>
  );
};

export default PrivateRoute;
