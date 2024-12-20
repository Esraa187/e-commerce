import React, { useContext, useState } from 'react'
import './ProductItem.css'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { BsCart3 } from "react-icons/bs";
function WishlistProduct({ item }) {
    const { currentUser, addToCart, handleAddToWishlist, handleRemoveFromWishlist } = useContext(UserContext);

    const handleaddToCart = (e) => {
        e.stopPropagation();
        addToCart(item);
        handleRemoveFromWishlist(item)        
    };

    return (
        <div className='mx-2' style={{ cursor: "pointer" }}>
            <div className='flashdata-container'>
                <p className='discount-percentage'>{item.discountPercentage} %</p>
                <div className='product-icons'>
                    <i className="fa-solid fa-trash-can heart" onClick={()=>handleRemoveFromWishlist(item)}></i>
                </div>
                <Link to={`/product-details/${item.id}`}><img src={item.images[0]} alt={`Image of ${item.title}`} className="w-100 h-100" loading='lazy' /></Link>
                <button className='add-btn w-100' onClick={handleaddToCart}><BsCart3 className='me-2 fs-5'/>Add To Cart</button>
            </div>
            <h6 className='m-0 mt-4'>{item.title}</h6>
            <div className='d-flex align-items-center mb-1'>
                <p className='product-price m-0 me-3 text-danger fw-medium'>${item.price}</p>
                <p className='product-price m-0 fw-medium text-body-tertiary text-decoration-line-through'>${item.price + 100}</p>
            </div>
        </div>
    )
}

export default WishlistProduct
