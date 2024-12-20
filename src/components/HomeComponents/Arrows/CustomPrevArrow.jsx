import React from 'react'
import './arrow.css'
function CustomPrevArrow({onClick}) {
  
  return (
    <div
      style={{
        position: "absolute",
        right: "120px",
        top: "30px",
        cursor: "pointer",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <span className='arrow'><i className="fa-solid fa-arrow-left"></i></span>
    </div>
  );
}

export default CustomPrevArrow



