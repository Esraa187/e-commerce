import React from 'react'
import HeaderSection from '../HeaderSection';
import playstation from '../../../images/playstation.png'
import Perfume from '../../../images/perfume.png'
import women from '../../../images/women.jpeg'
import speaker from '../../../images/speaker.png'

import './banner2.css'
function Banner2() {
    return (
        <div className="container my-5">
            <div className="row mb-5">
                <HeaderSection title={"New Arrival"} decsription={"Featured"} col={"6"}/>
            </div>
            <div className="row g-4">
                <div className="col-lg-6">
                    <div className="card bg-black text-white h-100">
                        <img src={playstation} className="card-img h-100" alt="PlayStation 5" />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h4 className="card-title">PlayStation 5</h4>
                            <p className="card-text">Black and White version of the PS5 coming out on sale.</p>
                            <a>Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row mb-4">
                        <div className="card bg-black text-white">
                            <img src={women} className="card-img" alt="Women's Collections" />
                            <div className="card-img-overlay d-flex flex-column justify-content-end">
                                <h4 className="card-title">Women's Collections</h4>
                                <p className="card-text">Featured women collections that give you another vibe.</p>
                                <a>Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card bg-black text-white h-100">
                                <img src={speaker} className="card-img h-75 my-auto " alt="Speakers" />
                                <div className="card-img-overlay d-flex flex-column justify-content-end">
                                    <h4 className="card-title">Speakers</h4>
                                    <p className="card-text">Amazon wireless speakers</p>
                                    <a>Shop Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 ">
                            <div className="card bg-black text-white h-100">
                                <img src={Perfume} className="card-img h-75 my-auto" alt="Perfume" />
                                <div className="card-img-overlay d-flex flex-column justify-content-end">
                                    <h4 className="card-title">Perfume</h4>
                                    <p className="card-text">GUCCI INTENSE-OUD EDP</p>
                                    <a>Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2
