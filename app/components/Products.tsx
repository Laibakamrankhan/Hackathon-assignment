import Image from "next/image"
import pt1 from '@/image/Images.png'
import pt2 from '@/image/Images (1).png'
import pt3 from '@/image/Images (2).png'
import pt4 from '@/image/Images (3).png'
import pt5 from '@/image/Images 5.png'
import pt6 from '@/image/image 6.png'
import pt7 from '@/image/Images 7.png'
import pt8 from '@/image/Image 8.png'

const Products = () => {
  return (
    <div className='w-[1,236px] h-[1084px] ml-[90px] border border-[#B88E2F]'>
       <div className='w-[559px] ml-96 h-[76.71px]  grid justify-items-center'>
        <h1 className='text-[#333333]  w-[300px] h-[48px]  leading-[48px]' style={{fontFamily:'Poppins' , fontSize:32 , fontWeight:700}}>
        Our Products
        </h1>
        </div> <div className="flex flex-col gap-10">

<div className='w-[1,236px] h-[446px] ml-[102px] flex flex-row gap-[32px]'>
           <div className='w-[285px] h-[446px]'>
             <Image id="car1" src={pt1} alt="Images.png" className="w-[285px] h-[301px]"/> 
             <div className="w-[285px] h-[145px] bg-[#F4F5F7] absolute ">
                <div className="flex flex-col mt-5 ml-3 relative">
                 <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:24 , fontWeight:600}}>Syltherine</h1>
                <h1 className="text-[#898989]" style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:500}}>Stylish cafe chair</h1>
                <div className="flex gap-[16px]">
                <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:20 , fontWeight:600}}>Rp 2.500.000</h1>
                <h1 className="text-[#B0B0B0] line-through" style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:400}}>Rp 3.500.000</h1>
                </div></div></div> 
                </div>
                <div className='w-[285px] h-[446px]'>
             <Image id="card2" src={pt2} alt="Images.png" className="w-[285px] h-[301px]"/> 
             <div className="w-[285px] h-[145px] bg-[#F4F5F7] absolute ">
                <div className="flex flex-col mt-5 ml-3 relative">
                 <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:24 , fontWeight:600}}>Leviosa</h1>
                <h1 className="text-[#898989]" style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:500}}>Stylish cafe chair</h1>
                <div className="flex gap-[16px]">
                <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:20 , fontWeight:600}}>Rp 2.500.000</h1>
                </div></div></div> 
                </div>

                <div className='w-[285px] h-[446px]'>
             <Image id="card3" src={pt3} alt="Images.png" className="w-[285px] h-[301px]"/> 
             <div className="w-[285px] h-[145px] bg-[#F4F5F7] absolute ">
                <div className="flex flex-col mt-5 ml-3 relative">
                 <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:24 , fontWeight:600}}>Lolito</h1>
                <h1 className="text-[#898989]" style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:500}}>Luxury big sofa</h1>
                <div className="flex gap-[16px]">
                <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:20 , fontWeight:600}}>Rp 7.000.000</h1>
                <h1 className="text-[#B0B0B0] line-through" style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:400}}>Rp 14.000.000</h1>
               
                </div></div></div> 
                </div>
                <div className='w-[285px] h-[446px]'>
             <Image id="card4" src={pt4} alt="Images.png" className="w-[285px] h-[301px]"/> 
             <div className="w-[285px] h-[145px] bg-[#F4F5F7] absolute ">
                <div className="flex flex-col mt-5 ml-3 relative">
                 <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:24 , fontWeight:600}}>Respira</h1>
                <h1 className="text-[#898989]" style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:500}}>Outdoor bar table and stool</h1>
                <div className="flex gap-[16px]">
                <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:20 , fontWeight:600}}>Rp 500.000</h1>
                </div></div></div> 
                </div>  </div>      
           <div className='w-[1,236px] h-[446px] ml-[102px] flex flex-row gap-[32px]'>
           <div className='w-[285px] h-[446px]'>
             <Image id="card5" src={pt5} alt="Images.png" className="w-[285px] h-[301px]"/> 
             <div className="w-[285px] h-[145px] bg-[#F4F5F7] absolute ">
                <div className="flex flex-col mt-5 ml-3 relative">
                 <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:24 , fontWeight:600}}>Grifo</h1>
                <h1 className="text-[#898989]" style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:500}}>Night lamp</h1>
                <div className="flex gap-[16px]">
                <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:20 , fontWeight:600}}>Rp 1.500.000</h1>
                </div></div></div> 
                </div>
                <div className='w-[285px] h-[446px]'>
             <Image id="card6" src={pt6} alt="Images.png" className="w-[285px] h-[301px]"/> 
             <div className="w-[285px] h-[145px] bg-[#F4F5F7] absolute ">
                <div className="flex flex-col mt-5 ml-3 relative">
                 <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:24 , fontWeight:600}}>Muggo</h1>
                <h1 className="text-[#898989]" style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:500}}>Small mug</h1>
                <div className="flex gap-[16px]">
                <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:20 , fontWeight:600}}>Rp 150.000</h1>
                </div></div></div> 
                </div>

                <div className='w-[285px] h-[446px]'>
             <Image id="card7" src={pt7} alt="Images.png" className="w-[285px] h-[301px]"/> 
             <div className="w-[285px] h-[145px] bg-[#F4F5F7] absolute ">
                <div className="flex flex-col mt-5 ml-3 relative">
                 <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:24 , fontWeight:600}}>Pingky</h1>
                <h1 className="text-[#898989]" style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:500}}>Cute bed set</h1>
                <div className="flex gap-[16px]">
                <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:20 , fontWeight:600}}>Rp 7.000.000</h1>
                <h1 className="text-[#B0B0B0] line-through" style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:400}}>Rp 14.000.000</h1>
               
                </div></div></div> 
                </div>
                <div className='w-[285px] h-[446px]'>
             <Image id="card8" src={pt8} alt="Images.png" className="w-[285px] h-[301px]"/> 
             <div className="w-[285px] h-[145px] bg-[#F4F5F7] absolute ">
                <div className="flex flex-col mt-5 ml-3 relative">
                 <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:24 , fontWeight:600}}>Potty</h1>
                <h1 className="text-[#898989]" style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:500}}>Minimalist flower pot</h1>
                <div className="flex gap-[16px]">
                <h1 className="text-[#3A3A3A]" style={{fontFamily:'Poppins' , fontSize:20 , fontWeight:600}}>Rp 500.000</h1>
                </div></div></div> 
                </div>





           </div>

        </div>
        <button className="border border-[#B88E2F] w-[245px] h-[48px] ml-[598px] mt-5">
          <h1 className="text-[#B88E2F]" style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:600}}>
            Show More
          </h1>
        </button>
        
        </div>
    
  )
}

export default Products
