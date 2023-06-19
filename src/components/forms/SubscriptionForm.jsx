import { FaVrCardboard } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { useState } from "react";
import Axios from "axios";

const SubscriptionForm = () => {
  const [provider, setProvider] = useState("");
  const [date, setDate] = useState("");

  Axios.post("http://localhost:8800/api/post/add", {
    providerName: provider,
    date: date,
  })
    .then((res) => console.log(res))
    .catch((e) => console.log(e));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(provider, date);
  };
  return (
    <>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <input
            className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
            id="username"
            name="providerName"
            type="text"
            placeholder="Provider Name"
            onChange={(e) => setProvider(e.target.value)}
          />
          <div className="absolute left-0 inset-y-0 flex items-center">
            <FaVrCardboard className="h-7 w-7 ml-3 text-gray-400 p-1" />
          </div>
        </div>

        <div className="relative">
          <input
            className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
            type="date"
            name="date"
            placeholder="dd-mm-yyyy"
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="absolute left-0 inset-y-0 flex items-center">
            <BsCalendar2DateFill className="h-7 w-7 ml-3 text-gray-400 p-1" />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="mt-2 flex gap-4 items-center">
            <label className="block mb-2 text-sm font-medium text-[#232323] ">
              Cycle
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-[#232323] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-[#232323] dark:text-[#232323] dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="weekly" selected>
                Weekly
              </option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div className="mt-2 flex gap-4 items-center">
            <label className="block mb-2 text-sm font-medium text-[#232323] ">
              renewable
            </label>
            <select className="bg-gray-50 border border-gray-300 text-[#232323] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-[#232323] dark:text-[#232323] dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="yes" selected>
                yes
              </option>
              <option value="no">no</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8">
          <button className="text-white py-2 px-4 uppercase rounded bg-[#5e9ba1] hover:bg-black shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
            Add Subscription
          </button>
        </div>
      </form>
    </>
  );
};

export default SubscriptionForm;
