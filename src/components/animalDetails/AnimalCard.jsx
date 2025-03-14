import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "@mui/material";

const AnimalCard = ({ animal }) => {
  return (
    <Card sx={{maxWidth: 500, minWidth:250, height: 480,  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)", 
    borderRadius: "12px", 
    transition: "0.3s",
    "&:hover": { boxShadow: "0px 6px 15px #2f6a31" }  , margin: "15px auto", padding: "20px"}}>
      <CardContent>
        <Typography variant="h5" component="div" color="green" gutterBottom>
          {animal.name}
          <Divider/>
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Scientific Name:</strong> {animal?.taxonomy?.scientific_name}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          <strong>Location:</strong> {animal?.locations.join(", ")}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2 }}>Characteristics:</Typography>
        <List>
          <ListItem>
            <ListItemText primary={<strong>Prey:</strong>} secondary={animal?.characteristics?.prey} />
          </ListItem>
          <ListItem>
            <ListItemText primary={<strong>Color:</strong>} secondary={animal?.characteristics?.color} />
          </ListItem>
          <ListItem>
            <ListItemText primary={<strong>Diet:</strong>} secondary={animal?.characteristics?.diet} />
          </ListItem>
          <ListItem>
            <ListItemText primary={<strong>Weight:</strong>} secondary={animal?.characteristics?.weight} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

AnimalCard.propTypes = {
  animal: PropTypes.object.isRequired,
};

export default AnimalCard;