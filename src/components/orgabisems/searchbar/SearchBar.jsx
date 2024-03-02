import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Logo from '../../atoms/logo/Logo';

const SearchBar = () => {
   return (
      <div className='flex justify-between items-center pt-2'>
         <Logo />
         <button>
            <IoSearchOutline className='text-white text-2xl font-semibold' />
         </button>
      </div>
   )
}

export default SearchBar