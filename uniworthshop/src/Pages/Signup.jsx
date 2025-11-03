import { Button, Box, TextField, Typography, Container } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../Components/Layout/Header"; 
import Footer from "../Components/Layout/Footer"; 

const registerSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    mobile: yup.string().required("Mobile number is required"),
    dateOfBirth: yup.string(),
    monthOfBirth: yup.string(),
    yearOfBirth: yup.string(),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm password is required"),
  })
  .required();

const initialRegisterFormValues = {
  name: "",
  email: "",
  mobile: "",
  dateOfBirth: "",
  monthOfBirth: "",
  yearOfBirth: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialRegisterFormValues,
    resolver: yupResolver(registerSchema),
  });

  const registerSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', pt: '120px', pb: 8 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 8 } }}>
          {/* Breadcrumb */}
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
            <NavLink to="/" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>
              Home
            </NavLink>
            <Typography sx={{ color: '#666', fontSize: '14px' }}>|</Typography>
            <Typography sx={{ fontSize: '14px', color: '#000', fontWeight: 500 }}>
              Create Account
            </Typography>
          </Box>

          {/* Create Account Form */}
          <Box sx={{ backgroundColor: '#fff', p: { xs: 3, md: 5 }, borderRadius: '0', boxShadow: 'none' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, fontSize: '20px' }}>
              CREATE ACCOUNT
            </Typography>

            <form onSubmit={handleSubmit(registerSubmit)}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Row 1: Full Name & Email Address */}
                <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                  {/* Full Name */}
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ mb: 1, fontWeight: 500, fontSize: '14px' }}>
                      Full Name <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          placeholder=""
                          variant="outlined"
                          error={!!errors?.name}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: '#fff',
                              '& fieldset': {
                                borderColor: '#ddd'
                              },
                              '&:hover fieldset': {
                                borderColor: '#999'
                              }
                            }
                          }}
                        />
                      )}
                    />
                    {errors?.name && (
                      <Typography sx={{ color: 'red', fontSize: '12px', mt: 0.5 }}>
                        {errors.name.message}
                      </Typography>
                    )}
                  </Box>

                  {/* Email Address */}
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ mb: 1, fontWeight: 500, fontSize: '14px' }}>
                      Email Address <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          placeholder=""
                          variant="outlined"
                          error={!!errors?.email}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: '#fff',
                              '& fieldset': {
                                borderColor: '#ddd'
                              },
                              '&:hover fieldset': {
                                borderColor: '#999'
                              }
                            }
                          }}
                        />
                      )}
                    />
                    {errors?.email && (
                      <Typography sx={{ color: 'red', fontSize: '12px', mt: 0.5 }}>
                        {errors.email.message}
                      </Typography>
                    )}
                  </Box>
                </Box>

                {/* Row 2: Mobile No. & Date Of Birth */}
                <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                  {/* Mobile No. */}
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ mb: 1, fontWeight: 500, fontSize: '14px' }}>
                      Mobile No. <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Controller
                      name="mobile"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          placeholder="eg. 03001234568"
                          variant="outlined"
                          error={!!errors?.mobile}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: '#fff',
                              '& fieldset': {
                                borderColor: '#ddd'
                              },
                              '&:hover fieldset': {
                                borderColor: '#999'
                              }
                            }
                          }}
                        />
                      )}
                    />
                    {errors?.mobile && (
                      <Typography sx={{ color: 'red', fontSize: '12px', mt: 0.5 }}>
                        {errors.mobile.message}
                      </Typography>
                    )}
                  </Box>

                  {/* Date Of Birth */}
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ mb: 1, fontWeight: 500, fontSize: '14px' }}>
                      Date Of Birth
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Controller
                        name="dateOfBirth"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            placeholder="Date"
                            variant="outlined"
                            sx={{
                              flex: 1,
                              '& .MuiOutlinedInput-root': {
                                backgroundColor: '#fff',
                                '& fieldset': {
                                  borderColor: '#ddd'
                                },
                                '&:hover fieldset': {
                                  borderColor: '#999'
                                }
                              }
                            }}
                          />
                        )}
                      />
                      <Controller
                        name="monthOfBirth"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            placeholder="Month"
                            variant="outlined"
                            sx={{
                              flex: 1,
                              '& .MuiOutlinedInput-root': {
                                backgroundColor: '#fff',
                                '& fieldset': {
                                  borderColor: '#ddd'
                                },
                                '&:hover fieldset': {
                                  borderColor: '#999'
                                }
                              }
                            }}
                          />
                        )}
                      />
                      <Controller
                        name="yearOfBirth"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            placeholder="Year"
                            variant="outlined"
                            sx={{
                              flex: 1,
                              '& .MuiOutlinedInput-root': {
                                backgroundColor: '#fff',
                                '& fieldset': {
                                  borderColor: '#ddd'
                                },
                                '&:hover fieldset': {
                                  borderColor: '#999'
                                }
                              }
                            }}
                          />
                        )}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Row 3: Password & Confirm Password */}
                <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                  {/* Password */}
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ mb: 1, fontWeight: 500, fontSize: '14px' }}>
                      Password <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          type="password"
                          placeholder=""
                          variant="outlined"
                          error={!!errors?.password}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: '#fff',
                              '& fieldset': {
                                borderColor: '#ddd'
                              },
                              '&:hover fieldset': {
                                borderColor: '#999'
                              }
                            }
                          }}
                        />
                      )}
                    />
                    {errors?.password && (
                      <Typography sx={{ color: 'red', fontSize: '12px', mt: 0.5 }}>
                        {errors.password.message}
                      </Typography>
                    )}
                  </Box>

                  {/* Confirm Password */}
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ mb: 1, fontWeight: 500, fontSize: '14px' }}>
                      Confirm Password <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Controller
                      name="confirmPassword"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          type="password"
                          placeholder=""
                          variant="outlined"
                          error={!!errors?.confirmPassword}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: '#fff',
                              '& fieldset': {
                                borderColor: '#ddd'
                              },
                              '&:hover fieldset': {
                                borderColor: '#999'
                              }
                            }
                          }}
                        />
                      )}
                    />
                    {errors?.confirmPassword && (
                      <Typography sx={{ color: 'red', fontSize: '12px', mt: 0.5 }}>
                        {errors.confirmPassword.message}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>

              {/* Create Account Button */}
              <Box sx={{ mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#e53935',
                    color: '#fff',
                    py: 1.5,
                    px: 5,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    borderRadius: '0',
                    '&:hover': {
                      backgroundColor: '#c62828'
                    }
                  }}
                >
                  CREATE ACCOUNT
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Register;