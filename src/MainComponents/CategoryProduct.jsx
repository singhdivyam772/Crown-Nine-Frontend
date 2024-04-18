import React from 'react';
import './category.css';

const CategoryProduct = () => {
   return (
      <div className='flex flex-col justify-center items-center mb-5 w-screen min-h-[35rem]'>
         <h1 className='text-3xl font-medium leading-9 pt-8'>
            Everything for You
         </h1>

         <p className='text-xl pb-6 pt-2'>
            Our products are designed for everyone, environmentally friendly.
         </p>
         <section className='flex md:flex-row flex-col justify-center items-center gap-12 py-5 flex-wrap'>
            
            {/* Necklace */}
            <div className='flex flex-col justify-around items-center z-50 w-[19rem] h-[20rem] cursor-pointer shadow-md rounded-sm bg-pink-100/40 overflow-hidden'>
               <img
                  src="https://res.cloudinary.com/drj0uehgx/image/upload/v1713179436/crown-nine-logo/DSC_3466-removebg-preview_f3trzu.png"
                  alt=""
                  srcSet=""
                  className='w-[17rem] h-full hover:scale-[1.3] transition-all z-0 object-cover'
               />
               <p className='font-normal text-3xl pb-6 leading-10'>
                  Necklace
               </p>
            </div>
           
            {/* Bracelet */}
            <div className='flex flex-col justify-around items-center w-[19rem] h-[20rem] cursor-pointer shadow-md rounded-sm bg-pink-100/40 overflow-hidden'>
               <img
                  src="https://res.cloudinary.com/drj0uehgx/image/upload/v1713179649/crown-nine-logo/DSC_3352-removebg-preview_v1ev5q.png"
                  alt=""
                  srcSet=""
                  className='w-[17rem] h-full hover:scale-[1.3] transition-all object-cover'
               />
               <p className='font-normal text-3xl pb-6 leading-10'>
                  Bracelet
               </p>
            </div>

            {/* Repeat other category items here */}

            {/* earring */}
            <div className='flex flex-col justify-around items-center w-[19rem] h-[20rem] cursor-pointer shadow-md rounded-sm bg-pink-100/40 overflow-hidden'>
               <img
                  src="https://res.cloudinary.com/drj0uehgx/image/upload/v1713179131/crown-nine-logo/DSC_3365-removebg-preview_wtd3ld.png"
                  alt=""
                  srcSet=""
                  className='w-[17rem] h-full hover:scale-[1.3] transition-all object-cover'
               />
               <p className='font-normal text-3xl pb-6 leading-10'>
                  Earring
               </p>
            </div>
         </section>
      </div>
   );
};

export default CategoryProduct;
