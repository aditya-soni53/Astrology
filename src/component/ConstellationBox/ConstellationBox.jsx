import React from 'react'
import './ConstellationBox.css'

const ConstellationBox = ({text, img}) => {
  return (
    <div className='constellation-box-section'>
      <div className='constellation-box-image'>
        <img src={img} alt="" />
      </div>
      <span> {text} </span>
    </div>
  )
}

export default ConstellationBox