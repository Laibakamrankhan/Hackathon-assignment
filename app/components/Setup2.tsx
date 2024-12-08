import React from 'react'
import Image from "next/image"
import sbanner from '@/image/sbanner.png'

const Setup2 = () => {
  return (
    <div className='mt-[900px] w-full h-[780px] '>
      <div className='w-[559px] ml-[500px] h-[76.71px]  grid justify-items-center'>
        <h1 className='text-[#616161]' style={{fontFamily:'Poppins' , fontSize:20 , fontWeight:600}}>
        Share your setup with
        </h1>
        <h1 className='text-[#333333]  w-[300px] h-[48px]  leading-[48px]' style={{fontFamily:'Poppins' , fontSize:40 , fontWeight:700}}>
        #FuniroFurniture
        </h1>
        </div>
      <Image src={sbanner} alt="Share.png" className='w-full h-[780px]'/>
    </div>
    
  )
}

export default Setup2
