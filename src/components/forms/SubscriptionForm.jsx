import { FaVrCardboard } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdPriceChange } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import SubscriptionInputField from "../SubscriptionInputFields";
// import propTypes from "prop-types";

const SubscriptionForm = () => {
  // const [providerName, setProvider] = useState("");
  // const [date, setDate] = useState("");
  // const [value, setValue] = useState("");

  const [subscription, setSubscription] = useState({
    providerName: "",
    value: "",
    date: "",
    category: "",
    renewable: false,
    cycle: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8800/api/post/add", subscription,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => console.log(res)).catch((e) => console.log(e));
  };

  return (
    <>
    <form onSubmit={handleSubmit}>

      <div className="relative mb-4">
        <SubscriptionInputField
        placeHolder={'provider name'}
        name={'provider'}
        type={'text'}
        onChange={(e) =>
          setSubscription({ ...subscription, providerName: e.target.value })}
        />
        <div className="absolute left-0 inset-y-0 flex items-center">
          <FaVrCardboard className="h-7 w-7 ml-3 text-gray-400 p-1" />
        </div>
      </div>

      <div className="relative">
      <SubscriptionInputField
        placeHolder={'date'}
        name={'date'}
        type={'date'}
        onChange={(e) =>
          setSubscription({ ...subscription, date: e.target.value })
        }
        />
        <div className="absolute left-0 inset-y-0 flex items-center">
          <BsCalendar2DateFill className="h-7 w-7 ml-3 text-gray-400 p-1" />
        </div>
      </div>

      <div className="relative mb-4 mt-4">
        <SubscriptionInputField
        placeHolder={'value'}
        name={'value'}
        type={'text'}
        onChange={(e) =>
          setSubscription({ ...subscription, value: e.target.value })
        }
        />
        <div className="absolute left-0 inset-y-0 flex items-center">
          <MdPriceChange className="h-7 w-7 ml-3 text-gray-400 p-1" />
        </div>
      </div>

      <div className="mt-2 flex gap-4 items-center">
        <label className="block mb-2 text-sm font-medium text-[#232323] ">
          Category
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-[#232323] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-[#232323] dark:text-[#232323] dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="entertainment" selected>
            Entertainment
          </option>
          <option value="sport">Sport</option>
          <option value="health">Health</option>
          <option value="trails">Trails</option>
        </select>
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
            {/* select cycle */}
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
            <option
              value="yes"
              selected
              // onClick={(e) =>
              //   setSubscription({
              //     ...subscription,
              //     renewable: e.target.value,
              //   })
              // }
            >
              yes
            </option>
            <option
              value="no"
              // onClick={(e) =>
              //   setSubscription({
              //     ...subscription,
              //     renewable: e.target.value,
              //   })
              // }
            >
              no
            </option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8">
        <button
          className="text-white py-2 px-4 uppercase rounded bg-[#5e9ba1] hover:bg-black shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
        >
          Add Subscription
        </button>
      </div>
      </form>

    </>
  );
};



export default SubscriptionForm;
