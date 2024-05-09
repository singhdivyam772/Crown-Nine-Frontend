import React, { useState } from 'react'
import { IoPersonOutline, IoSearchOutline  } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navbar.css';

const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart.products)
  const [isOpen, setOpen] = useState(false)
  const handleHamburger = () =>{
    setOpen(!isOpen)
  }

  return (
    <div className=" relative w-screen h-[5rem]  shadow-md bg-[#FFCBCB] flex md:px-10  justify-between items-center ">
      
      {/* logo */}
      <section className=' md:pb-0 pb-1 md:pl-1 pl-4'>
        <Link to='/'>       
          <img 
          src="https://res.cloudinary.com/drj0uehgx/image/upload/v1714731108/portfolioi/White_And_Black_Modern_Abstract_Beauty_Logo_cmuh4m.png"
          alt="" 
          className=' md:w-[4rem] w-[3rem] md:h-[4rem] h-[3rem] rounded-full object-cover'
          />
        </Link>
      </section>

      {/* middle dropdown */}
      <ul className=' md:flex hidden gap-5'>
         <Link to='/products'>
            <li className=' cursor-pointer'>New Arrival</li>
         </Link>

         <Link to='/products'>
            <li className=' cursor-pointer'>Shop</li>
         </Link>
         <li className=' cursor-pointer'>About Us</li>
         <li className=' cursor-pointer'>Contact Us</li>
      </ul>
      
      {/*  admin cart wishlist icon right */}
      <section className='relative flex justify-center items-center md:gap-5 gap-4 text-2xl pr-2 font-bold'>
         {/* <IoIosHeartEmpty className=' cursor-pointer' /> */}
         <IoSearchOutline className=' cursor-pointer' />
         <Link to='/cart'>
            <AiOutlineShoppingCart / >
            <div className=' absolute top-[-0.9rem] md:right-[3rem] right-[6.0rem] text-sm text-white font-normal z-50 w-5 h-5 bg-green-400 flex justify-center items-center rounded-full'>{cartProducts.length}</div>
         </Link>
         <Link to='/addProduct'>
          <IoPersonOutline className=' cursor-pointer' />
         </Link>

         {/* option in hamburger */}
         <div className={`${isOpen 
                            ? 'absolute transition-all w-screen mb-[4rem] h-[4rem] top-[3.5rem] right-[0rem] flex justify-center items-center gap-5 pl-10 bg-[#FFCBCB] shadow-slate-200  z-50' 
                            : ' hidden '} md:hidden flex pr-3`}>
          <Link to='/products'>
              <ul className=' cursor-pointer  font-normal text-sm '>New Arrival</ul>
          </Link>

          <Link to='/products'>
              <ul className=' cursor-pointer font-normal text-sm'>Shop</ul>
          </Link>
          <ul className=' cursor-pointer font-normal text-sm'>About Us</ul>
          <ul className=' cursor-pointer font-normal text-sm'>Contact Us</ul>
         </div>
         <div toggled={isOpen}
              toggle={setOpen}
              className=' text-xl md:hidden flex flex-col justify-center items-center w-[2rem] h-[2rem] cursor-pointer '
              onClick={handleHamburger} 
        >
          <div className={`${ isOpen ? '  hamburgerCloseLeft ' : 'hamburgerOpen mt-[0.1rem]'}`}></div>
          <div className={`${ isOpen ? ' hamburgerCloseLeft ' : 'hamburgerOpen mt-[0.2rem]'}`}></div>
          <div className={`${ isOpen ? ' hamburgerCloseRight ml-[0.3rem] ' : 'hamburgerOpen mt-[0.2rem]'}`}></div>
          <div className={`${ isOpen ? ' hamburgerCloseRight ml-[0.3rem] ' : 'hamburgerOpen mt-[0.2rem]'}`}></div>
        </div>
      </section>

    </div>
  )
}

export default NavBar
