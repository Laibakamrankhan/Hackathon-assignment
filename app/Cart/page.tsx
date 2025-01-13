'use client'
import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link'
import bannar from '@/image/bgbannar.png'
import Image from 'next/image'
import pc from '@/image/sofa.png'


const Cart = () => {
  // Static Product List (Ye API ya Database se bhi fetch ho sakta hai)
  const [products, setProducts] = useState([
    { id: 1, name: "Asgaard sofa", price: 650, quantity: 1, src: pc },
   
  ]);

  // Quantity change handler
  const handleQuantityChange = (id:number, value:string) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: parseInt(value) || 0 }
        : product
    );
    setProducts(updatedProducts);
  };

  // Calculate Subtotal
  const calculateSubtotal = () =>
    products.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
    <div className="relative">
  <Image src={bannar} alt="banner" className="w-full h-[316px]" />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h1
      className="text-black "
      style={{ fontFamily: "Poppins", fontWeight:700 ,fontSize:48 }}>
      Cart
    </h1>
    <ul className='flex gap-4'>
    <Link href={"/"}> <li  style={{ fontFamily: "Poppins", fontWeight:500 ,fontSize:16 }}>Home</li> </Link>  
      <li><IoIosArrowBack className='w-[20px] h-[20px]' /></li>
     <Link href={"/Cart"}> <li  style={{ fontFamily: "Poppins", fontWeight:300 ,fontSize:16 }} >Cart</li> </Link> 
    </ul>
  </div>
</div>
    <div className="w-full px-4 sm:px-6 md:px-16 lg:px-24 py-8">
      <div className="flex flex-col gap-6 font-[Poppins] mt-7">
        {/* Header */}
        <div className="h-auto bg-[#F9F1E7] w-full rounded-md text-[14px] sm:text-[16px] md:text-[18px] font-normal flex justify-between items-center px-4 py-2">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {/* Product Rows */}
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-wrap items-center justify-between gap-4 px-4 py-3"
          >
            <div className="text-[#9F9F9F] flex items-center gap-2">
              <Image
                src={product.src}
                alt={product.name}
                className="w-[50px] sm:w-[70px] h-auto"
                width={70}
                height={70}
              />
              <p className="text-[12px] sm:text-[14px] md:text-[16px]">
                {product.name}
              </p>
            </div>
            <p className="text-[#9F9F9F] text-[12px] sm:text-[14px] md:text-[16px]">
              ${product.price}
            </p>
            <input
              type="number"
              className="w-[50px] sm:w-[60px] md:w-[72px] h-[36px] sm:h-[40px] md:h-[44px] rounded-md px-2 border-[1px] border-black"
              value={product.quantity}
              onChange={(e) =>
                handleQuantityChange(product.id, e.target.value)
              }
            />
            <p className="text-[12px] sm:text-[14px] md:text-[16px]">
              ${product.price * product.quantity}
            </p>
          </div>
        ))}

        {/* Cart Total Section */}
        <div className="w-full flex flex-col-reverse lg:flex-row gap-6 mt-10">
          <div className="flex flex-col w-full lg:w-[50%] bg-[#F9F1E7] rounded-md px-6 py-5 space-y-4">
            <p className="text-[18px] sm:text-[20px] font-normal">Cart Total</p>
            <div className="flex justify-between text-[14px] sm:text-[16px]">
              <p>SubTotal:</p>
              <p>${calculateSubtotal()}</p>
            </div>
            <hr />
            <div className="flex justify-between text-[14px] sm:text-[16px]">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between text-[14px] sm:text-[16px]">
              <p>Total:</p>
              <p>${calculateSubtotal()}</p>
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
    </div>
  );
};

export default Cart;
