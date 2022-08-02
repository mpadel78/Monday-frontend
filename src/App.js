import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Tasks from "./components/Personal/Tasks";
import DashboardPersonal from "./components/Personal/DashboardPersonal";

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          md={4}
          lg={4}
          style={{
            textAlign: "center",
            backgroundColor: "grey",
            height: "100%",
          }}
        >
          <Tasks />
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
          }}
        >
          <DashboardPersonal />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
