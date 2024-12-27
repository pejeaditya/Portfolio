import React from 'react';
import { Box, Typography, Paper, styled, Container,useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2'; // Importing Grid2 component
// Replace with actual icons as needed
import AwsIcon from '@mui/icons-material/Cloud'; 
import AzureIcon from '@mui/icons-material/Cloud'; 
import GoogleCloudIcon from '@mui/icons-material/Cloud'; 
import OciIcon from '@mui/icons-material/Cloud'; 

const RootBox = styled(Box)({
  padding: '20px',
  backgroundColor: '#f0f4ff',
  borderRadius: '10px',
  minHeight:'150px',
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  '&:hover': {
    transform: "scale(1.05)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
  },

});

const StyledPaper = styled(Paper)({
  padding: '10px',
  textAlign: 'center',
  minHeight: '60px',
  color: '#000',
  backgroundColor: '#fff',
  borderRadius: '10px',
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  '&:hover': {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
                  },
});

interface CategoryCardProps {
  title: string;
  items: { icon: React.ElementType, label: string }[];
}


const CategoryCard: React.FC<CategoryCardProps> = ({ title, items }) => {
  const theme = useTheme();
  return (
  
  <RootBox sx={{justifyContent:'center',alignItems:'center',[theme.breakpoints.between('xs', 'md')]: {
   padding:'10px',
    minHeight:'250px',
  },[theme.breakpoints.up('md')]: {
   minHeight:'250px'
  },
 
  }}>
    <Typography 
    sx={{
      margin:'10px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.00rem',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
      textAlign:'center'
    }}
   >
      {title}
    </Typography>
    <div >
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid size={{xs:6 }}>
          <StyledPaper >
          <item.icon 
                style={{ 
                  fontSize: 'inherit' 
                }} 
                sx={{
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                  [theme.breakpoints.between('sm', 'md')]: {
                    fontSize: '1.25rem',
                  },
                  [theme.breakpoints.up('md')]: {
                    fontSize: '1.5rem',
                  },
                }}
              /><Typography 
              variant="body2"
              sx={{
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.75rem',
                },
                [theme.breakpoints.between('sm', 'md')]: {
                  fontSize: '1rem',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '1.25rem',
                },
                overflow:'hidden'
              }}
            >
            {item.label}
            </Typography>
          </StyledPaper>
        </Grid>
        
      ))}
    </Grid>
    </div>
  </RootBox>
  )
};

export  default function TechnologiesCard() {

    return(
      <Container id="technologies" sx={{paddingRight: '30px', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography
        gutterBottom
        component="div"
        variant="h4"
        sx={{
          width: "213px",
          height: "40px",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        Technologies
      </Typography>
      <div>
          <Typography
            variant="body2"
            component="div"
          >
            Tilte of the  Get In Touch
          </Typography>
        </div>
        <div>
      <Grid container spacing={{xs:2 , lg: 4}}>
      <Grid size={{xs: 6,lg: 4}} >
    <CategoryCard
      title="Cloud Platforms"
      items={[
        { icon: AwsIcon, label: 'AWS' },
        { icon: AzureIcon, label: 'Azure' },
        { icon: GoogleCloudIcon, label: 'Google Cloud' },
        { icon: OciIcon, label: 'OCI' }
      ]}
    />
    </Grid>
    <Grid size={{xs: 6,lg: 4}} >
    <CategoryCard
      title="CI/CD Tools"
      items={[
        { icon: AwsIcon, label: 'Jenkins' },
        { icon: GoogleCloudIcon, label: 'ArgoCD' }
      ]}
    />
    </Grid>
    <Grid size={{xs: 6,lg: 4}}>
    <CategoryCard
      title="Containerization"
      items={[
        { icon: AwsIcon, label: 'Kubernetes' },
        { icon: AzureIcon, label: 'Docker' }
      ]}
    />
    </Grid>
    <Grid size={{xs: 6,lg: 4}}>
    <CategoryCard
      title="Infrastructure as Code"
      items={[
        { icon: AwsIcon, label: 'Terraform' },
        { icon: AzureIcon, label: 'Ansible' }
      ]}
    />
    </Grid>
    <Grid size={{xs: 6,lg: 4}}>
    <CategoryCard
      title="Other Tools"
      items={[
        { icon: AwsIcon, label: 'Git' },
        { icon: AzureIcon, label: 'Datadog' },
        { icon: GoogleCloudIcon, label: 'Linux' }
      ]}
    />
    </Grid>
    <Grid size={{xs: 6,lg: 4}}>
    <CategoryCard
      title="Languages"
      items={[
        { icon: AwsIcon, label: 'Java' },
        { icon: AzureIcon, label: 'React js' },
        { icon: AzureIcon, label: 'Python' },
        { icon: AzureIcon, label: 'Powershell' }
      ]}
    />
    </Grid>
    </Grid>
    </div>
  </Container>
);
}

