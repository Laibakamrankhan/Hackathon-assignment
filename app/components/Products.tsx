import Image from "next/image"
import pt1 from '@/image/Images.png'
import pt2 from '@/image/Images (1).png'
import pt3 from '@/image/Images (2).png'
import pt4 from '@/image/Images (3).png'
import pt5 from '@/image/Images 5.png'
import pt6 from '@/image/image 6.png'
import pt7 from '@/image/Images 7.png'
import pt8 from '@/image/image 8.png'

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
    {/* Product Row 1 */}
    <div className="flex flex-wrap gap-6 justify-center">
      {[pt1, pt2, pt3, pt4].map((image, index) => (
        <div key={index} className="w-[90%] xs:w-[285px] h-auto flex-shrink-0">
          <Image
            src={image}
            alt={`Product ${index + 1}`}
            className="w-full h-[301px] object-cover"
          />
          <div className="bg-[#F4F5F7] p-4">
            <h1
              className="text-[#3A3A3A] text-lg sm:text-xl md:text-2xl font-semibold"
              style={{ fontFamily: "Poppins" }}
            >
              {index === 0 ? "Syltherine" : index === 1 ? "Leviosa" : index === 2 ? "Lolito" : "Respira"}
            </h1>
            <h2
              className="text-[#898989] text-sm sm:text-base"
              style={{ fontFamily: "Poppins", fontWeight: 500 }}
            >
              {index === 0
                ? "Stylish cafe chair"
                : index === 1
                ? "Stylish cafe chair"
                : index === 2
                ? "Luxury big sofa"
                : "Outdoor bar table and stool"}
            </h2>
            <div className="flex gap-4 mt-2">
              <h3
                className="text-[#3A3A3A] text-base sm:text-lg font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                {index === 0
                  ? "Rp 2.500.000"
                  : index === 1
                  ? "Rp 2.500.000"
                  : index === 2
                  ? "Rp 7.000.000"
                  : "Rp 500.000"}
              </h3>
              {index === 0 || index === 2 ? (
                <h3
                  className="text-[#B0B0B0] line-through text-sm sm:text-base"
                  style={{ fontFamily: "Poppins" }}
                >
                  {index === 0 ? "Rp 3.500.000" : "Rp 14.000.000"}
                </h3>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Product Row 2 */}
    <div className="flex flex-wrap gap-6 justify-center">
      {[pt5, pt6, pt7, pt8].map((image, index) => (
        <div key={index} className="w-[90%] xs:w-[285px] h-auto flex-shrink-0">
          <Image
            src={image}
            alt={`Product ${index + 5}`}
            className="w-full h-[301px] object-cover"
          />
          <div className="bg-[#F4F5F7] p-4">
            <h1
              className="text-[#3A3A3A] text-lg sm:text-xl md:text-2xl font-semibold"
              style={{ fontFamily: "Poppins" }}
            >
              {index === 0 ? "Grifo" : index === 1 ? "Muggo" : index === 2 ? "Pingky" : "Potty"}
            </h1>
            <h2
              className="text-[#898989] text-sm sm:text-base"
              style={{ fontFamily: "Poppins", fontWeight: 500 }}
            >
              {index === 0
                ? "Night lamp"
                : index === 1
                ? "Small mug"
                : index === 2
                ? "Cute bed set"
                : "Minimalist flower pot"}
            </h2>
            <div className="flex gap-4 mt-2">
              <h3
                className="text-[#3A3A3A] text-base sm:text-lg font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                {index === 0
                  ? "Rp 1.500.000"
                  : index === 1
                  ? "Rp 150.000"
                  : index === 2
                  ? "Rp 7.000.000"
                  : "Rp 500.000"}
              </h3>
              {index === 2 ? (
                <h3
                  className="text-[#B0B0B0] line-through text-sm sm:text-base"
                  style={{ fontFamily: "Poppins" }}
                >
                  Rp 14.000.000
                </h3>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <button className="border border-[#B88E2F] w-[90%] xs:w-[245px] h-[48px] mx-auto mt-5 block">
    <h1
      className="text-[#B88E2F] text-sm sm:text-base font-semibold"
      style={{ fontFamily: "Poppins" }}
    >
      Show More
    </h1>
  </button>
</div>

    
  )
}

export default Products
