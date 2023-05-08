import React from 'react'
import Sidebar from '../../components/SidebarUser';

function Symptoms() {
  return (
    <div className='bg-grey h-screen w-fill font-ourfront flex flex-row'>
        <div>
            <Sidebar />
        </div>
        <div className="flex flex-col w-1/2 h-fit py-8 px-10 mx-56">
                    <div className="text-center text-4xl font-bold pb-4 mb-7">Add your 5 symptoms</div>
                    <div className="container rounded-2xl bg-black min-w-full min-h-full p-10 shadow-main-sd">
                        <form>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg text-grey text-left ">Symptom 1:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='symptom1' className="rounded-xl w-96 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg text-grey text-left ">Symptom 2:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='symptom2' className="rounded-xl w-96 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg text-grey text-left ">Symptom 3:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='symptom3' className="rounded-xl w-96 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg text-grey text-left ">Symptom 4:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='symptom4' className="rounded-xl w-96 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg text-grey text-left ">Symptom 5:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='symptom5' className="rounded-xl w-96 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-row-reverse min-w-full min-h-full mt-7">
                                <button type="submit" className="flex-reverse align bg-white rounded-xl text-black font-semibold p-2 px-10" >Add</button>
                            </div>
                        </form>
                    </div>
                </div>
    </div>
  )
}

export default Symptoms