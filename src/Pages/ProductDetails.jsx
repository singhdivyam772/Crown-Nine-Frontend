import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ProductDetails = () => {
  return (
    <div className=' w-screen min-h-screen bg-red-500'>
    
    </div>
  )
}

export default ProductDetails



// <Carousel className="w-full max-w-xs bg-green-500 h-[33rem]">
// <CarouselContent>
//   {Array.from({ length: 5 }).map((_, index) => (
//     <CarouselItem
//       className=""
//       key={index}>
//       <div className="flex h-[30rem] items-center justify-center bg-slate-700 p-6">
//         <span className="text-4xl font-semibold">{index + 1}</span>
//       </div>
//     </CarouselItem>
//   ))}
// </CarouselContent>
// <CarouselPrevious />
// <CarouselNext />
// </Carousel>