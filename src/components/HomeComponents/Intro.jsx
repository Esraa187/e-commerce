import React from 'react'
import ListCategories from './Intro/ListCategories'
import Carousel from './Intro/Carousel'
function Intro() {
    return (
        <div className='container '>
            <div className="row mb-5">
                <ListCategories />
                <Carousel />
            </div>
        </div>
    )
}

export default Intro
