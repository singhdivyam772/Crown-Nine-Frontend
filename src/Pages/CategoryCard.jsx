import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CategoryCard = () => {
   const location = useLocation();
   const { categoryProduct, category } = location.state;

   console.log(category)

   const [allProductData, setAllProductData] = useState()
   const navigate = useNavigate()

   // navigate to productdetails
   const navigateToProductDetails = (products) => {
      navigate('/productdetails', { state: { products } });
   };

   return (
      <div className=' w-screen flex flex-col justify-center items-center'>
         <h1 className='text-4xl font-normal leading-9 pt-6 uppercase'>
            {category.categoryName}
         </h1>
         {/* new arrival product section */}
         <section className={ (categoryProduct.length > 0) ? `flex lg:flex-row flex-wrap justify-center items-center gap-12 w-full py-10 min-h-[30rem]` : 'flex lg:flex-row flex-wrap justify-center items-center w-full py-10 min-h-[10rem]'}>
            {
               (categoryProduct.length > 0) ? (
                  categoryProduct.map((product, index) => (
                     <div
                        key={index}
                        onClick={() => navigateToProductDetails(product)}
                        className='flex flex-col justify-start items-center hover:scale-[1.1] transition-all w-[18rem] min-h-[20rem] cursor-pointer rounded-b-xl shadow-md bg-pink-100/40 overflow-hidden'
                     >
                        {/* Product Image */}
                        <img
                           src={product.mainimage1}
                           alt="Image not loaded"
                           className='w-full h-full object-cover'
                        />
                        {/* Product Title */}
                        <p className='font-normal text-md pt-3 px-3 leading-6 rounded-b-md text-left'>
                           {`${product.productTitle}`}
                        </p>
                        {/* Product Price */}
                        <p className='font-normal text-md pb-4 leading-6 rounded-b-md text-left'>
                           {`Regular price Rs. ${product.price}`}
                        </p>
                     </div>
                  ))
               ) : (
                  <p  className='text-4xl font-normal leading-9 pt-6 uppercase'>No Products</p>
               )
            }
         </section>

      </div>
   )
}

export default CategoryCard
