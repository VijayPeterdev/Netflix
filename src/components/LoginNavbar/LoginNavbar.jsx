import React from "react";
import "./LoginNavbar.scss";
import Logo from "../../assets/logo.png";
import {BsGlobe2} from 'react-icons/bs'
import { AiFillCaretDown } from 'react-icons/ai'
import { Link } from "react-router-dom";

const LoginNavbar = () => {
  return (
    <>
      <div className="LoginNavbar__container">
      <Link  to={"/"}>
        <div className="right">
        
          <span className="logoname">விஜய்</span>
          <img src={Logo} className="logo" alt="logo" />
          
         
         
        </div>
        </Link>
        <div className="left">
          <button className="langbtn">
            <BsGlobe2/>
            English
            <AiFillCaretDown/>
           
          </button>

          <Link to={"/login"}>
          <button className="signinbtn">
            Signin
          </button>
          
          </Link>
         
        </div>
      </div>
    </>
  );
};

export default LoginNavbar;
