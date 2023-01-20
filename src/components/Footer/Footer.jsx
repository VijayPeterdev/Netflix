import React from "react";
import { BsGlobe } from "react-icons/bs";
import "./Footer.scss";
import { AiFillCaretDown } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer__container">
      <span className="call__detail">Questions? Call 86105- 70243</span>

      <div className="menu__list">
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
        <ul>
          <li>Speed Test</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Account</li>
          <li>Way to Watch</li>
          <li>Corporate Information</li>
          <li>Only on VijayFlix</li>
        </ul>
        <ul>
          <li>Media Centre</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="btn__container">
        <button className="lang">
          <BsGlobe />
          English
          <AiFillCaretDown />
        </button>
        <span style={{color:"red"}}>VijayFlix India</span>
      </div>
      
    </div>
  );
};

export default Footer;
