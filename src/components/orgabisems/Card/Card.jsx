import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import { cards } from '../../../constants/cards'

const Card = () => {
   return (
      <>
         {cards.map((item, i) => {
            return (
               <div key={i} className='mb-2  pb-1'>
                  <div className="w-full h-[14rem] bg-gray-400">
                     <img
                        src={item.thumbnail}
                        alt={item.owner}
                        className='w-full h-full object-cover object-center '
                     />
                  </div>
                  <div className="flex mt-2 px-3 gap-2">
                     <div className="">
                        <div className="w-11 h-11 rounded-full bg-gray-400">
                           <img src={item.profile}
                              alt={item.owner}
                              className='w-full h-full rounded-full object-cover'
                           />
                        </div>
                     </div>
                     <div className="w-full relative">
                        <div className="w-64 relative">
                           <div className="overflow-hidden">
                              <h3 className='text-white w-full font-semibold line-clamp-2 text-pretty'>{item.title}</h3>
                              <p className='text-gray-500 font-light text-[12px]'>
                                 {item.owner} <LuDot className='text-gray-500 inline-block' /> {item.view} rb x ditonton <LuDot className='text-gray-500 inline-block' /> {item.hour}
                              </p>
                           </div>
                        </div>
                        <div className="absolute flex  h-full justify-end w-full top-4">
                           <BsThreeDotsVertical className='text-white text-md  font-semibold' />
                        </div>
                     </div>
                  </div>
               </div>
            )
         })}
      </>
   )
}

export default Card