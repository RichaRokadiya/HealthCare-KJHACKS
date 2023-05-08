import React from 'react'
import ten from "../../assets/4897098.jpg";
import { useNavigate } from "react-router-dom";

const OcrDoc = () => {
  const navigate=useNavigate();
  return (
    <div className="font-ourfront ">
        <div className="flex justify-between">
        <h1 className="font-bold text-4xl flex justify-start mx-10">Docter Verification</h1>
        <button className="px-20 py-6 bg-green text-black text-lg font-bold rounded-2xl"onClick={() => {
                navigate("/LogDoc");
              }}>Back</button>
        </div>
      <div className="grid grid-cols-2 h-screen mt-2">
        <div>
            <img src={ten} className="w-full h-full"/>


            
        </div>
        <div className="bg-black rounded-l-2xl font-ourfont ">
            <h1 className="text-3xl font-bold  text-white mt-10">Verify Yourself</h1>
            <h3 className="text-white font-bold text-xl flex justify-items-start ml-10 mt-10">Upload your Documents Here</h3>
            <button class="bg-white text-black font-bold py-2 px-4 rounded-full mt-10">
            <input type='file'></input>
            </button>
            <br/>
            <button className="px-20 py-6 bg-white text-black mt-10 rounded-xl font-bold">Upload</button>
        </div>
      </div>
    </div>
  )
}

export default OcrDoc
