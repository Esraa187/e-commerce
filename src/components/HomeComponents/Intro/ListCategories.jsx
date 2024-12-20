import React, { useState } from 'react';
import './ListCategories.css'
const ListCategories = () => {

    const [isOpenWomen, setIsOpenWomen] = useState(false)
    const [isOpenMen, setIsOpenMen] = useState(false)

    const toggleDropDown1 = () => {
        setIsOpenWomen(!isOpenWomen)
    }
    const toggleDropDown2 = () => {
        setIsOpenMen(!isOpenMen)
    }
    return (
        <div className='col-md-4 col-lg-3 ps-5 pt-3 '>
            <div className="pt-4">
                <div className="woman-fashion-list">
                    <div className="dropdownheader py-2 w-100 " onClick={toggleDropDown1}>
                        <span >Woman’s Fashion {isOpenWomen ? <i className="fa-solid fa-angle-down angle-icon"></i> : <i className="fa-solid fa-angle-right angle-icon"></i>}</span>
                    </div>
                    {isOpenWomen &&
                        <ul className='dropmenu'>
                            <li>Dresses</li>
                            <li>Tops</li>
                            <li>Bottoms</li>
                            <li>Accessories</li>
                        </ul>}
                </div>
                <div className="man-fashion-list">
                    <div className="dropdownheader py-2 " onClick={toggleDropDown2}>
                        <span >Man’s Fashion {isOpenMen ? <i className="fa-solid fa-angle-down angle-icon"></i> : <i className="fa-solid fa-angle-right angle-icon"></i>}</span>
                    </div>
                    {isOpenMen &&
                        <ul className='dropmenu'>
                            <li>T-shirts</li>
                            <li>Pants</li>
                            <li>Shirts</li>
                            <li>Soeses</li>
                        </ul>}
                </div>
                <div className="py-2 text-black" >
                    <span >Electronics</span>
                </div>
                <div className="py-2 text-black" >
                    <span >Home & Lifestyle</span>
                </div>
                <div className="py-2 text-black" >
                    <span >Medicine</span>
                </div>
                <div className="py-2 text-black" >
                    <span >Sports & Outdoor</span>
                </div>
                <div className="py-2 text-black" >
                    <span >Baby’s & Toys</span>
                </div>
                <div className="py-2 text-black" >
                    <span >Groceries & Pets</span>
                </div>
                <div className="py-2 text-black" >
                    <span >Health & Beauty</span>
                </div>

            </div>
        </div>
    );
};

export default ListCategories;