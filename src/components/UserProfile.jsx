import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Helmet } from "react-helmet";

const UserProfile = () => {
  let context = useContext(AuthContext);
  let { user } = context;
  let { displayName, photoURL, email } = user || {};

  return (
    <div className="flex flex-col max-w-md mb-10 mx-auto mt-10 p-6 bg-gray-50 text-gray-800">
      <Helmet>
        <meta charSet="utf-8" />
        <title>User Profile</title>
      </Helmet>
      <img
        src={photoURL}
        alt=""
        className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square"
      />
      <div className="mt-10">
        <h2 className="text-2xl font-extrabold">{displayName}</h2>
        <span className="block pb-2 text-sm text-gray-600">
          Software Developer
        </span>
        <p>
          Contact info: <span className="font-bold">{email}</span>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
