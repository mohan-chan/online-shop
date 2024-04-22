import React from 'react'
import Category from'./Catagory/Catagory'
import Price from "./Catagory/Price/Price"
import Colors from "./Catagory/Colors/Colors"
import "./sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};
 export default Sidebar;