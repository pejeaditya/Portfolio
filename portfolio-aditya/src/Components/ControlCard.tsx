import * as React from "react";
import { useTheme } from "@mui/material/styles";
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

export default function ControlCard() {
  const theme = useTheme();

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Container sx={{backgroundColor:"black", padding:'40px'}}>
      <Card sx={{ display: "flex", maxHeight: "xl", backgroundColor:"black"}}>
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
            }}
          >
            <CardContent
              sx={{ flex: "1 0 auto", maxHeight: "200px", paddingTop: "40px" }}
            >
              <Typography
                gutterBottom
                sx={{ color: "white", fontSize: 14 }}
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div"  sx={{ color: "white"}}>
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography sx={{ color: "white", mb: 1.5 }}>
                adjective
              </Typography>
              <Typography variant="body2"  sx={{ color: "white", mb: 1.5 }}>
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>

            <CardActions>
            <Button sx={{ 
        backgroundColor: 'green', 
        color: 'white', 
        '&:hover': {
          backgroundColor: 'darkgreen',
        }
      }} variant="contained">Get to know more</Button>
            </CardActions>
          </Container>
        <CardMedia
          component="img"
          sx={{
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          image={require(`../ustils/tppp.jpeg`)}
          alt="tpp"
        />
      </Card>
     <AboutMe />
    </Container>
  );
}
// ./utils/tppp.jpeg"
