import React from 'react'
import '../MainComponents/headermargin.css'

const ReturnPolicy = () => {
  return (
   <div className=' maintainHeader w-screen min-h-[40vh] flex flex-col justify-start gap-6 items-center md:px-[6rem] px-10 py-2 mt-[2rem]'>
   <div className='flex flex-col justify-start items-center'>
     <h1 className='text-pink-500/50 uppercase md:text-3xl text-xl font-extrabold'>
       Crown-Nine Exchange & Return Policy
     </h1>
     <div className='flex flex-col justify-start items-start md:pt-0 pt-7'>
       <p className=' text-md leading-5 md:pt-6 text-black'>
         At Crown Nine, we want you to be completely satisfied with your purchase. If for any reason you are not 
         satisfied with your order, we offer hassle-free exchanges and returns within a specified time frame. Please
         review the following policy to understand our exchange and return process.
       </p>

       <ul >
       <li className='text-xl leading-8 md:pt-6 text-black font-bold'>
         Eligibility
          for an exchange or return, items must meet the following criteria:
       </li>
         <li className='text-md leading-5 text-black  list-disc list-inside  '>
            Custom or personalized items are not eligible for return or exchange unless they arrive damaged or defective.
         </li>
         <li className='text-md leading-5 text-black  list-disc list-inside  '>
            Items must be returned within 30 days of the delivery date.
         </li>
         <li className='text-md leading-5 text-black  list-disc list-inside  '>
            Items must be in their original condition, unworn, and with all tags attached.
         </li>

         <li className='text-xl leading-8 md:pt-6 text-black font-bold'>
            Exchange Process
         </li>
         <li className='text-md leading-5 text-black list-disc list-inside  '>
            Contact our customer service team at 
            Crownnine0999@gmail.com to request an exchange and receive a Return Authorization (RA) number.
         </li>
         <li className='text-md leading-5 text-black list-disc list-inside  '>
            Pack the item securely in its original packaging, including any accessories or documentation.
         </li>
         <li className='text-md leading-5 text-black list-disc list-inside  '>
          Ship the item back to us using a trackable shipping method.
         </li>

         <li className='text-md leading-5 text-black list-disc list-inside  '>
            Once we receive the returned item and verify its eligibility, we will process the exchange 
            and ship the
            replacement item to you.
         </li>

         <li className='text-xl leading-8 md:pt-6 text-black font-bold'>
            Return Process
         </li>
         <li className='text-md leading-5 text-black list-disc list-inside  '>
            Ship the item back to us using a trackable shipping method.

         </li>
         <li className='text-md leading-5 text-black list-disc list-inside  '>
            Once we receive the returned item and verify its eligibility, we will process a refund to the original
            payment method, minus any shipping charges, within 7-10 business days.
         </li>

       </ul>

     </div>
   </div>
 </div>
  )
}

export default ReturnPolicy
