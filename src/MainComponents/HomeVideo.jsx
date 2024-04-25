import React from 'react'

const HomeVideo = () => {
  return (
    <div>
       {/* video */}
    <div className="">
       <video 
       autoPlay
       loop
       muted
       onEnded={(e) => {
          e.target.currentTime = 0; // Reset video playback
          e.target.play(); // Start playing again
       }}
       className="md:h-[80%] h-[50rem] w-full md:object-cover object-cover" >
          <source 
             src="https://res.cloudinary.com/dc6gh4zlc/video/upload/v1714019301/Crown-Nine/crown-nine-Homepage_ftw4lw.mp4" 
             // type="video/mp4" 
             />       
       </video>
    </div>
    </div>
  )
}

export default HomeVideo
 {/* video */}
    <div className="">
       <video 
       autoPlay
       loop
       muted
       onEnded={(e) => {
          e.target.currentTime = 0; // Reset video playback
          e.target.play(); // Start playing again
       }}
       className="md:h-[100%] h-[50rem] w-full md:object-cover object-cover" >
          <source 
             src="https://res.cloudinary.com/drj0uehgx/video/upload/v1712573287/cosmetic/homepageVideo_pjogbo.mp4" 
             // type="video/mp4" 
             />       
       </video>
    </div>