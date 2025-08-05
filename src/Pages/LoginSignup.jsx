import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
     <div className="loginsignup-container">

      <h1>
        Sign Up
      </h1>
      <div className="loginsignup-fields">
        <input type="text" name="" id="" placeholder='Your Name'/>
        <input type="email" name="" id="" placeholder='Email Address' />
        <input type="password" placeholder='Password' />
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already have an account? <span>Login</span>
       </p></div>
        <div className="loginsignup-agree">
         <input type="checkbox" name="" id="" />
         <p>By continuing, i agree to the terms  & privacy policy.</p>
        </div>
      
     </div>

    </div>
  )
}

export default LoginSignup