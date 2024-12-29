import React from 'react';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px 0',
      }}
    >
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h6">Aditya Peje</Typography>
          <Typography gutterBottom sx={{ color: "white", fontSize: 14 }}>Software Development Engineer</Typography>
        </Box>
        <Box>
          <IconButton
            component="a"
            href="https://github.com/pejeaditya"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/aditya-peje-8729b3188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/your-instagram-profile"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Container>
      
      <Container maxWidth="xl" sx={{ textAlign: 'center' }}>
      <Divider sx={{ backgroundColor: 'white', margin: '30px 0' }} />
        <Typography variant="body2">
          © 2024 Aditya Peje. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;