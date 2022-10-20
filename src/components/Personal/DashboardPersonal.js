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

function DashboardPersonal( {carbon ,check, task, list, pts } )
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
  const [weeklyPoints, setWeeklyPoints] = useState();

    async function getActivityData(){
        let output = await getSingleUserTotalPointsPerWeekPerActivity(list.userId);
        let newObj = {};
        output.map(x => {
            newObj[x.activity_performed] =+ x.carbon_saving ? x.carbon_saving : 0;
        });

        let newObjTotalPointsPerWeek = {};
        for (const key in output) {
            console.log(output[key]);

                newObjTotalPointsPerWeek[output[key].insert_at] += ~~newObjTotalPointsPerWeek[output[key].insert_at] ? output[key].carbon_saving: 0;
        }
        console.log(newObjTotalPointsPerWeek);
        let newDates = {}
        let index = 1;

        let outer = [];
        let sortable = [];
        for (var date in newObjTotalPointsPerWeek) {
            sortable.push([date, newObjTotalPointsPerWeek[date]]);
        }
        sortable.sort(function(a, b) {
            a[0] = a[0].split('-').join('');
            b[0] = b[0].split('-').join('');
            return a > b ? 1 : a < b ? -1 : 0;
            // return a.localeCompare(b);         // <-- alternative
        });
        let index2 = 1;
        sortable.map(x => {
            let inner = {};
            inner["Week"] = `Week ${index2}`;
            inner["carbon_pts"] = x[1];
            outer.push(inner);
            index2++;
        });

        outer.sort(function(a, b) {
            a = a.Week;
            b = b.Week;
            return a > b ? 1 : a < b ? -1 : 0;
            // return a.localeCompare(b);         // <-- alternative
        });


        for (const newObjTotalPointsPerWeekKey in newObjTotalPointsPerWeek) {
            newDates[`Week ${index}`] = newObjTotalPointsPerWeek[newObjTotalPointsPerWeekKey];
            index++;
        }

        setWeeklyPoints(outer);

        setCp(newObj["Carpool"]);
        setEc(newObj["Use an electric car"]);
        setPt(newObj["Use public transportation"]);
        setCycle(newObj["Cycle"]);
        setVm(newObj["Have a vegetarian meal"]);
        setVm2(newObj["Eat a vegan meal"]);
        setAfw(newObj["Avoid food waste"]);
        setRecycle(newObj["Recycle"]);
        setAsp(newObj["Avoid single-use plastic"]);
        setAd(newObj["Airdrying clothes"]);

        return setActivityData(output);
    };

    useEffect(() => {
        getActivityData();
    }, [carbon])


    const data = [
    { Week: "Week 1", carbon_pts: carbon },
    { Week: "Week 2", carbon_pts: 0 },
    { Week: "Week 3", carbon_pts: 0 },
    { Week: "Week 4", carbon_pts: 0 },
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

   if (task === "Carpool")
   {
      setCp(cp + pts);
   }
   else  if (task === "Use an electric car" )
   {
      setEc(ec + pts); 
   }
   else if (task === "Use public transportation")
   {
      setPt(pt + pts);
   }
   else if (task ===  "Cycle")
   {
      setCycle(cycle + pts);
   } 
   else if (task ===  "Have a vegetarian meal" )
   {
      setVm(vm + pts);
   }
   else if (task === "Eat a vegan meal")
   {
      setVm2 (vm2 + pts);
   }
   else if (task === "Avoid food waste")
   {
      setAfw(afw + pts);
   }
   else if (task === "Recycle")
   {
      setRecycle(recycle + 1);
   }
   else if (task === "Avoid single-use plastic" )
   {
      setAsp(asp + pts);
   }
   else if (task === "Airdrying clothes")
   {
      setAd(ad + pts);
   }
   else return 

  }, [carbon])
  

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
              xs={4}
              md={12}
              lg={12}
              style={{ backgroundColor: "white", height: "10vh" }}
            >
              <div class="points">
                <strong>
                  <p>{month[date.getMonth()]} Progress</p>
                  <p class="pts">{carbon.toFixed(2)} KG Carbon Saved</p>
                </strong>
              </div>
            </Grid>

            {/*
            Grid 
            for
            the graph and points
        
            */}
        <Grid item xs={4} md={12} lg={12} sm container m style={{padding:'50px 0px'}}>
              <Grid item xs={6} md={6} lg={6} style={{padding:'69px 0px'}}>   
                <p style={{fontSize:"22px"}}>{month[date.getMonth()] + " total carbon saved"}</p>
                <ResponsiveContainer height='82%' width='95%'> 
                  <LineChart
                    width={600}
                    height={300}
                    data={weeklyPoints}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                  >
                    <CartesianGrid strokeDasharray="5 5" />
                    <Line
                      connectNulls
                      type="monotone"
                      dataKey="carbon_pts"
                      stroke="#8884d8" fill="#8884d8"
                    />
                    <XAxis dataKey="Week"/>
                    <YAxis />
                    
                    <Tooltip />
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
              <p style={{ paddingLeft:'90px', fontSize:"22px"}}>{month[date.getMonth()] + " carbon saved by sustainable actions"}</p>
              <ResponsiveContainer width="88%" height="50%">
                <BarChart
                  layout="vertical"
                  width={300}
                  height={200}
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
                  <Bar dataKey="Carpool" fill="#8884d8" />
                  <Bar dataKey="Use an electric car" fill="#82ca9d" />
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
              <div style={{marginTop:"105px", fontSize:"30px"}}>
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
