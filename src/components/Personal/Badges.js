import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { deepOrange, green, deepPurple, blueGrey } from "@mui/material/colors";

function Badges() {
  return (
    <div>
      <h3>Badges</h3>

      <Grid container direction="row" spacing={1}>
        <Grid item xs={6} md={3} lg={3}>
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              height: "10vh",
              width: "10vh",
              margin: "5px",
            }}
          >
            Walker
          </Avatar>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Avatar
            sx={{
              bgcolor: green[500],
              height: "10vh",
              width: "10vh",
              margin: "5px",
            }}
          >
            Jogger
          </Avatar>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Avatar
            sx={{
              bgcolor: blueGrey[500],
              height: "10vh",
              width: "10vh",
              margin: "5px",
            }}
          >
            Cycler
          </Avatar>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Avatar
            sx={{
              bgcolor: deepPurple[500],
              height: "10vh",
              width: "10vh",
              margin: "5px",
            }}
          >
            Veggie
          </Avatar>
        </Grid>
      </Grid>
    </div>
  );
}

export default Badges;
