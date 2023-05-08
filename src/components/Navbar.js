import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

function Navbar() {
  const navigate=useNavigate();
  return (
    <div className='font-ourfront flex'>
      {/* left */}
      <div className="w-1/6 flex items-center">
          <img
            src={logo}
            alt="logo"
            className="mx-5 w-20 h-20 cursor-pointer"
          ></img>
          <div className='text-black font-bold p-2 text-2xl'>Health</div>
      </div>
      <div className='w-3/6 h-15 flex items-center'>
      <div className='w-1/2 p-2'>
          <Link to='/'>
            <div className='text-black font-bold p-2 text-xl'>Home</div>
          </Link>
        </div>
        <div className='w-1/2 m-2 p-2'>
          <Link to='/loguser'>
            <div className='text-black font-bold p-2 text-xl'>Features</div>
          </Link>
        </div>
        <div className='w-1/2 m-2 p-2'>
          <Link to='/loguser'>
            <div className='text-black font-bold p-2 text-xl'>Support</div>
          </Link>
        </div>
        <div className='w-1/2 m-2 p-2'>
          <Link to='/loguser'>
            <div className='text-black font-bold p-2 text-xl'>About</div>
          </Link>
        </div>
      </div>
      <div className="w-2/6 h-15 p-4 flex">
        <div className='w-1/2 m-2 p-2'>
          <Link to='/loguser'>
            <div className='font-bold text-black hover:text-white hover:bg-black border-2 border-black rounded-full p-2'>Log In</div>
          </Link>
        </div>
        <div className='w-1/2 m-2 p-2'>
          <Link to='/usersign'>
            <div className='font-bold text-white bg-black border-2 border-black rounded-full p-2'>Create an account</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar