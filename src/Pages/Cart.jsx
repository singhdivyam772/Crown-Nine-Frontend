import React from 'react'
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { FaTrash } from "react-icons/fa";
import { Button } from '@/components/ui/button';

const productData = [
   {
      id: 1,
      title: `Skinny Strand`,
      image: `https://res.cloudinary.com/dc6gh4zlc/image/upload/v1713522459/Crown-Nine/DSC_3436_wgzthb.jpg`,
      price: `Rs. 999.00`,
      qty:`1`,
   },
   {
      id: 2,
      title: `Gold Waterdrops`,
      image: `https://res.cloudinary.com/dc6gh4zlc/image/upload/v1713522519/Crown-Nine/DSC_3468_whdnwj.jpg`,
      price: `Rs. 1,299.00`,
      qty:`1`,
   },
   {
      id: 3,
      title: `Satin Huggies`,
      image: `https://res.cloudinary.com/dc6gh4zlc/image/upload/v1713522505/Crown-Nine/DSC_3466_gf6sf3.jpg`,
      price: `Rs. 1,499.00`,
      qty:`1`,
   },
]

const Cart = () => {
   return (
      <div className=' flex flex-col justify-start items-start w-screen min-h-[50rem] px-6 mb-5'>
         {/* cart header */}
         <section className='flex flex-col justify-center items-center md:h-[20rem] h-[14rem] w-full '>
            <h1 className=' text-4xl font-medium leading-10 py-2 '>
               Your Cart
            </h1>
            {/* breadcrumbs */}
            <Breadcrumb className=' my-2'>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                     /
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                     <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                     /
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                     <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>
         </section>

         {/* product table with subtotal */}
         <section className=' w-full flex lg:flex-row flex-col justify-start items-start gap-2'>
            {/* Table */}
            <div className='md:w-[75%] w-full overflow-x-auto '>
               <table className='w-full'>
                  <thead className='sticky top-0 text-center md:text-sm text-xs'>
                     <tr className=''>
                        <th className='w-[22%] py-2 leading-10 border-[0.1rem] border-slate-300 text-slate-600 md:text-xl font-normal'>Product</th>
                        <th className='w-[25%] py-2 leading-10 border-[0.1rem] border-slate-300 text-slate-600 md:text-xl font-normal'>Product Name</th>
                        <th className='w-[6%] py-2 leading-10 border-[0.1rem] border-slate-300 text-slate-600 md:text-xl font-normal'>Qty</th>
                        <th className='w-[20%] py-2 leading-10 border-[0.1rem] border-slate-300 text-slate-600 md:text-xl font-normal'>Unit Price</th>
                        <th className='w-[20%] py-2 leading-10 border-[0.1rem] border-slate-300 text-slate-600 md:text-xl font-normal'>Total Price</th>
                        <th className='w-[20%] py-2 leading-10 border-[0.1rem] border-slate-300 text-slate-600 md:text-xl font-normal'></th>
                     </tr>
                  </thead>
                  <tbody className='md:text-sm text-xs'>
                     {productData.map((data, index) => (
                        <tr key={index} className='text-center'>
                           <td className='border-[0.1rem] border-slate-300'>
                              <img src={data.image} className='md:w-[19rem] w-[10rem] md:h-[9rem] object-cover' alt={data.title} />
                           </td>
                           <td className=' text-slate-600 md:text-xl font-normal border-[0.1rem] border-slate-300'>{data.title}</td>
                           <td className=' text-slate-600 md:text-xl font-normal border-[0.1rem] border-slate-300'>{data.qty}</td>
                           <td className=' text-slate-600 md:text-xl font-normal border-[0.1rem] border-slate-300'>{data.price}</td>
                           <td className=' text-slate-600 md:text-xl font-normal border-[0.1rem] border-slate-300'>{data.price * data.qty}</td>
                           <td className=' text-slate-600 md:text-xl font-normal border-[0.1rem] border-slate-300 text-center'>
                              <FaTrash
                                 className='cursor-pointer md:text-xl mx-auto '
                              // onClick={() => removeProductHandler(data._id, data.title)}
                              />
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>

            {/* Subtotal */}
            <section className=' flex flex-col md:w-[25%] w-full px-5 py-5 bg-slate-100 md:h-[14rem] h-[10rem] rounded-lg' >
            <div className=' flex justify-between items-center '>
               <p className=' font-medium text-xl leading-10 text-slate-600'>SubtTotal</p>
               <p className=' font-medium text-xl leading-10 text-slate-600'>Rs. 7,354.40</p>
            </div>
            <p className=' font-medium text-sm leading-7 text-slate-600'>Tax included. Shipping calculated at checkout.</p>
            <Button className=' rounded-[2rem] mt-[1rem]'>Checkout</Button>
            </section>
         </section>

      </div >
   )
}

export default Cart
