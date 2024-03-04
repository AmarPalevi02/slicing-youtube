import React from 'react'
import { GoSearch } from "react-icons/go";

const InputSearch = () => {
   return (
      <div className='w-[25rem] h-9 relative'>
         <div className="h-full w-full flex items-center">
            <input
               type="text"
               placeholder='Telusuri'
               className='bg-black border-[1px] border-neutral-800 rounded-tl-xl rounded-bl-xl w-full h-full pl-2 text-sm py-2 outline-none text-white'
            />
            <button className=' bg-neutral-800 h-9 text-white w-12 rounded-tr-xl rounded-br-xl'>
               <GoSearch className='w-full text-center font-bold' />
            </button>
         </div>
      </div>
   )
}

export default InputSearch