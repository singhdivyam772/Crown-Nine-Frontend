import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'


const ProductNewArrival = (props) => {
   const ProductData = props.allProduct;
   const isLoading = props.isLoading;
   const [allProductData, setAllProductData] = useState()


   useEffect(() => {
      if (ProductData) {
         setAllProductData(ProductData);
      }
   }, [ProductData]);

   console.log(allProductData)
   return (
      <div className=' w-screen flex flex-col justify-center items-center'>
         <h1 className='text-4xl font-normal leading-9 py-2'>
            New Arrivals
         </h1>
         {/* new arrival product section */}
         <section className=' flex lg:flex-row flex-wrap justify-center items-center gap-6 w-full py-10  min-h-[30rem] '>
            <Link to='/productdetails'>
               {
                  isLoading
                     ? <Loader />
                     : allProductData?.map((products, index) => (
                        <div
                           key={index}
                           className='flex flex-col justify-start items-center hover:scale-[1.1] transition-all w-[18rem] min-h-[20rem] cursor-pointer rounded-b-xl shadow-md bg-pink-100/40 overflow-hidden'
                        >
                           <img
                              src={products.image}
                              alt="image is not loaded"
                              className='w-full h-full object-cover'
                           />
                           {/* title */}
                           <p className='font-normal text-md pt-3 leading-6 rounded-b-md text-left'>
                              {`${products.productTitle}`}
                           </p>
                           {/* price */}
                           <p className='font-normal text-md pb-2 leading-6 rounded-b-md text-left'>
                              {`Regular price Rs. ${products.price}`}
                           </p>
                        </div>
                     ))
               }


            </Link>
         </section>
      </div>
   )
}

export default ProductNewArrival
