import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login__container">
      <img
        className="login__banner"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d0a0affb-1c76-4cf0-9d75-eb531f32458c/e81da519-216b-4341-b9e7-92d45398ddc3/IN-en-20221214-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="banner"
      />
      <LoginNavbar />

      <div className="login__holder">
        <span className="signin">Sign In</span>
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
        <button className="signin__btn">Sign In</button>
        <div className="login__row">
          <input type="checkbox" />
          <span style={{ marginLeft: "-7rem" }}>Remember me</span>
          <span>Need help?</span>
        </div>
        <div className="newflix__holder">
          <span style={{color:"gray"}} className="">
            New to Netflix? <Link to={"/signup"}> <span style={{marginLeft:"12px",fontSize:"14px" , color:"white"}} href="/">Sign up now.</span> </Link>
          </span>
          <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. <small style={{color:"blue",fontSize:"14px"}}>learn more.</small></span>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
