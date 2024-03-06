import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdConnectedTv } from "react-icons/md";
import Logo from '../../atoms/logo/Logo';
import Navbar from '../navbar/Navbar';
import InputSearch from './InputSearch';

const SearchBar = ({onTogle, handleIsTogel}) => {
   return (
      <div className="mb-2 md:pr-5">
         <div className='flex justify-between items-center pt-2'>
            <Logo />
            <InputSearch />
            <div className="flex gap-2 items-center">
               <MdConnectedTv className='text-white text-2xl font-semibold' />
               <IoIosNotificationsOutline className='text-white text-2xl font-semibold' />
               <button className='md:hidden'>
                  <IoSearchOutline className='text-white text-2xl font-semibold' />
               </button>
            </div>
         </div>
         <Navbar handleIsTogel={handleIsTogel} onTogle={onTogle} />
      </div>
   )
}

export default SearchBar