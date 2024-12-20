import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductItem from './HomeComponents/ProductItem';
import Pagination from '@mui/material/Pagination';
import HeaderSection from './HomeComponents/HeaderSection';

function AllProducts() {
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const fetchAllProducts = async () => {
        try {
            let { data } = await axios.get('https://dummyjson.com/products?limit=190');
            setAllProducts(data.products);
        } catch (error) {
            console.error('Error fetching sales data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = allProducts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='container' style={{ marginBottom: "100px", marginTop: "100px" }}>
            {isLoading ? (
                <div className='d-flex align-items-center justify-content-center vh-100'>
                    <i className='fas fa-spinner fa-spin fs-1'></i>
                </div>
            ) : (
                <>
                <div className="row w-100 mb-5 ps-2 align-items-center" >
                        <HeaderSection title={"Explore Our Products"} decsription={"Our Products"} col={"12"} />
                    </div>
                    <div className="row">
                        {currentProducts.map((item, i) => (
                            <div className="col-md-6 col-lg-3 my-5" key={i}>
                                <ProductItem item={item} />
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <Pagination
                            count={Math.ceil(allProducts.length / itemsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default AllProducts;
