import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function CareerHighlights() {
  const [educationDetails, setEducationDetails] = useState(false);
  const [careerHighlights, setCareerHighlights] = useState({
    careerDetails: true,
    educationDetails: false,
    researchDetails: false
  })
  const [buttonColor, setButtonColor] = useState({
    careerDetails: 'green',
    educationDetails: '#5A5A5A',
    researchDetails: '#5A5A5A',
  });

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const handleButton = (buttonKey: string) => {
    console.log("i button",buttonKey)
    setButtonColor({
      careerDetails: '#5A5A5A',
      educationDetails: '#5A5A5A',
      researchDetails: '#5A5A5A',
      [buttonKey]: 'green', // Change to the desired color when the text is displayed
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
  // sx={{marginBottom:'20px'}}
  return (
    <div id="careerHighlights" style={{ backgroundColor: "black" , padding:'30px 0px 30px 0px', alignContent:'center'}}>
        
        <div style={{display:"flex",flexDirection:'column', alignItems:'center',}}>
      <Typography
        gutterBottom
        component="div"
        variant="h4"
        sx={{
          width: '100%',
          height: "40px",
          color: "white",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        Carrer Highlights
      </Typography>
      <div>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: "white" }}
          >
            Carrer Highlights
          </Typography>
        </div>
        </div>

      <Container
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Button
          sx={{
            margin: "25px",
            backgroundColor: buttonColor.careerDetails,
            width: "30%",
            color: "white",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
          variant="contained"
          onClick={() =>{ handleButton('careerDetails'); setEducationDetails(false);}}
        >
          Career Details
        </Button>

        <Button
          sx={{
            margin: "25px",
            backgroundColor: buttonColor.educationDetails,
            width: "30%",
            color: "white",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
          variant="contained"
          onClick={() => { handleButton('educationDetails'); setEducationDetails(true);}}
        >
          Educational Details
        </Button>

        <Button
          sx={{
            margin: "25px",
            backgroundColor: buttonColor.researchDetails,
            width: "30%",
            color: "white",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
          variant="contained"
          onClick={() => { handleButton('researchDetails'); setEducationDetails(true);}}
        >
          Research Details
        </Button>
      </Container>

      {(!careerHighlights.careerDetails && !careerHighlights.researchDetails) ? (
        <div>
          <Container>
            <div
              style={{
                border: "solid",
                borderLeftColor: "green",
                margin: "20px",
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  marginBottom: "15px",
                  borderStyle: "solid",
                  backgroundColor: "black",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ color: "white", fontSize: 14 }}
                  >
                    Education Details
                  </Typography>
                  <Typography variant="h5" component="div" color="white">
                    be{bull}nev{bull}o{bull}lent
                  </Typography>
                  <Typography sx={{ color: "white", mb: 1.5 }}>
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button sx={{ color: "green" }} size="small">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </div>

            <div
              style={{
                border: "solid",
                borderLeftColor: "green",
                margin: "20px",
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  marginBottom: "15px",
                  borderStyle: "solid",
                  backgroundColor: "black",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ color: "white", fontSize: 14 }}
                  >
                    Education Details
                  </Typography>
                  <Typography variant="h5" component="div" color="white">
                    be{bull}nev{bull}o{bull}lent
                  </Typography>
                  <Typography sx={{ color: "white", mb: 1.5 }}>
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button sx={{ color: "green" }} size="small">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Container>
        </div>
      ) : (!careerHighlights.careerDetails && !careerHighlights.educationDetails) ? (
        <div>
          <Container>
            <Card
              variant="outlined"
              sx={{
                marginBottom: "15px",
                borderLeftStyle: "solid",
                borderLeftColor: "green",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  Research Details
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ color: "green" }} size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>

            <Card
              variant="outlined"
              sx={{
                marginBottom: "15px",
                borderLeftStyle: "solid",
                borderLeftColor: "green",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  Reseaercch Details
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ color: "green" }} size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Container>
        </div>
      ): (
        <div>
          <Container>
            <Card
              variant="outlined"
              sx={{
                marginBottom: "15px",
                borderLeftStyle: "solid",
                borderLeftColor: "green",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  Career Details
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ color: "green" }} size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>

            <Card
              variant="outlined"
              sx={{
                marginBottom: "15px",
                borderLeftStyle: "solid",
                borderLeftColor: "green",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  Career Details
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ color: "green" }} size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Container>
        </div>
      )}
    </div>
  );
}
