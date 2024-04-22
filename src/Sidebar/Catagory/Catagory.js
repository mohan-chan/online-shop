import React from 'react'
import './catagory.css';
import Input from "../../components/Input";

// function Catagory() {
//   return (
//     <div>
//       <h2 className="sidebar-items">Catagory</h2>
//     <div>
//     <label className="sidebar-label-container">
//       <input type="radio" name="text"/>
//       <span className="checkmark"></span>All
//     </label>
//     <label className="sidebar-label-container">
//       <input type="radio" name="text"/>
//       <span className="checkmark"></span>vivo
//     </label>
//     <label className="sidebar-label-container">
//       <input type="radio" name="text"/>
//       <span className="checkmark"></span>samsung
//     </label>
//     <label className="sidebar-label-container">
//       <input type="radio" name="text"/>
//       <span className="checkmark"></span>poco
//     </label>
//     </div>
//     </div>
    
    
//   )
// }

// export default Catagory


function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;