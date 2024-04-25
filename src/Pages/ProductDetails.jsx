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



const ProductDetails = () => {

  const location = useLocation();
  const productDetails = location.state.products;
  console.log(productDetails);
  const productTitle = productDetails.productTitle;
  const productSubtitle = productDetails.productSubtitle;
  const goldimage1 = productDetails.goldimage1;
  const goldimage2 = productDetails.goldimage2;
  const silverimage1 = productDetails.silverimage1;
  const silverimage2 = productDetails.silverimage2;
  const mainimage1 = productDetails.mainimage1;
  const roseimage2 = productDetails.roseimage2;
  const roseimage1 = productDetails.roseimage1;
  const mrp = productDetails.mrp;
  const price = productDetails.price;
  const itemWeight = productDetails.itemWeight;
  const shape = productDetails.shape;
  const specification = productDetails.specification;
  const gemType = productDetails.gemType;
  const quality = productDetails.quality;
  const size1 = productDetails.size1;
  const size2 = productDetails.size2;
  const size3 = productDetails.size3;
  const color1 = productDetails.color1;
  const color2 = productDetails.color2;
  const color3 = productDetails.color3;

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

  useEffect(() => {
    if (productDetails)
      console.log(productDetails)
  }, [productDetails])
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
            <BreadcrumbLink href="/components">ProductDetails</BreadcrumbLink>
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
            <CarouselPrevious  className='left-[3.3rem] top-[16.5rem] w-[4rem] h-[4rem]' />
            <CarouselNext
              disabled={(goldimage1 && goldimage2 && silverimage1 && silverimage2 && roseimage2 && roseimage1) ? false : true}
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
              <p  className=' px-4 py-1 rounded-md bg-slate-100 uppercase font-semibold '>
                {color2}
              </p>
              <p  className=' px-4 py-1 rounded-md  bg-slate-100 uppercase font-semibold '>
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
