import React from 'react'
import'./recomended.css';

const Recomended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recomended-title">Recomended</h2>
        <div className="recomended-flex">
          <button onClickHandler={handleClick} value="" title="All Products" />
          <button onClickHandler={handleClick} value="Nike" title="Nike" />
          <button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <button onClickHandler={handleClick} value="Puma" title="Puma" />
          <button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recomended;