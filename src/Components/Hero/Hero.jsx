import React from 'react'
import './Hero.css'
import handicon from '../../assets/hand_icon.png'
import arrowicon from '../../assets/arrow.png'
import heroimg from '../../assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="heroleft">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="handicon">
                    <p>New</p>
                    <img src={handicon} alt="" />
                </div>
                <p>Collection</p>
                <p>For everyone</p>
            </div>
            <div className="herolatestbutton">
                <div>
                    Latest Collection
                </div>
                <img src={arrowicon} alt="" />
            </div>
        </div>
        <div className="heroright">
            <img src={heroimg} alt="" />
        </div>
    </div>
  )
}

export default Hero