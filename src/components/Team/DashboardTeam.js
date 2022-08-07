import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { green } from "@mui/material/colors";

function DashboardTeam() {
  const scores = [
    { user: "A", points: 100 },
    { user: "B", points: 100 },
    { user: "C", points: 100 },
    { user: "D", points: 100 },
    { user: "E", points: 100 },
    { user: "F", points: 100 },
    { user: "G", points: 100 },
    { user: "H", points: 100 },
    { user: "I", points: 100 },
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
            X points July
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{ backgroundColor: "white", height: "10vh" }}
        >
          <Typography variant="subtitle1">
            <strong>Team Scoreboard July</strong>
          </Typography>
          <Button variant="outlined" component="label">
            This month
          </Button>
          <Button variant="outlined" component="label">
            YTD
          </Button>
        </Grid>

        {/*Here starts the list users and points
         */}

        <Grid item xs={12}>
          <Paper style={{ width: "90%", margin: "3vw" }}>
            <TableContainer>
              <Table>
                <TableHead style={{ backgroundColor: `${green[300]}` }}>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Total month points</TableCell>
                    <TableCell align="center">Current Team rank</TableCell>
                    <TableCell align="center"> Diff last month</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {scores.map((res) => (
                    <TableRow>
                      <TableCell component="th" scope="rh">
                        {`User ${res.user}`}
                      </TableCell>
                      <TableCell align="center">{res.points}</TableCell>
                      <TableCell align="center">#</TableCell>
                      <TableCell align="center">#</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardTeam;
