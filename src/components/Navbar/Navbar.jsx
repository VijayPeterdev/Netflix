import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [isScroll, setIsScroll] = useState(false);

  // window.onscroll = () => {
  //   setIsScroll(window.pageYOffset === 0 ? false : true);

  //   // cleaner function
  //   return () => (window.onscroll = null);
  // };
  // console.log(isScroll);

  return (
    <div className={"navbar__container"}>
    
      
     
      <div className="right">
     
      
        <Link to={"/"} className="link" style={{textDecoration:"none"}}>
       
        <span className="logoname">விஜய்</span>
        </Link>
    
      <Link to={"/"}>
      <img className="logoimg" src={Logo} alt="logo" />
      </Link>
        
       
        
       
         
     
     
        <ul>
          <Link to={"/"} className="link">
            <li>Home</li>
          </Link>

          <Link to={"/series"} className="link">
            <li >  Series</li>
          </Link>

          <Link to={"/movies"} className="link">
            <li>Movies</li>
          </Link>

          <li>New & Popular</li>
          <li>My list</li>
        </ul>
      </div>
      <div className="left">
        <BsSearch fontSize={"16px"} />
        <span>KIDS</span>
        <IoMdNotificationsOutline fontSize={"20px"} />
        <div className="profile">
          <img
            className="profile_img"
            src="https://m.economictimes.com/thumb/msid-90912686,width-1200,height-900,resizemode-4,imgsize-80284/kgf-2-is-rewriting-record-books-adarsh-said-in-his-tweet-.jpg"
            alt="profilepic"
          />
          <AiOutlineDown fontSize={"16px"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
