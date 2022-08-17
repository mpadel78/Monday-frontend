import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "monday-ui-react-core/dist/Button";
import "monday-ui-react-core/dist/main.css"

const colors = ['#e7b859','#6dc762','#92cbdf', '#c892df']

export default function Tasks( {points, setPoints} ) {
  const tasks = [
    { name: "Carpool", points: 80, color: colors[0]},
    { name: "Bike/Walk", points: 80, color: colors[0]},
    { name: "Vegan Meal", points: 80, color: colors[1]},
    { name: "Vegetarian meal", points: 80, color: colors[1]},
    { name: "Planted a tree", points:80, color: colors[2]},
    { name: "Used Reusable Bags", points: 80, color: colors[3]},
    { name: "Beach cleanup", points: 80, color: colors[3]}
  ];

  const submitTask = () => {
    setPoints(points + 80);
    console.log(points);
  }

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
          style={{ backgroundColor: data.color}}
        >
          <Grid container direction="row" spacing={1}>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
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
                <Button onClick={submitTask} component="label">
                  I did this today
                </Button>
                <br />
                <br />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
