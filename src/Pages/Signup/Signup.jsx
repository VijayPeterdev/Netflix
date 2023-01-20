import React from 'react'
import './Signup.scss'
import Footer from './../../components/Footer/Footer';
import LoginNavbar from './../../components/LoginNavbar/LoginNavbar';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="login__container">
    <img
      className="login__banner"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/d0a0affb-1c76-4cf0-9d75-eb531f32458c/e81da519-216b-4341-b9e7-92d45398ddc3/IN-en-20221214-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="banner"
    />
    <LoginNavbar />

    <div className="login__holder">
      <span className="signin">Signup</span>
      <input
        className="input__holder"
        type="text"
        placeholder="Enter your username"
      />
      <input
        className="input__holder"
        type="text"
        placeholder="Email or phone number"
      />
      <input
        className="input__holder"
        type="password"
        placeholder="password"
      />
      <button className="signin__btn">Signup</button>
    
      <div className="newflix__holder">
        <span style={{color:"gray"}} className="">
          already on account <Link to={"/login"}>  <span style={{marginLeft:"12px",fontSize:"14px" , color:"white"}} href="/">Sign In now.</span></Link>
        </span>
        <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. <small style={{color:"blue",fontSize:"14px"}}>learn more.</small></span>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Signup