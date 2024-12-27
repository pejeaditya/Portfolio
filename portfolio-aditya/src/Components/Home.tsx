import CareerHighlights from "./CareerHighlights";
import CaseStudies from "./CaseStudies";
import ContactUs from "./ContactUs";
import ControlCard from "./ControlCard";
import ResponsiveAppBar from "./ResponsiveAppBar";
import TechnologiesCard from "./TechnologiesCard";


const Home = () => {
    return (<div id="main-container"> 
     <ResponsiveAppBar />
     <br />
     <div id="controlCard-container" style={{display: "flex", justifyContent: "center" , backgroundColor:'black'}}>
     <ControlCard />
    
     </div>
    <CaseStudies />
    <CareerHighlights />
    <br />
    <TechnologiesCard />
   
    <ContactUs />
    </div>
   );
}
export default Home;

