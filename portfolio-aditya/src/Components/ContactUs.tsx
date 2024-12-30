import { Alert, Button, Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import profilepic from '../assets/ProfilePic.jpeg'
import Footer from "./Footer";


const SvgImage = styled('img')`
 width: 440px;
 padding:20px;
 margin-left: '10%';
`;

export default function ContactUs() {
  const [value, setValue] = React.useState("");
  const [error, setError] = useState(true);
  const [formData, setFormData] = useState({
    from_first_name: '',
    from_last_name: '',
    phone_number: '',
    from_email: '',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const theme = useTheme();

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("in submit", formData);
    emailjs.send('service_0q06xmr', 'template_of6jpq9', formData, 'agfr9XFUGhyjUYlwj')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setIsSuccess(true);
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
    <div id="#contactUs"  >

      <Container sx={{ display: "flex", flexDirection: 'column', padding: '70px 30px', alignItems: "center" }}>
        <Typography
          gutterBottom
          sx={{ fontSize: 48, fontWeight: 700, fontFamily: '"Poppins", Sans-serif' }}
        >
          Get In Touch
        </Typography>

        <Typography
          gutterBottom
          sx={{ fontSize: 17, fontWeight: 700, fontFamily: '"Poppins", Sans-serif', lineHeight: '17px', color: '#2BA837' }}
        >
          Have a project in mind? Let's work together to create something amazing.
        </Typography>

        <Grid container spacing={20} sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', margin: '3% 0%' }}>
          <Grid size={{ md: 6, xs: 12 }} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "center", alignItems: 'center', paddingLeft:'20px'}}>
            <SvgImage src={profilepic} alt="SVG Icon" />
          </Grid>

          <Grid size={{ md: 6 }} sx={{
            [theme.breakpoints.down('md')]: {
              backgroundImage: `url(${profilepic})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}>

            <Box sx={{
              [theme.breakpoints.down('md')]: {
                backgroundColor: 'rgba(255, 255, 255, 0.4)', // Optional: to make the form readable over the background image
                padding: '20px',
                borderRadius: '10px',
              },
            }}>
              <form onSubmit={handleSubmit}>
                <Grid spacing={1}>
                  <Grid >
                    <TextField
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        marginTop: "10px",
                        borderRadius: "10px",
                        [theme.breakpoints.down('sm')]: {
                          backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        }
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
                  <Grid >
                    <TextField
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        marginTop: "50px",
                        borderRadius: "10px",
                        [theme.breakpoints.down('md')]: {
                          backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        }
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
                  <Grid >
                    <TextField
                      sx={{
                        backgroundColor: "white",
                        marginTop: "50px",
                        borderRadius: "10px",
                        [theme.breakpoints.down('md')]: {
                          backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        }
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
                  <Grid >
                    <MuiTelInput
                      sx={{
                        backgroundColor: "white",
                        marginTop: "50px",
                        borderRadius: "10px",
                        [theme.breakpoints.down('md')]: {
                          backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        }
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
                      defaultCountry="IN"
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
                        [theme.breakpoints.down('md')]: {
                          backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        }
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
            </Box>
          </Grid>
        </Grid>
        <div style={{ position: "fixed", top: '80px', right: '20px' }}>
          {isSuccess && <Alert severity="success" onClose={() => { setIsSuccess(false) }}>
            Thank you, we will contact you shortly..
          </Alert>}
        </div>
      </Container>
      <Footer />

    </div>
  );
}


