import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide01Image from "../assets/slide-1-pic.jpg";
import Slide02Image from "../assets/slide-2-pic.jpg";
import Slide03Image from "../assets/slide-3-pic.jpg";
export default function Section1() {
    const settings = {
        dots: false, 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        
        
      };
  return (
    <>
    



    <div className='relative '>
      {/* Big Box */}
      <div className='absolute bottom-[-3rem] left-0 right-0 z-20'>
        <div className=' px-[14vw]  '>
            <div className='bg-[#3C3C3C] py-10 p-8 rounded-[1.1rem] grid justify-center gap-y-[1.2rem] '>
                <header className='text-white lg:text-3xl text-center font-bold '><span className='bg-red-700 px-6 text-[0.1rem]'></span>
                Result of Almost Two Decades of Hardwork,Commitment and Empathy <span className='bg-red-700 px-6 text-[0.1rem]'></span>
                </header>

                <div className=' flex justify-center  md:order-2 space-x-10  '>
                    <div className='text-center  '>
                        <h1 className='text-[#FFD575] lg:text-3xl font-bold '>20,000+</h1>
                        <h5 className='text-white'>Students</h5>
                    </div>

                    <div className='text-center '>
                        <h1 className='text-[#FFD575] lg:text-3xl font-bold '>80+</h1>
                        <h5 className='text-white'>Courses</h5>
                    </div>

                    <div className='text-center '>
                        <h1 className='text-[#FFD575] lg:text-3xl font-bold '>850+</h1>
                        <h5 className='text-white'>Events</h5>
                    </div>

                    <div className='text-center '>
                        <h1 className='text-[#FFD575] lg:text-3xl font-bold '>100+</h1>
                        <h5 className='text-white'>High Profile Visitors</h5>
                    </div>

                    <div className='text-center '>
                        <h1 className='text-[#FFD575] lg:text-3xl font-bold '>12,000+</h1>
                        <h5 className='text-white'>Skill Course Students</h5>
                    </div>

                    <div className='text-center '>
                        <h1 className='text-[#FFD575] lg:text-3xl font-bold '>6,000+</h1>
                        <h5 className='text-white'>Placements</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Slider */}
      <div className='relative z-10'>
        <div className=' p-6 pb-0 pt-[5.9rem] overflow-hidden z-10 '>
                <Slider {...settings}>
                    <div >
                        <img className=' object-cover w-full  h-[35vw] ' src={Slide01Image} alt="" />
                    </div>
                    <div>
                        <img className=' object-cover w-full  h-[35vw] ' src={Slide02Image} alt="" />
                    </div>
                    <div>
                        <img className=' object-cover w-full   h-[35vw]' src={Slide03Image} alt="" />
                    </div>
                </Slider>
        </div>
      </div>
    </div>
   
    
   
    
    </>
  )
}
