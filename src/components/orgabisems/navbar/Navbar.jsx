import React from 'react'

import { FaRegCompass } from "react-icons/fa6";
import { navLink } from '../../../constants/navbarLink';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ onTogle }) => {
   const navigate = useNavigate()
   const path = useLocation()
   const pathName = path.pathname

   return (
      <div className={`mt-4 flex gap-2 overflow-x-auto flex-row text-nowrap items-center scrollbar-hide `}>
         <button
            className="bg-neutral-800 py-2 px-3 rounded-sm lg:hidden"
            onClick={onTogle}
         >
            <FaRegCompass
               className='text-white text-2xl'
            />
         </button>
         <div className=" ">
            {navLink.map((link, i) => {
               return (
                  <button
                     key={i}
                     onClick={() => navigate(`{link.path}`)}
                     className={` mr-2  py-2 px-3 rounded-md ${pathName === link.path ? 'bg-white text-black' : 'bg-neutral-800 text-white'}`}
                  >
                     {link.title}
                  </button>
               )
            })}
         </div>
      </div>
   )
}

export default Navbar