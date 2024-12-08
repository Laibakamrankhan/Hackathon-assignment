import React from 'react'
import Image from 'next/image'
import pic1 from '@/image/Mask Group.png'
import pic2 from '@/image/Image-living room.png'
import pic3 from '@/image/Mask Group (1).png'

const Rangebrowser = () => {
  return (
    <div className='w-[1183px] h-[685px] ml-[131px] '>
      <div className='w-[559px] ml-80 h-[76.71px]  grid justify-items-center'>
        <h1 className='text-[#333333]  w-[300px] h-[48px]  leading-[48px]' style={{fontFamily:'Poppins' , fontSize:32 , fontWeight:700}}>
        Browse The Range
        </h1>
        <p className='text-[#666666]  'style={{fontFamily:'Poppins' , fontSize:20 , fontWeight:500}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='flex flex-row gap-8'>
       <div className='flex-col text-center'>
        <Image src={pic1} alt='Mask Group.png' className="w-[381px] h-[480px] mt-10 "/>
        <h1 className='text-[#333333] mt-5' style={{fontFamily:'Poppins' , fontSize:24 , fontWeight:600}}>Dining</h1>
        </div>
        <div className='flex-col text-center'>
        <Image src={pic2} alt='Mask Group.png' className="w-[381px] h-[480px] mt-10 "/>
        <h1 className='text-[#333333] mt-5' style={{fontFamily:'Poppins' , fontSize:24 , fontWeight:600}}>Living</h1>
        </div> 
        <div className='flex-col text-center'>
        <Image src={pic3} alt='Mask Group.png' className="w-[381px] h-[480px] mt-10 "/>
        <h1 className='text-[#333333] mt-5' style={{fontFamily:'Poppins' , fontSize:24 , fontWeight:600}}>Bedroom</h1>
        </div>  
        
        </div>
    </div>
  )
}

export default Rangebrowser
