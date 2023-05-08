import React from 'react';
import Logo from "../assets/Genetics.svg";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsFillCalendarRangeFill,BsUpload } from "react-icons/bs";
import {BiLogOut} from "react-icons/bi";
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    < div className='bg-black h-screen w-48 ml-4 mt-2 text-grey text-ourfront rounded-xl  px-10  font-main overflow-y-hidden'>
      <div className="flex justify-center cursor-pointer mt-4 space-x-2">
        <img src={Logo} className="w-16 h-12 "/>
        <p className="text-xl font-bold mt-2">Health</p>
        </div>
        <Link to='/dashuser'>
          <div className="flex justify-between space-x-3 mt-10">
          <div>< AiFillHome size="28"className="" /></div>
            <div className="text-lg text-white font-semibold flex cursor-pointer"> Dashboard </div>
          </div>
        </Link>
        <Link to='/'>
          <div className="flex justify-evenly mt-10 space-x-4">
          <div>< CgProfile size="30" /></div>
            <div className="text-lg text-white font-semibold flex cursor-pointer"> Profile</div>
          </div>
        </Link>
        <Link to='/calender'>
          <div className="flex justify-evenly mt-10 space-x-4">
        <div> < BsFillCalendarRangeFill size="30" /></div>
            <div className="text-lg text-white font-semibold flex cursor-pointer"> Appoint</div>
          </div>
        </Link>
        <Link to='/ocruser'>
        <div className="flex justify-evenly mt-10 space-x-4">
       <div> < BsUpload size="30" /></div>
          <div className="text-lg text-white font-semibold flex cursor-pointer"> Upload</div>
        </div>
        </Link>
        <Link to='/'>
          <div className="flex justify-evenly mt-10 space-x-4">
        <div> < BiLogOut size="30" /></div>
            <div className="text-lg text-white font-semibold flex cursor-pointer"> Logout</div>
          </div>
        </Link>      
    </div>
  )
}

export default Sidebar;