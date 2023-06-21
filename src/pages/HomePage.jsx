import { useEffect, useState } from "react";
import Modal from "../components/forms/Modal";
import { BsFolderPlus, BsFolder } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";

import Subscription from "../components/Subscription";
import SubscriptionForm from "../components/forms/SubscriptionForm";
import axios from "axios";
const HomePage = () => {
  const [data, setData] = useState([]);
  // Data Of Entertainment Category 
  const [entertainmentData, setEntertainmentData] = useState([])
  const [sportData, setSportData] = useState([])


  //
  const [showModal, setShowModal] = useState(false);
  const [showSubFormModal, setShowSubFormModal] = useState(false);
  const [showUbdateSubForm, setShowUbdateSubForm] = useState(false);
  const [showEntertainmentCate, setEntertainmentCate] = useState(false)
  const [showSportCate, setSportCate] = useState(false)


  const [createCategory, setCreateCategory] = useState("");

  // TO GET SUBSCRIPTION
  const getSubs = async () => {
    await axios.get("http://localhost:8800/api/post/subscriptions", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setData(res.data.subscription);
    });
  };
  useEffect(() => {
    getSubs();
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8800/api/user/category/allCategory", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setEntertainmentData(res.data)
    })
  },[])

  useEffect(() => {
    axios.get("http://localhost:8800/api/user/category/sportCategory", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setSportData(res.data)
    })
  },[])

  const addCategory = async () => {
    await axios.post("http//:localhost:8800/api/post/add", {
      providerName: createCategory,
    });
  };

  // const [showUbdataSubForm, setShowUbdataSubForm] = useState(false);
  const [showDeleteSubAlert, setShowDeleteSubAlert] = useState(false);

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
                  Add Category
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
                <button onClick={() => setEntertainmentCate(true)} className="font w-full py-2 text-lg text-[#232323]">
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
                <button onClick={() => setSportCate(true)} className="font w-full py-2 text-lg text-[#232323]">
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
        {/* SHOW SUBSCRIPTIONS OF USER IN ENTERTAINMENT FOLDER */}
        <Modal isVisible={showEntertainmentCate} onClose={() => setEntertainmentCate(false)}>
          <div className="">
            <div className="p-8 lg:w-full mx-auto">
              <div className="bg-gray-300 rounded-b-lg py-12 px-4 lg:px-24">
                <p className="text-center text-sm text-gray-500 font-bold">
                  Entertainment Category
                </p>

                {
                  entertainmentData.map((item) => {
                    return(
                      <ul key={item.id}>
                        <li key={item.id}>
                        <h1>{item.provider_name}</h1>
                        <h1>{item.subscription_date}</h1>
                        <h1>{item.subscription_value}</h1>
                        <h1>{item.subscription_cycle}</h1>

                        <hr />

                        </li>
                      </ul>
                      
                    )
                    
                  })
                }
              </div>
            </div>
          </div>
        </Modal>

         {/* SHOW SUBSCRIPTIONS OF USER IN SPORT FOLDER */}
         <Modal isVisible={showSportCate} onClose={() => setSportCate(false)}>
          <div className="">
            <div className="p-8 lg:w-full mx-auto">
              <div className="bg-gray-300 rounded-b-lg py-12 px-4 lg:px-24">
                <p className="text-center text-sm text-gray-500 font-bold">
                  Sport Category
                </p>

                {
                  sportData.map((item) => {
                    return(
                      <ul key={item.id}>
                        <li key={item.id}>
                        <h1>{item.provider_name}</h1>
                        <h1>{item.subscription_date}</h1>
                        <h1>{item.subscription_value}</h1>
                        <h1>{item.subscription_cycle}</h1>

                        <hr className='bg-black'/>

                        </li>
                      </ul>                      
                    )                   
                  })
                }
                
              </div>
            </div>
          </div>
        </Modal>
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
                      onChange={(e) => setCreateCategory(e.target.value)}
                    />
                    <div className="absolute left-0 inset-y-0 flex items-center">
                      <BsFolderPlus className="h-7 w-7 ml-3 text-gray-400 p-1" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center mt-8">
                    <button
                      onClick={()=>addCategory}
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
              <SubscriptionForm />
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
                  <button className="text-white py-2 px-4 uppercase rounded bg-[#ef4444] hover:bg-[#ef4444] shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
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
