import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const[menu,setMenu]=useState("shop")
    const {getTotalCartItems} =useContext(ShopContext)
  return (
    <div className="navbar">
      <div className="navlogo">
        <img src={logo} alt="" />
        <p>Shopper</p>
      </div>
      <div >
        <ul className="navmenu">
          <li onClick={()=>{setMenu("shop")}}><Link className="link" to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link className="link" to='/mens'>Men </Link>{menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}><Link className="link" to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link className="link" to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
      </div>
      <div className="navlogincart">
        <button><Link className="link" to='/login'>Login</Link></button>
        <Link className="link" to='/cart'><img src={cart_icon} alt="" /></Link>
        
        <div className="navcartcount">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
