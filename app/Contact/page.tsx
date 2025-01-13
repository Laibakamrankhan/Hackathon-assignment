import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link'
import bannar from '@/image/bgbannar.png'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <div className="relative">
  <Image src={bannar} alt="banner" className="w-full h-[316px]" />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h1
      className="text-black "
      style={{ fontFamily: "Poppins", fontWeight:700 ,fontSize:48 }}>
      Contact
    </h1>
    <ul className='flex gap-4'>
    <Link href={"/"}> <li  style={{ fontFamily: "Poppins", fontWeight:500 ,fontSize:16 }}>Home</li> </Link>  
      <li><IoIosArrowBack className='w-[20px] h-[20px]' /></li>
     <Link href={"/Contact"}> <li  style={{ fontFamily: "Poppins", fontWeight:300 ,fontSize:16 }} >Contact</li> </Link> 
    </ul>
  </div>
</div>

    </div>
  )
}

export default page
