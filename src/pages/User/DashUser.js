import React from "react";
import Sidebar from "../../components/SidebarUser";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { ImProfile } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
import Chart1 from "../../components/Chart1";

const DashUser = () => {
  return (
    <div className="font-ourfront">
      <div className="flex  bg-grey">
        <div>
          <Sidebar />
        </div>
        <div>
          <div className="flex items-center  ml-4 ">
            <div className="px-10 py-4 h-12 bg-white rounded-lg  mt-4 shadow-md flex justify-items-start text-xl font-bold ">
              Your Personalised Dashboard
            </div>
            <div className="w-12 h-12 bg-white rounded-lg mt-4 ml-[500px] items-center flex shadow-md">
              <IoMdNotifications
                size="30"
                className="flex ml-2 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <h1 className="flex ml-4 text-2xl ">
              Greetings,<p className="font-bold text-black">User!!</p>
            </h1>
          </div>
          <h1 className="flex justify-itmes-start ml-4 text-black">
            Get the Best Treatment Her!
          </h1>
          <div className="flex">
            <div className="bg-yellow w-[275px] h-[275px] ml-10 mt-10 rounded-lg shadow-lg  ">
              <div className="ml-3">
                <BsFillCalendarWeekFill size="45" />
              </div>
              <h1 className="text-lg text-black font-bold mt-4 font-main">
                Check for Appointments
              </h1>
              <p className="text-md text-black font-normal font-main mt-2">
                You can check the availability <br />
                and book an appointment
              </p>
              <button className="px-10 py-2 text-white bg-black font-semibold text-sm mt-6 rounded-lg ">
                Check Out
              </button>
            </div>
            <div className="bg-purple w-[275px] h-[275px] ml-10 mt-10 rounded-lg shadow-lg ">
              <div className="ml-3">
                <TfiWrite size="45" />
              </div>
              <h1 className="text-lg text-black font-bold mt-4 font-main">
                Preview Prescriptions
              </h1>
              <p className="text-md text-black font-normal font-main mt-2">
                An easy way  <br />
                to review a prescription
              </p>
              <button className="px-10 py-2 text-white bg-black font-semibold text-sm mt-6 rounded-lg ">
                Check Out
              </button>
            </div>
            <div className="bg-green w-[275px] h-[275px] ml-10 mt-10 rounded-lg shadow-lg ">
              <div className="ml-3">
                <ImProfile size="45" />
              </div>
              <h1 className="text-lg text-black font-bold mt-4 font-main">
                Secure your Documents
              </h1>
              <p className="text-md text-black font-normal font-main mt-2">
                You can save the documents <br />
                and keep it for reference
              </p>
              <button className="px-10 py-2 text-white bg-black font-semibold text-sm mt-6 rounded-lg ">
                Check Out
              </button>
            </div>
          </div>
          <div className="mt-4">
          <Chart1 />
          </div>
        </div>
        < div className="bg-white w-1/4 h-3/4 px-6 py-10 rounded-lg mt-6 ml-6 ">
         <p className="text-md font-main font-bold cursor-pointer bg-green cusor-pointer rounded-xl"> My Profile</p>
         <p className="bg-purple font-bold text-black rounded-lg mt-6">Latest Updates</p>
         <p className="bg-grey text-black rounded-lg mt-6 p-4">The Number of Cases in XYZ country isabc </p>
         <p className="bg-grey text-black rounded-lg mt-6 p-4">The Number of Cases in XYZ country isabc </p>
         <p className="bg-grey text-black rounded-lg mt-6 p-4">The Number of Cases in XYZ country isabc </p>
         <p className="bg-grey text-black rounded-lg mt-6 p-4">The Number of Cases in XYZ country isabc </p>
         <p className="bg-grey text-black rounded-lg mt-6 p-4">The Number of Cases in XYZ country isabc </p>
         
         </div>
        </div>
      </div>
              
      
    
  );
};

export default DashUser;
