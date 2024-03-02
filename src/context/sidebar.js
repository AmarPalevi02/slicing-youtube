import React, { useContext, createContext, useState } from "react";

const TrigerSidebar = createContext()

export const Sidebarprovider = ({ children }) => {
   const [isTogle, setIsTogle] = useState(false)

   const handleTogle = () => {
      setIsTogle(!isTogle)
   }
   return (
      <TrigerSidebar.Provider value={{ isTogle, handleTogle }}>
         {children}
      </TrigerSidebar.Provider>
   )
}

export const useSidebar = () => {
   return useContext(TrigerSidebar)
}