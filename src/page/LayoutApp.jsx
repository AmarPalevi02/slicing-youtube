import React, { useState } from 'react'
import SearchBar from '../components/orgabisems/searchbar/SearchBar'
import Navbar from '../components/orgabisems/navbar/Navbar'
import Beranda from './Beranda'

const LayoutApp = () => {
   const [isTogle, setIsTogle] = useState(false)

   const handleIsTogel = () => {
      setIsTogle(!isTogle)
      console.log(isTogle)
   }

   const handleCloseTogle = () => {
      setIsTogle(false)
      console.log(isTogle)
   }

   return (
      <div
         className={`w-[100%] h-[100vh] overflow-auto bg-black`}>
         <div className={`w-full px-2 mb-3 ${isTogle ? 'bg-black opacity-20' : 'bg-black'}`}>
            <SearchBar />
            <Navbar onTogle={handleIsTogel} />
         </div>
         <Beranda isTogle={isTogle} closeSideBar={handleCloseTogle} />
      </div>
   )
}

export default LayoutApp