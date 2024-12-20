import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cart from '@/image/homebaner.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import pc from '@/image/sofa.png'
const page = () => {
  return (
<div>
  <Navbar />
  <Image src={cart} alt="cartbanner" className="w-full h-auto" />
  <div className="w-full px-4 sm:px-6 md:px-16 lg:px-24 py-8">
    <div className="flex flex-col gap-6 font-[Poppins] mt-7">
      {/* Header */}
      <div className="h-auto bg-[#F9F1E7] w-full rounded-md text-[14px] sm:text-[16px] md:text-[18px] font-normal flex justify-between items-center px-4 py-2">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      {/* Product Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3">
        <div className="text-[#9F9F9F] flex items-center gap-2">
          <Image src={pc} alt="item" className="w-[50px] sm:w-[70px] h-auto" />
          <p className="text-[12px] sm:text-[14px] md:text-[16px]">Asgaard sofa</p>
        </div>
        <p className="text-[#9F9F9F] text-[12px] sm:text-[14px] md:text-[16px]">$650</p>
        <input
          type="number"
          className="w-[50px] sm:w-[60px] md:w-[72px] h-[36px] sm:h-[40px] md:h-[44px] rounded-md px-2 border-[1px] border-black"
        />
        <p className="text-[12px] sm:text-[14px] md:text-[16px]">$650</p>
      </div>

      {/* Cart Total Section */}
      <div className="w-full flex flex-col-reverse lg:flex-row gap-6 mt-10">
        <div className="flex flex-col w-full lg:w-[50%] bg-[#F9F1E7] rounded-md px-6 py-5 space-y-4">
          <p className="text-[18px] sm:text-[20px] font-normal">Cart Total</p>
          <div className="flex justify-between text-[14px] sm:text-[16px]">
            <p>SubTotal:</p>
            <p>$1750</p>
          </div>
          <hr />
          <div className="flex justify-between text-[14px] sm:text-[16px]">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="flex justify-between text-[14px] sm:text-[16px]">
            <p>Total:</p>
            <p>$1750</p>
          </div>
          <div className="text-center">
            <button className="w-full md:w-[218px] h-[56px] bg-[#F9F1E7] border-2 border-black rounded-md hover:bg-[#9F9F9F] text-black">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>

    
  )
}

export default page
