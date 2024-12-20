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

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  // sx={{marginBottom:'20px'}}
  return (
    <div style={{ backgroundColor: "black" , padding:'30px 0px 30px 0px', alignContent:'center'}}>
        
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
            backgroundColor: "green",
            width: "30%",
            color: "white",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
          variant="contained"
          onClick={() => setEducationDetails(false)}
        >
          Career Details
        </Button>

        <Button
          sx={{
            margin: "25px",
            backgroundColor: "green",
            width: "30%",
            color: "white",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
          variant="contained"
          onClick={() => setEducationDetails(true)}
        >
          Educational Details
        </Button>
      </Container>

      {educationDetails ? (
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
      ) : (
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
