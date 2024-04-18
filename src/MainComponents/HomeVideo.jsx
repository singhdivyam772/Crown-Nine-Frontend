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
             src="https://res.cloudinary.com/drj0uehgx/video/upload/v1713266463/crown-nine-logo/crown-nine-Homepage_djc0pj.mp4" 
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