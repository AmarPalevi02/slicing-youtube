import React from 'react'
import SearchBar from '../components/orgabisems/searchbar/SearchBar'
import Navbar from '../components/orgabisems/navbar/Navbar'
import Card from '../components/orgabisems/Card/Card'

const LayoutApp = () => {
   return (
      <div className="w-[100%] h-[100vh] overflow-auto bg-black">
         <div className="w-full px-2 mb-3">
            <SearchBar />
            <Navbar />
         </div>
         <Card />
      </div>
   )
}

export default LayoutApp