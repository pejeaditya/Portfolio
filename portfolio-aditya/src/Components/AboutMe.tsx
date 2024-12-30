import React from 'react';
import { Box, Typography, Paper, styled, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2'; // Importing Grid2 component
import RibbonIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import MicIcon from '@mui/icons-material/Mic';

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




export default function AboutMe() {
    const theme = useTheme();
    return (
        <>
            <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="div"
                    variant="h4" gutterBottom sx={{
                        color: "white", width: "213px",
                        height: "40px",
                        textAlign: "center",
                        paddingTop: "50px",
                    }}>
                    About Me
                </Typography >
                <Typography variant="body1" gutterBottom fontSize='18px' sx={{ color: "white", padding: '2px 5%', textAlign:'center'}}>
                   As a versatile Software Development Engineer, I have successfully delivered impactful projects across diverse platforms, including Windows and Mac. My expertise spans Powershell applications development, web development, service optimization, and seamless integrations, driving enhanced performance and robust solutions. With a proven track record in backend design, frontend development, and cloud migration, I thrive on solving complex problems and fostering strong team collaborations.
                </Typography>
            </div>
            <Grid container spacing={2}>
                <Grid size={{ xs: 4 }} >
                    <StyledPaper sx={{
                        backgroundColor:"#2ba837",
                        [theme.breakpoints.down('sm')]: {
                            height: "140px",
                            
                        },
                        [theme.breakpoints.between('sm', 'md')]: {
                            height: "140px",
                        }
                    }}>
                        <div >
                            <RibbonIcon style={{ 
                                color:'white',[theme.breakpoints.down('sm')]: {
                                
                                    fontSize: '1.00rem',
                                },
                                [theme.breakpoints.between('sm', 'md')]: {
                                    fontSize: '1.5rem',
                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize: '1.0rem',
                                }}} />
                            <Typography sx={{
                                color:'white',
                                margin: '10px',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '1.00rem',
                                },
                                [theme.breakpoints.between('sm', 'md')]: {
                                    fontSize: '1.5rem',
                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize: '1.0rem',
                                },
                            }} variant="body1">5+ Projects</Typography>
                        </div>
                    </StyledPaper>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <StyledPaper sx={{
                        backgroundColor:"#747474",
                        [theme.breakpoints.down('sm')]: {
                            height: "140px",
                        },
                        [theme.breakpoints.between('sm', 'md')]: {
                            height: "140px",
                        }
                    }}>
                        <div >
                            <PersonIcon style={{
                                color:'white',
                                 [theme.breakpoints.down('sm')]: {
                                    fontSize: '1.00rem',
                                },
                                [theme.breakpoints.between('sm', 'md')]: {
                                    fontSize: '1.5rem',
                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize: '1.0rem',
                                }}} />
                            <Typography sx={{
                                color:'white',
                                margin: '10px',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '1.00rem',
                                },
                                [theme.breakpoints.between('sm', 'md')]: {
                                    fontSize: '1.5rem',
                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize: '1.0rem',
                                },
                            }} variant="body1">20+ Career Guidance</Typography>
                        </div>
                    </StyledPaper>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <StyledPaper sx={{
                        backgroundColor:"#747474",
                        [theme.breakpoints.down('sm')]: {
                            height: "140px",
                        },
                        [theme.breakpoints.between('sm', 'md')]: {
                            height: "140px",
                        }
                    }}>
                        <div>
                            <MicIcon style={{color:'white', [theme.breakpoints.down('sm')]: {
                                    fontSize: '1.00rem',
                                },
                                [theme.breakpoints.between('sm', 'md')]: {
                                    fontSize: '1.5rem',
                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize: '1.0rem',
                                } }} />
                            <Typography sx={{
                                color:'white',
                                margin: '10px',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '1.00rem',
                                },
                                [theme.breakpoints.between('sm', 'md')]: {
                                    fontSize: '1.5rem',
                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize: '1.0rem',
                                },
                            }} variant="body1">15+ Talks</Typography>
                        </div>
                    </StyledPaper>
                </Grid>
            </Grid>
        </>

    );
};

