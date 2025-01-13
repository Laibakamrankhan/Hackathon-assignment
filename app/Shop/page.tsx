import React from 'react'
import Image from 'next/image'
import bannar from '@/image/bgbannar.png'
import gp from  '@/image/Group 63.png'
import pt1 from '@/image/Images.png'
import pt2 from '@/image/Images (1).png'
import pt3 from '@/image/Images (2).png'
import pt4 from '@/image/Images (3).png'
import pt5 from '@/image/Images 5.png'
import pt6 from '@/image/image 6.png'
import pt7 from '@/image/Images 7.png'
import pt8 from '@/image/image 8.png'
import { FaRegHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link'

const products = [
  {
    id: 1,
    image: pt1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountedPrice: "Rp 3.500.000",
  },
  {
    id: 2,
    image: pt2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountedPrice: null,
  },
  {
    id: 3,
    image: pt3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    discountedPrice: "Rp 14.000.000",
  },
  {
    id: 4,
    image: pt4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    discountedPrice: null,
  },
  {
    id: 5,
    image: pt5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    discountedPrice: "Rp 3.500.000",
  },
  {
    id: 6,
    image: pt6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    discountedPrice: null,
  },
  {
    id: 7,
    image: pt7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    discountedPrice: "Rp 14.000.000",
  },
  {
    id: 8,
    image: pt8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    discountedPrice: null,
  },
  {
    id: 9,
    image: pt1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountedPrice: "Rp 3.500.000",
  },
  {
    id: 10,
    image: pt2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountedPrice: null,
  },
  {
    id: 11,
    image: pt3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    discountedPrice: "Rp 14.000.000",
  },
  {
    id: 12,
    image: pt4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    discountedPrice: null,
  },
  {
    id: 13,
    image: pt5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    discountedPrice: "Rp 3.500.000",
  },
  {
    id: 14,
    image: pt6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    discountedPrice: null,
  },
  {
    id: 15,
    image: pt7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    discountedPrice: "Rp 14.000.000",
  },
  {
    id: 16,
    image: pt8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    discountedPrice: null,
  },
];

const page = () => {
  return (
   <div className="w-full">
 <div className="relative">
  <Image src={bannar} alt="banner" className="w-full h-[316px]" />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h1
      className="text-black "
      style={{ fontFamily: "Poppins", fontWeight:700 ,fontSize:48 }}>
      Shop
    </h1>
    <ul className='flex gap-4'>
    <Link href={"/"}> <li  style={{ fontFamily: "Poppins", fontWeight:500 ,fontSize:16 }}>Home</li> </Link>  
      <li><IoIosArrowBack className='w-[20px] h-[20px]' /></li>
     <Link href={"/Shop"}> <li  style={{ fontFamily: "Poppins", fontWeight:300 ,fontSize:16 }} >Shop</li> </Link> 
    </ul>
  </div>
</div>

  <Image src={gp} alt="banner" className="w-full h-[100px]" />
  <div className="flex flex-col gap-10 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-4 group relative">
            {/* Card */}
            <div className="w-full h-[446px] flex flex-col">
              {/* Image Section */}
              <div className="w-full h-[301px] relative">
                <Image
                  src={product.image}
                  alt={`${product.name}.png`}
                  className="w-full h-full"
                />
                {/* Overlay Effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-[#3A3A3A] opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                {/* Hover Button */}
                <button
                  className="absolute bottom-4 left-1/2 w-48 transform -translate-x-1/2 bg-white text-[#B88E2F] mb-[125px] font-bold px-4 py-2  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Add to Cart
                </button>
                <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-24">
                <ul className="flex flex-row gap-4">
                <li className="flex items-center gap-2">
                <CiShare2 className="text-lg" />
                 Share
                </li>
                <li className="flex items-center gap-2">
                <MdCompareArrows className="text-lg" />
                Compare
               </li>
               <li className="flex items-center gap-2">
               < FaRegHeart className="text-lg" />
               Like
              </li>
              </ul>
              </span>
              </div>
              {/* Product Details */}
              <div className="w-full h-[145px] bg-[#F4F5F7]">
                <div className="flex flex-col mt-5 ml-3">
                  <h1
                    className="text-[#3A3A3A]"
                    style={{ fontFamily: "Poppins", fontSize: 24, fontWeight: 600 }}
                  >
                    {product.name}
                  </h1>
                  <h1
                    className="text-[#898989]"
                    style={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 500 }}
                  >
                    {product.description}
                  </h1>
                  <div className="flex gap-4">
                    <h1
                      className="text-[#3A3A3A]"
                      style={{ fontFamily: "Poppins", fontSize: 20, fontWeight: 600 }}
                    >
                      {product.price}
                    </h1>
                    {product.discountedPrice && (
                      <h1
                        className="text-[#B0B0B0] line-through"
                        style={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 400 }}
                      >
                        {product.discountedPrice}
                      </h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  
      

</div>


  )
}

export default page
