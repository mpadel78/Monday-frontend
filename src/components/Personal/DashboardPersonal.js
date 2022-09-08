import React from "react";
import {useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {getSingleUserTotalPoints} from "../../services/userService";
import {
    getSingleUserTotalPointsPerWeekPerActivity
} from "../../services/userService";


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

function DashboardPersonal( {carbon ,check, task, list } )
{
  const [date, setMonth] = useState(new Date());
  const [cp, setCp] = useState(0);
  const [ec, setEc] = useState(0);
  const [pt, setPt] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [vm, setVm] = useState(0);
  const [vm2, setVm2] = useState(0);
  const [afw, setAfw] = useState(0);
  const [recycle, setRecycle] = useState(0);
  const [asp, setAsp] = useState(0);
  const [ad, setAd] = useState(0);
  const [activityData, setActivityData] = useState();

    async function getActivityData(){
        let output = await getSingleUserTotalPointsPerWeekPerActivity(list.userId);
        setCp(output["Carpool"]);
        setEc(output["Use an electric car"]);
        setPt(output["Use public transportation"]);
        setCycle(output["Cycle"]);
        setVm(output["Have a vegetarian meal"]);
        setVm2(output["Eat a vegan meal"]);
        setAfw(output["Avoid food waste"]);
        setRecycle(output["Recycle"]);
        setAsp(output["Avoid single-use plastic"]);
        setAd(output["Airdrying clothes"]);

        console.log(output);
        return setActivityData(output);
    };

    useEffect(() => {
        getActivityData();
    }, [carbon])


    const data = [
    { Week: "0", value: 0 },
    { Week: "Week 1", value: carbon },
    { Week: "Week 2", value: 0 },
    { Week: "Week 3", value: 0 },
    { Week: "Week 4", value: 0 },
  ];
  var month= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

  const data2 = [
    {
      name: 'Carbon Savings by Activity',
      "Carpool": cp,
      "Use an electric car": ec,
      "Use public transporation": pt,
      "Cycle": cycle,
      "Have a vegetarian meal": vm,
      "Eat a vegan meal": vm2,
      "Avoid food waste": afw,
      "Recycle": recycle,
      "Avoid single-use plastic": asp,
      "Airdrying clothes": ad,
    },
  ];

  useEffect(() => {
      console.log(carbon);
   if (task === "Carpool")
   {
      setCp(cp + 1);
   }
   else  if (task === "Use an electric car" )
   {
      setEc(ec +1); 
   }
   else if (task === "Use public transportation")
   {
      setPt(pt + 1);
   }
   else if (task ===  "Cycle")
   {
      setCycle(cycle + 1);
   } 
   else if (task ===  "Have a vegetarian meal" )
   {
      setVm(vm +1);
   }
   else if (task === "Eat a vegan meal")
   {
      setVm2 (vm2 + 1);
   }
   else if (task === "Avoid food waste")
   {
      setAfw(afw + 1);
   }
   else if (task === "Recycle")
   {
      setRecycle(recycle + 1);
   }
   else if (task === "Avoid single-use plastic" )
   {
      setAsp(asp + 1);
   }
   else if (task === "Airdrying clothes")
   {
      setAd(ad + 1);
   }
   else return 

  }, [task])
  

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
        <Grid item xs={12} md={12} lg={12} sm container m style={{padding:'60px 0px'}}>
              <Grid item xs={6} md={6} lg={6} style={{padding:'64px 0px'}}>
                <ResponsiveContainer height={350}>
                  <LineChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line
                      connectNulls
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8" fill="#8884d8"
                    />
                    <XAxis/>
                    <YAxis />
                    
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
                  <h3>{ "Month of " + month[date.getMonth()]}</h3>
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
                  <YAxis dataKey="name" type="category"  />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Carpool" fill="#8884d8" />
                  <Bar dataKey="Use an electric car " fill="#82ca9d" />
                  <Bar dataKey="Use public transporation" fill="red" />
                  <Bar dataKey="Cycle" fill="#e7b859" />
                  <Bar dataKey="Have a vegetarian meal" fill="#92cbdf" />
                  <Bar dataKey="Eat a vegan meal" fill="green" />
                  <Bar dataKey="Avoid food waste" fill="orange" />
                  <Bar dataKey="Recycle" fill="#ad325d" />
                  <Bar dataKey="Avoid single-use plastic" fill="#324dad" />
                  <Bar dataKey="Airdrying clothes" fill="#32ad84" />
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
