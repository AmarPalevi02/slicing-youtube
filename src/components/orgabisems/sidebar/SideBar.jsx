import React from 'react'
import Logo from '../../atoms/logo/Logo'
import MenuItems from '../../atoms/itemsidebar/MenuItems'

const SideBar = ({ isOpen }) => {
  return (
    <div className={`fixed inset-y-0 left-0 w-64 bg-stone-800 text-white  transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out `}>
      <div className="px-5 pt-2">
        <Logo />
        <MenuItems />
      </div>
      <div className="w-full border-[1px] border-gray-500"></div>
    </div>
  )
}

export default SideBar