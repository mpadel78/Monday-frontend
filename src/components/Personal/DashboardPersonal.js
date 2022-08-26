import React from "react";
import {useState} from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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

function DashboardPersonal( {carbon ,check } ) 
{
  const [date, setMonth] = useState(new Date());

  const data = [
    { year: "1", value: 200 },
    { year: "1", value: 500 },
    { year: "1", value: 600 },
    { year: "1", value: 800 },
  ];
  var month= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

  const data2 = [
    {
      name: 'Week 1',
      Recycle: 10,
      Carpool: 2,
      "Use Public Transporation": 8,
      Cycle:0,
      "Vegan Meal":7,
      "Vegetarian meal":24,
      "Air-dry clothes": 4,
      "Buy pre-owned item": 19,
      "Avoid Single Use Plastic": 12,
      "Avoid Food Waster": 2,
      "Carbon Offset": 16,
    },
  ];

  return (
    <>
      <Grid container direction="row" spacing={1}>
            {check ? (
              <>  
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
              <div class="points">
                <strong>
                  <p>{month[date.getMonth()]} Progress</p>
                  <p class="pts">{carbon} KG Carbon Saved</p>
                </strong>
              </div>
            </Grid>

            {/*
            Grid 
            for
            the graph and points
        
            */}
        <Grid item xs={12} md={12} lg={12} sm container>
              <Grid item xs={6} md={6} lg={6} style={{padding:'95px 0px'}}>
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
                    <XAxis tick={false} label= { "Month of " + month[date.getMonth()]} />
                    <YAxis tick={false} label="Points" />
                  </LineChart>
                </ResponsiveContainer>
              </Grid>

              <Grid item xs={6} md={6} lg={6}>
                <Button variant="outlined" component="label">
                {month[date.getMonth()]}
                </Button>
                <Button variant="outlined" component="label">
                  YTD
                </Button>
                <br />
                <br />

              </Grid>
              <ResponsiveContainer width="95%" height="55%">
                <BarChart
                  layout="vertical"
                  width={500}
                  height={300}
                  data={data2}
                  margin={{
                    top: 10,
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
                  <Bar dataKey="Vegetarian meal" fill="green" />
                  <Bar dataKey="Air-dry clothes" fill="orange" />
                  <Bar dataKey="Buy pre-owned item" fill="#ad325d" />
                  <Bar dataKey="Avoid Single Use Plastic" fill="#324dad" />
                  <Bar dataKey="Avoid Food Waster" fill="#32ad84" />
                  <Bar dataKey="Carbon Offset" fill="brown" />
                </BarChart>
            </ResponsiveContainer> 
          </Grid>

          </>

            ):(

            <>

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
              <div class="points">
                <strong>
                  <p>{month[date.getMonth()]} Progress</p>
                  <p>{carbon} KG Carbon Saved</p>
                </strong>
              </div>
            </Grid>
              
              <Grid
              item
              xs={12}
              md={12}
              lg={12}
              style={{ backgroundColor: "white", height:"81vh" }}
            >
              <div style={{marginTop:"100px", fontSize:"30px"}}>
                  <span>Take action to live sustainably and</span>
                  <br/>
                  <span>track the impact you make on the</span>
                  <br/>
                  <span>environment in this space</span>
              </div>
            </Grid>
            
            </>

            )}
            
       
      </Grid>
    </>
  );
}

export default DashboardPersonal;
