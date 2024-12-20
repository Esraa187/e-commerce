import React from 'react'
import './somedetails.css'
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShieldCheckLine } from "react-icons/ri";

function SomeDetails() {
    return (
        <div className='container' style={{marginBottom:"150px",marginTop:"150px"}}>
            <div className="row">
                <div className="col-4">
                    <div className='details-content'>
                        <div>
                            <TbTruckDelivery className='mx-auto details-content-icon' />
                        </div>
                        <h6 className='fw-semibold'>FREE AND FAST DELIVERY</h6>
                        <p className='m-0'>Free delivery for all orders over $140</p>
                    </div>
                </div>
                <div className="col-4">
                <div className='details-content'>
                        <div>
                            <TfiHeadphoneAlt className='mx-auto details-content-icon' />
                        </div>
                        <h6 className='fw-semibold'>24/7 CUSTOMER SERVICE</h6>
                        <p className='m-0'>Friendly 24/7 customer support</p>
                    </div>
                </div>
                <div className="col-4">
                <div className='details-content'>
                        <div>
                            <RiShieldCheckLine className='mx-auto details-content-icon' />
                        </div>
                        <h6 className='fw-semibold'>MONEY BACK GUARANTEE</h6>
                        <p className='m-0'>We reurn money within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SomeDetails
