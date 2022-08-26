import React, { useState } from "react";
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

function App() {
  const [view, setView] = useState("Personal Sustainability Scoreboard");
  const [carbon, setCarbon] = useState(0);
  const [check, setCheck] = useState(false);

  const name = "Jessie";

  const handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");

    if (view === "Team Sustainability Scoreboard") setView("Personal Sustainability Scoreboard");
    else setView("Team Sustainability Scoreboard");
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
          <Card variant="outlined" style={{ height:"50vh", width: "97vw", overflowX: "scroll", whiteSpace: 'nowrap' }}>
            <Badges />
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
            {view === "Team Sustainability Scoreboard" ? <Mascot carbon={carbon} /> : <Tasks carbon={carbon} setCarbon={setCarbon} setCheck={setCheck} />}
          </Card>
          <div style={{padding:'30px 0px'}}>
            <Card variant="outlined">
              <Activities />
            </Card>
          </div>
         
        </Grid>
        <Grid
          item
          xs={8}
          md={8}
          lg={8}
          style={{
            textAlign: "center",
            backgroundColor: "gre",
            height: "100vh",
            paddingRight: "10px",
          }}
        >
          <Card style={{ padding:'0px 5px' }} variant="outlined">
            {view === "Team Sustainability Scoreboard" ? <DashboardTeam /> : <DashboardPersonal carbon={carbon} check={check} />}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
