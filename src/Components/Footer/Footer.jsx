import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/logo_big.png'
import instagramicon from '../../assets/instagram_icon.png'
import pintresticon from '../../assets/pintester_icon.png'
import whatsapp from '../../assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerlogo">
            <img src={footerlogo} alt="" />
            <p>SHOPPER</p>

        </div>
        <ul className="footerlinks">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>

        </ul>

        <div className="footersocialicon">
            <div className="footericoncontainer">
                <img src={instagramicon} alt="" />
            </div>
             <div className="footericoncontainer">
                <img src={pintresticon} alt="" />
            </div>
             <div className="footericoncontainer">
                <img src={whatsapp} alt="" />
            </div>
           
        </div>
        <div className="footercopyright">
            <hr />
            <p>
                Copyright @2023 - All right Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer