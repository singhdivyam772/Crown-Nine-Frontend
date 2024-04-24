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
import { Link, useLocation } from 'react-router-dom'

const imageData = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dc6gh4zlc/image/upload/v1713510638/Crown-Nine/DSC_3383_woc58l.jpg'
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dc6gh4zlc/image/upload/v1713510635/Crown-Nine/DSC_3363_stvz17.jpg'
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dc6gh4zlc/image/upload/v1713522459/Crown-Nine/DSC_3436_wgzthb.jpg'
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/dc6gh4zlc/image/upload/v1713522505/Crown-Nine/DSC_3466_gf6sf3.jpg'
  }, {
    id: 5,
    url: 'https://res.cloudinary.com/dc6gh4zlc/image/upload/v1713522519/Crown-Nine/DSC_3468_whdnwj.jpg'
  },

]

const ProductDetails = (allProduct) => {

  const location = useLocation();
  const productDetails = location.state.products;

  useEffect(()=>{
    if(allProduct)
    console.log(productDetails)
  },[allProduct])
  return (
    <div className='w-screen min-h-screen flex flex-col px-10'>

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
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            /
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className='flex lg:flex-row flex-col w-full '>
        {/* image left side */}
        <section className=' flex lg:w-[40vw] lg:h-full h-[34rem] '>
          <Carousel className=" relative w-full lg:h-[34rem] h-[28rem] ">
            <CarouselContent>
              {imageData.map((image, index) => (
                <CarouselItem
                  className=""
                  key={index}>
                  <div className="flex lg:h-[34rem] h-[28rem] items-center justify-center bg-slate-700 ">
                    <img src={image?.url}
                      className=' w-full h-full object-cover'
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='left-[3.3rem] top-[16.5rem] w-[4rem] h-[4rem]' />
            <CarouselNext className='right-[3.3rem] top-[16.5rem]  w-[4rem] h-[4rem]' />
          </Carousel>
        </section>

        {/* description and other things right */}
        <section className='flex flex-col items-start lg:w-[40vw] h-full lg:px-10 '>

          {/* title */}
          <h1 className=' md:text-4xl text-3xl md:leading-10  w-full'>
            Double Skinny Strand
          </h1>

          {/* subtitle */}
          <p className=' md:text-md text-sm  leading-10 w-full'>
            Waterproof | Tarnish Free |Hypoallergenic | 18K Gold Plated
          </p>

          {/* price */}
          <p className=' md:text-3xl text-xl py-1 leading-10 w-full '>
            Rs. 1,299.00
          </p>

          {/* product color */}
          <p className=' text-lg py-1 leading-10 w-full'>
            Color: 18KT Gold Plated
          </p>

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
            <div className=' flex justify-between items-center-center min-w-[25%]  py-4 px-2 bg-slate-200 border-[0.1rem] border-slate- rounded-[3rem]'>
              <HiMinusSm className=' text-2xl cursor-pointer' />
              {2}
              <BsPlus className=' text-2xl cursor-pointer'/>
            </div>
            {/* Add to Cart */}
            <Button 
              // disabled 
              className=' px-16 py-7 w-[70%] rounded-[3rem]'>
              {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
              <p>
                Add To Cart
              </p>
            </Button>
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
                Introducing the Double Skinny Strand - double the style, double the beauty! Elevate your look with this
                elegant and delicate necklace featuring two stunning strands. Perfect for any occasion, this
                piece will add a touch of sophistication to any outfit. Amp up your style game with the Double Skinny
                Strand.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Shipping & Return</AccordionTrigger>
              <AccordionContent>
                For all orders exceeding a value of INR. 1599 shipping is offered for free.

                Exchanges will be accepted for up to 10 days of Customer’s receipt on unworn items. You, as a Customer, are obliged to inform us via email before you return the item.

                Otherwise, standard shipping charges apply. Check out our delivery Terms & Conditions for more details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Exchange Policy</AccordionTrigger>
              <AccordionContent>
                `Returns will be accepted for up to 10 days of Customer’s receipt or tracking number on unworn items. You, as a Customer, are obliged to inform us via email before you return the item, only in the case of:
                – Received the wrong item.
                – Item arrived not as expected (ie. damaged packaging).
                – Item had defects.
                – Over delivery time.
                – The shipper does not allow the goods to be inspected before payment.
                The returned `product(s) must be in the original packaging, safety wrapped, undamaged and unworn. This means that the item(s) must be safely packed in a carton box for protection during transport, possibly the same carton used to ship to you as a customer.
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
      <p className= 'text-slate-600 font-medium py-1'>
        Here’s some of our most similar products people are buying. Click to discover trending style.
      </p>
      {/* new arrival product section */}
      <section className=' flex lg:flex-row flex-wrap justify-center items-center gap-6 w-full py-5  min-h-[30rem] '>
         <Link to='/productdetails'>
            <div className='flex flex-col justify-start items-center hover:scale-[1.1] transition-all w-[18rem] min-h-[20rem] cursor-pointer rounded-b-xl shadow-md bg-pink-100/40 overflow-hidden'>
               <img
                  src="https://res.cloudinary.com/dc6gh4zlc/image/upload/v1713510638/Crown-Nine/DSC_3383_woc58l.jpg"
                  alt=""
                  srcSet=""
                  className='w-full h-full object-cover'
               />
               {/* title */}
               <p className='font-normal text-md pt-3 leading-6 rounded-b-md text-left'>
                  Korean Delicate Pearl Zircon Ring
               </p>

               {/* price */}
               <p className='font-normal text-md pb-2  leading-6 rounded-b-md  text-left'>
                  Regular priceRs. 1,299.00
               </p>
            </div>
         </Link>

         <Link to='/productdetails'>
            <div className='flex flex-col justify-start items-center hover:scale-[1.1] transition-all w-[18rem] min-h-[20rem] cursor-pointer rounded-b-xl shadow-md bg-pink-100/40 overflow-hidden'>
               <img
                  src="https://res.cloudinary.com/dc6gh4zlc/image/upload/v1713510638/Crown-Nine/DSC_3383_woc58l.jpg"
                  alt=""
                  srcSet=""
                  className='w-full h-full object-cover'
               />
               {/* title */}
               <p className='font-normal text-md pt-3 leading-6 rounded-b-md text-left'>
                  Korean Delicate Pearl Zircon Ring
               </p>

               {/* price */}
               <p className='font-normal text-md pb-2  leading-6 rounded-b-md  text-left'>
                  Regular priceRs. 1,299.00
               </p>
            </div>
         </Link> <Link to='/productdetails'>
            <div className='flex flex-col justify-start items-center hover:scale-[1.1] transition-all w-[18rem] min-h-[20rem] cursor-pointer rounded-b-xl shadow-md bg-pink-100/40 overflow-hidden'>
               <img
                  src="https://res.cloudinary.com/dc6gh4zlc/image/upload/v1713510638/Crown-Nine/DSC_3383_woc58l.jpg"
                  alt=""
                  srcSet=""
                  className='w-full h-full object-cover'
               />
               {/* title */}
               <p className='font-normal text-md pt-3 leading-6 rounded-b-md text-left'>
                  Korean Delicate Pearl Zircon Ring
               </p>

               {/* price */}
               <p className='font-normal text-md pb-2  leading-6 rounded-b-md  text-left'>
                  Regular priceRs. 1,299.00
               </p>
            </div>
         </Link> <Link to='/productdetails'>
            <div className='flex flex-col justify-start items-center hover:scale-[1.1] transition-all w-[18rem] min-h-[20rem] cursor-pointer rounded-b-xl shadow-md bg-pink-100/40 overflow-hidden'>
               <img
                  src="https://res.cloudinary.com/dc6gh4zlc/image/upload/v1713510638/Crown-Nine/DSC_3383_woc58l.jpg"
                  alt=""
                  srcSet=""
                  className='w-full h-full object-cover'
               />
               {/* title */}
               <p className='font-normal text-md pt-3 leading-6 rounded-b-md text-left'>
                  Korean Delicate Pearl Zircon Ring
               </p>

               {/* price */}
               <p className='font-normal text-md pb-2  leading-6 rounded-b-md  text-left'>
                  Regular priceRs. 1,299.00
               </p>
            </div>
         </Link>
      </section>
    </div>
     
    </div>
  )
}

export default ProductDetails
