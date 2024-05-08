import React, { useState } from 'react';
import './category.css';
import { Link, useNavigate } from 'react-router-dom';

const CategoryProduct = (props) => {
   const products = props.allProduct;
   // console.log(products);
   const navigate = useNavigate();
   
   const navigateToProductCard = (category) =>{
   
      // console.log(products);
      let categoryProduct = products?.filter((data, index) =>(
         data?.category === category.categoryName
      ))
     
      navigate('/productCard', {state: {categoryProduct, category}})

      // console.log(categoryProduct);
   }

   const productCategory= [
      {
         id: 1,
         categoryName:'necklace',
         image: `https://res.cloudinary.com/drj0uehgx/image/upload/v1713179436/crown-nine-logo/DSC_3466-removebg-preview_f3trzu.png`
      },
      {
         id: 2,
         categoryName:'bracelet',
         image: `https://res.cloudinary.com/drj0uehgx/image/upload/v1713179649/crown-nine-logo/DSC_3352-removebg-preview_v1ev5q.png`
      },
      {
         id: 3,
         categoryName:'earring',
         image: `https://res.cloudinary.com/drj0uehgx/image/upload/v1713179131/crown-nine-logo/DSC_3365-removebg-preview_wtd3ld.png`
      }
   ]

   return (
      <div className='flex flex-col justify-center items-center mb-5 w-screen min-h-[35rem]'>
         <h1 className='text-3xl font-medium leading-9 pt-8'>
            Everything for You
         </h1>

         <p className='text-xl md:pb-6 pb-5 pt-2 md:px-0 px-6'>
            Our products are designed for everyone, environmentally friendly.
         </p>
         <section 
             className='flex md:flex-row flex-col justify-center items-center gap-12 py-5 flex-wrap'>
              
              {/* category card */}
              { productCategory?.map((category) =>(
                  <div 
                  key={category.id}
                  onClick={()=>navigateToProductCard(category)}
                  className='flex flex-col justify-around items-center z-50 w-[19rem] h-[20rem] cursor-pointer shadow-md rounded-sm bg-pink-100/40 overflow-hidden'>
                     <img
                        src={category.image}
                        alt=""
                        srcSet=""
                        className='w-[17rem] h-full hover:scale-[1.3] transition-all z-0 object-cover'
                     />
                     <p className='font-normal text-3xl pb-6 leading-10'>
                        {category.categoryName}
                     </p>
                  </div>
              ))}
            </section>
      </div>
   );
};

export default CategoryProduct;
