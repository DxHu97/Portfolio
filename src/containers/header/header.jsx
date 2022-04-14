import React from 'react';
import './header.css';
import david from "../../assets/david.jpg";

const Header = () => {
  return (
    <div className = "header section__padding" id = "home">
      <div className = "header-content"> 
      <h1 className ="gradient__text">
        HELLO!
      </h1>
      <p> It's me David </p>
      </div>
      <div className = "header-image">
        <img src = {david} alt = "its me" />
      </div>
    </div>
  )
}

export default Header