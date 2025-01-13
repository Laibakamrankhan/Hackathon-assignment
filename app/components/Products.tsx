import Image from "next/image"
import pt1 from '@/image/Images.png'
import pt2 from '@/image/Images (1).png'
import pt3 from '@/image/Images (2).png'
import pt4 from '@/image/Images (3).png'
import pt5 from '@/image/Images 5.png'
import pt6 from '@/image/image 6.png'
import pt7 from '@/image/Images 7.png'
import pt8 from '@/image/image 8.png'
import Link from "next/link"
import { MdCompareArrows } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";

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
];
const Products = () => {
  return (
   <div className="w-full max-w-full h-auto mx-auto border border-[#B88E2F] p-4">
  <div className="w-full text-center">
    <h1
      className="text-[#333333] leading-[48px] xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
      style={{ fontFamily: "Poppins" }}
    >
      Our Products
    </h1>
  </div>
  <div className="flex flex-col gap-10 mt-8">
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="w-[90%] xs:w-[285px] h-auto flex-shrink-0 relative group"
          >
            {/* Image */}
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-[301px] object-cover"
            />

            {/* Overlay effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#3A3A3A] opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

            {/* Hover Buttons */}
            <button
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-[#B88E2F] font-bold px-4 py-2 w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-32"
            >
              Add to Cart
            </button>
            <span
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-24"
            >
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
                  <FaRegHeart className="text-lg" />
                  Like
                </li>
              </ul>
            </span>

            {/* Product Details */}
            <div className="bg-[#F4F5F7] p-4">
              <h1
                className="text-[#3A3A3A] text-lg sm:text-xl md:text-2xl font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                {product.name}
              </h1>
              <h2
                className="text-[#898989] text-sm sm:text-base"
                style={{ fontFamily: "Poppins", fontWeight: 500 }}
              >
                {product.description}
              </h2>
              <div className="flex gap-4 mt-2">
                <h3
                  className="text-[#3A3A3A] text-base sm:text-lg font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {product.price}
                </h3>
                {product.discountedPrice && (
                  <h3
                    className="text-[#B0B0B0] line-through text-sm sm:text-base"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {product.discountedPrice}
                  </h3>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 <Link href={"/Shop"}>
  <button className="border border-[#B88E2F] w-[90%] xs:w-[245px] h-[48px] mx-auto mt-5 block  hover:bg-[#81704a]">
    <h1
      className="text-[#B88E2F] text-sm sm:text-base font-semibold"
      style={{ fontFamily: "Poppins" }}
    >
      Show More
    </h1>
  </button> </Link>
</div>

    
  )
}

export default Products
