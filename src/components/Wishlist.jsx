import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../context/UserContext';
import WishlistProduct from './HomeComponents/WishlistProduct';
import HeaderSection from './HomeComponents/HeaderSection';
import ProductItem from './HomeComponents/ProductItem';
import axios from 'axios';

function Wishlist() {
    const { currentUser, setCurrentUser, addToCart } = useContext(UserContext);

    const [forYou, setForYou] = useState([]);

    const fetchSalesData = async () => {
        try {
            const { data } = await axios.get('https://dummyjson.com/products?sortBy=rating&order=desc')
            setForYou(data.products.slice(4, 8));
        } catch (error) {
            console.error('Error fetching sales data:', error);
        }
    };

    useEffect(() => {
        fetchSalesData();

    }, []);
    const handleMoveAllToBag = () => {
        if (!currentUser) return;

        currentUser.wishlist.forEach((item) => {
            addToCart(item);
        });

        setCurrentUser((prevUser) => ({
            ...prevUser,
            wishlist: []
        }));
    };
    return (
        <div className="container my-5">
            <div className="row my-5">
                <div className="col-6">
                    <h4>Wishlist ({currentUser.wishlist.length})</h4>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <button className='cart-btn' onClick={handleMoveAllToBag}>Move All To Bag</button>
                </div>
            </div>
            <div className="row">
                {currentUser.wishlist.map((item) => (
                    <div className="col-md-3 mb-4" key={item.id}>
                        <div className="h-100">
                            <WishlistProduct item={item} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="row w-100 mb-5 ps-2 align-items-center mt-5 align-items-center" >
                <HeaderSection title={""} decsription={"Just For You"} col={"6"} />
                <div className="col-md-6 d-flex justify-content-end">
                    <button className='px-5 py-2 bg-body text-black border border-dark rounded'>See All</button>
                </div>
            </div>
            <div className="row w-100 mb-5">
                {forYou.map((item) => (
                    <div key={item.id} className="col-md-3">
                        <ProductItem item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Wishlist;
