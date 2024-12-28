import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Grid from '@mui/material/Grid2'; // Importing Grid2 component

export default function CaseStudies() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  return (
    <div id="caseStudies">
    <Container >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "30px",
          alignItems: "center",
        }}
      >
        <div>
          <Typography
            gutterBottom
            component="div"
            variant="h4"
            sx={{ width: "213px", height: "40px" }}
          >
            Case Studies
          </Typography>
        </div>
        <div>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            Tilte of the case study
          </Typography>
        </div>
      </div>
      
      <Card
        id="fintech"
        sx={{boxShadow: "none" }}

      >
        <Grid container spacing={2}>
        <Grid size={{xs:6, md:4}} sx={{display:'flex',alignItems:"center", justifyContent:'center'}}>
          <CardMedia
            component="img"
            image={require(`../ustils/Maskgroup.png`)}
            alt="green iguana"
            
          />
          </Grid>
          <Grid size={{xs:6, md: 8}} sx={{display:'flex',alignItems:"center", justifyContent:'center'}}>

          <CardContent sx={{ margin: "25px" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                backgroundColor: "#FFF6E9;",
                width: "72px",
                height: "24px",
                color: "#FFA217",
              }}
            >
              Fintech
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          </Grid>
        </Grid>
        <CardActions sx={{ margin: "25px" }}>
          <Button
            sx={{
              backgroundColor: "#FFA217",
              color: "white",
              "&:hover": {
                backgroundColor: "#ed920a",
              },
            }}
            variant="contained"
            onClick={handleClickOpen}
          >
            View Case Study
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title-fintech"
            open={open}
          >
            <DialogTitle
              sx={{ m: 0, p: 2, backgroundColor: "#ed920a", color: "#FFA217" }}
              id="customized-dialog-title-fintech"
            >
              Fintech
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={(theme) => ({
                position: "absolute",
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
              })}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent sx={{ backgroundColor: "#ed920a" }}>
              <Typography gutterBottom>
                FINTEECHHHHH purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography gutterBottom>
              FINTEECHHHHH, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
              <Typography gutterBottom>
              FINTEECHHHHH FINTEECHHHHH FINTEECHHHHH FINTEECHHHHH. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
          </BootstrapDialog>
        </CardActions>
      </Card>

      <Card
        id="edtech"
        sx={{boxShadow: "none" }}
      >
        <Grid container spacing={2}>
        <Grid size={{xs:6, md:8}} sx={{display:'flex',alignItems:"center", justifyContent:'center'}}>
          <CardContent sx={{ margin: "25px" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                backgroundColor: "#D0E6FF;",
                width: "72px",
                height: "24px",
                color: "#000AFF",
                borderRadius: "10px",
              }}
            >
              Edtech
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </Typography>
          </CardContent>
          </Grid>
          <Grid size={{xs:6, md:4}} sx={{display:'flex',alignItems:"center", justifyContent:'center'}}>
          <CardMedia
            component="img"
            image={require(`../ustils/image1.png`)}
            alt="green iguana"
          />
          </Grid>
        </Grid>
        <CardActions sx={{ margin: "25px" }}>
          <Button
            sx={{
              backgroundColor: "#000AFF",
              color: "white",
              "&:hover": {
                backgroundColor: "#ed920a",
              },
            }}
            variant="contained"
            onClick={handleClickOpen}
          >
            View Case Study
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title-2"
            open={open}
          >
            <DialogTitle
              sx={{ m: 0, p: 2, backgroundColor: "#dbe7f4", color: "#000AFF" }}
              id="customized-dialog-title-2"
            >
              http://localhost:3000/
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={(theme) => ({
                position: "absolute",
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
              })}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent sx={{ backgroundColor: "#dbe7f4" }}>
              <Typography gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
          </BootstrapDialog>
        </CardActions>
      </Card>
    </Container>
    </div>
  );
}
