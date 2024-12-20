import CareerHighlights from "./CareerHighlights";
import CaseStudies from "./CaseStudies";
import ContactUs from "./ContactUs";
import ControlCard from "./ControlCard";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Technologies from "./Technologies";
import TpCard from "./TpCard";


const Home = () => {
    return (<div id="main-container"> 
     <ResponsiveAppBar />
     <div id="controlCard-container" style={{display: "flex", justifyContent: "center" , backgroundColor:'black'}}>
     <ControlCard />
     </div>
    <CaseStudies />
    <CareerHighlights />
    <br />
    <Technologies />
   
    <ContactUs />
    </div>
   );
}
export default Home;

