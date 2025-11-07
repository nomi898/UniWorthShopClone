import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import MTM from '../../assets/Images/MTM.jpg';
import uniblack from '../../assets/Images/uniblack.jpg';
import ethnic from '../../assets/Images/ethnic.jpg';

const RatioPotrait = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Grid
      container spacing={2} justifyContent="center" sx={{ mx: 2 }}>

        {/* Made To Measure */}
        <Grid size={{ xs: 6, md: 4 }}>
          <Box
            sx={{
              position: "relative",
              height: { xs: 300, sm: 300, md: 500, lg: 900, xl: 1300 },
              overflow: "hidden",
              "&:hover img": { transform: "scale(1.05)" },
            }}
          >
            <Box
              component="img"
              src={MTM}
              alt="Made To Measure"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 40,
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: 500,
                  mb: 2,
                  border: "2px solid white",
                  padding: "8px 24px",
                  display: "inline-block",
                  letterSpacing: "1px",
                }}
              >
                Made To Measure
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "14px",
                  cursor: "pointer",
                  textDecoration: "underline",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                Explore Now
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Uniworth Black */}
        <Grid size={{ xs: 6, md: 4 }}>
          <Box
            sx={{
              position: "relative",
              height: { xs: 300, sm: 300, md: 500, lg: 900, xl: 1300 },
              overflow: "hidden",
              "&:hover img": { transform: "scale(1.05)" },
            }}
          >
            <Box
              component="img"
              src={uniblack}
              alt="Uniworth Black"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 40,
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: 500,
                  mb: 2,
                  border: "2px solid white",
                  padding: "8px 24px",
                  display: "inline-block",
                  letterSpacing: "1px",
                }}
              >
                Uniworth Black
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "14px",
                  cursor: "pointer",
                  textDecoration: "underline",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                Shop Now
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Ethnic */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              position: "relative",
              height: { xs: 500, sm: 500, md: 500, lg: 900, xl: 1300 },
              overflow: "hidden",
              "&:hover img": { transform: "scale(1.05)" },
              margin: { xs: '0 auto', md: 0 },
              maxWidth: { xs: '90%', md: '100%' },
            }}
          >
            <Box
              component="img"
              src={ethnic}
              alt="Ethnic"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 40,
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: 500,
                  mb: 2,
                  border: "2px solid white",
                  padding: "8px 24px",
                  display: "inline-block",
                  letterSpacing: "1px",
                }}
              >
                Ethnic
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "14px",
                  cursor: "pointer",
                  textDecoration: "underline",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                Shop Now
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RatioPotrait;
