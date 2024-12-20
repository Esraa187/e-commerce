import React, { useContext, useState } from 'react'
import './ProductItem.css'
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';


function ProductItem({ item }) {
    const { currentUser, addToCart, handleAddToWishlist, handleRemoveFromWishlist } = useContext(UserContext);
    const ratingStars = (rate) => {
        const numOfStars = 5;
        const rateNum = Math.round(rate);
        const stars = [];
        for (let i = 1; i <= rateNum; i++) {
            stars.push(<i key={uuidv4()} className="fa-solid fa-star pe-1" style={{ color: "#FFAD33", fontSize: "13px" }}></i>)
        }
        for (let i = rateNum; i < numOfStars; i++) {
            stars.push(<i key={uuidv4()} className="fa-solid fa-star pe-1" style={{ color: "#ddd", fontSize: "13px" }}></i>)
        }
        return stars;
    }
    const handleaddToCart = (e) => {
        e.stopPropagation();
        toast.success("New item added to cart successfully!", {
            autoClose: 3000, 
        });
        addToCart(item);


    };
    const isInWishlist = currentUser?.wishlist?.some((wishlistItem) => wishlistItem.id === item.id);
    const handleWishlistToggle = (e) => {
        e.stopPropagation();
        if (isInWishlist) {
            handleRemoveFromWishlist(item);
        } else {
            handleAddToWishlist(item);
        }
    };
    return (
        <>
            <div className='mx-2' style={{ cursor: "pointer" }}>
                <div className='flashdata-container'>
                    <p className='discount-percentage'>{item.discountPercentage} %</p>
                    <div className='product-icons'>
                        <i className={`fa-${isInWishlist ? 'solid' : 'regular'} fa-heart heart ${isInWishlist ? 'selectedheart' : ''}`} onClick={handleWishlistToggle}></i>
                        <Link to={`/product-details/${item.id}`}><i className="fa-solid fa-eye text-black"></i></Link>
                    </div>
                    <img src={item.images[0]} alt={`Image of ${item.title}`} className="" loading='lazy' />
                    <button className='add-btn w-100' onClick={handleaddToCart}>Add To Cart</button>
                </div>

                <p className='produc-title m-0 mt-4'>{item.title}</p>
                <div className='d-flex align-items-center mb-1'>
                    <p className='product-price m-0 me-3 text-danger fw-medium'>${item.price}</p>
                    <p className='product-price m-0 fw-medium text-body-tertiary text-decoration-line-through'>${item.price + 100}</p>
                </div>
                <div className="stars">
                    {ratingStars(item.rating)}
                    <span className='stock'> ({item.stock})</span>
                </div>
            </div>
        </>

    )
}

export default ProductItem
