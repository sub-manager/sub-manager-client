import { useEffect, useState } from "react";
import Modal from "../components/forms/Modal";
import { BsFolder } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";

import Subscription from "../components/Subscription";
import SubscriptionForm from "../components/forms/SubscriptionForm";
import axios from "axios";
import AddFolder from "../components/AddFolder";
import UpdatForm from "../components/forms/UpdateForm";
const HomePage = () => {
  const [data, setData] = useState([]);
  const [subId, setSubId] = useState()
  const [showSubFormModal, setShowSubFormModal] = useState(false);
  const [showUbdateSubForm, setShowUbdateSubForm] = useState(false);
  const [showDeleteSubAlert, setShowDeleteSubAlert] = useState(false);



  const getSubs = async () => {
    await axios.get("http://localhost:8800/api/post/subscriptions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data.subscription);
        console.log(res.data.subscription);
      });
  };
  
  
  const handleDelete = async () =>{
    await axios.delete(`http://localhost:8800/api/post/deleteSub/${subId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res)=>{
      console.log(res.data);
    }).catch((e)=>{console.log(e)});
  }
  
  
  useEffect(() => {
    getSubs();
  }, [data]);
  return (
    <>
      <div className="grid lg:grid-cols-3 xl:cols-2 gap h-screen mt-20 p-20">
        {/* ADD NEW FOLDER  */}
        <div className=" h-fit bg-[#f9f7f3]  p-2 mr-8 rounded-lg">
          <AddFolder/>
          {/* ALL FOLDERS */}
          <div className="bg-[#f9f7f3] w-full h-14">
            <div className="flex justify-start items-center gap-15 p-4">
              <div>
                <BsFolder size={"32"} />
              </div>
              <div className="w-full">
                <button className="font w-full py-2 text-lg text-[#232323]">
                  Entertainment
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#f9f7f3] w-full h-14">
            <div className="flex justify-start items-center gap-15 p-4">
              <div>
                <BsFolder size={"32"} />
              </div>
              <div className="w-full">
                <button className="font w-full py-2 text-lg text-[#232323]">
                  Sport
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#f9f7f3] w-full h-14">
            <div className="flex justify-start items-center gap-15 p-4">
              <div>
                <BsFolder size={"32"} />
              </div>
              <div className="w-full">
                <button className="font w-full py-2 text-lg text-[#232323]">
                  Health
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#f9f7f3] w-full h-14">
            <div className="flex justify-start items-center gap-15 p-4">
              <div>
                <BsFolder size={"32"} />
              </div>
              <div className="w-full">
                <button className="font w-full py-2 text-lg text-[#232323]">
                  Trials
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND COLUMN - SUBSCRIPTIONS */}
        <div className=" col-span-2 rounded-lg h-screen">
          <div className="grid grid-rows-1">
            <div className="w-full h-20 bg-[#f9f7f3] border-b-2 border-[#ccc]">
              <div className="flex justify-end mt-6 mr-6">
                <div>
                  <button
                    onClick={() => setShowSubFormModal(true)}
                    className="flex items-center gap-10 font-bold rounded-lg px-2 bg-[#5e9ba1] w-[12rem]"
                  >
                    <div className="flex items-center gap-2">
                      <MdAddCircleOutline size={"40"} color="#fff" />
                    <p className="text-white">New</p> 
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <ul> 
            {data.map((sub) => {
                <li key={sub._id}>
                  <Subscription
                  value={sub.valuee}
                  provider={sub.providerName}
                  date={sub.date}
                  deleteSub={()=>{setSubId(sub._id); setShowDeleteSubAlert(true)}}
                  updateForm={()=>{setShowUbdateSubForm(true)}}
                  />
                </li>
            })}
                </ul>
          </div>
        </div>

       
      </div>
      {/* MODAL OF CREATE NEW SUBSCRIPTION */}
      <Modal
        isVisible={showSubFormModal}
        onClose={() => setShowSubFormModal(false)}
      >
        <div className="">
          <div className="p-8 lg:w-full mx-auto">
            <div className="bg-gray-300 rounded-b-lg py-12 px-4 lg:px-24">
              <p className="text-center text-sm text-gray-500 font-bold">
                Create New Subscription
              </p>
              <SubscriptionForm />
            </div>
          </div>
        </div>
      </Modal>
      {/* Modal of update subscription information */}
      <Modal
        isVisible={showUbdateSubForm}
        onClose={() => setShowUbdateSubForm(false)}
      >
        <div className="bg-gray-300">
          <div className="p-8 lg:w-full mx-auto">
            <div className=" rounded-b-lg py-12 px-4 lg:px-24">
              <p className="text-center text-sm text-gray-500 font-bold">
                Update Subscription information
              </p>
              <UpdatForm id={subId} />
            </div>
          </div>
        </div>
      </Modal>

      {/* Alert Delete Message */}
      <Modal
        isVisible={showDeleteSubAlert}
        onClose={() => setShowDeleteSubAlert(false)}
      >
        <div className="">
          <div className="p-8 lg:w-full mx-auto">
            <div className=" rounded-b-lg py-12 px-4 lg:px-24">
              <p className="text-center text-sm text-gray-500 font-bold">
                Are you sure you want to delete this subscription
              </p>
              <div className="flex gap-4">
                <div className="flex items-center justify-center mt-8">
                  <button onClick={handleDelete} className="text-white py-2 px-4 uppercase rounded bg-[#ef4444] hover:bg-[#ef4444] shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    Delete Subscription
                  </button>
                </div>
                <div className="flex items-center justify-center mt-8">
                  <button className="text-white py-2 px-4 uppercase rounded bg-[#5e9ba1] hover:bg-black shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HomePage;
