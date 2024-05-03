import React from 'react'
import { IoPersonOutline, IoSearchOutline  } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart.products)
  return (
    <div className=" w-screen h-[5rem]  shadow-md bg-[#FFCBCB] flex px-10 justify-between items-center ">
      
      {/* logo */}
      <section className=' md:pb-0 pb-8'>
        <Link to='/'>       
          <img 
          src="https://res.cloudinary.com/drj0uehgx/image/upload/v1714731108/portfolioi/White_And_Black_Modern_Abstract_Beauty_Logo_cmuh4m.png"
          alt="" 
          className=' md:w-[4rem] w-[2rem] md:h-[4rem] h-[2rem] rounded-full object-cover'
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
      <section className='relative flex justify-center items-center gap-5 text-2xl font-bold'>
         <IoSearchOutline className=' cursor-pointer' />
         <Link to='/addProduct'>
          <IoPersonOutline className=' cursor-pointer' />
         </Link>
         {/* <IoIosHeartEmpty className=' cursor-pointer' /> */}
         <Link to='/cart'>
          <AiOutlineShoppingCart / >
          <div className=' absolute top-[-1rem] right-[0rem] text-sm text-white font-normal z-50 w-5 h-5 bg-green-400 flex justify-center items-center rounded-full'>{cartProducts.length}</div>
         </Link>
      </section>
    </div>
  )
}

export default NavBar
