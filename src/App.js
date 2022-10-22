import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Tasks from "./components/Personal/Tasks";
import Mascot from "./components/Team/Mascot";
import DashboardPersonal from "./components/Personal/DashboardPersonal";
import DashboardTeam from "./components/Team/DashboardTeam";
import Activities from "./components/Personal/Activities";
import "./App.css";
import Badges from "./components/Personal/Badges";
import Button from "monday-ui-react-core/dist/Button";
import "monday-ui-react-core/dist/main.css"
import Popups from "./components/Popups/Popups"; 
import {getUserDetailsMAPI, getTeamDetailsMAPI} from "./services/mondayService";
import {
  postUserActivity,
  getSingleUserTotalPoints,
  getSingleUserTotalPointsPerMonthByWeek,
  getSingleUserTotalPointsPerYearByMonth,
  getSingleUserTotalPointsPerWeekPerActivity,
  getSingleUserTotalPointsYTDByActivity
} from "./services/userService";

function App() {
  const [view, setView] = useState("Personal Sustainability Scoreboard");
  const [carbon, setCarbon] = useState(0);
  const [task, setTask] = useState("");
  const [check, setCheck] = useState(false);
  const [badge, setBadge] = useState("");
  const [list, setList] = useState({});
  const [pts, setPts] = useState(0);


  const [name, setName] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

   

    if (view === "Team Sustainability Scoreboard") setView("Personal Sustainability Scoreboard");
    else setView("Team Sustainability Scoreboard");
  };

  useEffect(() => {
    if (carbon !== 0)
    {
      
      setCheck(true);
    }

}, [carbon])

  // set the name of the user's team name 
 useEffect(() => {
    getListData();
    setName(list.teamName);

 }, [name,list.teamName])

 //gets the user currently stored points
 useEffect(() => {
  if(list){
      getCarbonSavings();
  }
 }, [list])

    async function getListData(){
        let output = await getUserDetailsMAPI();
        return setList(output);
    };

    async function getCarbonSavings(){
            let output = await getSingleUserTotalPoints(list.userId);
            return setCarbon(output);
    };
  
  return (
    <div class="App">
      <Card>
      <div class="header">
        <h2>Welcome Back, {name}!</h2>
      </div>
      </Card>
      <div class="btn-container">
          <Button color={Button.colors.POSITIVE} onClick={handleClick} class="btn-team">
            <strong>
              {`${view === "Team Sustainability Scoreboard" ? "Personal Sustainability Scoreboard" : "Team Sustainability Scoreboard"}`}
            </strong>
          </Button>
      </div>
      <div>

        {view === "Team Sustainability Scoreboard" ? <></> : 
        <div style={{padding:'13px'}}>
          <Card variant="outlined" style={{ height:"45%", overflowX: "scroll", whiteSpace: 'nowrap' }}>
            <Badges carbon={carbon} setBadge={setBadge} />
          </Card>
        </div>
        }
      </div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          md={4}
          lg={4}
          style={{
            textAlign: "center",
            paddingLeft: "30px",
            height: "100%",
          }}
        >
          <Card
            variant="outlined"
            style={{ height: "100vh", overflowY: "auto" }}
          >
            {view === "Team Sustainability Scoreboard" ? <Mascot carbon={carbon} /> : <Tasks carbon={carbon} setCarbon={setCarbon} task={task} setTask={setTask} setCheck={setCheck} setPts={setPts} />}
          </Card>
         
        </Grid>
        <Grid
          item
          xs={8}
          md={8}
          lg={8}
          style={{
            textAlign: "center",
            backgroundColor: "gre",
            height: "100%",
            paddingRight: "10px",
          }}
        >
          <Card style={{ padding:'0px 3px' }} variant="outlined">
            {view === "Team Sustainability Scoreboard" ? <DashboardTeam carbon={carbon} /> : <DashboardPersonal carbon={carbon} task={task} check={check} list={list} pts={pts}/>}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
