import React, { useState } from 'react'
import SearchBar from '../components/orgabisems/searchbar/SearchBar'
import Beranda from './Beranda'
import NavbarSide from '../components/orgabisems/navbar/NavbarSide'

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
      <div className={`flex w-[100%] justify-between h-[100vh] overflow-auto bg-black`}>
         <NavbarSide />
         <div className={` w-full md:w-[calc(100%-90px)] px-2 mb-3 relative`}>
            <SearchBar onTogle={handleIsTogel} isTogle={isTogle} />
            <Beranda isTogle={isTogle} closeSideBar={handleCloseTogle} />
         </div>
      </div>
   )
}

export default LayoutApp