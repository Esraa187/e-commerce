import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './billing.css';
import { UserContext } from '../context/UserContext';
import paypal from '../images/paypal.png'
import mastercard from '../images/mastercard.png'
import bank from '../images/bank.png'
import visa from '../images/visa.png'

const BillingCheckout = () => {
    const { currentUser } = useContext(UserContext);
    const [billingForm, setBillingForm] = useState({
        firstName: "",
        companyName: "",
        streetAddress: "",
        apartmentFloor: "",
        townCity: "",
        phoneNumber: "",
        emailAddress: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };
    const subtotal = currentUser.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal;
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can process the form data (e.g., send to an API)
        console.log(billingForm);
    };

    return (
        <div className='container' style={{ marginBottom: "100px", marginTop: "100px" }}>
            <div className='row gap-5 '>
                <div className='col-lg-4 '>
                    <h2 className='mb-5'>Billing Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='my-4 billing-control'>
                            <label>First Name<span>*</span></label>
                            <input
                                className='form-control'
                                type="text"
                                name="firstName"
                                value={billingForm.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className='my-4 billing-control'>
                            <label>Company Name</label>
                            <input
                                className='form-control'
                                type="text"
                                name="companyName"
                                value={billingForm.companyName}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='my-4 billing-control'>
                            <label>Street Address<span>*</span></label>
                            <input
                                className='form-control'
                                type="text"
                                name="streetAddress"
                                value={billingForm.streetAddress}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className='my-4 billing-control'>
                            <label>Apartment, floor, etc. (optional)</label>
                            <input
                                className='form-control'
                                type="text"
                                name="apartmentFloor"
                                value={billingForm.apartmentFloor}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='my-4 billing-control'>
                            <label>Town/City<span>*</span></label>
                            <input
                                className='form-control'
                                type="text"
                                name="townCity"
                                value={billingForm.townCity}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className='my-4 billing-control'>
                            <label>Phone Number<span>*</span></label>
                            <input
                                className='form-control'
                                type="tel"
                                name="phoneNumber"
                                value={billingForm.phoneNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className='my-4 billing-control'>
                            <label>Email Address<span>*</span></label>
                            <input
                                className='form-control'
                                type="email"
                                name="emailAddress"
                                value={billingForm.emailAddress}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className='my-4'>
                            <Form.Check type="checkbox" label="Save this information for faster check-out next time" className='save' />
                        </div>

                        {/* <Button variant="primary" type="submit">Place Order</Button> */}
                    </form>
                </div>

                <div className='col-lg-7 px-5' >
                    <div className='billing-container'>
                    {currentUser.cart.map(item => (
                        <div className="d-flex justify-content-between align-items-center mb-3 py-2 " key={item.id}>
                            <div className="d-flex align-items-center">
                                <img src={item.images[0]} alt={item.title} className="img-fluid rounded" style={{ maxWidth: '80px', objectFit: 'cover' }} />
                                <h6 className="mb-0 ms-3">{item.title}</h6>
                            </div>
                            <div className="text-center">
                                <p className="mb-0 fw-medium">${item.price}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="d-flex justify-content-between mt-5 mb-4">
                        <p className="m-0 fw-semibold">Subtotal:</p>
                        <p className="m-0 fw-semibold">${subtotal.toFixed(2)}</p>
                    </div>
                    <hr className="my-2" />
                    <div className="d-flex justify-content-between my-4">
                        <p className="m-0 fw-semibold">Shipping:</p>
                        <p className="m-0 fw-semibold">Free</p>
                    </div>
                    <hr className="my-2" />
                    <div className="d-flex justify-content-between my-4">
                        <p className="m-0 fw-semibold">Total:</p>
                        <p className="m-0 fw-semibold">${total.toFixed(2)}</p>
                    </div>
                    <form>
                        <div className='d-flex align-items-center justify-content-between mt-5'>
                            <Form.Check
                                type="radio"
                                id="bank"
                                name="payment"
                                label="Bank"
                                className="me-2"
                            />
                            <div className="payment-icons">
                                <img src={bank} alt="Bank" className='img-fluid' />
                                <img src={visa} alt="Visa" className='img-fluid' />
                                <img src={mastercard} alt="Mastercard" className='img-fluid' />
                                <img src={paypal} alt="PayPal" className='img-fluid' />
                            </div>
                        </div>
                        <Form.Check
                            type="radio"
                            id="cash"
                            name="payment"
                            label="Cash on delivery"
                            className="me-2 mt-4 mb-5"
                        />
                    </form>


                    <div className='d-flex justify-content-between'>
                        <input className='form-control' type="text" placeholder="Coupon Code" style={{ maxWidth: "65%" }} />
                        <button className="checkout">Apply Coupon</button>
                    </div>
                    <div>
                    <button className="checkout mt-4">Place Order</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillingCheckout;
