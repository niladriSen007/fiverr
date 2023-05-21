import React from 'react'

const VideoCards = ({item}) => {
  return (
    <div className='flex gap-4  justify-center '>
        <div className="left">
            <video className='h-96' src={item.url}></video>
        </div>
        <div className="right w-[80%] flex flex-col justify-between items-start py-28 pr-16">
            <h3 className='text-gray-500 font-bold text-2xl'>{item.owner}</h3>
            <blockquote className='text-black text-xl font-semibold'><i>&quot;{item.quote}&quot;</i></blockquote>
        </div>
    </div>
  )
}

export default VideoCards