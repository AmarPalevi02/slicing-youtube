import React from 'react'
import { GoSearch } from "react-icons/go";

const InputSearch = () => {
   return (
      <div className='w-[22rem] h-8 relative'>
         <div className="h-full">
            <input
               type="text"
               placeholder='Telusuri'
               className='bg-black border-[1px] rounded-xl w-full h-full pl-2'
            />
            <button>
               <GoSearch />
            </button>
         </div>
      </div>
   )
}

export default InputSearch