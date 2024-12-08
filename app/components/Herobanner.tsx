import Image from "next/image"
import banner from "@/public/banner.png"
const Herobanner = () => {
  return (
    <div id="banner" className=" w-full h-[1007.93px]   mt-[95.7px]" >
      <div>
        <Image src={banner} alt="absolute scandinavian-interior-mockup-wall" className="absolute mt-[-73px] w-full h-[1007.93px]"/></div>
          <div className="absolute bg-[#FFF3E3] w-[653px] h-[443px] mt-[253px] ml-[739px] rounded-[10px] flex flex-col justify-center "> 
         <div className='flex items-center  ml-12'>
       <span className='text-[#333333]  sm:text-sm md:text-base font-semibold leading-6 tracking-[3px' style={{fontFamily:"Poppins", fontWeight:600, fontSize:16}}>
     New Arrival
     </span>
     </div>
     <h1 className='text-[#B88E2F] sm:text-2xl md:text-4xl lg:text-5xl font-bold  leading-[65px]  ml-12 ' style={{fontFamily:"Poppins", fontWeight:700, fontSize:52}}>
     Discover Our New Collection
     </h1>
     <div className="flex flex-col gap-[100px] ml-12">
     <p className="text-[#333333] leading-6"style={{fontFamily:"Poppins", fontWeight:600, fontSize:18}}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
     </p>
     <button className="bg-[#B88E2F] text-[#FFFFFF] w-[222px] h-[74px] py-[25px] px-[70px] ">
        <h1 className="litems-center gap-[10px]"style={{fontFamily:"Poppins", fontWeight:700, fontSize:16}}>
        BUY Now
        </h1>
     </button></div>
  </div>
              
</div>

        
   
  )
}

export default Herobanner
