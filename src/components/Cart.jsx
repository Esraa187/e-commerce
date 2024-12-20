import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Cart() {

    const { currentUser, setCurrentUser, removeFromCart } = useContext(UserContext);
    const navigate = useNavigate();

    const handleQuantityChange = (id, quantity) => {
        const updatedCart = currentUser.cart.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        setCurrentUser({ ...currentUser, cart: updatedCart });
    };




    if (currentUser.cart.length === 0) {
        return <div className="container text-center" style={{marginBottom:"130px",marginTop:"130px"}}><h3>Your cart is empty.</h3></div>;
    }
    const subtotal = currentUser.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal;
    return (
        <div className="container my-5">
            <div className="row align-items-center my-5 py-3 text-center cart-box">
                <div className="col-5 text-start ps-5">
                    <h5>Product</h5>
                </div>
                <div className="col-2">
                    <h5>Price</h5>
                </div>
                <div className="col-2">
                    <h5>Quantity</h5>
                </div>
                <div className="col-2">
                    <h5>Subtotal</h5>
                </div>
            </div>
            <div className="cart-container pt-3">
                {currentUser.cart.map(item => (
                    <div className="row align-items-center mb-3 py-2 cart-box" key={item.id}>
                        <div className="col-5 d-flex align-items-center">
                            <img src={item.images[0]} alt={item.title} className="img-fluid rounded" style={{ maxWidth: '80px', objectFit: 'cover' }} />
                            <h6 className="mb-0 ms-3">{item.title}</h6>
                        </div>
                        <div className="col-2 text-center">
                            <p className="mb-0 fw-medium">${item.price}</p>
                        </div>
                        <div className="col-2 text-center">
                            <input
                                type="number"
                                className="form-control text-center"
                                value={item.quantity}
                                min="1"
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                            />
                        </div>
                        <div className="col-2 text-center">
                            <p className="mb-0 fw-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div className="col-1 text-center">
                            <button onClick={() => removeFromCart(item)} className="remove-from-cart">
                                <i className="fa-solid fa-x"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row my-5">
                <div className="col-6">
                    <button className="cart-btn" onClick={() => navigate('/')}>Return To Shop</button>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <button className="cart-btn" >Update Cart</button>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-6">
                    <h5>Coupon Code</h5>
                    <div className="d-flex gap-3">
                        <input type="text" className="form-control w-50" placeholder="Coupon Code" />
                        <div>
                            <button className="checkout">Apply Coupon</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 d-flex justify-content-end mt-4 mt-lg-0">
                    <div className="border p-4 w-75">
                        <h5>Cart Total</h5>
                        <div className="d-flex justify-content-between my-4">
                            <p className="m-0">Subtotal:</p>
                            <p className="m-0">${subtotal.toFixed(2)}</p>
                        </div>
                        <hr className="my-2" />
                        <div className="d-flex justify-content-between my-4">
                            <p className="m-0">Shipping:</p>
                            <p className="m-0">Free</p>
                        </div>
                        <hr className="my-2" />
                        <div className="d-flex justify-content-between my-4">
                            <p className="m-0">Total:</p>
                            <p className="m-0">${total.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link to='/billing'><button className="checkout">Proceed to Checkout</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
