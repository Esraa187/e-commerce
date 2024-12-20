import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './FlashSales.css';
import ProductItem from './ProductItem';
import CustomNextArrow from './Arrows/CustomNextArrow';
import CustomPrevArrow from './Arrows/CustomPrevArrow';
import Timer from './Timer';
import HeaderSection from './HeaderSection';
import { Link } from 'react-router-dom';

function FlashSales() {
    const [salesData, setSalesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const sliderRef = useRef(null)
    const fetchSalesData = async () => {
        try {
            const [tablets, accessories, homeDecore] = await Promise.all([
                axios.get('https://dummyjson.com/products/category/tablets'),
                axios.get('https://dummyjson.com/products/category/mobile-accessories'),
                axios.get('https://dummyjson.com/products/category/home-decoration'),

            ]);


            const combinedData = [
                ...tablets.data.products.slice(0,5),
                ...accessories.data.products.slice(0,5),
                ...homeDecore.data.products.slice(0,5),
            ];

            setSalesData(combinedData);
            // console.log(salesData)
        } catch (error) {
            console.error('Error fetching sales data:', error);
        } finally {
            setIsLoading(false);

        }
    };

    useEffect(() => {
        fetchSalesData();

    }, []);

    const settings = {
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 5 } },
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } },
        ],

    };
    
    return (
        <div className="container " style={{ marginTop: "150px" }}>
            {isLoading ? (
                <div className='d-flex align-items-center justify-content-center vh-100'>
                    <i className='fas fa-spinner fa-spin fs-1'></i>
                </div>
            ) : (

                <div className='position-relative '>
                    <div className="row w-100 mb-5 ps-2" >
                        <HeaderSection title={"Flash Sales"} decsription={"Today’s"} col={"3"} />
                        <Timer />
                    </div>
                    {/* sliderBegin */}
                    <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
                    <div className="row w-100 ">
                        <Slider ref={sliderRef} {...settings} >
                            {salesData.map((item) => {
                                
                                return (
                                    <div key={item.id} className="col-md-2">
                                        <ProductItem item={item} />
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
                    {/* sliderEnd */}
                    <div className="row my-5 ">
                        <div className='d-flex align-items-center justify-content-center '>
                            <Link to='/allProducts'><button className='view-all'>View All Products</button></Link>
                        </div>
                        <hr />
                    </div>
                </div>

            )}

        </div>
    );
}

export default FlashSales;
