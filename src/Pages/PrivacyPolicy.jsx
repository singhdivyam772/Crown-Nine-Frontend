import React from 'react'
import '../MainComponents/headermargin.css'

const PrivacyPolicy = () => {
  return (
    <div className=' maintainHeader w-screen min-h-[40vh] flex flex-col justify-start gap-6 items-center md:px-[6rem] px-10 py-2 mt-[2rem]'>
      <div className='flex flex-col justify-start items-center'>
        <h1 className='text-pink-500/50 uppercase md:text-3xl text-xl font-extrabold'>
          Crown-Nine Privacy Policy
        </h1>
        <div className='flex flex-col justify-start items-start md:pt-0 pt-7'>
          <p className=' text-md leading-5 md:pt-6 text-black'>
            Welcome to Crown Nine*! We value your privacy and are committed to protect your personal information. This Privacy Policy explains how we collect, use, and disclose the information we collect from you when you interact with our website, products, or services.
            Information We Collect
            When you visit our website or make a purchase, we may collect certain information from you, including:
          </p>

          <ul className='text-md leading-5  text-black list-disc list-inside'>
            <li>Personal information such as your name, email address, shipping address, and payment information.</li>
          </ul>
          <ul className='text-md leading-5 text-black list-disc list-inside'>
            <li>Information about your interactions with us, such as your purchase history and preferences.</li>
          </ul>

          <ul className='text-md leading-5 text-black list-disc list-inside'>
            <li>Automatically collected information includes, such as your IP address, device type, and browsing behaviour on our website.</li>
          </ul>

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
              Sharing of Information
            </li>
            <li className='text-md leading-5 text-black list-disc list-inside  '>
              We may share your information with third-party service providers who assist us in operating our 
              website, processing payments, or delivering products to you. We may also share your information with 
              law enforcement or other third parties when required by law or to protect our rights, property, or for 
              safety concerns.
            </li>

            <li className='text-xl leading-8 md:pt-6 text-black font-bold'>
              Data Security
            </li>
            <li className='text-md leading-5 text-black list-disc list-inside  '>
              We take the security of your information seriously and have implemented technical and organizational 
              measures to protect it from unauthorized access, alteration, disclosure or any further misuse of your 
              data. 
            </li>

            <li className='text-xl leading-8 md:pt-6 text-black font-bold'>
              Your Rights
            </li>
            <li className='text-md leading-5 text-black list-disc list-inside  '>
              You have the right to access, correct, or delete your personal information. You may also have the
              right to object to or restrict certain processing activities as per your concern. If you would like 
              to exercise any of these rights, please contact us using the information provided below.
            </li>
          </ul>

        </div>
      </div>

    </div>
  )
}

export default PrivacyPolicy
