import { useEffect, useState } from "react";
import Modal from "../components/forms/Modal";
import { BsFolderPlus, BsFolder } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";

import Axios from "axios";
import Subscription from "../components/Subscription";
import SubscriptionForm from "../components/forms/SubscriptionForm";
const HomePage = () => {
  const [data, setData] = useState([]);
  // const [newSub, setNewSub] = useState({});

  //
  const [showModal, setShowModal] = useState(false);
  const [showSubFormModal, setShowSubFormModal] = useState(false);

  //
  const getSubs = async () => {
    Axios.get("http://localhost:8800/api/post/subs").then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getSubs();
  }, []);
  return (
    <>
      <div className="grid lg:grid-cols-3 xl:cols-2 gap h-screen mt-20 p-20">
        {/* ADD NEW FOLDER  */}
        <div className=" h-fit bg-[#f9f7f3] border-4 border-[#0fa3b1] p-2 mr-8 rounded-lg">
          <div className="bg-[#f9f7f3] w-full h-14 border-b-2 border-black ">
            <div className="flex justify-start items-center gap-15 p-4">
              <div>
                <BsFolderPlus size={"32"} />
              </div>
              <div className="w-full">
                <button
                  onClick={() => setShowModal(true)}
                  className="font w-full py-2 text-lg text-[#232323]"
                >
                  Add Folder
                </button>
              </div>
            </div>
          </div>

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
        <div className="w-full col-span-2 ml h-fit rounded-lg border-4 border-[#0fa3b1]">
          <div className="grid grid-rows-2">
            <div className="w-full h-20 bg-[#f9f7f3] border-b-2 border-black">
              <div className="flex justify-end mt-6 mr-6">
                <div>
                  <button
                    onClick={() => setShowSubFormModal(true)}
                    className="flex items-center gap-10 font-bold rounded-lg bg-[#5e9ba1] w-[12rem]"
                  >
                    <div>
                      <MdAddCircleOutline size={"50"} color="#fff" />
                    </div>
                    <div>New</div>
                  </button>
                </div>
              </div>
            </div>
            {data.map((sub) => (
              <Subscription
                key={sub.id}
                provider={sub.providerName}
                date={sub.date}
              />
            ))}
          </div>
        </div>

        {/* MODAL OF CREATE FOLDER */}
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="">
            <div className="p-8 lg:w-full mx-auto">
              <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                <p className="text-center text-sm text-gray-500 font-bold">
                  Create Folder
                </p>
                <form className="mt-6">
                  <div className="relative">
                    <input
                      className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Folder Name"
                    />
                    <div className="absolute left-0 inset-y-0 flex items-center">
                      <BsFolderPlus className="h-7 w-7 ml-3 text-gray-400 p-1" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center mt-8">
                    <button className="text-white py-2 px-4 uppercase rounded bg-[#5e9ba1] hover:bg-black shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                      New Folder
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      {/* MODAL OF CREATE NEW SUBSCRIPTION */}
      <Modal
        isVisible={showSubFormModal}
        onClose={() => setShowSubFormModal(false)}
      >
        <div className="">
          <div className="p-8 lg:w-full mx-auto">
            <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
              <p className="text-center text-sm text-gray-500 font-bold">
                Create New Subscription
              </p>
              {/* form here */}
              <SubscriptionForm
                onChange={() => {}}
                // onChange={() => {}}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HomePage;
