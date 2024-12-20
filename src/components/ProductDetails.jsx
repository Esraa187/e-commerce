import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './productdetails.css'
import { v4 as uuidv4 } from 'uuid';
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineArrowPath } from "react-icons/hi2";
import HeaderSection from "./HomeComponents/HeaderSection";
import ProductItem from "./HomeComponents/ProductItem";
import { UserContext } from "../context/UserContext";
function ProductDetails() {
  const params = useParams();
  const { currentUser, addToCart, handleAddToWishlist, handleRemoveFromWishlist } = useContext(UserContext);
  const [productDetails, setProductDetails] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const fetchProductDetails = async (id) => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setProductDetails(data);
      setSelectedImage(data.images[0]);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchRelatedItems = async () => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/category/${productDetails?.category}`);
      setRelatedItems(data.products.slice(0, 4));
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProductDetails(params.id);
  }, [params.id]);
  useEffect(() => {
    if (productDetails?.category) {
      fetchRelatedItems();
    }
  }, [productDetails]);
  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <i className="fas fa-spinner fa-spin fs-1"></i>
      </div>
    );
  }

  if (!productDetails) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <p>Product not found</p>
      </div>
    );
  }
  const ratingStars = (rate) => {
    const numOfStars = 5;
    const rateNum = Math.round(rate);
    const stars = [];
    for (let i = 1; i <= rateNum; i++) {
      stars.push(<i key={uuidv4()} className="fa-solid fa-star pe-1" style={{ color: "#FFAD33", fontSize: "15px" }}></i>)
    }
    for (let i = rateNum; i < numOfStars; i++) {
      stars.push(<i key={uuidv4()} className="fa-solid fa-star pe-1" style={{ color: "#ddd", fontSize: "15px" }}></i>)
    }
    return stars;
  }
  const isInWishlist = currentUser?.wishlist?.some((wishlistItem) => wishlistItem.id === productDetails.id);
  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    if (isInWishlist) {
      handleRemoveFromWishlist(productDetails);
    } else {
      handleAddToWishlist(productDetails);
    }
  };

  return (
    <div className="container">
      <div className="row align-items-stretch my-5">

        <div className="col-lg-2 d-flex  flex-lg-column flex-md-row gap-2 mb-3 mb-lg-0 mx-auto ">
          {productDetails.images?.map((img, i) => (
            <div key={i} className="thumbnails p-1" onClick={() => setSelectedImage(img)} >
              <img src={img} alt={`Thumbnail ${i}`} className="img-fluid h-100 w-100" />
            </div>
          ))}
        </div>

        <div className="col-lg-5 d-flex justify-content-center align-items-center main-product-img">
          <img src={selectedImage} alt="Main Product" className="img-fluid h-100" />
        </div>


        <div className="col-lg-5 ps-5 mt-3 mt-lg-0">
          <h3 className="fw-medium">{productDetails.title}</h3>
          <div>
            <span className="text-warning">
              {ratingStars(productDetails.rating)}
            </span>{" "}
            <span className="review-details">({productDetails.rating} Reviews)</span>
            <span className="mx-2">|</span>
            <span className="stock-details">In Stock</span>
          </div>
          <h4 className="my-3">${productDetails.price}</h4>
          <p className="product-details-description">{productDetails.description}</p>


          <div className="my-3 d-flex align-items-center gap-4">
            <span className="fs-5">Colours:</span >
            <div className="d-flex gap-2">
              <div className="color-red"></div>
              <div className="color-blue"></div>
            </div>
          </div>

          <div className="my-3 d-flex align-items-center gap-2">
            <span className="fs-5">Size:</span >
            <div className="d-flex gap-4">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button key={size} className="btn btn-outline-danger">
                  {size}
                </button>
              ))}
            </div>
          </div>


          <div className="d-flex align-items-center my-4 gap-3">
            <div className="quantity-selector d-flex align-items-center border rounded overflow-hidden">
              <button className="btn btn-outline-danger d-flex align-items-center justify-content-center" onClick={decrement}>−</button>
              <input type="text" readOnly className="text-center border-0" value={quantity} />
              <button className="btn btn-danger d-flex align-items-center justify-content-center" onClick={increment}>+</button>
            </div>
            <button className="btn-buy-now" onClick={() => addToCart(productDetails, quantity)}>Buy Now</button>
            <div className="details-icon">
              <i className={`fa-${isInWishlist ? 'solid' : 'regular'} fa-heart fs-3 ${isInWishlist ? 'selectedheart' : ''}`} onClick={handleWishlistToggle}></i>
            </div>
          </div>

          <div className="d-flex flex-column ">
            <div className="d-flex align-items-center gap-3 p-3 border">
              <div><TbTruckDelivery className="fs-1" /></div>
              <div>
                <p className="fw-medium fs-5 m-0 mb-1">Free Delivery:</p>
                <p className="m-0 border-bottom border-black" style={{ fontSize: "14px" }}>Enter your postal code for delivery availability.</p>
              </div>
            </div>
            {/*  */}
            <div className="d-flex align-items-center gap-3 p-3 border">
              <div><HiOutlineArrowPath className="fs-1" /></div>
              <div>
                <p className="fw-medium fs-5 m-0 mb-1">Return Delivery</p>
                <p className="m-0" style={{ fontSize: "14px" }}>Free 30 Days Delivery Returns. <span className="border-bottom border-black">Details</span></p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/*  */}
      <div style={{ marginBottom: "180px", marginTop: "180px" }}>
        <div className="row w-100 mb-5 ps-2 align-items-center" >
          <HeaderSection title={""} decsription={"Related Item"} col={"6"} />
        </div>
        <div className="row w-100 ">
          {relatedItems.map((item) => (
            <div key={item.id} className="col-md-3">
              <ProductItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
