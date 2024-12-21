import React from 'react';
import { Box, Typography, Paper, styled } from '@mui/material';
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
    padding: '10px',
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: '10px',
});

export default function AboutMe() {
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
                <Typography variant="body1" gutterBottom sx={{ color: "white" , padding:'10px 25px 10px 25px'}}>
                    Senior Cloud DevOps Engineer with over 5 years of experience. Specializes in designing and implementing scalable cloud infrastructure, automating deployment pipelines, and optimizing system performance. Skilled in various DevOps tools and technologies, knowledgeable in Cloud infrastructure, and well-versed in Continuous Integration/Deployment and Infrastructure Management. Passionate about sharing knowledge and helping others grow in the tech industry through mentoring and community engagement.
                </Typography>
            </div>
            <Grid container spacing={2}>
                <Grid size={{ xs: 4 }} >
                    <StyledPaper>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <RibbonIcon style={{ marginRight: '10px' }} />
                        <Typography variant="body1">5+ Projects</Typography>
                        </div>
                    </StyledPaper>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <StyledPaper>
                        <div style={{display:'flex', justifyContent:'center'}}>
                        <PersonIcon style={{ marginRight: '10px' }} />
                        <Typography variant="body1">20+ Career Guidance</Typography>
                        </div>
                    </StyledPaper>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <StyledPaper>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <MicIcon style={{ marginRight: '10px' }} />
                        <Typography variant="body1">15+ Talks</Typography>
                        </div>
                    </StyledPaper>
                </Grid>
            </Grid>
        </>

    );
};

