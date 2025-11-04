import { Link } from "react-router";
import { Box, Typography } from "@mui/material";

const CategoryGrid = () => {
  const categories = [
    { id: 1, name: "Shirts" },
    { id: 2, name: "Sweaters" },
    { id: 3, name: "Hoodies" },
  ];

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, px: 2 }}>
      {categories.map((cat) => (
        <Link
          to={`/category/${cat.name.toLowerCase()}`}
          key={cat.id}
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              width: 150,
              height: 150,
              bgcolor: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              cursor: "pointer",
            }}
          >
            <Typography>{cat.name}</Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default CategoryGrid;
