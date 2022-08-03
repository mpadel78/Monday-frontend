import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Tasks from "./components/Personal/Tasks";
import Card from '@mui/material/Card';
import DashboardPersonal from "./components/Personal/DashboardPersonal";
import Welcome from "./components/Welcome";
import Activities from "./components/Personal/Activities";
import "./App.css";
import Badges from "./components/Personal/Badges";

function App() {
  return (
    <div class="App">
      <Welcome />
      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          md={4}
          lg={4}
          style={{
            textAlign: "center",
            height: "100%",
            paddingLeft:'30px',
          }}
        >
          <Card variant="outlined">
            <Tasks />
          </Card>
          <Card variant="outlined">
             <Activities />
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
            paddingRight:'10px',
          }}
        >
          <Card variant="outlined">
            <DashboardPersonal />
          </Card>

          <Card variant="outlined">
            <Badges />
          </Card>
         
        </Grid>
      </Grid>
    </ div>
  );
}

export default App;
