import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Tasks from "./components/Personal/Tasks";
import Mascot from "./components/Team/Mascot";
import DashboardPersonal from "./components/Personal/DashboardPersonal";
import DashboardTeam from "./components/Team/DashboardTeam";
import Activities from "./components/Personal/Activities";
import "./App.css";
import Badges from "./components/Personal/Badges";

function App() {
  const [view, setView] = useState("Personal");

  const name = "Jessie";

  const handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");

    if (view == "Teams") setView("Personal");
    else setView("Teams");
  };

  return (
    <div class="App">
      <div class="header">
        <h2>Welcome Back, {name}!</h2>
        <div class="btn-container">
          <button onClick={handleClick} class="btn-team">
            <strong>
              {`Switch to ${view == "Teams" ? "Personal" : "Teams"}`}
            </strong>
          </button>
        </div>
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
            {view == "Teams" ? <Mascot /> : <Tasks />}
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
          <Card style={{ height: "100vh", padding:'0px 5px' }} variant="outlined">
            {view == "Teams" ? <DashboardTeam /> : <DashboardPersonal />}
          </Card>

          <div style={{paddingTop:'30px'}}>
            <Card variant="outlined">
              {view == "Teams" ? <br /> : <Badges />}
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
