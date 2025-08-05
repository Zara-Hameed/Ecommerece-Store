import React from 'react'
import './Offers.css'
import exclusiveimg from '../../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div  className='offers'>
        <div className="offersleft">
            <h1>Exclusive</h1>
            <h1>Offers For you</h1>
            <p>Only on best seller product</p>
            <button>Check now</button>


        </div>
        <div className="offersright">
            <img src={exclusiveimg} alt="" />
        </div>
    </div>
  )
}

export default Offers