import {Montserrat} from "next/font/google"
import Image from "next/image"
import logo from '@/image/Meubel House_Logos-05.png'
import { IoSearch } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link"
const montserrat = Montserrat({
    subsets:["latin"],
    weight:["700"],
    display: "swap"
  })
const Navbar = () => {
  return (
  <div>
     <nav id="nav-style" className=" bg-[#FFFFF] text-[#000000] flex justify-evenly items-center h-[100px] w-[1440px]" >
    <Link href='#'> <div id="brand" className=" h-[41px] w-[185px]  mt-[29px] mr-[29px] ">
        <h3 style={{fontStyle : montserrat.className , fontWeight:700 , fontSize:34 }} className="flex items-center gap-[5px] text-[#00000] text-24px tracking-0.1px leading-32" >
            <Image src={logo} alt="Meubel House_Logo" className="w-[50px] h-[32px]"/>Furniroe</h3>
      </div>

    </Link> 
      <div className="flex text-center space-x-10 ">
        <ul className="flex text-center justify-evenly w-[430px] h-[24px] mt-[38px]" style={{fontFamily:"Poppins", fontWeight:500, fontSize:16}}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Shop">Shop</Link>  </li>
          <li><Link href="/Blog">Blog</Link>  </li>
          <li><Link href="/Contact">contact</Link>   </li>
        </ul>

        <MdOutlinePerson className="w-[28px] h-[28px] mt-[36px]" />
        <IoSearch  className="w-[28px] h-[28px] mt-[36px]"/>
        <FaRegHeart className="w-[28px] h-[28px] mt-[36px]"/>
        <Link href="/Cart">
        <IoCartOutline className="w-[28px] h-[28px] mt-[36px]" /></Link>
        
      </div>
    
     </nav>
    </div> 
   
  )
}

export default Navbar
