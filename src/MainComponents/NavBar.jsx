import React from 'react'
import { IoPersonOutline, IoSearchOutline  } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className=" w-screen h-[5rem]  shadow-md bg-pink-100 flex px-10 justify-between items-center ">
      
      {/* logo */}
      <section>
        <Link to='/'>       
          <img 
          src="https://res.cloudinary.com/drj0uehgx/image/upload/v1713174881/crown-nine-logo/crown-nine-logo_opuweb.jpg"
          alt="" 
          className=' w-[4rem] h-[4rem] rounded-full object-contain'
          />
        </Link>
      </section>

      {/* middle dropdown */}
      <ul className=' flex gap-6'>
         <li className=' cursor-pointer'>New Arrival</li>
         <li className=' cursor-pointer'>Shop</li>
         <li className=' cursor-pointer'>About Us</li>
         <li className=' cursor-pointer'>Contact Us</li>
      </ul>
      
      {/*  admin cart wishlist icon right */}
      <section className=' flex justify-center items-center gap-5 text-2xl font-bold'>
         <IoSearchOutline className=' cursor-pointer' />
         <Link to='/addProduct'>
          <IoPersonOutline className=' cursor-pointer' />
         </Link>
         {/* <IoIosHeartEmpty className=' cursor-pointer' /> */}
         <Link to='/cart'>
          <AiOutlineShoppingCart / >
         </Link>
      </section>
    </div>
  )
}

export default NavBar
