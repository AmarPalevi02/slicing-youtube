import React from 'react'

const SideBar = ({isOpen}) => {
  return (
    <div className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>

    </div>
  )
}

export default SideBar