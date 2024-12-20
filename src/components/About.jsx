import React from 'react'
import about from '../images/about.jpeg'
import './about.css'
import { CiShop } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { FaSackDollar } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import man1 from '../images/man1.png'
import man2 from '../images/man2.png'
import woman from '../images/woman.png'
import SomeDetails from './HomeComponents/SomeDetails';
import { useLocation } from 'react-router-dom';

function About() {
   
    return (
        <div className='container my-5'>
            <div className="row spaces align-items-center">
                <div className="col-md-6">
                    <h1>Our Story</h1>
                    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh.
                        Supported by wide range of tailored marketing, data and service solutions,
                        Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                    </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast.
                        Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <div className="col-md-6">
                    <img src={about} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="row spaces">
                <div className="col-lg-3 col-sm-6 mt-4" >
                    <div className=' sales-num'>
                        <div>
                            <CiShop className='sales-icon mx-auto ' />
                        </div>
                        <h4 className='fw-semibold mt-3'>10.5k</h4>
                        <p>Sallers active our site</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-4">
                    <div className='sales-num'>
                        <div>
                            <HiOutlineCurrencyDollar className='sales-icon mx-auto' />
                        </div>
                        <h4 className='fw-semibold mt-3'>33k</h4>
                        <p>Mopnthly Produduct Sale</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-4">
                    <div className='sales-num'>
                        <div>
                            <FiShoppingBag className='sales-icon dollar-bag mx-auto' />
                        </div>
                        <h4 className='fw-semibold mt-3'>45.5k</h4>
                        <p>Customer active in our site</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-4">
                    <div className='sales-num'>
                        <div>
                            <FaSackDollar className='sales-icon dollar-bag mx-auto' />
                        </div>
                        <h4 className='fw-semibold mt-3'>25k</h4>
                        <p>Anual gross sale in our site</p>
                    </div>
                </div>
            </div>
            <div className="row spaces">
                <div className="col-md-4">
                    <div className="manager-container px-4">
                        <div className="manager-img">
                            <img src={man1} alt="" className='img-fluid h-100 ' />
                        </div>
                        <h3>Will Smith</h3>
                        <p>Product Designer</p>
                        <div className='manager-social'>
                            <RiTwitterLine />
                            <IoLogoInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="manager-container px-4">
                        <div className="manager-img">
                            <img src={woman} alt="" className='img-fluid h-100 ' />
                        </div>
                        <h3>Emma Watson</h3>
                        <p>Managing Director</p>
                        <div className='manager-social'>
                            <RiTwitterLine />
                            <IoLogoInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="manager-container px-4">
                        <div className="manager-img">
                            <img src={man2} alt="" className='img-fluid h-100 ' />
                        </div>
                        <h3>Tom Cruise</h3>
                        <p> Founder & Chairman</p>
                        <div className='manager-social'>
                            <RiTwitterLine />
                            <IoLogoInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
            </div>
            <SomeDetails/>
        </div>
    )
}

export default About
