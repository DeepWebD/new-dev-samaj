import React from 'react'
import videoBg from '../../assets/videoBg.mp4'
const VideoBg = () => {
  return (
    <div className='w-[100%] h-screen'>
        <div className="absolute top-0 left-0 w-[100%] h-[90%] bg-black opacity-40  mt-[95px] lg:mt-[123px]"></div>
        <video className='w-[100%] h-[90%] object-cover' src={videoBg} autoPlay loop muted />
        <div className="absolute w-[100%] h-[90%] top-0 flex flex-col justify-center items-center  mt-[95px] lg:mt-[123px] text-white ">
            <h1 className='text-3xl md:text-2xl font-semibold'>Welcome</h1>
            <p className='text-primary text-xl font-light'>Dev Samaj School </p>
            <p className='text-center'>Lorem* ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
            </p>
        </div>
    </div>
  )
}

export default VideoBg