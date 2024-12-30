import Projects from "./Projects";
import CareerHighlights from "./CareerHighlights";
import ContactUs from "./ContactUs";
import ControlCard from "./ControlCard";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Home = () => {
    const location = useLocation();
    const hash = location.hash;
  
    const scrollToSection = (id: string) => {
      console.log('string:', id);
      const element = document.getElementById(id);
      if (element) {
        console.log("in if");
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    useEffect(() => {
      if (hash) {
        scrollToSection(hash); // Remove the '#' from the hash
      }
    }, [hash]);
    return (<div id="main-container"> 
     <ResponsiveAppBar />
     <ControlCard />
    <Projects />
    <CareerHighlights />
   
    <ContactUs />
    </div>
   );
}
export default Home;

