import React from "react";
import medicine from "../../assets/Medicine.png";
import sanitiser from "../../assets/Sanitiser.png";
import vaccine from "../../assets/vaccine.png";
import temp from "../../assets/temperature.png";
import magnify from "../../assets/track 1.png";
import { Link } from "react-router-dom";

// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const LogHos = () => {
  //   const navigate = useNavigate();
  //   const [ email, setEmail ] = useState("");
  //   const [ password, setPassword ] = useState("");

  //   const url = 'http://localhost:5000/api/user';

  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   }

  //   const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  //   }

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post(`${url}/login`, { email, password });
  //       // console.log(localStorage.getItem("userType"));
  //       console.log(localStorage.getItem("token"));
  //       setEmail("");
  //       setPassword("");
  //       // alert("Successfully Logged in.");
  //       if (response.data){
  //         navigate("/");
  //       }

  //     } catch(error) {
  //       console.log(error)
  //       setEmail("");
  //       setPassword("");
  //       alert('Error occured while logging in');
  //     }
  //   }

  return (
    <>
      <div className="w-full  bg-cover bg-white  font-ourfront overflow-y-hidden ">
        <div className=" p-10 bg-black mx-36  rounded-3xl flex justify-center mt-10">
          <div className=" w-1/2 h-4/5">
            <div className="font-bold  text-3xl text-center text-white "> Hospital Login</div>
            <div className="font-bold text-white text-xl  mt-6 mr-48 ">
              <p>Unique Identifier</p>
            </div>
            <div className="w-2/3 h-12 bg-white rounded-full  mt-8 border-2 border-black ml-20">
              <input
                type=" text"
                className="flex-grow w-3/4 outline-none mt-1 bg-transparent h-8 text-lg font-semibold rounded-lg flex justify-items-start ml-2 " placeholder="abc1230@!"
              ></input>
            </div>
            <div className="font-bold text-white text-xl  mt-8 mr-64 ">
              <p>Password</p>
            </div>
            <div className="w-2/3 h-12 bg-white rounded-full  mt-8 border-2 border-black ml-20">
              <input
                type=" text"
                className="flex-grow w-3/4 outline-none mt-1 bg-transparent h-8 text-lg font-semibold rounded-lg flex justify-items-start ml-2 "              placeholder="**********"
              ></input>
            </div>
           
            <div className=" ml-36 mt-10 w-32 h-12 ">
              <Link to='/dashhosp'>
              <div className="bg-white w-56 h-12 rounded-full text-lg  text-black font-semibold pt-2">
                Next
              </div>
              </Link>
              {/* onClick={handleSubmit} */}
            </div>
            <div className="bg-black h-20"></div>
          </div>

          <div className="w-1/2 h-4/5 bg-blue-900 rounded-full relative">
          
              <img
                src={magnify}
                class="absolute top-100 z-10  left-0 w-[100%] h-auto"
              />
              <img
                src={medicine}
                
                class="absolute top-[250px] mt-24 mr-20 z-10 w-[50%] "
              />
              <img
                src={sanitiser}
                
                class="absolute  mr-10 mb-10 z-10 w-[50%] "
              />
              <img
                src={vaccine}
                
                class="absolute left-[385px] z-10 w-[50%] "
              />
              <img
                src={temp}
                alt="Image 4"
                class="absolute left-[400px]  z-10 w-[50%] top-[300px] "
              />
            </div>
          
            </div>
          </div>
        
    </>
  );
};

export default LogHos;
