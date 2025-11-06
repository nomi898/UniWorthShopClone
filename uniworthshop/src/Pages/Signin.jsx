import {
  Button,
  Box,
  TextField,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const siginSchema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const siginFormValues = {
  email: "",
  password: "",
};

const Signin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: siginFormValues,
    resolver: yupResolver(siginSchema),
  });

  const SiginSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        pt: "30px",
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Breadcrumb */}
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 1 }}>
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "#666", fontSize: "14px" }}
          >
            Home
          </NavLink>
          <Typography sx={{ color: "#666", fontSize: "14px" }}>|</Typography>
          <Typography sx={{ fontSize: "14px", color: "#000", fontWeight: 500 }}>
            Sign In
          </Typography>
        </Box>

        {/* Two Column Layout - Side by Side */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            mb: 6,
          }}
        >
          {/* Left Column - LOGIN */}
          <Box
            sx={{
              flex: { xs: "1", md: "0 0 48%" },
              backgroundColor: "#fff",
              p: 4,
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 4 }}>
              LOGIN
            </Typography>

            <form onSubmit={handleSubmit(SiginSubmit)}>
              {/* Email Field */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ mb: 1, fontWeight: 500, fontSize: "14px" }}>
                  Email <span style={{ color: "red" }}>*</span>
                </Typography>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Email address"
                      variant="outlined"
                      error={!!errors?.email}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#f9f9f9",
                          "&:hover": {
                            backgroundColor: "#fff",
                          },
                        },
                      }}
                    />
                  )}
                />
                {errors?.email && (
                  <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>
                    {errors.email.message}
                  </Typography>
                )}
              </Box>

              {/* Password Field */}
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 1, fontWeight: 500, fontSize: "14px" }}>
                  Password <span style={{ color: "red" }}>*</span>
                </Typography>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      type="password"
                      placeholder="Enter your password"
                      variant="outlined"
                      error={!!errors?.password}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#f9f9f9",
                          "&:hover": {
                            backgroundColor: "#fff",
                          },
                        },
                      }}
                    />
                  )}
                />
                {errors?.password && (
                  <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>
                    {errors.password.message}
                  </Typography>
                )}
              </Box>

              {/* Forgot Password Link */}
              <Box sx={{ mb: 3 }}>
                <Link
                  to="/forgot-password"
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  Forgot your password?
                </Link>
              </Box>

              {/* Sign In Button */}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#e53935",
                  color: "#fff",
                  py: 1.5,
                  px: 4,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: "#c62828",
                  },
                }}
              >
                SIGN IN
              </Button>
            </form>
          </Box>

          {/* Right Column - NEW CUSTOMER */}
          <Box
            sx={{
              flex: { xs: "1", md: "0 0 48%" },
              backgroundColor: "#fff",
              p: 4,
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              NEW CUSTOMER
            </Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, fontSize: "16px" }}
            >
              CREATE A ACCOUNT
            </Typography>

            <Typography
              sx={{ mb: 3, color: "#666", fontSize: "14px", lineHeight: 1.6 }}
            >
              Sign up for a free account at our store. Registration is quick and
              easy. It allows you to be able to order from our shop. To start
              shopping click register.
            </Typography>
            <NavLink
              to="/signup"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                component={Link}
                to="/register"
                variant="contained"
                sx={{
                  backgroundColor: "#e53935",
                  color: "#fff",
                  py: 1.5,
                  px: 4,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: "#c62828",
                  },
                }}
              >
                CREATE AN ACCOUNT
              </Button>
            </NavLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Signin;
