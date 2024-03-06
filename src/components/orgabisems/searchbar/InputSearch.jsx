import React from 'react'
import { GoSearch } from "react-icons/go";
import { IoMdMic } from "react-icons/io";

const InputSearch = () => {
   return (
      <div className='hidden md:block w-[26rem] h-9 relative'>
         <div className="flex items-center w-full h-full gap-2">
            <div className="h-full w-full flex">
               <input
                  type="text"
                  placeholder='Telusuri'
                  className='bg-black border-[1px] border-neutral-800 rounded-tl-xl rounded-bl-xl w-full h-full pl-2 text-sm py-2 outline-none text-white'
               />
               <button className=' bg-neutral-800 h-9 text-white w-12 rounded-tr-xl rounded-br-xl'>
                  <GoSearch className='w-full text-center font-bold' />
               </button>
            </div>
            <button className='bg-neutral-800 w-9 h-8 rounded-full text-white flex items-center  justify-center'>
               <IoMdMic className='w-full text-md text-center' />
            </button>
         </div>
      </div>
   )
}

export default InputSearch