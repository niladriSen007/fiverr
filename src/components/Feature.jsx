import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {RxCross2} from "react-icons/rx"

const Feature = () => {
  return (
    <>
        <div className=' bg-slate-900  flex items-center justify-between px-64 py-16 gap-10'>
            <div className="left px-8 flex flex-col gap-6">
                <h1 className='text-5xl text-white leading-[54px]'>Find the perfect <i className='text-green-500 font-extrabold'>freelane services</i> for your business</h1>
                <div className="search flex ">
                    <div className="bg-white flex p-2 w-[520px] items-center justify-start gap-2 rounded-l-md">
                        <AiOutlineSearch size={28}/>
                        <input className='outline-none w-96' type="text" placeholder='Try building mobile app' />
                    </div>
                    <button className='bg-blue-600 p-2 text-white w-28 rounded-r-md'>Search</button>
                </div>
                <div className='text-white flex gap-4 items-center justify-start'>
                    <span className='font-bold text-xl'>Popular:</span>
                    <button className='popularSearch'>Web Design <RxCross2 /></button>
                    <button className='popularSearch'>Data Analyst <RxCross2 /></button>
                    <button className='popularSearch'>React <RxCross2 /></button>
                    <button className='popularSearch'>Figma <RxCross2 /></button>
                </div>
            </div>
            <div className="right">
                <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/285202554/original/c01127ffc44d5984eacb4c34f1bcd8f86fa9625c/create-a-steampunk-character-design-for-you-using-midjourney-ai.jpg" alt="" />
            </div>
        </div>
    </>
  )
}

export default Feature