import React from 'react'
import '../MainComponents/headermargin.css'

const TermsCondition = () => {
   return (
      <div className=' maintainHeader w-screen min-h-[40vh] flex flex-col justify-start gap-6 items-center md:px-[6rem] px-10 py-2 mt-[2rem]'>
         <div className='flex flex-col justify-start items-center'>
            <h1 className='text-pink-500/50 uppercase md:text-3xl text-xl font-extrabold'>
               Crown-Nine Terms of Service
            </h1>
            <div className='flex flex-col justify-start items-start md:pt-0 pt-14'>
               <p className=' text-md leading-5 md:pt-6 text-black'>
                  Welcome to Crown Nine These Terms of Service ("Terms") govern your use of our website, products, and
                  services. By accessing or using any part of our website or placing an order with us, you agree to be
                  bound by these Terms. Please read them carefully before proceeding for any further use.
               </p>

               <ul >
                  <li className='text-xl leading-8 md:pt-6 text-black font-bold'>
                     Use of Our Website
                  </li>
                  <li className='text-md leading-5 text-black list-disc list-inside  '>
                     You must be at least 18 years old to use our website or place an order with us. By using our website, you represent that you are at least 18 years old.
                  </li>

                  <li className='text-md leading-5 text-black  list-disc list-inside  '>
                     You may use our website for lawful purposes only and in accordance with these Terms. You agree not to use our website for any unlawful or prohibited purpose.

                  </li>
                  <li className='text-md leading-5 text-black  list-disc list-inside  '>
                     We reserve the right to refuse service, terminate accounts, or cancel orders in
                     our sole discretion, including, without limitation, if we believe that your conduct
                     violates these Terms.
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
                     Intellectual Property
                  </li>
                  <li className='text-md leading-5 text-black list-disc list-inside  '>
                     All content on our website, including text, graphics, logos, images, and software, is the property
                     of Crown Nine or its licensors and is protected by copyright, trademark, and other intellectual
                     property laws.

                  </li>

                  <li className='text-md leading-5 text-black list-disc list-inside  '>
                     You may not modify, reproduce, distribute, transmit, display, perform, or create
                     derivative works of
                     any content on our website without our prior written consent.
                  </li>

                  <li className='text-xl leading-8 md:pt-6 text-black font-bold'>
                     Pricing and Payment
                  </li>
                  <li className='text-md leading-5 text-black list-disc list-inside  '>
                     All prices displayed on our website are in [Rupees] and are exclusive of applicable taxes
                     and
                     shipping charges.

                  </li>

                  <li className='text-md leading-5 text-black list-disc list-inside  '>
                     We accept payment by credit card, debit card, PayPal, or other payment methods specified on our
                     website. By providing payment information, you represent and warrant that you have the legal right to
                     use any payment method(s) you provide.

                  </li>

                  <li className='text-md leading-5 text-black list-disc list-inside  '>
                     Payment is due at the time of purchase. We will not process your order until payment has been
                     received
                     in full.

                  </li>

                  <li className='text-xl leading-8 md:pt-6 text-black font-bold'>
                     Limitation of Liability
                  </li>
                  <li className='text-md leading-5 text-black list-disc list-inside  '>
                     To the fullest extent permitted by applicable law, Crown Nine and its officers, directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our website or the products/services offered on our website.

                  </li>
               </ul>

            </div>
         </div>

      </div>
   )
}

export default TermsCondition
