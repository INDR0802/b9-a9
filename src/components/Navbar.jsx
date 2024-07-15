import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";

const Navbar = () => {
  let context = useContext(AuthContext);
  let { user, signout } = context;
  
  let items = (
    <>
      <li>
        <NavLink to={"/clientReview"}>Client Review</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>User Profile</NavLink>
      </li>
      <li>
        <NavLink to={"/updateprofile"}>Update Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-[1175px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {items}
          </ul>
        </div>
        <NavLink
          to={"/"}
          className=" text-xl md:text-2xl flex items-center gap-2"
        >
          <img src="/house.png" alt="" className="h-5 md:h-8" />
          <span className="text-orange-600">Dream</span> Home
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-5">
            {user.photoURL ? (
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img src={user.photoURL} className="w-12 rounded-full h-12 " />
              </div>
            ) : (
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img src="/" className="w-12 rounded-full h-12 " />
              </div>
            )}
            <button onClick={signout} className="btn bg-red-500">
              <FaRegUserCircle size={20} />
              LogOut
            </button>
          </div>
        ) : (
          <NavLink to={"/login"} className="btn">
            <FaRegUserCircle size={20} />
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
