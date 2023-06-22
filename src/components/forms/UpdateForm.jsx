
import { useState } from "react";
import { FaVrCardboard } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdPriceChange } from "react-icons/md";
import axios from "axios";
import SubscriptionInputField from "../SubscriptionInputFields";
import propTypes  from "prop-types";
const UpdatForm = (props) => {
    
  const [cycle, setCycle] = useState('monthly')
  const [subscription, setSubscription] = useState({
    providerName: "",
    valuee: "",
    date: "",
    category: "",
    renewable: false,
    
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8800/api/post//updateSub/:${props.id}`, {...subscription, cycle},{
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
          setSubscription({ ...subscription, valuee: e.target.value })
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
        // onChange={(e)=> setSubscription({ ...subscription, cycle: e.target.value })}
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
            value={cycle}
            onChange={(e)=> setCycle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-[#232323] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-[#232323] dark:text-[#232323] dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {/* select cycle */}
            <option value="weekly">
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
            >
              yes
            </option>
            <option
              value="no"
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


 UpdatForm.propTypes = {
    id : propTypes.string
 };
export default UpdatForm;
