import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "monday-ui-react-core/dist/Button";
import "monday-ui-react-core/dist/main.css"

const colors = ["green","purple","orange", "#92cbdf"]

export default function Tasks() {
  const tasks = [
    { name: "Carpool", points: 80, color: '#e7b859'},
    { name: "Bike/Walk", points: 80, color: "#e7b859"},
    { name: "Vegan Meal", points: 80, color:'#6dc762'},
    { name: "Vegetarian meal", points: 80, color:'#6dc762'},
    { name: "Planted a tree", points:80, color: '#92cbdf'},
    { name: "Used Reusable Bags", points: 80, color:'#c892df'},
    { name: "Beach cleanup", points: 80, color:'#c892df'}
  ];
  return (
    <div>
      <h3>What did you do today?</h3>

      {tasks.map((data, idx) => (
        <Paper
          sx={{
            p: 2,
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
                <Button component="label">
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
