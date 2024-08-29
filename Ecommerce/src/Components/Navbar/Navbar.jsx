import React from 'react'
import { Link } from 'react-router-dom'
import { CiHeart } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'

function Navbar() {
  return (
    <nav className='w-full flex bg-white border-b-2 justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50'>
        <h1 className='font-bold text-3xl'>Exclusive</h1>
        <ul className='flex gap-10 font-medium'>
            <li className='relative after:content-[""] after:absolute after:bg-black after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-300 hover:after:w-[100%]'><Link to="/">Home</Link></li>
            <li className='relative after:content-[""] after:absolute after:bg-black after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-300 hover:after:w-[100%]'><Link to="/Contact">Contact</Link></li>
            <li className='relative after:content-[""] after:absolute after:bg-black after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-300 hover:after:w-[100%]'><Link to="/About">About</Link></li>
            <li className='relative after:content-[""] after:absolute after:bg-black after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-300 hover:after:w-[100%]'><Link to="/Signup">Signup</Link></li>
        </ul>
        <div className='flex items-center gap-[15px]'>
            <input className='bg-gray-400/15 text-black p-2 text-xs rounded-md' type="text" placeholder='What are you looking for?' />
            <CiHeart size={24}/>
            <IoCartOutline size={25}/>
        </div>
    </nav>
  )
}

export default Navbar