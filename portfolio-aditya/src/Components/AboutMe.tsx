import React from 'react';
import { Box, Typography, Paper, styled, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2'; // Importing Grid2 component
import RibbonIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import MicIcon from '@mui/icons-material/Mic';

const RootBox = styled(Box)({
    padding: '20px',
    backgroundColor: '#f0f4ff',
    borderRadius: '10px',
});

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
      transform: "scale(1.25)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
    },
});




export default function AboutMe() {
    const theme = useTheme();
    return (
        <>
            <div id="aboutMe" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="div"
                    variant="h4" gutterBottom sx={{
                        color: "white", width: "213px",
                        height: "40px",
                        textAlign: "center",
                        paddingTop: "50px",
                    }}>
                    About Me
                </Typography >
                <Typography variant="body1" gutterBottom sx={{ color: "white", padding: '10px 25px 10px 25px' }}>
                    Senior Cloud DevOps Engineer with over 5 years of experience. Specializes in designing and implementing scalable cloud infrastructure, automating deployment pipelines, and optimizing system performance. Skilled in various DevOps tools and technologies, knowledgeable in Cloud infrastructure, and well-versed in Continuous Integration/Deployment and Infrastructure Management. Passionate about sharing knowledge and helping others grow in the tech industry through mentoring and community engagement.
                </Typography>
            </div>
            <Grid container spacing={2}>
                <Grid size={{ xs: 4 }} >
                    <StyledPaper sx={{
                        [theme.breakpoints.down('sm')]: {
                            height: "140px",
                            
                        },
                        [theme.breakpoints.between('sm', 'md')]: {
                            height: "140px",
                        }
                    }}>
                        <div >
                            <RibbonIcon style={{ [theme.breakpoints.down('sm')]: {
                                    fontSize: '1.00rem',
                                },
                                [theme.breakpoints.between('sm', 'md')]: {
                                    fontSize: '1.5rem',
                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize: '1.0rem',
                                }}} />
                            <Typography sx={{
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
                        [theme.breakpoints.down('sm')]: {
                            height: "140px",
                        },
                        [theme.breakpoints.between('sm', 'md')]: {
                            height: "140px",
                        }
                    }}>
                        <div >
                            <PersonIcon style={{ [theme.breakpoints.down('sm')]: {
                                    fontSize: '1.00rem',
                                },
                                [theme.breakpoints.between('sm', 'md')]: {
                                    fontSize: '1.5rem',
                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize: '1.0rem',
                                }}} />
                            <Typography sx={{
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
                        [theme.breakpoints.down('sm')]: {
                            height: "140px",
                        },
                        [theme.breakpoints.between('sm', 'md')]: {
                            height: "140px",
                        }
                    }}>
                        <div>
                            <MicIcon style={{ [theme.breakpoints.down('sm')]: {
                                    fontSize: '1.00rem',
                                },
                                [theme.breakpoints.between('sm', 'md')]: {
                                    fontSize: '1.5rem',
                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize: '1.0rem',
                                } }} />
                            <Typography sx={{
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

