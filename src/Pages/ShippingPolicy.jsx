import React from 'react'
import '../MainComponents/headermargin.css'

const ShippingPolicy = () => {
  return (
    <div className=' maintainHeader w-screen min-h-[40vh] flex flex-col justify-start gap-6 items-center md:px-[6rem] px-10 py-2 mt-[2rem]'>
      <div className='flex flex-col justify-start items-center'>
        <h1 className='text-pink-500/50 uppercase md:text-3xl text-xl font-extrabold'>
          Crown-Nine Shipping Policy
        </h1>
        <div className='  flex flex-col justify-start items-start md:pt-0 pt-7'>
          <p className=' text-md leading-5 md:pt-6 text-black'>
          Thank you for choosing Crown Nine! We strive to provide you with the best shopping experience, including 
          fast and reliable shipping for your orders. Please review the following shipping policy to understand how
          we process and deliver your purchases.

          </p>

          <ul >
          <li className='text-xl leading-8 md:pt-6 text-black font-bold'>
            How We Use Your Information 
            We use the information collected from you for various purposes, including:
          </li>
            <li className='text-md leading-5 text-black list-disc list-inside  '>Processing and fulfilling your orders.</li>
            <li className='text-md leading-5 text-black  list-disc list-inside  '>Providing customer support and responding to your inquiries if any.</li>
            <li className='text-md leading-5 text-black  list-disc list-inside  '>Personalizing your experience and recommending products according to your interests.</li>
            <li className='text-md leading-5 text-black  list-disc list-inside  '>
              Analyzing trends and improving our website, products, and services.
            </li>

            <li className='text-xl leading-8 md:pt-6 text-black font-bold'>
              Order Processing Time
            </li>
            <li className='text-md leading-5 text-black list-disc list-inside  '>
              Orders are typically processed and shipped within 1-3 business days after payment confirmation. Orders 
              placed on weekends or holidays will be processed on the next upcoming business day.
            </li>

            <li className='text-xl leading-8 md:pt-6 text-black font-bold'>
              Shipping Methods and Delivery Times 
              We offer the following shipping methods for domestic and international orders:

            </li>
            <li className='text-md leading-5 text-black list-disc list-inside  '>
              Standard Shipping: Delivery typically takes 3-7 
              business days for domestic orders and 7-21 business days for international orders, depending on the destination.
            </li>

            <li className='text-md leading-5 text-black list-disc list-inside  '>
              Express Shipping: Delivery typically takes 1-3 business days for domestic orders and 3-5 business days
              for international orders, depending on the destination.
            </li>

            <li className='text-md leading-5 text-black list-disc list-inside  '>
              Expedited Shipping: Delivery typically takes 2-4 business days for domestic orders and 5-10 business
              days for international orders, depending on the destination.
            </li>



            <li className='text-xl leading-8 md:pt-6 text-black font-bold'>
             Shipping Rates
            </li>
            <li className='text-md leading-5 text-black list-disc list-inside  '>
              Shipping rates are calculated and are based on the shipping method that has been selected, the weight 
              and dimensions of the package, and the destination address. You can view the shipping rates for your 
              order during the checkout process before completing your purchase.
            </li>


            <li className='text-xl leading-8 md:pt-6 text-black font-bold'>
              Order Tracking
            </li>
            <li className='text-md leading-5 text-black list-disc list-inside  '>
              Once your order has been shipped, you will receive a shipping confirmation email with a tracking 
              number. You can use this tracking number to monitor the status of your shipment and estimate its 
              arrival date.
              International Shipping
            </li>
           
          </ul>

        </div>
      </div>

    </div>
  )
}

export default ShippingPolicy
