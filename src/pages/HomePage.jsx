import React, { useState } from "react";
import Modal from "../components/forms/Modal";
import { BsFolderPlus } from "react-icons/bs";
import { BsFolder } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import { FaVrCardboard } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";

import { useActionData } from "react-router-dom";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSubFormModal, setShowSubFormModal] = useState(false);
  return (
    <>
      <div className="grid lg:grid-cols-3 xl:cols-2 gap h-screen mt-20 p-20">
        {/* ADD NEW FOLDER  */}
        <div className="w-96 h-3/4 bg-[#f9f7f3] border-4 border-[#0fa3b1] p-2 mr-8 rounded-lg">
          <div className="bg-[#f9f7f3] w-full h-14 border-b-2 border-black ">
            <div className="flex justify-start items-center gap-15 p-4">
              <div>
                <BsFolderPlus size={"32"} />
              </div>
              <div className="w-full">
                <button
                  onClick={() => setShowModal(true)}
                  className="font w-full py-2 text-lg"
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
                <button className="font w-full py-2 text-lg">
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
                <button className="font w-full py-2 text-lg">Sport</button>
              </div>
            </div>
          </div>

          <div className="bg-[#f9f7f3] w-full h-14">
            <div className="flex justify-start items-center gap-15 p-4">
              <div>
                <BsFolder size={"32"} />
              </div>
              <div className="w-full">
                <button className="font w-full py-2 text-lg">Health</button>
              </div>
            </div>
          </div>

          <div className="bg-[#f9f7f3] w-full h-14">
            <div className="flex justify-start items-center gap-15 p-4">
              <div>
                <BsFolder size={"32"} />
              </div>
              <div className="w-full">
                <button className="font w-full py-2 text-lg">Trials</button>
              </div>
            </div>
          </div>

          <div className="bg-[#f9f7f3] w-full h-14">
            <div className="flex justify-start items-center gap-15 p-4">
              <div>
                <BsFolder size={"32"} />
              </div>
              <div className="w-full">
                <button className="font w-full py-2 text-lg">Insurance</button>
              </div>
            </div>
          </div>

          <div className="bg-[#f9f7f3] w-full h-14">
            <div className="flex justify-start items-center gap-15 p-4">
              <div>
                <BsFolder size={"32"} />
              </div>
              <div className="w-full">
                <button className="font w-full py-2 text-lg">Other</button>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND COLUMN - SUBSCRIPTIONS */}
        <div className="w-full col-span-2 ml h-5/6 rounded-lg border-4 border-[#0fa3b1]">
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
            <div className="w-full h-20 bg-[#f9f7f3]">
              <div className="grid grid-cols-6 p-4">
                <div>
                  <div className="w-20 h-32 rounded-md">
                    <img
                      src="https://variety.com/wp-content/uploads/2019/02/netflix-logo-originals.jpg?w=640"
                      className="w- h-15 rounded-lg"
                    />
                  </div>
                </div>
                <div className="font mt-3 text-center">
                  <h1>Netflix</h1>
                </div>
                <div className="font content text-center">
                  <h1>Renews</h1>
                  <h1>16 Jul, 2023</h1>
                </div>
                <div className="font mt-3 text-center">
                  <h1>Monthly</h1>
                </div>
                <div className="font content text-center">
                  <h1>Price</h1>
                  <h1>0.00 SR</h1>
                </div>
                <div className="font mt-3 text-center">
                  <div className="flex gap-4">
                    <div>
                      <button>
                        <RiEditBoxFill size={"30"} color="#5e9ba1" />
                      </button>
                    </div>
                    <div>
                      <button>
                        <TiDelete size={"30"} color="#ef4444" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-20 bg-[#f9f7f3]">
              <div className="grid grid-cols-6 p-4">
                <div>
                  <div className="w-20 h-32 rounded-md">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/6042529f1fe38f0b0503be5c/1616072527567-YHOUT1L2JW6ROBTME3SQ/spotify-playlist.jpeg"
                      className="w- h-15 rounded-lg"
                    />
                  </div>
                </div>
                <div className="font mt-3 text-center">
                  <h1>Spotify</h1>
                </div>
                <div className="font content text-center">
                  <h1>Renews</h1>
                  <h1>16 Jul, 2023</h1>
                </div>
                <div className="font mt-3 text-center">
                  <h1>Monthly</h1>
                </div>
                <div className="font content text-center">
                  <h1>Price</h1>
                  <h1>0.00 SR</h1>
                </div>
                <div className="font mt-3 text-center">
                  <div className="flex gap-4">
                    <div>
                      <button>
                        <RiEditBoxFill size={"30"} color="#5e9ba1" />
                      </button>
                    </div>
                    <div>
                      <button>
                        <TiDelete size={"30"} color="#ef4444" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <form className="mt-6">
                <div className="relative mb-4">
                  <input
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Provider Name"
                  />
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <FaVrCardboard className="h-7 w-7 ml-3 text-gray-400 p-1" />
                  </div>
                </div>
                <div className="relative">
                  <input
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Date"
                  />
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <BsCalendar2DateFill className="h-7 w-7 ml-3 text-gray-400 p-1" />
                  </div>
                </div>
                <div className="mt-2">
                  <label className="w-full py-4 ml-2 text-sm font-medium text-black">
                    Renewal automatically
                  </label>
                </div>
                <div className="mt-4">
                  <div className="flex items-center pl-4 mb-2 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      id="bordered-radio-1"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="w-full py-4 ml-2 text-sm font-medium text-black">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      checked
                      id="bordered-radio-2"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="w-full py-4 ml-2 text-sm font-medium text-black">
                      No
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-8">
                  <button className="text-white py-2 px-4 uppercase rounded bg-[#5e9ba1] hover:bg-black shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    Add Subscription
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HomePage;
