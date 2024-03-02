import React from 'react'
import { useNavigate } from 'react-router-dom'
import { sidebarItems } from '../../../constants/sidebar'

const MenuItems = () => {
   const navigate = useNavigate()
   return (
      <div className='mt-9'>
         {sidebarItems.map((item, i) => {
            return (
               <div
                  key={i}
                  className="flex gap-5 items-center mb-5  pl-2"
                  onClick={() => navigate(`${item.path}`)}
               >
                  <p className='text-xl font-semibold'>{item.icon}</p>
                  <p className='text-lg font-semibold'>{item.title}</p>
               </div>
            )
         })}
      </div>
   )
}

export default MenuItems