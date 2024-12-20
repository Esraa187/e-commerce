import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import './FlashSales.css';
import ProductItem from './ProductItem';
import HeaderSection from './HeaderSection';

function BestSelling() {
    const [bestSell, setBestSell] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchSalesData = async () => {
        try {
            const { data } = await axios.get('https://dummyjson.com/products?sortBy=rating&order=desc')
            setBestSell(data.products.slice(0, 4));
            // console.log(data.products.slice(0,4))
        } catch (error) {
            console.error('Error fetching sales data:', error);
        } finally {
            setIsLoading(false);

        }
    };

    useEffect(() => {
        fetchSalesData();

    }, []);

   

    return (
        <div className="container " style={{ marginTop: "150px",marginBottom: "150px" }}>
            {isLoading ? (
                <div className='d-flex align-items-center justify-content-center vh-100'>
                    <i className='fas fa-spinner fa-spin fs-1'></i>
                </div>
            ) : (

                <div>
                    <div className="row w-100 mb-5 ps-2 align-items-center" >
                        <HeaderSection title={"Best Selling Products"} decsription={"This Month"} col={"6"} />
                        <div className="col-md-6 d-flex justify-content-end">
                            <button className='px-5 py-2 border border-0 view-all '>View All</button>
                        </div>
                    </div>
                    <div className="row w-100 ">
                        {bestSell.map((item) => (
                            <div key={item.id} className="col-md-3">
                                <ProductItem item={item} />
                            </div>
                        ))}
                    </div>
                </div>

            )}

        </div>
    );
}

export default BestSelling;
