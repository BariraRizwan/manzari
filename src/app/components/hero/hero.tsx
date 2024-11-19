import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <div className='w-screen h-screen flex gap-5'>
        <div className='content w-[400px] h-64 mt-20 ml-24'>
          <h1 className='font-title font-bold'>IMPECCABLE <br/>CRAFTSMANSHIP AND <br/>FINESSE</h1>
          <p className='text-[15px] leading-5 tracking-normal py-4'>An example of intricate workmanship and detail, elegant <br/> necklaces and long and short chains form a part of our<br/> desirable collection.</p>
          <div className='w-28 h-8 bg-[#A29875] pt-1 pl-[11px] text-white rounded font-title cursor-pointer' >Explore Now</div>
 
           </div>
        <div className=' w-64 h-72 mt-10 ml-16 relative '>
         <Image src="/image/side.png" alt='sideImage ' width={50} height={100} className='imgr w-[210px] h-[280px] '>
          </Image>
          <div className='imgr w-[70%] h-[90%] relative top-[-93%] left-4  border-white border-[0.5px] '></div>
          </div>
      </div>
         
    </div>
  )
}

export default Hero;