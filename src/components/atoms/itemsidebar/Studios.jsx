import React from 'react'
import { useNavigate } from 'react-router-dom'
import { studioItems } from '../../../constants/sidebar'

const Studios = () => {
  const navigate = useNavigate()
  return (
    <div className=''>
      {studioItems.map((item, i) => {
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

export default Studios