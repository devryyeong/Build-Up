import React from 'react';
import logo from "../imgs/logo.png";

const Header = () => {
    return (
        <div>
            <img style={{position:"absolute",
            width:"7.6rem",
            height:"7.6rem", 
            left:"3.7rem", 
            top:"2rem"}} 
            src={logo} alt="로고" className="logo logo-fixed"></img>
        </div>
    );
};

export default Header;