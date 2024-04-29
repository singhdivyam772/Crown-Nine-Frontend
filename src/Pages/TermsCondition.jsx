import React from 'react'

const TermsCondition = () => {
  return (
    <div className=' w-screen min-h-[40vh] flex flex-col justify-start gap-6 items-center md:px-[6rem] px-10 md:py-5 py-2 mt-[5rem]'>
    <div className='flex flex-col justify-start items-center md:pt-0 pt-14'>
       <h1 className='text-[#D4AF37] uppercase md:text-3xl text-xl font-extrabold'>
          Lion Lioness Skin, Hair Cares Return Policy
       </h1>
       <p className=' text-md leading-8 md:pt-6 text-black'>
          Our return policy allows for returns within 30 days of purchase, provided the products are unused and in
          their original packaging. To initiate a return, please reach out to us for a return authorization number, and
          remember to include your receipt or order confirmation with the returned items. While you're responsible for
          covering the return shipping costs, unless it's due to an error on our part, we recommend using a trackable
          shipping method for added security.
          Once we receive the returned items, refunds will be issued to the original payment method within 10 days.
       </p>
    </div>
    {/* <ProductSlider/> */}
 </div>
  )
}

export default TermsCondition
