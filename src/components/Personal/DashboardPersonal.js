import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import VerticalText from "../VerticalText";

import {
  BarChart, 
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function DashboardPersonal() {

  const data = [
    { year: "1", value: 200 },
    { year: "1", value: 500 },
    { year: "1", value: 600 },
    { year: "1", value: 800 },
  ];

  const data2 = [
    {
      name: 'Week 1',
      Recycle: 80,
      Carpool: 80,
      "Use Public Transporation": 80,
      Cycle:80,
      "Vegan Meal":80,
      "Vegetarian meal":80,
      "Air-dry clothes": 80,
      "Buy pre-owned item": 80,
      "Avoid Single Use Plastic": 80,
      "Avoid Food Waster": 80,
      "Carbon Offset": 80,
    },
    {
      name: 'Week 2',
      Recycle: 80,
      Carpool: 80,
      "Use Public Transporation": 80,
      Cycle:80,
      "Vegan Meal":80,
      "Vegetarian meal":80,
      "Air-dry clothes": 80,
      "Buy pre-owned item": 80,
      "Avoid Single Use Plastic": 80,
      "Avoid Food Waster": 80,
      "Carbon Offset": 80,
    },
    {
      name: 'Week 3',
      Recycle: 80,
      Carpool: 80,
      "Use Public Transporation": 80,
      Cycle:80,
      "Vegan Meal":80,
      "Vegetarian meal":80,
      "Air-dry clothes": 80,
      "Buy pre-owned item": 80,
      "Avoid Single Use Plastic": 80,
      "Avoid Food Waster": 80,
      "Carbon Offset": 80,
    },
    {
      name: 'Week 4',
      Recycle: 80,
      Carpool: 80,
      "Use Public Transporation": 80,
      Cycle:80,
      "Vegan Meal":80,
      "Vegetarian meal":80,
      "Air-dry clothes": 80,
      "Buy pre-owned item": 80,
      "Avoid Single Use Plastic": 80,
      "Avoid Food Waster": 80,
      "Carbon Offset": 80,
    },
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
          <h2>Your Scoreboard July</h2>
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
        </Grid>

        {/*
        Grid 
        for
        the graph and points
    
        */}
        <Grid item xs={12} md={12} lg={12} sm container>
          <Grid item xs={6} md={6} lg={6} style={{paddingTop:'50px'}}>
            <ResponsiveContainer height={350}>
              <LineChart
                width={500}
                height={350}
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

        
              
          </Grid>
          <ResponsiveContainer width="95%" height="63%">
            <BarChart
              layout="vertical"
              width={500}
              height={300}
              data={data2}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" scale="band" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Recycle" fill="#8884d8" />
              <Bar dataKey="Carpool" fill="#82ca9d" />
              <Bar dataKey="Use Public Transporation" fill="red" />
              <Bar dataKey="Cycle" fill="#e7b859" />
              <Bar dataKey="Vegan Meal" fill="#92cbdf" />
              <Bar dataKey="Vegetarian meal" fill="#82ca9d" />
              <Bar dataKey="Air-dry clothes" fill="#8884d8" />
              <Bar dataKey="Buy pre-owned item" fill="#82ca9d" />
              <Bar dataKey="Avoid Single Use Plastic" fill="#8884d8" />
              <Bar dataKey="Avoid Food Waster" fill="#82ca9d" />
              <Bar dataKey="Carbon Offset" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardPersonal;
