import React from 'react'
import { logo } from '../../../assets'
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
   return (
      <div className='flex justify-between items-center pt-2'>
         <div className="flex items-center gap-1">
            <div className="w-9 h-13 overflow-hidden">
               <img
                  src={logo}
                  alt="logo"
                  className='w-full h-full object-cover' />
            </div>
            <h1 className='text-xl text-white font-extrabold'>YouTube</h1>
         </div>
         <button>
            <IoSearchOutline className='text-white text-2xl font-semibold' />
         </button>
      </div>
   )
}

export default SearchBar