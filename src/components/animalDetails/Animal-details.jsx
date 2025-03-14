import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { TextField, IconButton, Box, Typography } from "@mui/material";
import Title from "./Title";
import "./Style.css";
import AnimalCard from "./AnimalCard";
import { Grid } from "@mui/material";

const AnimalDetails = () => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  const [animalData, setAnimalData] = useState(null);
  const [error, setError] = useState(null);

  const fetchAnimalDetails = async () => {
    if (!search) return;
    setError(null);
    setAnimalData(null);
    setSearched(true);

    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/animals?name=${search}`,
        {
          headers: {
            "X-Api-Key": "PhLP13AL2yOyQ1oGGEHeSw==lhC1KRMapTKEO9UZ"
          }
        }
      );

      console.log(response.data);
      setAnimalData(response.data);
    } catch (err) {
      setError("Animal not found");
    }
  };

  const handleSearch = () => {
    fetchAnimalDetails();
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      fetchAnimalDetails();
    }
  };

  return (
    <div>
      <Title />
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          height: "15vh"
        }}
      >
        <TextField

          label="Search for an animal..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={{
            width: 400,
            justifyContent: "center",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "green",
                color: "green"
              },
              "&:hover fieldset": {
                borderColor: "darkgreen",
                color: "green"
              },
              "&.Mui-focused fieldset": {
                borderColor: "green",
                color: "green"
              }
            },
            "& .MuiInputLabel-root": {
              color: "green"
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "green"
            }
          }}
        />
        <IconButton
          onClick={handleSearch}
          sx={{ padding: "20px", color: "#3e8e41" }}
        >
          <FaSearch />
        </IconButton>
      </Box>

      {error &&
        <Typography color="error">
          {error}
        </Typography>}

      {searched &&
        animalData &&
        animalData.length === 0 &&
        <Typography paddingLeft={40}>No animal found</Typography>}

      <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center", padding: "12px" }}>
        {animalData && animalData.length > 0
          ? animalData.map((item, index) =>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                sx={{ padding: "10px" }}
              >
                <AnimalCard key={index} animal={item} />{" "}
              </Grid>
            )
          : null}
      </Grid>
    </div>
  );
};

export default AnimalDetails;