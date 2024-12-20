import { Button, Container, Typography } from "@mui/material";
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
    <div style={{backgroundColor: "black",display:"flex",flexDirection:'column', alignItems:'center'}}>
      <Typography
        gutterBottom
        component="div"
        variant="h4"
        sx={{
          width: "213px",
          height: "40px",
          color: "white",
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
            sx={{ color: "white" }}
          >
            Tilte of the  Get In Touch
          </Typography>
        </div>

      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TextField
          sx={{
            backgroundColor: "white",
            width: "50%",
            marginTop: "50px",
            borderRadius: "10px",
          }}
          typeof="number"
          id="demo-helper-text-aligned-no-helper"
          label="Name"
        />
        <>
        <MuiTelInput
          style={{
            backgroundColor: "white",
            width: "50%",
            marginTop: "50px",
            borderRadius: "10px",
          }}
          value={value}
          onChange={handleChange}
        />
        {error && <InputValidationError >**Invalid Number</InputValidationError>}
        </>
        <br />
        <TextField
          sx={{
            backgroundColor: "white",
            width: "50%",
            marginTop: "50px",
            borderRadius: "10px",
          }}
          id="demo-helper-text-aligned-no-helper"
          label="Message"
        />
        <br />

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
        >
          Submit
        </Button>
      </Container>
    </div>
  );
}
