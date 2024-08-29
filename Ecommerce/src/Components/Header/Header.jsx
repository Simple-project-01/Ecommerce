import React from 'react'
import {FiChevronDown} from 'react-icons/fi'

function Header() {
  return (
    <div className='bg-black'>
        <div className='py-2 gap-9 text-white/95 text-[16px] text-center m-auto justify-center w-full flex flex-col lg:flex-row'>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='pl-2 underline font-semibold'>ShopNow</span></p>
            <p className='flex gap-3 pl-28 items-center'>English <FiChevronDown/> </p>
        </div>
    </div>
  )
}

export default Header