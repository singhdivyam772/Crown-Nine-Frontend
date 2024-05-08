import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { LiaLessThanSolid } from "react-icons/lia";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IoShareSocialOutline } from "react-icons/io5";
import { RiFacebookLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { HiMinusSm } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addProductToCart } from '@/redux/Slices/cartSlice';
import CategoryProduct from '@/MainComponents/CategoryProduct';

const ProductDetails = (props) => {
  const products = props.allProduct;
  const dispatch = useDispatch()
  const cartProducts = useSelector((state) => state.cart.products)
  const navigate = useNavigate();
  const location = useLocation();
  const productDetails = location.state.products;
 
  const {
          productTitle,
          productSubtitle,
          goldimage1,
          goldimage2,
          silverimage1,
          silverimage2,
          mainimage1,
          roseimage1,
          roseimage2,
          mrp,
          price,
          itemWeight,
          shape,
          specification,
          gemType,
          quality,
          size1,
          size2,
          size3,
          color1,
          color2,
          color3
        } = productDetails;
  const imageData = [
    {
      id: 1,
      url: mainimage1
    },
    {
      id: 2,
      url: goldimage1
    },
    {
      id: 3,
      url: silverimage1
    },
    {
      id: 4,
      url: silverimage2
    },
    {
      id: 5,
      url: roseimage1
    },
    {
      id: 6,
      url: roseimage2
    },
  ]
  // const addProductToCart = (productDetails) =>{
  //   navigate('/')
  // }
  console.log(cartProducts)
  // check if product is already in cart
  const isInCart = cartProducts.some(product => product.id === productDetails.id);
  return (
    <div className='w-screen min-h-screen flex flex-col md:px-10 px-5'>

      {/* breadcrumbs */}
      <Breadcrumb className=' my-5'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            /
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink>ProductDetails</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className='flex lg:flex-row flex-col w-full '>
        {/* image left side */}
        <section className=' flex lg:w-[40vw] lg:h-full h-[30rem] '>
          <Carousel className=" relative w-full lg:h-[34rem] h-[28rem] ">
            <CarouselContent>
              {imageData.map((image, index) => (
                <CarouselItem
                  className=""
                  key={index}>
                  <div className="flex lg:h-[34rem] h-[28rem] items-center justify-center ">
                    <img src={image?.url}
                      className=' w-full h-full object-cover'
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='left-[3.3rem] top-[16.5rem] w-[4rem] h-[4rem]' />
            <CarouselNext
              disabled={(goldimage1 && goldimage2) ? false : (silverimage1 && silverimage2) ? false : (roseimage2 && roseimage1) ? false : true}
              className='right-[3.3rem] top-[16.5rem]  w-[4rem] h-[4rem]' />
          </Carousel>
        </section>

        {/* description and other things right */}
        <section className='flex flex-col items-start lg:w-[45vw] h-full lg:px-10 '>

          {/* title */}
          <h1 className=' md:text-4xl text-3xl md:leading-10 uppercase  w-full'>
            {productTitle} {quality}
          </h1>

          {/* subtitle */}
          <p className=' md:text-md text-sm  md:leading-10 md:py-0 py-4 w-full'>
            Waterproof | Anti Tarnish stainless steel |Sweat Proof | Skin Friendly and Anti - Allergic
          </p>

          {/* price */}
          <p className=' md:text-3xl text-xl py-1 leading-10 w-full flex gap-4 items-center '>
            Rs. {price} <strike className=' text-[1.1rem]'> Includes All Taxes {mrp} </strike>
          </p>

          {/* product color */}
          {color1 && color2 && color3 &&
            <div className=' w-full flex justify-start items-center md:my-0 my-3 pr-2 gap-2'>
              <p className=' text-lg py-1 leading-10'>
                Color:
              </p>
              <p className=' px-4 py-1 rounded-md bg-slate-100 uppercase font-semibold '>
                {color1}
              </p>
              <p className=' px-4 py-1 rounded-md bg-slate-100 uppercase font-semibold '>
                {color2}
              </p>
              <p className=' px-4 py-1 rounded-md  bg-slate-100 uppercase font-semibold '>
                {color3}
              </p>
            </div>
          }

          {/* product size */}
          {size1 && size2 && size3 &&
            <div className=' w-full flex justify-start items-center pr-2 md:mb-0 mb-2 gap-2'>
              <p className=' text-lg py-1'>
                Size:
              </p>
              <p className=' text-sm'>
                {size1}
              </p>
              <p className=' text-sm'>
                {size2}
              </p>
              <p className=' text-sm'>
                {size3}
              </p>
            </div>
          }

          {/* share button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className=' flex justify-center items-center gap-2'>
                <IoShareSocialOutline />
                Share
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                  Anyone who has this link will be able to view this.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    defaultValue="https://ui.shadcn.com/docs/installation"
                    readOnly
                  />
                </div>
                <Button type="submit" size="sm" className="px-3">
                  <span className="sr-only">divyam</span>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <DialogFooter className="sm:justify-start flex flex-col items-center">
                <h2>Share</h2>
                <div className=' flex justify-center items-center gap-2'>
                  <RiFacebookLine className=' w-[2.2rem] h-[2.2rem] rounded-full border-[0.1rem] p-1 cursor-pointer' />
                  <FaXTwitter className=' w-[2.2rem] h-[2.2rem] rounded-full border-[0.1rem] p-1 cursor-pointer' />
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/*Add to Cart and Qty button */}
          <div className=' w-full flex justify-between items-center h-16 py-2 my-6'>
            {/* Qty for product */}
            <div className=' flex justify-between items-center-center min-w-[25%]  md:py-4 py-3 md:px-2 px-1 bg-slate-200 border-[0.1rem]  md:rounded-[3rem] rounded-[0.8rem]'>
              <HiMinusSm className=' text-2xl cursor-pointer' />
              {2}
              <BsPlus className=' text-2xl cursor-pointer' />
            </div>
            {/* Add to Cart */}
            {isInCart ?
              (<Button
              disabled 
              className=' px-16 py-7 w-[70%] rounded-[3rem]'
              > Added In Cart!
              </Button>) 
              : (
                <Button
              // disabled 
              className=' px-16 py-7 w-[70%] rounded-[3rem]'
              onClick={() => dispatch(addProductToCart(productDetails))}
              >
                Add To Cart
              </Button>

              )
            }
          </div>

          {/* buy button */}
          <div className=' w-full flex justify-between items-center h-16 py-6 mb-4 '>
            {/* Qty for product */}
            <Button
              // disabled 
              className=' px-16 py-7 w-[100%] rounded-[3rem]'>
              {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
              <p>
                Buy Now
              </p>
            </Button>
          </div>

          {/* descrption acordian */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                {specification}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Care Instructions</AccordionTrigger>
              <AccordionContent>
                Keep The Product In A Cool Dry Place. Store The Product In A
                Plastic packet,when Not In Use To Avoid Tarnishing Of Any Kind.
                Avoid Bringing It In Contact With Sweat Perfume And Moisturizer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Guidance</AccordionTrigger>
              <AccordionContent>
                It is suitable for sensitive skin and allergy-prone skin. Will
                not irritate skin or cling to clothing.It is Anti Tarnish stainless steel,
                Water proof, Sweat Proof, Crafted for daily use.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </section>

      {/* people also bought this section */}
      <div className=' w-full flex flex-col justify-center items-center mt-10'>
        <h1 className='text-4xl font-normal leading-10 py-1'>
          Most Buy Products
        </h1>
        <p className='text-slate-600 font-medium py-1 md:px-0 px-5'>
          Here’s some of our most similar products people are buying. Click to discover trending style.
        </p>

        {/* new arrival product section */}
        <CategoryProduct allProduct={products}/>
      </div>

    </div>
  )
}

export default ProductDetails
