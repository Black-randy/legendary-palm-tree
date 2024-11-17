import Aboutus from "../components/aboutus";
import BentoGrid1 from "../components/bento";
import BentoGrid2 from "../components/bento2";
import Faqs from "../components/faq";
import Hero from "../components/hero";
function Mainpage() {
    return ( 
        
        <>
        <Hero/>
        <BentoGrid1/>
        <BentoGrid2/>
        <Aboutus/>
        <Faqs/>
        </>
        
     );
}

export default Mainpage;