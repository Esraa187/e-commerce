import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductItem from './HomeComponents/ProductItem';

function CatiegoriesItems() {
    const params = useParams();
    const [categoryDetails, setCategoryDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCategoryItems = async (categoryName) => {
        try {
            let { data } = await axios.get(`https://dummyjson.com/products/category/${categoryName}?limit=10`)
            console.log(data)
            setCategoryDetails(data.products)
        } catch (error) {
            console.error('Error fetching sales data:', error);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchCategoryItems(params.nameofCategory)
    }, [params.nameofCategory])
    return (
        <div className='container' style={{ marginBottom: "100px", marginTop: "100px" }}>
            {isLoading ? (
                <div className='d-flex align-items-center justify-content-center vh-100'>
                    <i className='fas fa-spinner fa-spin fs-1'></i>
                </div>
            ) : (<div className="row">
                {categoryDetails.map((item, i) => (
                    <div className="col-md-6 col-lg-3 my-5" key={i}>
                        <ProductItem item={item} />
                    </div>
                ))}
            </div>)}
        </div>
    )
}

export default CatiegoriesItems
