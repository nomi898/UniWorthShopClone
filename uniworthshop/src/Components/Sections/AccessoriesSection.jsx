import AcessBaner from "../../assets/Images/AcessBaner.webp";
import AcessBanermobile from "../../assets/Images/AcessBanermobile.webp";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router";
import Categories from '../../DummyData/Categories';

const AccessoriesSection = () => {
  const category = Categories.find((c) => c.name === "ACCESSORIES");
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "500px", md: "600px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: {
            xs: `url(${AcessBanermobile})`,
            md: `url(${AcessBaner})`,
            lg: `url(${AcessBaner})`,
          },
        backgroundAttachment: "scroll",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay for better text readability*/}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          color: "black",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "black",
            display: "inline-block",
            px: 3,
            py: 0.5,
            mb: 2,
            fontWeight: 600,
          }}
        >
          Accessories
        </Typography>

        <Typography
          sx={{
            color: "#1a1a1a",
            px: 3,
            py: 2,
            mb: 3,
            lineHeight: 1.6,
            fontSize: { xs: "14px", md: "16px" },
            maxWidth: "600px",
          }}
        >
          Uniworth Accessories - Elevating Style Beyond Expectations! Our
          Essential Collection Curates A Range Of Accessory Must-Haves
          Catering To Every Occasion.
        </Typography>
        <NavLink
          to={`/category/${encodeURIComponent(category.name)}`}
          style={{ textDecoration: "none" }}
        >
                  <Button
          variant="outlined"
          sx={{
            borderColor: "#1a1a1a",
            color: "#1a1a1a",
            px: 5,
            py: 1,
            fontSize: "16px",
            fontWeight: 500,
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "#1a1a1a",
              color: "white",
            },
          }}
        >
          Shop
        </Button>
        </NavLink>

      </Box>
    </Box>
  );
};

export default AccessoriesSection;