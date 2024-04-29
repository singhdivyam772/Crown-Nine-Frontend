import React from 'react'
import Autoplay from "embla-carousel-autoplay";
import { FaInstagram } from 'react-icons/fa'; // Import FaInstagram
import { Card, CardContent } from "@/components/ui/card";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
} from "@/components/ui/carousel";

const FeedBack = () => {

   const feedbackData = [
      {
         id: 1,
         name: "Priya Sharma",
         feadback: `I'm officially obsessed with [Jewellery Brand]! Every piece I've purchased has been absolutely beautiful and unique. It's like wearing a piece of art! Plus, the packaging is so pretty, it feels like getting a special gift every time."

         `,
         icon: `⭐⭐⭐⭐⭐`
      },
      {
         id: 2,
         name: "Pooja Kapoor",
         feadback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit `,
         icon: `⭐⭐⭐⭐`
      },
      {
         id: 3,
         name: "Saurbhi Chaugh",
         feadback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
      `,
         icon: `⭐⭐⭐⭐`
      },
      {
         id: 4,
         name: "Manisha Mehta ",
         feadback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
      `,
         icon: `⭐⭐⭐⭐⭐`
      },
      {
         id: 5,
         name: "Shreya Tiwari",
         feadback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
         icon: `⭐⭐⭐⭐⭐`
      },
      { 
         id: 6, 
         name:"Vidhya Laxmi", 
         feadback:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         `,
         icon: `⭐⭐⭐⭐⭐`
       },
      {
         id: 7,
         name: `Riya Desai`,
         feadback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
         icon: `⭐⭐⭐⭐`
      },
      {
         id: 8,
         name: `Smita Rao`,
         feadback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
         icon: `⭐⭐⭐⭐⭐`
      },
      {
         id: 9,
         name: `Sheetal Singh`,
         feadback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      `,
         icon: `⭐⭐⭐⭐⭐`
      },

      {
         id: 10,
         name: `Vanshika Verma`,
         feadback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
         icon: `⭐⭐⭐⭐`
      },
   ];
   // Repeat the feedback data until there are at least 3 items
   while (feedbackData.length < 3) {
      feedbackData.push(...feedbackData);
   }
   const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: true })
   );
   return (
      <div>
         {/* feedback */}
         <Carousel className=" relative w-full lg:h-[18rem] h-[22rem] md:mb-10 "
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
         >
            <CarouselContent className=' w-[20rem] mt-5'>
               {feedbackData?.map((data, index) => (
                  <CarouselItem
                     key={data.id}
                     className=" flex gap-4 py-5">
                     <div className="flex flex-col w-[20rem] lg:h-[14rem] h-[18rem] items-center justify-center  rounded-xl shadow-xl px-4 py-2">
                        {data.icon}
                        <h1 className=' font-semibold text-xl uppercase py-3'>
                           {data.name}
                        </h1>
                        <p className=' text-[0.8rem] py-1'>
                           {data.feadback}
                        </p>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
         </Carousel>
      </div>
   )
}

export default FeedBack
