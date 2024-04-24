import React from 'react'
import HomeVideo from './HomeVideo'
import CategoryProduct from './CategoryProduct'
import ProductNewArrival from './ProductNewArrival'
import FeedBack from './FeedBack'



const HomePage = (props) => {
  const allProduct = props.allProduct;
  const isLoading = props.isLoading;
  // console.log(allProduct);
  return (
    <div>
      <HomeVideo/>
      <CategoryProduct/>
      <ProductNewArrival allProduct={allProduct} isLoading={isLoading}/>
      <FeedBack/>
    </div>
  )
}

export default HomePage
