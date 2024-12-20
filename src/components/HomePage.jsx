import React from 'react'
import Intro from './HomeComponents/Intro'
import FlashSales from './HomeComponents/FlashSales'
import Category from './HomeComponents/Category'
import BestSelling from './HomeComponents/BestSelling'
import Banner from './HomeComponents/Banners/Banner'
import Banner2 from './HomeComponents/Banners/Banner2'
import OurProduct from './HomeComponents/OurProduct'
import SomeDetails from './HomeComponents/SomeDetails'

function HomePage() {
  return (
    <div>
      
      <Intro/>
      <FlashSales/>
      <Category/>
      <BestSelling/>
      <Banner/> 
      <OurProduct/>
      <Banner2/>
      <SomeDetails/>
    </div>
  )
}

export default HomePage
