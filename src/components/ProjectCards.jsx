import React from 'react'

const ProjectCards = ({item}) => {
  return (
    <div className=' h-60 flex flex-col justify-end mr-4 mb-20'>
        <div>
            <img src={item.img} alt="" />
        </div>
        <div className='flex gap-1 items-center'>
            <div>
                <img className='w-10 h-10 rounded-full object-cover' src={item.pp} alt="" />
            </div>
            <div>
                <p className='text-black font-bold'>{item.cat}</p>
                <p className='text-gray-400'>by {item.username}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCards