import { Button, Card, CardContent, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { alignProperty } from "@mui/material/styles/cssUtils";
import styled from "styled-components";

export default function ContactUs() {
  const [value, setValue] = React.useState("");
  const [error, setError] = useState(true);

  const filterPhoneNumber = (phoneNumber: string) => {
    // Remove the part from + to the next space
    const filteredPhoneNumber = phoneNumber.replace(/\+\S+\s/, "");
    const filtered = filteredPhoneNumber.replace(/[^\d]/g, "");
    return filtered;
  };

  const handleChange = (newValue: any) => {
    matchIsValidTel(newValue, {
      onlyCountries: ["IN"],
      excludedCountries: [],
      continents: [],
    });

    setError(true);
    setValue(newValue);
    const phoneValue = filterPhoneNumber(newValue);
    console.log(phoneValue);
    if (phoneValue.length === 10) {
      setError(false);
    }
    console.log(phoneValue);
    console.log(error);
  };
  const InputValidationError = styled.span`
  margin-top: 10px;
  color: #c21f39 !important;
  font-family: AvenirNextLTPro-Regular;
  font-size: 14px;
`;
  return (
    <div id="contactUs" style={{ display:"flex", flexDirection:'column',alignItems:'center', backgroundColor:'black'}} >
      <Card sx={{minWidth:350 ,margin:'10px auto', backgroundColor:'black',display:"flex", flexDirection:'column',alignItems:'center'}}>
      <Typography
        gutterBottom
        component="div"
        variant="h4"
        color="white"
        sx={{
          width: "213px",
          height: "40px",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        Get In Touch
      </Typography>
      <div>
          <Typography
            variant="body2"
            component="div"
            color="white"
          >
            Tilte of the  Get In Touch
          </Typography>
        </div>
        <div>
        <CardContent sx={{width:'90%'}}>

     
        <form>
          <Grid  spacing={1}>
            <Grid size={{xs:12 , sm:6}}>
        <TextField
          sx={{
            backgroundColor: "white",
            marginTop: "10px",
            borderRadius: "10px",
          }}
          typeof="number"
          fullWidth
          id="demo-helper-text-aligned-no-helper"
          label="First Name"
          placeholder="Enter first name"
          required
        />
        </Grid>
        <Grid size={{xs:12 , sm:6}}>
        <TextField
          sx={{
            backgroundColor: "white",
            marginTop: "50px",
            borderRadius: "10px",
          }}
          typeof="number"
          fullWidth
          id="demo-helper-text-aligned-no-helper"
          label="Last Name"
          placeholder="Enter last name"
          required
        />
        </Grid>
        <Grid size={{xs:12 , sm:6}}>
        <TextField
          sx={{
            backgroundColor: "white",
            marginTop: "50px",
            borderRadius: "10px",
          }}
          type="email"
          fullWidth
          id="demo-helper-text-aligned-no-helper"
          label="Email"
          required
        />
        </Grid>
        <Grid size={{xs:12 , sm:6}}>
        <MuiTelInput
          style={{
            backgroundColor: "white",
            marginTop: "50px",
            borderRadius: "10px",
          }}
          value={value}
          fullWidth
          onChange={handleChange}
        />
        {error && <InputValidationError >**Invalid Number</InputValidationError>}
        </Grid>
        <br />
        <Grid >
        <TextField
          sx={{
            backgroundColor: "white",
            marginTop: "50px",
            borderRadius: "10px",
          }}
          multiline rows={5}
          id="demo-helper-text-aligned-no-helper"
          label="Message"
          fullWidth
          required
        />
        </Grid>
        <br />

        <Button
          sx={{
            backgroundColor: "green", 
            color: "white", 
            "&:hover": {
              backgroundColor: "darkgreen", 
            },
          }}
          type="submit"
          variant="contained"
          fullWidth
        >
          Submit
        </Button>
        </Grid>
        </form>
        </CardContent>
      </div>
      </Card>
    </div>
  );
}
