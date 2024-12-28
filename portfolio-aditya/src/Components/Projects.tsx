import { Card, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import {styled} from "styled-components";
import image from '../assets/code1.svg'
import cloud from '../assets/cloud.svg'
import report from '../assets/report.svg'
import rocket from '../assets/rocket.svg'
import send from '../assets/send.svg'
import uxdesign from '../assets/ux-design.svg'

const CustomCard1 = styled(Card)`
display="flex"; 
flexDirection="column"; 
justifyContent="center"; 
alignItems="center";
backgroudColor="black"
`;
const CustomCard = styled(Card)`
padding: 40px;
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center;
transition: transform 0.5s ease,
 .MuiTypography-root {
 fontFamily: '"Poppins", Sans-serif' 

}

 &:hover {

    background-color: black ; /* Change background color on hover */
    
   g path {
        fill: blue !important; 
    }
    .MuiTypography-root {
      color: white; /* Change Typography color to white on hover */
        transform: translateY(-50px) ;
    }
    

`;
const SvgImage = styled('img')`
  width: 100px; 
  height: 100px; 
  margin-bottom: 16px;
`;

interface CustomCardProps {
    svgSrc: string;
    primaryText: string;
    details: string;
    backgroundColor: string;
    
  } 

const CustomCardComponent: React.FC<CustomCardProps> = ({ backgroundColor, svgSrc , primaryText , details}) => {
    return (
        <CustomCard sx={{backgroundColor:backgroundColor,boxShadow: 'none', borderRadius: '0px'}}>
                        
         <SvgImage src={svgSrc} alt="SVG Icon" />
        <Typography  component="div" sx={{ fontFamily: '"Poppins", Sans-serif', color: '#101010',fontSize: '20px',
    fontWeight: '700',
    lineHeight: '1.4em.',transition: 'transform 0.5s ease', // Smooth transition for transform
    '&:hover': {
      transform: 'translateY(-50px)', // Move upwards by 50px on hover
      
    },margin: '20px 0px 20px 0px' }}>
          <h3>{primaryText}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary"  sx={{ fontFamily: '"Poppins", Sans-serif',transition: 'transform 0.5s ease', // Smooth transition for transform
          '&:hover': {
            transform: 'translateY(-50px)', // Move upwards by 50px on hover
          },margin: '20px 0px 20px 0px' }}>
          {details}
        </Typography>
    </CustomCard>
    );
}
const Projects = () => {
    
    return (<>
        <Container sx={{display:"flex", flexDirection:'column',padding: '70px 30px'}}>
        <Typography
                gutterBottom
                sx={{fontSize: 48, fontWeight: 700 , fontFamily: '"Poppins", Sans-serif'}}
              >
                Projects.
              </Typography>

              <Typography
                gutterBottom
                sx={{fontSize: 17, fontWeight: 700 , fontFamily: '"Poppins", Sans-serif' ,lineHeight: '17px', color:'#2BA837'}}
              >
                WEBSITE CREATION AND WEBMARKETING 
              </Typography>
            <Grid container spacing={0} sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', margin:'3% 0%'}}>
                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CustomCardComponent
                backgroundColor="rgba(0, 0, 0, 0.1)"
        svgSrc={image} // Replace with the actual path to your SVG image
        primaryText="Création site internet"
        details="This is the details about the primary text. It provides more information and context."
      />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CustomCardComponent
                backgroundColor="white"
        svgSrc={cloud} // Replace with the actual path to your SVG image
        primaryText="Primary Text"
        details="This is the details about the primary text. It provides more information and context."
      />

                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CustomCardComponent
                backgroundColor="rgba(0, 0, 0, 0.1)"
        svgSrc={report} // Replace with the actual path to your SVG image
        primaryText="Primary Text"
        details="This is the details about the primary text. It provides more information and context."
      />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CustomCardComponent
                backgroundColor="white"
        svgSrc={rocket} // Replace with the actual path to your SVG image
        primaryText="Primary Text"
        details="This is the details about the primary text. It provides more information and context."
      />

                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CustomCardComponent
                backgroundColor="rgba(0, 0, 0, 0.1)"
        svgSrc={send} // Replace with the actual path to your SVG image
        primaryText="Primary Text"
        details="This is the details about the primary text. It provides more information and context."
      />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CustomCardComponent
                backgroundColor="white"
        svgSrc={uxdesign} // Replace with the actual path to your SVG image
        primaryText="Primary Text"
        details="This is the details about the primary text. It provides more information and context."
      />
                </Grid>
            </Grid>
        </Container>
    </>);
};

export default Projects;