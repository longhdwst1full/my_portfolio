import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { intance } from "../../api";

export default function User() {
  const [data, setData] = useState({});
  useEffect(() => {
    intance.get("/about_me").then(([data]) => setData(data));
  }, []);
  console.log(data);
  const handlePortpolia = (id) => {};
  return (
    <div className="p-1">
      <div className="grid grid-cols-2 gap-7">
        <div className="flex flex-col justify-center items-center  p-2 border">
          <h3 className="text-2xl">{data.name}</h3>
          <div className="text-left">
            <div className="pt-2 grid grid-cols-2 gap-2">
              <div>
                Age : <span>{data.age}</span>
              </div>
              <div>
                Job : <span>{data.desc_job}</span>
              </div>
            </div>
            <div className="pt-2 grid grid-cols-2 gap-2">
              <div>
                Phone: <span>{data.phone}</span>
              </div>
              <div>
                Email : <span>{data.email}</span>
              </div>
            </div>
            <div className="pt-2">
              Addresses : <span>{data.address}</span>
            </div>
            <div className="pt-2">
              Description : <span>{data.description}</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 text-center m-auto">
          <div className="grid grid-cols-2">
            <img src={data?.cv} alt={data.name} className="" />
            <img src={data?.avatar} alt={data.name} className="" />
          </div>
        </div>
      </div>
      <button class="text center relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <Link to={`/useredit/${data.id}`}>Edit</Link>
        </span>
      </button>
    </div>
  );
}
