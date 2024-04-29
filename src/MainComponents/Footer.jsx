import React from 'react'
import { SlSocialFacebook } from "react-icons/sl";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className=" w-screen min-h-[50vh]  flex md:flex-row flex-col justify-center  items-start bg-[#FFCBCB] capitalize">

      {/* <!-- left --> */}
      <section className=" md:w-[40%] w-full md:pl-[10rem] pl-[2rem] h-full flex flex-col justify-start mt-5 items-start">
        <div className="text-2xl pb-7 font-semibold" >
          <h1>quick links</h1>
        </div>
        <div className="headed leading-8">about us</div>
        {/* shipping */}
        <Link to='/shipingpolicy'>
          <div className="headed leading-8">shipping policy</div>
        </Link>
        <Link to='/returnpolicy'>
          <div className="headed leading-8">exchange & return</div>
        </Link>
        <Link to='/privatepolicy'>
          <div className="headed leading-8">private policy</div>
        </Link>

        <Link to='/termscondition'>
          <div className="headed leading-8">terms of services</div>
        </Link>
        <div className="headed leading-8">contact us</div>
      </section>

      {/* <!-- right --> */}
      <section className=" md:w-[40%] w-full md:pl-[10rem] pl-[2rem] h-full flex flex-col justify-start mt-5 items-start">
        <p className=" text-2xl py-5 font-semibold">
          Sign Up for Offers
        </p>
        <p className="text-md font-semibold pr-12 leading-6">
          Subscribe to get special offers, free giveaways,
          and once-in-a-lifetime deals.
        </p>

        <div className="flex justify-start items-center gap-5 mt-5">
          <div className=" flex justify-center items-center w-[4rem] h-[4rem] rounded-full border-[0.1rem] border-slate-400 ">
            <SlSocialFacebook className=' text-2xl'/>
          </div>

          <div className=" flex justify-center items-center w-[4rem] h-[4rem] rounded-full border-[0.1rem] border-slate-400 ">
            <LuInstagram className=' text-2xl'/>
          </div>

          <div className=" flex justify-center items-center w-[4rem] h-[4rem] rounded-full border-[0.1rem] border-slate-400 ">
            <RiTwitterXFill className=' text-2xl'/>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
