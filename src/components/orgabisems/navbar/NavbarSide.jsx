import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { MdOutlinePlayLesson } from "react-icons/md";

const NavbarSide = () => {
   return (
      <div className='bg-black w-[90px] h-full sticky top-0 hidden md:block '>
         <div className="flex flex-col justify-center items-center text-white gap-8 pt-3 w-full">
            <RxHamburgerMenu className='text-2xl font-bold' />
            <div className="flex flex-col justify-center gap-2 items-center">
               <AiFillHome className='text-2xl font-bold' />
               <p className='text-sm'>Beranda</p>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center">
               <SiYoutubeshorts className='text-2xl font-bold' />
               <p className='text-sm'>Short</p>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center">
               <BsFillCollectionPlayFill className='text-2xl font-bold' />
               <p className='text-sm'>Subcription</p>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center">
               <MdOutlinePlayLesson className='text-2xl font-bold' />
               <p className='text-sm'>Anda</p>
            </div>
         </div>
      </div>
   )
}

export default NavbarSide