import { BsFolderPlus } from "react-icons/bs"
import { useState } from "react";
import Modal from "./forms/Modal";
const AddFolder = () => {
    const [showModal, setShowModal] = useState(false);
    
  return (
    <>
              <div className="bg-[#f9f7f3] w-full h-14 border-black ">
            <div className="flex justify-start items-center gap-15 p-4">
              <div>
                <BsFolderPlus size={"32"} />
              </div>
              <div className="w-full">
                <button
                  onClick={() => setShowModal(true)}
                  className="font w-full py-2 text-lg text-[#232323]"
                >
                  Add Category
                </button>
              </div>
            </div>
          </div> 

          {/* MODAL OF CREATE FOLDER */}
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="">
            <div className="p-8 lg:w-full mx-auto">
              <div className="bg-gray-300 rounded-b-lg py-12 px-4 lg:px-24">
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
                    <button
                      className="text-white py-2 px-4 uppercase rounded bg-[#5e9ba1] hover:bg-black shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                    >
                      New Folder
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
    </>
  )
}

export default AddFolder
