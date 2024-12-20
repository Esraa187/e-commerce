import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomNextArrow from './CustomNextArrow';
import CustomPrevArrow from './CustomPrevArrow';
import HeaderSection from './HeaderSection';
import './Category.css'
import ProductItem from './ProductItem';


function Try() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const sliderRef = useRef(null)
    const fetchSalesData = async () => {
        try {
            const categoryList = await axios.get('https://dummyjson.com/products')
            setCategories(categoryList.data.products)
            // console.log(categoryList)
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

                <div className=' position-relative '>
                    <div className="row w-100 mb-5 ps-2" >
                        <HeaderSection title={"Browse By Category"} decsription={"Categories"} col={"4"}/>
                    </div>
                    {/* sliderBegin */}
                    <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
                    <div className="row w-100 g-3">
                        <Slider ref={sliderRef} {...settings} >
                            {categories.map((item, i) => {
                                return (
                                    <div key={item.id} className="col-md-2 ">
                                        <ProductItem item={item} />
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
                   
                    
                </div>

            )}

        </div>
    );
}

export default Try
