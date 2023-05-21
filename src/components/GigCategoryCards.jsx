import React from 'react'
import {Link} from 'react-router-dom'

const GigCategoryCards = ({item}) => {
  return (
    <Link to={"/gigs?category=design"}>
        <div className='w-48 relative'>
            <img className='' src={item.img}alt="" />
            <span className="absolute font-normal text-xs text-white top-4 left-2 ">{item.desc}</span>
            <span className="absolute font-bold text-white top-8 left-2">{item.title}</span>
        </div>
    </Link>
  )
}

export default GigCategoryCards