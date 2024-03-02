import React from 'react'
import { logo } from '../../../assets'

const Logo = () => {
   return (
      <div className="flex items-center gap-1">
         <div className="w-9 h-13 overflow-hidden">
            <img
               src={logo}
               alt="logo"
               className='w-full h-full object-cover' />
         </div>
         <h1 className='text-xl text-white font-extrabold'>YouTube</h1>
      </div>
   )
}

export default Logo