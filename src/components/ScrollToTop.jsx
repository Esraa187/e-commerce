import React, { useEffect, useState } from 'react'
import './scrolltotop.css'
function ScrollToTop() {
    const [visibe, setVisible] = useState(false);
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
    return (
        <>
            {visibe&&<button className='scroll-btn' onClick={scrollTop}><i className="fa-solid fa-arrow-up"></i></button>}
        </>
    )
}

export default ScrollToTop
