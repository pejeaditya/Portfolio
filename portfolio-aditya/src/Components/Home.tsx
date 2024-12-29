import Projects from "./Projects";
import CareerHighlights from "./CareerHighlights";
import CaseStudies from "./CaseStudies";
import ContactUs from "./ContactUs";
import ControlCard from "./ControlCard";
import ResponsiveAppBar from "./ResponsiveAppBar";
import TechnologiesCard from "./TechnologiesCard";


const Home = () => {
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

