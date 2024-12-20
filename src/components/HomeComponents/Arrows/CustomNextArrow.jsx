import React from 'react'
import './arrow.css'

function CustomNextArrow({ onClick }) {

    return (
        <div
            style={{
                position: "absolute",
                right: "70px", 
                top: "30px",
                cursor: "pointer",
                zIndex: 10,
            }}
            onClick={onClick}
        >
            <span className='arrow'><i className="fa-solid fa-arrow-right"></i></span>
        </div>
    );
}

export default CustomNextArrow
