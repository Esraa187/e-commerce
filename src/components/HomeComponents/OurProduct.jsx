import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import './FlashSales.css';
import ProductItem from './ProductItem';
import HeaderSection from './HeaderSection';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CustomNextArrow from './Arrows/CustomNextArrow';
import CustomPrevArrow from './Arrows/CustomPrevArrow';
function OurProduct() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const sliderRef = useRef(null)

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get('https://dummyjson.com/products?order=desc')
            setProduct(data.products.slice(4));

        } catch (error) {
            console.error('Error fetching sales data:', error);
        } finally {
            setIsLoading(false);

        }
    };

    useEffect(() => {
        fetchProducts();

    }, []);

    const settings = {
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rows: 2,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 5 } },
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } },
        ],

    };

    return (
        <div className="container " style={{ marginTop: "150px", marginBottom: "150px" }}>
            {isLoading ? (
                <div className='d-flex align-items-center justify-content-center vh-100'>
                    <i className='fas fa-spinner fa-spin fs-1'></i>
                </div>
            ) : (

                <div className='position-relative'>
                    <div className="row w-100 mb-5 ps-2 align-items-center" >
                        <HeaderSection title={"Explore Our Products"} decsription={"Our Products"} col={"6"} />
                    </div>
                    <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />

                    <div className="row w-100 ">
                        <Slider ref={sliderRef} {...settings} >
                            {product.map((item) => (
                                <div key={item.id} className="col-md-3 mb-5">
                                    <ProductItem item={item} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />


                    <div className="row my-5 ">
                        <div className='d-flex align-items-center justify-content-center '>
                            <Link to='/allProducts'><button className='view-all'>View All Products</button></Link>
                        </div>
                    </div>
                </div>


            )}

        </div>
    );
}

export default OurProduct
