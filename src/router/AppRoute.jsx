import React from 'react'
import { Route, Routes } from "react-router-dom";
import SearchBar from '../components/orgabisems/searchbar/SearchBar';
import Navbar from '../components/orgabisems/navbar/Navbar';

const AppRoute = () => {
   return (
      <Routes>
         <Route
            path='/*'
            element={
               <>
                  <SearchBar />
                  <Navbar />
               </>
            }
         />
         <Route path />
      </Routes>
   )
}

export default AppRoute