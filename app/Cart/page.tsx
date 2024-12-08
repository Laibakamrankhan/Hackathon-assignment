import React from 'react'

import Image from 'next/image'
import cart from '@/image/homebaner.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import pc from '@/image/sofa.png'
const page = () => {
  return (
    <div>
        <Navbar />
        <Image src={cart} alt='cartbanner' className='w-full h-[]316'/>
      <div className="w-full xs:px-6 md:px-24 xs:pt-12 md:py-20">
        <div className=" h-[850px] w-full flex flex-col gap-6 font-[Poppins] mt-7">
          <div className="h-[72px] bg-[#F9F1E7] w-full  rounded-md text-[18px] font-normal flex justify-between items-center px-4 ">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div className="h-[102px] w-full  flex items-center justify-between md:px-4  xs:text-[10px] md:text-[16px] ">
            <div className="text-[#9F9F9F] flex items-center gap-2">
           <Image src={pc}  alt='item'/>
              <p>Asgaard sofa</p>
            </div>
            <p className='text-[#9F9F9F]'>$650</p>
            <input
              type="number"
              className="w-[72px] h-[44px] rounded-md px-1 border-[1px] border-black"
            />
            <p>$650</p>
          </div>
         
          <div className="w-full h-[324px] mt-10 flex justify-between xs:flex-col md:flex-row gap-3 ml-[650px]">
            <div className=" xs:w-[350px] md:w-[470px] h-[324px] bg-[#F9F1E7] flex flex-col px-7 space-y-4 py-5">
              <p className="text-[20px] font-normal">Cart Total</p>
              <div className="flex justify-between">
                <p>SubTotal:</p>
                <p>$1750</p>
              </div>
              <hr />
              <div className="flex justify-between">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Total:</p>
            <p>$1750</p>
          </div>
          <div className=" text-center"><button className="w-[218px] h-[56px] bg-[#F9F1E7] border-2 border-black rounded-md hover:bg-[#9F9F9F] text-black">
                checkout
              </button></div>
            </div>         
          </div>        
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default page
