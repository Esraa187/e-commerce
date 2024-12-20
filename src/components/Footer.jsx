import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { RxPaperPlane } from "react-icons/rx";
import qrcode from '../images/qr.jpeg'
import playstore from '../images/googleplay.png'
import appstore from '../images/appstore.png'
import './footer.css'
function Footer() {
    return (
        <footer className='bg-black text-light '>
            <div className='container py-3'>
                <div className="row p-5">
                    <div className="col-lg-3 col-md-6">
                        <h3>Exclusive</h3>
                        <p className='fs-5'>Subscribe</p>
                        <p className='footer-text'>Get 10% off your first order</p>
                        <form className='footer-form'>
                            <input type="email" placeholder='Enter your email' />
                            <RxPaperPlane />
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <p className='fs-5'>Support</p>
                        <p className='footer-text'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className='footer-text'>exclusive@gmail.com</p>
                        <p className='footer-text'>+88015-88888-9999</p>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <p className='fs-5'>Account</p>
                        <p className='footer-text'>My Account</p>
                        <p className='footer-text'>Login / Register</p>
                        <p className='footer-text'>Cart</p>
                        <p className='footer-text'>Wishlist</p>
                        <p>Shop</p>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <p className='fs-5'>Quick Link</p>
                        <p className='footer-text'>Privacy Policy</p>
                        <p className='footer-text'>Terms Of Use</p>
                        <p className='footer-text'>FAQ</p>
                        <p className='footer-text'>Contact</p>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <p className='fs-5'>Download App</p>
                        <p className='footer-text-special'>Save $3 with App New User Only</p>
                        <div className="row footer-images align-items-center">
                            <div className="col-6 h-100">
                                <img src={qrcode} className="img-fluid w-100 h-100" alt="QR Code" />
                            </div>
                            <div className="col-6 p-0 h-100">
                                <div className="d-flex flex-column justify-content-around h-100">
                                    <img src={playstore} className="img-fluid w-100" alt="Google Play" style={{ height: "40px" }} />
                                    <img src={appstore} className="img-fluid w-100" alt="App Store" style={{ height: "40px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="footer-icons mt-3">
                            <FaFacebookF />
                            <RiTwitterLine />
                            <IoLogoInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
