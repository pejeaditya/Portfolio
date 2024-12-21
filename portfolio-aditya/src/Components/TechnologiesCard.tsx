import React from 'react';
import { Box, Typography, Paper, styled, Container } from '@mui/material';
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
  minHeight:'150px'
});

const StyledPaper = styled(Paper)({
  padding: '10px',
  textAlign: 'center',
  color: '#000',
  backgroundColor: '#fff',
  borderRadius: '10px',
});

interface CategoryCardProps {
  title: string;
  items: { icon: React.ElementType, label: string }[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, items }) => (
  <RootBox>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid size={{xs:6 }}>
          <StyledPaper>
            <item.icon style={{ marginRight: '10px' }} />
            {item.label}
          </StyledPaper>
        </Grid>
      ))}
    </Grid>
  </RootBox>
);

export  default function TechnologiesCard() {
    return(
      <Container id="technologies" sx={{padding: '30px', display:'flex', flexDirection:'column', alignItems:'center'}}>
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
        <div style={{padding:'40px'}}>
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
        { icon: AzureIcon, label: 'React js' }
      ]}
    />
    </Grid>
    </Grid>
    </div>
  </Container>
);
}

