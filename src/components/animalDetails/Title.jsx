import React from "react";
import { Box, Typography } from "@mui/material";

const AnimalDetailsHeader = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
      <Box
        sx={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "20px",
          width: 1000,
          textAlign: "center",
          borderRadius: "8px"
        }}
      >
        <Typography variant="h4" component="h1">
          Animal Details
        </Typography>
      </Box>
    </Box>
  );
};

export default AnimalDetailsHeader;