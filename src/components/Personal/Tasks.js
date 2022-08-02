import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Tasks() {
  const tasks = [
    { name: "Carpool", points: 80 },
    { name: "Bike/Walk", points: 80 },
    { name: "Vegan Meal", points: 80 },
    { name: "Vegetarian meal", points: 80 },
    { name: "Planted a tree", points: 80 },
    { name: "Used Reusable Bags", points: 80 },
    { name: "Beach cleanup", points: 80 },
  ];
  return (
    <div>
      <h3>What did you do today?</h3>

      {tasks.map((data, idx) => (
        <Paper
          sx={{
            p: 2,
            margin: "auto",

            flexGrow: 1,
            height: "100%",
            margin: "2vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
          style={{ backgroundColor: "white" }}
        >
          <Grid container direction="row" spacing={1}>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              style={{ backgroundColor: "#ADD8E6" }}
            >
              <Typography gutterBottom variant="subtitle1">
                {data.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`${data.points} points`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={6} sm container>
              <Grid item xs>
                <Button variant="contained" component="label">
                  I did this today
                </Button>
                <br />
                <br />
                <Button variant="outlined" component="label">
                  Record for a different day
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
