import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import CustomNextArrow from './Arrows/CustomNextArrow';
import CustomPrevArrow from './Arrows/CustomPrevArrow';
import HeaderSection from './HeaderSection';
import './Category.css'
import { FaQuestionCircle } from "react-icons/fa";
import categoryIcons from './CategoryIcons'
import { Link } from 'react-router-dom';


function Category() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const sliderRef = useRef(null)
    const fetchAllCategories = async () => {
        try {
            const categoryList = await axios.get('https://dummyjson.com/products/categories')
            setCategories(categoryList.data)
            // console.log(categoryList)
        } catch (error) {
            console.error('Error fetching sales data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAllCategories();
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
                        <HeaderSection title={"Browse By Category"} decsription={"Categories"} col={"4"} />
                    </div>
                    {/* sliderBegin */}
                    <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
                    <div className="row w-100 g-3">
                        <Slider ref={sliderRef} {...settings} >
                            {categories.map((item, i) => {
                                return (
                                    <div key={i} className="col-md-2 " >
                                        <Link to={`/categories/${item.slug}`}>
                                            <div className='mx-sm-3 mx-4  border category-content'>
                                                <div className='d-flex align-items-center flex-column py-3'>
                                                    <div className='category-icon'> {categoryIcons[item.slug] || <FaQuestionCircle />}</div>
                                                    <p className='pt-2 '>{item.name}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
                    <hr />
                    {/* sliderEnd */}

                </div>

            )}

        </div>
    );
}

export default Category
