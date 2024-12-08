
import Footer from "./components/Footer";
import Herobanner from "./components/Herobanner";
import Inspration from "./components/Inspration";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Rangebrowser from "./components/Rangebrowser";
import Setup2 from "./components/Setup2";


export default function Home() {
  return (
   <div>
    <Navbar />
    <Herobanner />
   <Rangebrowser />
   <Products />
   <Inspration />
   <Setup2 />
   <Footer />
  
   </div>
  );
}
