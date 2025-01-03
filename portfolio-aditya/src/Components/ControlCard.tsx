import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AboutMe from "./AboutMe";
import videoBg from "../assets/greenColorPowder.mp4"
export default function ControlCard() {
  const theme = useTheme();



  const CustomButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    color: 'white',
    width: '250px',
    height: '80px',
    fontSize: '16px',
    fontFamily: 'sans-serif ',
    border: 'solid green',
    transition: 'color 0.5s ease', // Transition for text color
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#2ba837', // The color you want to fill with
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 0.5s ease',
      zIndex: -1,
    },
    '&:hover::before': {
      transform: 'scaleX(1)',
    },
    '& .MuiButton-label': {
      position: 'relative',
      zIndex: 1,
      color: 'white', // Ensure text color remains white
    },
  }));
  
  const scrollToSection = (id: string) => {
    console.log('strig:',id);
    const element = document.getElementById(id);
    if (element) {
      console.log("in if");
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div id="#aboutMe" style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.0)", padding: '10px', position: 'relative', zIndex: 1, margin:'5%',marginTop:'15%'}}>
        <div style={{ display: "flex",flexDirection:'column', maxHeight: "xl", backgroundColor: "rgba(0, 0, 0, 0.0)" , padding: '70px 0px',[theme.breakpoints.down('md')]: {
                    paddingTop:'90px'
                  }}}>
                    <Typography
                sx={{ color: "#2ba837", fontSize: 43, fontWeight: 800 , fontFamily: '"Poppins", Sans-serif',marginBottom: '0px',lineHeight: 1.1,
                  [theme.breakpoints.down('sm')]: {
                    fontSize: 25,
                  }
                 }}
              >
                Hi, I'm
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: "white", fontSize: 78, fontWeight: 800 , fontFamily: '"Poppins", Sans-serif',marginTop: '0px',lineHeight: 1.2,
                  [theme.breakpoints.down('sm')]: {
                    fontSize: 45,
                  }
                 }}
              >
                Aditya Peje.
              </Typography>
              
              <CustomButton variant="contained" onClick={()=>scrollToSection("#contactUs")}>
        CONTACT ME
      </CustomButton>
        </div>
        <AboutMe />
      </div>
    </div>
  );;
}
// ./utils/tppp.jpeg"
