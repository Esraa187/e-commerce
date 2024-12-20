import React, { useState } from 'react'
import './contact.css'
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

function Contact() {
    const [concat, setConcat] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const concatChanges = (e) => {
        const { name, value } = e.target;
        setConcat((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <div className='container spaces'>
            <div className="row gap-5">
                <div className="col-md-3 concat-details p-4">
                    <div className='d-flex align-items-center gap-3 mb-4'>
                        <div className='contact-icon-container'>
                            <FiPhone className='contact-icon' />
                        </div>
                        <h5 className='fw-semibold m-0'>Call To Us</h5>
                    </div>
                    <p className='concat-text'>We are available 24/7, 7 days a week.</p>
                    <p className='concat-text'>Phone: +8801611112222</p>
                    <hr className='my-4' />
                    <div className='d-flex align-items-center gap-3 mb-4'>
                        <div className='contact-icon-container'>
                            <MdMailOutline className='contact-icon' />
                        </div>
                        <h5 className='fw-semibold m-0'>Write To US</h5>
                    </div>
                    <p className='concat-text'>Fill out our form and we will contact you within 24 hours.</p>
                    <p className='concat-text'>Emails: customer@exclusive.com</p>
                    <p className='concat-text'>Emails: support@exclusive.com</p>
                </div>
                <div className="col-md-7 concat-form p-4">
                    <div>
                        <form>
                            <div className="row mb-5 contact-form">
                                <div className="col-md-4 p-0 my-2  input-container">
                                    <div className="input-container">
                                        <input type="text" className="form-input" value={concat.name} name='name' onChange={concatChanges} required />
                                        {concat.name === "" && (
                                            <label className="floating-placeholder">Your Name <span className="required-star">*</span></label>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-4 p-0 my-2 input-container">
                                    <input type="text" className="form-input" value={concat.email} name='email' onChange={concatChanges} required />
                                    {concat.email === "" && (
                                        <label className="floating-placeholder">Your Email <span className="required-star">*</span></label>
                                    )}
                                </div>
                                <div className="col-md-4 p-0 my-2 input-container">
                                    <input type="text" className="form-input" value={concat.phone} name='phone' onChange={concatChanges} required />
                                    {concat.phone === "" && (
                                        <label className="floating-placeholder">Your Phone <span className="required-star">*</span></label>
                                    )}
                                </div>
                            </div>
                            <div className="row">
                                <textarea name="massage" placeholder='Your Massage' rows={10}></textarea>
                            </div>
                            <div className='d-flex align-items-center justify-content-end mt-4'>
                                <button className='checkout'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
