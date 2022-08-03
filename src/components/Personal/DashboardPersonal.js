import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import VerticalText from "../VerticalText";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AxisLabel,
  Area,
} from "recharts";

function DashboardPersonal() {
  const greet = "haha";
  const data = [
    { year: "1", value: 200 },
    { year: "1", value: 500 },
    { year: "1", value: 600 },
    { year: "1", value: 800 },
  ];

  return (
    <>
      <Grid container direction="row" spacing={1}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{ backgroundColor: "#ADD8E6", height: "10vh" }}
        >
          <Typography gutterBottom variant="subtitle1">
            X points July
          </Typography>
        </Grid>
        {/*
        for 
        the
        scoreboard
        title
        */}
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{ backgroundColor: "white", height: "10vh" }}
        >
          <Typography variant="subtitle1">
            <strong>Your Scoreboard July</strong>
          </Typography>
        </Grid>

        {/*
        Grid 
        for
        the graph and points
    
        */}
        <Grid item xs={12} md={12} lg={12} sm container>
          <Grid item xs={6} md={6} lg={6}>
            <ResponsiveContainer height={300}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="rgb(173, 216, 230)"
                  dot={false}
                />
                <XAxis tick={false} label="Month of July" />
                <YAxis tick={false} label="Points" />
              </LineChart>
            </ResponsiveContainer>
          </Grid>

          <Grid item xs={6} md={6} lg={6}>
            <Button variant="outlined" component="label">
              This month
            </Button>
            <Button variant="outlined" component="label">
              YTD
            </Button>
            <br />
            <br />

            <Paper
              elevation={24}
              sx={{
                p: 2,
                margin: "auto",

                flexGrow: 1,
                height: "auto",
                margin: "2vh",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              style={{ backgroundColor: "white" }}
            >
              <Typography variant="body2" gutterBottom>
                Biking, 200 points
              </Typography>
              <Typography variant="body2" gutterBottom>
                Tree planting, 200 points
              </Typography>
              <Typography variant="body2" gutterBottom>
                Vegan Meals, 200 points
              </Typography>
              <Typography variant="body2" gutterBottom>
                Composting, 200 points
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardPersonal;
