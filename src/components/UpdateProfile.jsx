import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../firebase/AuthProvider";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let context = useContext(AuthContext);
  let { updateUserProfile, user } = context;
  let { displayName, photoURL, email } = user || {};

  const onSubmit = (data) => {
    console.log(errors);
    console.log(data);
    updateUserProfile(data.name, data.photo);
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update Profile</title>
      </Helmet>
      <div className="max-w-md mx-10 md:mx-auto my-16 p-7 px-4 sm:flex sm:space-x-6 bg-gray-100 rounded-xl border-[2px] text-gray-800">
        <div className="flex-shrink-0 w-full mb-10 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={user ? photoURL : ""}
            alt=""
            className="object-cover object-center md:w-full md:h-full w-[200px] mx-auto h-[200px] rounded-full bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">
              {user ? displayName : "user"}
            </h2>
            <span className="text-sm text-gray-600">General User</span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Email address"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                ></path>
              </svg>
              <span className="text-gray-600">{user ? email : "none"}</span>
            </span>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mx-10 grid grid-cols-6 gap-6 max-w-[500px] md:mx-auto"
      >
        <div className="col-span-6">
          <label className="block text-sm font-medium text-gray-700">
            {" "}
            Name{" "}
          </label>

          <input
            {...register("name")}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6">
          <label className="block text-sm font-medium text-gray-700">
            {" "}
            Photo URL{" "}
          </label>

          <input
            type="text"
            id="Photo"
            {...register("photo")}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 mb-10 sm:flex sm:items-center sm:gap-4">
          <button
            type="submit"
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
