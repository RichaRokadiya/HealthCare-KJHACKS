import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import HCarousel from '../components/HCarousel'
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { ImProfile } from "react-icons/im";

const Landing = () => {
  return (
    <div className='bg-grey h-full'>
      <div>
        <Navbar />
      </div>
      <div className='flex m-20'>
        <div className='w-1/2 text-black text-left p-20'>
          <div className='font-bold text-7xl'>
            Life changing automation of <p className='bg-gradient-to-r from-purple'>healthcare</p>
          </div>
          <div className='text-xl font-semibold pt-4'>
            Lorem ipsum dolor sit amet. Ut recusandae quisquam ut odio itaque ut nesciunt saepe est inventore obcaecati sed dolores suscipit et numquam animi. In omnis consequuntur et praesentium molestiae qui harum quis et dolor corrupti eos dolor repellendus. 
          </div>
        </div>
        <div className='w-1/2 text-black text-left mt-[-44px]'>
          <Carousel />
        </div>
      </div>
      <div className='bg-yellow mx-20 mb-20 rounded-3xl flex p-10'>
        <div className='w-2/5 text-left'>
          <div className='text-black font-semibold text-xl'>
            Why us?
          </div>
          <div className='text-black font-bold text-3xl'>
            Here are why you<br/> should get a <p className='w-2/3 bg-gradient-to-r from-green'>free trial</p> and try our best<br/> features
          </div>
        </div>
        <div className='w-1/5 text-left mx-10'>
          <div className='h-1/2'>
            <BsFillCalendarWeekFill size="45" />
          </div>
          <div className='h-1/2 text-black text-left'>
            <div className='font-bold text-xl'>Check for Appointments</div>
            <div className='font-semibold text-lg'>You can check the availability and book an appointment</div>
          </div>
        </div>
        <div className='w-1/5 text-left mx-10'>
          <div className='h-1/2'>
            <TfiWrite size="45" />
          </div>
          <div className='h-1/2 text-black text-left'>
            <div className='font-bold text-xl'>Preview Prescriptions</div>
            <div className='font-semibold text-lg'>An easy way to review a prescription</div>
          </div>
        </div>
        <div className='w-1/5 text-left mx-10'>
          <div className='h-1/2'>
            <ImProfile size="45" />
          </div>
          <div className='h-1/2 text-black text-left'>
            <div className='font-bold text-xl'>Secure your Documents</div>
            <div className='font-semibold text-lg'>You can save the documents and keep it for reference</div>
          </div>
        </div>
      </div>
      <div>
        <HCarousel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Landing
