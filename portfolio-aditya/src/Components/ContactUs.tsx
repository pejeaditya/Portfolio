import { Button, Card, CardContent, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useRef, useState } from "react";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { alignProperty } from "@mui/material/styles/cssUtils";
import styled from "styled-components";
import { inputLabelClasses } from "@mui/material/InputLabel";
import emailjs, { sendForm } from '@emailjs/browser';


export default function ContactUs() {
  const [value, setValue] = React.useState("");
  const [error, setError] = useState(true);
  const [formData, setFormData] = useState({
    from_first_name: '',
    from_last_name: '',
    phone_number: '',
    from_email:'',
    message: '',
  });

  const filterPhoneNumber = (phoneNumber: string) => {
    // Remove the part from + to the next space
    const filteredPhoneNumber = phoneNumber.replace(/\+\S+\s/, "");
    const filtered = filteredPhoneNumber.replace(/[^\d]/g, "");
    return filtered;
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (newValue: any) => {
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
    setFormData({ ...formData, phone_number: phoneValue });
    console.log(phoneValue);
    console.log(error);
  };

  

  const handleSubmit = (e:  any) => {
    e.preventDefault();
console.log("in submit", formData);
    emailjs.send('service_0q06xmr', 'template_of6jpq9', formData, 'agfr9XFUGhyjUYlwj')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email.');
      });
  };


  const InputValidationError = styled.span`
  margin-top: 10px;
  color: #c21f39 !important;
  font-family: AvenirNextLTPro-Regular;
  font-size: 1.0rem;
`;
  return (
    <div id="contactUs" style={{ display:"flex", flexDirection:'column',alignItems:'center', backgroundColor:'black',width:'100%'}} >
      <Card sx={{width:'100%', backgroundColor:'black',display:"flex", flexDirection:'column',alignItems:'center',  padding:"20px"}}>
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
        <CardContent sx={{width:'90%', minWidth:'365px'}}>

     
        <form onSubmit={handleSubmit}>
          <Grid  spacing={1}>
            <Grid size={{xs:12 , sm:6}}>
        <TextField
          sx={{
            backgroundColor: "white",
            marginTop: "10px",
            borderRadius: "10px",
          }}
          slotProps={{
            input: {
              sx: {
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'green',
                },
              },
            },
            inputLabel: {
              sx: {
                '&.Mui-focused': {
                  color: 'green',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                },
              },
            },
          }}
          name='from_first_name'
          value={formData.from_first_name}
          onChange={handleChange}

         variant="outlined"
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
          slotProps={{
            input: {
              sx: {
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'green',
                },
              },
            },
            inputLabel: {
              sx: {
                '&.Mui-focused': {
                  color: 'green',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                },
              },
            },
          }}
          fullWidth
          id="demo-helper-text-aligned-no-helper"
          label="Last Name"
          placeholder="Enter last name"
          required
          name='from_last_name'
          value={formData.from_last_name}
          onChange={handleChange}
        />
        </Grid>
        <Grid size={{xs:12 , sm:6}}>
        <TextField
          sx={{
            backgroundColor: "white",
            marginTop: "50px",
            borderRadius: "10px",
          }}

          slotProps={{
            input: {
              sx: {
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'green',
                },
              },
            },
            inputLabel: {
              sx: {
                '&.Mui-focused': {
                  color: 'green',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                },
              },
            },
          }}
          type="email"
          label='Email'
          fullWidth
          id="demo-helper-text-aligned-no-helper"
          required
          name='from_email'
          value={formData.from_email}
          onChange={handleChange}
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
          onChange={handlePhoneChange}
          placeholder="Contact No.*"
        />
        {error && <InputValidationError >**Invalid Number</InputValidationError>}
        </Grid>
        <br />
        <Grid >
        <TextField
          sx={{
            backgroundColor: "white",
            marginTop: "40px",
            borderRadius: "10px",
          }}
          slotProps={{
            input: {
              sx: {
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'green',
                },
              },
            },
            inputLabel: {
              sx: {
                '&.Mui-focused': {
                  color: 'green',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                },
              },
            },
          }}
          multiline rows={5}
          id="demo-helper-text-aligned-no-helper"
          label="Message"
          fullWidth
          required
          name='message'
          value={formData.message}
          onChange={handleChange}
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
