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
         feadback: `Wow! I just received my necklace from Crownnine, and I'm blown away by how stunning it is!`
,
         icon: `⭐⭐⭐⭐⭐`
      },
      {
         id: 2,
         name: "Pooja Kapoor",
         feadback: `The craftsmanship is top-notch, and it looks even better in person than in the pictures. I can't wait to show it off everywhere I go `,
         icon: `⭐⭐⭐⭐`
      },
      {
         id: 3,
         name: "Saurbhi Chaugh",
         feadback: `I'm officially obsessed with Crownnine! Every piece I've purchased has been absolutely beautiful and unique.
`,
         icon: `⭐⭐⭐⭐`
      },
      {
         id: 4,
         name: "Manisha Mehta ",
         feadback: `I've never been much of a jewelry person until I discovered Crown Nine. Now, I can't stop adding pieces to my collection!`,
         icon: `⭐⭐⭐⭐⭐`
      },
      {
         id: 5,
         name: "Shreya Tiwari",
         feadback: `They have such a great variety of styles to choose from, whether you're into delicate everyday pieces or statement-making jewels.`,
         icon: `⭐⭐⭐⭐⭐`
      },
      { 
         id: 6, 
         name:"Vidhya Laxmi", 
         feadback:  `Hands down, Crown Nine is my go-to for gifts. Whether it's for my mom, sister, or best friend, I know I can always find something they'll love. And the best part? The quality is always amazing, so I know it'll last for years to come.
         `,
         icon: `⭐⭐⭐⭐⭐`
       },
      {
         id: 7,
         name: `Riya Desai`,
         feadback: `Just received my order from Crown Nine, and I'm in love! The attention to detail is impeccable, and I appreciate that they use high-quality materials.         `,
         icon: `⭐⭐⭐⭐`
      },
      {
         id: 8,
         name: `Smita Rao`,
         feadback: ` It's clear that a lot of care goes into each piece they create. Definitely a customer for life!`,
         icon: `⭐⭐⭐⭐⭐`
      },
      // {
      //    id: 9,
      //    name: `Sheetal Singh`,
      //    feadback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      // `,
      //    icon: `⭐⭐⭐⭐⭐`
      // },

      // {
      //    id: 10,
      //    name: `Vanshika Verma`,
      //    feadback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
      //    icon: `⭐⭐⭐⭐`
      // },
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
