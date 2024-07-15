import { useParams, useLoaderData } from "react-router-dom";

const EstateDetails = () => {
  let data = useLoaderData();
  let id = useParams();
  let estate = data[parseInt(id.id) - 1];
  console.log(estate);
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={estate.image}
            alt=""
            className="w-full h-60 rounded-xl sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-100">
            <div className="space-y-2">
              <h1 className="inline-block text-2xl font-semibold sm:text-3xl">
                {estate.estate_title}
              </h1>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  {estate.facilities[0]}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                  {estate.facilities[1]}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  {estate.facilities[2]}
                </span>
              </div>
              <p className="text-xs dark:text-gray-600 font-bold pb-5">{estate.location}</p>
              <h1 className="border-dashed border-2 border-blue-600 rounded-xl p-5">{estate.description}</h1>
              <h1 className="btn bg-green-300 border-2 border-green-500">Price: {estate.price}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
