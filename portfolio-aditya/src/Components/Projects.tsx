import { Card, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import {styled} from "styled-components";
import image from '../assets/code1.svg'
import cloud from '../assets/cloud.svg'
import report from '../assets/report.svg'
import rocket from '../assets/rocket.svg'
import send from '../assets/send.svg'
import uxdesign from '../assets/ux-design.svg'



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
    technologiesUsed: string;
    
  } 

const CustomCardComponent: React.FC<CustomCardProps> = ({ backgroundColor, svgSrc , primaryText , details, technologiesUsed}) => {
    return (
        <CustomCard sx={{backgroundColor:backgroundColor,boxShadow: 'none', borderRadius: '0px', minHeight:'490px'}}>
                        
         <SvgImage src={svgSrc} alt="SVG Icon" />
        <Typography  component="div" sx={{ fontFamily: '"Poppins", Sans-serif', color: '#101010',fontSize: '20px',
    fontWeight: '700',
    lineHeight: '1.4em.',transition: 'transform 0.5s ease', // Smooth transition for transform
    '&:hover': {
      transform: 'translateY(-50px)',
       // Move upwards by 50px on hover
    },margin: '20px 0px 20px 0px' }}>
          <h3>{primaryText}</h3>
        </Typography>
        <ul>
            <li>
            <Typography variant="body2" color="text.secondary"  sx={{ fontFamily: '"Poppins", Sans-serif',transition: 'transform 0.5s ease', // Smooth transition for transform
          '&:hover': {
            transform: 'translateY(-50px)', // Move upwards by 50px on hover
          }}}>
          {details}
          </Typography>
          </li>
          <li>
          <Typography variant="body2" color="text.secondary"  sx={{ fontFamily: '"Poppins", Sans-serif',transition: 'transform 0.5s ease', // Smooth transition for transform
          '&:hover': {
            transform: 'translateY(-50px)', // Move upwards by 50px on hover
          }}}>
          {technologiesUsed}
          </Typography>
          </li>        
        </ul>
        
          
       
    </CustomCard>
    );
}
const Projects = () => {
    
    return (<div id="#projects" style={{ marginBottom: '30px'}}>
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
                WEBSITE/APPLICATION CREATION AND SUPPORT 
              </Typography>
            <Grid container spacing={0} sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', margin:'3% 0%'}}>
                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CustomCardComponent
                backgroundColor="rgba(0, 0, 0, 0.1)"
        svgSrc={send} // Replace with the actual path to your SVG image
        primaryText="Batch File Processing"
        details="BFP is used to get updated data from customers, the data is received daily in form of csv files, this csv files are verified and processsed hereafter data of the customer is feed in PostgreSQL."
        technologiesUsed="Technologies used: Linux, Shell, Python. Tools used : Docker, Kubernetes Jobs, Argo CD, Jenkins"
      />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CustomCardComponent
                backgroundColor="white"
        svgSrc={cloud} // Replace with the actual path to your SVG image
        primaryText="Migration of services from Ec2 to Kubernetes"
        details="Contribution in the migration of microservices architecture from legendary Ec2 to Kubernetes leading to  Cost Optimization."
        technologiesUsed="Technologies & tools used: Docker, Kubernetes, Argo CD, Jenkins."
      />

                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CustomCardComponent
                backgroundColor="rgba(0, 0, 0, 0.1)"
        svgSrc={report} // Replace with the actual path to your SVG image
        primaryText="Toolkit- A powershell Application"
        details="The Toolkit is a standalone application designed to automate certain activities performed by technicians or service representatives on end-user remote desktops."
        technologiesUsed="Technologies used: Powershell, Apple Scripts, Python."
      />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CustomCardComponent
                backgroundColor="white"
        svgSrc={rocket} // Replace with the actual path to your SVG image
        primaryText="Zendesk Integrated Application "
        details="The app is integrated with Zendesk using ZAFClient. Agents mainly use the app to perform customer related actions like create customers, view customer details, view customer's subscriptions, add subscriptions etc."
        technologiesUsed="Technologies used: React Js,Java, Spring Boot, Spring Security, PostgreSQL"
      />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CustomCardComponent
                backgroundColor="rgba(0, 0, 0, 0.1)"
        svgSrc={image} // Replace with the actual path to your SVG image
        primaryText="Railway Reservation System"
        details="In this application multiple users are able to signup , login, book tickets for a train depending on the route. Seat allocation is dynamic and cancelling ticket is  easy."
        technologiesUsed="Technologies used: Java, Spring-Boot, Spring Security, React JS ,My-SQL."
      />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <CustomCardComponent
                backgroundColor="white"
        svgSrc={uxdesign} // Replace with the actual path to your SVG image
        primaryText="Professional Portfolio"
        details="A necessary project for gaining and sharing knowledge, thereby helping others to grow in the tech industry through community engagement."
        technologiesUsed="Technologies used: React Js. , Material UI, Used Email.js for sending emails."
      />
                </Grid>
            </Grid>
        </Container>
    </div>);
};

export default Projects;