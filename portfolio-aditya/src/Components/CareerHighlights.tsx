import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

import { useState } from "react";
import { transform } from "typescript";
import Grid from '@mui/material/Grid2';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ScienceIcon from '@mui/icons-material/Science';

export default function CareerHighlights() {
  const [educationDetails, setEducationDetails] = useState(false);
  const [careerHighlights, setCareerHighlights] = useState({
    careerDetails: true,
    educationDetails: false,
    researchDetails: false
  })
  const theme = useTheme();
  const [buttonColor, setButtonColor] = useState({
    careerDetails: '#2ba837',
    educationDetails: '#5A5A5A',
    researchDetails: '#5A5A5A',
  });

  const CustomCard = styled(Card)`
    margin-bottom: 15px;
    border-radius: 10px;
    background-color:#1D1D1D;
    transition: transform 0.3s ease;
     box-shadow 0.3s ease;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      background-color: #2ba837; 
      .MuiTypography-root {
        color: white; /
          transform: translateY(-50px) ;
      }
    },
     
      
    
  `;


  const CustomTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontFamily: '"Poppins", Sans-serif',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '1.2rem',
      
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    },
    transition: 'transform 0.5s ease', // Smooth transition for transform
    '&:hover': {
      transform: 'translateX(20px)'}
  }));
  const CustomButtonTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontFamily: '"Poppins", Sans-serif',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      flexDirection: 'column',
      alignItems: 'center',

    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '1.2rem',
      
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    },
  }));


  const handleButton = (buttonKey: string) => {
    console.log("i button", buttonKey)
    setButtonColor({
      careerDetails: '#5A5A5A',
      educationDetails: '#5A5A5A',
      researchDetails: '#5A5A5A',
      [buttonKey]: '#2ba837', // Change to the desired color when the text is displayed
    });
    setCareerHighlights({
      careerDetails: false,
      educationDetails: false,
      researchDetails: false,
      [buttonKey]: true,
    })
    console.log(buttonColor);
    console.log(careerHighlights);
  }

  const StyledPaper = styled(Paper)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '10px',
    textAlign: 'center',
    minHeight: '60px',
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: '10px',
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    '&:hover': {
      transform: "scale(1.05)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
      backgroundColor: '#2ba837',
    },
});

  interface CustomCardProps {
    title: string;
    subtitle: string;
    description: string;
    details: string[];
    buttonText: string;
  }
  const CustomCardComponent: React.FC<CustomCardProps> = ({ title, subtitle, description, details, buttonText }) => {
    return (
      <div style={{ margin: "20px 5px" }}>
        <CustomCard variant="outlined">
          <CardContent sx={{margin:'10px'}}>
            <Typography variant="h5" component="div" color="white"> 
              {title}
            </Typography>
            <Typography gutterBottom sx={{ color: "white", fontSize: 14 }}>
              {subtitle}
            </Typography>
            <Typography sx={{ color: "white", mb: 1.5 }}>
              {description}
            </Typography>
            
            <ul style={{padding: 16,  color:'white'}}> 
              {details.map((detail, index) => (
                <li key={index} style={{ padding: 0, }}>
                  <CustomTypography variant="body2" color="white" >
                  <ListItemText primary={detail} sx={{ padding: 0 }} />
                  </CustomTypography>
                </li>
              ))}
            </ul>
            
          </CardContent>
        </CustomCard>
      </div>
    );
  };
  // sx={{marginBottom:'20px'}}
  return ( 
    <div style={{backgroundColor:'black'}}>
    <Container id="#careerHighlights" style={{ backgroundColor: "black",display:"flex", flexDirection:'column',padding: '70px 30px'}}>

      
      <Typography
                gutterBottom
                sx={{fontSize: 48, fontWeight: 700 , fontFamily: '"Poppins", Sans-serif', color: 'white'}}
              >
                Career Highlights.
              </Typography>

              <Typography
                sx={{fontSize: 17, fontWeight: 700 , fontFamily: '"Poppins", Sans-serif' ,lineHeight: '17px', color:'#2BA837', marginBottom:'30px'}}
              >
                A proven track record of delivering scalable cloud solutions and continuous learning in modern technologies
              </Typography>
   

      
        <Grid container spacing={4}>
        <Grid size={{ xs: 4 }} >
        <StyledPaper
          sx={{
            backgroundColor: buttonColor.careerDetails,
            
            
          }}
          onClick={() => { handleButton('careerDetails'); setEducationDetails(false); }}
        >
           <CustomButtonTypography>
            <WorkHistoryIcon />  
            <CustomButtonTypography variant="body1">Carrer Details</CustomButtonTypography>
            </CustomButtonTypography>
        </StyledPaper>
        </Grid>
        <Grid size={{ xs: 4 }} >

        <StyledPaper
          sx={{
            backgroundColor: buttonColor.educationDetails,
            
            
          }}
          onClick={() => { handleButton('educationDetails'); setEducationDetails(true); }}
        >
          
            
            <CustomButtonTypography>
            <SchoolIcon />  
            <CustomButtonTypography variant="body1">Educational Details</CustomButtonTypography>
            </CustomButtonTypography>
        </StyledPaper>
        </Grid>
        <Grid size={{ xs: 4 }} >
        <StyledPaper
          sx={{
            backgroundColor: buttonColor.researchDetails,
            
            
          }}
          onClick={() => { handleButton('researchDetails'); setEducationDetails(true); }}
        >
          <CustomButtonTypography>
            <ScienceIcon />  
            <CustomButtonTypography variant="body1">Research Details</CustomButtonTypography>
            </CustomButtonTypography>
        </StyledPaper>
        </Grid>
        </Grid>

      {(!careerHighlights.careerDetails && !careerHighlights.researchDetails) ? (
        <div>
          <Container>
            <CustomCardComponent
              title="Education Details"
              subtitle="be{bull}nev{bull}o{bull}lent"
              description="adjective"
              details={[
                "- Another first bullet point.",
                "- Another second bullet point.",
                "- Another third bullet point.",
                "- Another fourth bullet point."
              ]}
              buttonText="Learn More"
            />

            <CustomCardComponent
              title="Another Title"
              subtitle="Another Subtitle"
              description="Another Description"
              details={[
                "Another first bullet point.",
                "Another second bullet point.",
                "Another third bullet point.",
                "Another fourth bullet point."
              ]}
              buttonText="Read More"
            />
          </Container>
        </div>
      ) : (!careerHighlights.careerDetails && !careerHighlights.educationDetails) ? (
        <div>
          <Container>
            <CustomCardComponent
              title="Research Details"
              subtitle="Research Detail 1"
              description="Another Description"
              details={[
                "Another first bullet point.",
                "Another second bullet point.",
                "Another third bullet point.",
                "Another fourth bullet point."
              ]}
              buttonText="Read More"
            />

            <CustomCardComponent
              title="Research Details"
              subtitle="Research Detail 2"
              description="Another Description"
              details={[
                "Another first bullet point.",
                "Another second bullet point.",
                "Another third bullet point.",
                "Another fourth bullet point."
              ]}
              buttonText="Read More"
            />
          </Container>
        </div>
      ) : (
        <div>
          <Container>
            <CustomCardComponent
              title="Sowftware Development Engineer"
              subtitle="AppDirect"
              description="2021 - Present"
              details={[
                "Another first bullet point.",
                "Another second bullet point.",
                "Another third bullet point.",
                "Another fourth bullet point."
              ]}
              buttonText="Read More"
            />

            <CustomCardComponent
              title="Career  Details"
              subtitle="Career Detail 2"
              description="Another Description"
              details={[
                "Another first bullet point.",
                "Another second bullet point.",
                "Another third bullet point.",
                "Another fourth bullet point."
              ]}
              buttonText="Read More"
            />
          </Container>
        </div>
      )}
    </Container>
    </div>
  );
}
