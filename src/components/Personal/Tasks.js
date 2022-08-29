import React from "react";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "monday-ui-react-core/dist/Button";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "monday-ui-react-core/dist/main.css"

const colors = ['#6dc762','#92cbdf','#e7b859', '#c892df']

export default function Tasks( {carbon, setCarbon, setCheck, task, setTask } ) {
  const tasks = [
    { name: "Carpool", points: 1, color: colors[0]},
    { name: "Use an electric car", points: 2, color: colors[0]},
    { name: "Use public transportation", points: 4, color: colors[0]},
    { name: "Cycle", points: 3, color: colors[0]},
    { name: "Have a vegetarian meal", points:4, color: colors[3]},
    { name: "Eat a vegan meal", points: 5, color: colors[3]},
    { name: "Avoid food waste", points: 1, color: colors[3]},
    { name: "Recycle", points: 2, color: colors[1]},
    { name: "Avoid single-use plastic", points:2, color: colors[2]},
    { name: "Airdrying clothes", points: 2.35, color: colors[2]},
  ];

// UseEffect to update the carbon saved in the backend if carbon saved changes on frontend 
useEffect(() => {
  
  // TODO:1 Place API post call sending the updated carbon saved here 

  console.log("Carbon updated")
}, [carbon])


  const submitTask = (e) => {
    setCheck(true);

    toast.success("You saved " + e + " performing this task!");

    setTask(e.name); // set task name 
    setCarbon(carbon + e.points); // update carbon saved based on task

    console.log(carbon);
  }

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
                Save {`${data.points}`} kg CO2 a day
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={6} sm container>
              <Grid item xs>
                <Button onClick={(e) => submitTask(data, e)} component="label">
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
