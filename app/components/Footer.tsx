import React from 'react'

const Footer = () => {
  return (
    <div>
         <div className='w-full h-[505px] mt-[300px] '>
 <div className='flex flex-row justify-evenly'>
    <div className='flex flex-col gap-10 '>
         <h1 className='text-[#000000]' style={{fontFamily:'Poppins' , fontSize:24 , fontWeight:600}}>Funiro.</h1>
         <h1 className='text-[#9F9F9F]' style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:400}}>400 University Drive Suite 200 Coral <br />
         Gables,<br />
         FL 33134 USA</h1>
    </div>
    <div  className='flex flex-col gap-10 ' >
       <h1 className='text-[#9F9F9F]' style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:500}}>Links</h1>
       <ul className='flex flex-col gap-10'>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
    </div>
   <div className='flex flex-col gap-10 '>
<h1 className='text-[#9F9F9F]' style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:500}}>Help</h1>
<ul className='flex flex-col gap-10'>
        <li>Payment Options</li>
        <li>Returns</li>
        <li>Privacy Policies</li>
       </ul>
   </div>
<div className='flex flex-col gap-10' >
      <h1 className='text-[#9F9F9F]' style={{fontFamily:'Poppins' , fontSize:16 , fontWeight:500}}>News Letter</h1>
      <div className='flex gap-10'>
   <h1 className='underline decoration-black text-[#9F9F9F] '>Enter your Email Address</h1>
   <h1 className='underline decoration-black'>Subscribe</h1>
   
      </div>
      </div>
</div>

 <div className='w-full h-5 grid justify-items-center  ml-[200px] '>
                <div className='w-full h-5 '>
                  <p className='text-'>
                   ©2021 Whitepace LLC.
                  </p>
                </div>
              </div>
              
            </div> </div>
  )
}

export default Footer
