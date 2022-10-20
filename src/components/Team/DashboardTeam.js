import React,{useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { green } from "@mui/material/colors";
import {
  GetTeamsPoints,
  GetTeamWeeklyStats,
  getTeamLeaderboardMonthlyStats,
  getTeamLeaderboardYearlyStats,
  getUserLeaderboardMonthlyStats,
  getUserLeaderboardYearlyStats
} from "../../services/teamService";


import {
  getUserDetailsMAPI,
  getAllUsersNamesAndIds
} from "../../services/mondayService";

function DashboardTeam( {carbon}) {

  const [date, setMonth] = useState(new Date());
  const [userData, setUserData] = useState();
  const [userMonthlyData, setUserMonthly] = useState();
  const [userYTDData, setUserYTD] = useState();
  const [userIdAndNameList, setUserIdAndNameList] = useState();

  async function getUserData(){
    let output = await getUserDetailsMAPI();
    return setUserData(output);
  };

  async function getUserMonthlyData(accountId){
    let output = await getUserLeaderboardMonthlyStats(accountId);
    output.sort((a,b) => (a.Carbon_Savings > b.Carbon_Savings) ? -1 : 1);
    return setUserMonthly(output);
  };

  async function getUserYearlyData(accountId){
    let output = await getUserLeaderboardYearlyStats(accountId);
    output.sort((a,b) => (a.Carbon_Savings > b.Carbon_Savings) ? -1 : 1);
    return setUserYTD(output);
  };

  async function getUserIdAndNameList(){
    let output = await getAllUsersNamesAndIds();
    return setUserIdAndNameList(output);
  };

  useEffect(() => {
    getUserData();
  }, [])

  useEffect(() => {
    if(userData){
      getUserMonthlyData(userData.accountId);
    }
  }, [userData])

  useEffect(() => {
    if(userData){
      getUserYearlyData(userData.accountId);
    }

  }, [userData])

  useEffect(() => {
    if(userData){
      getUserIdAndNameList();

    }

  }, [userData])





  var month= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

  const scores = [
    { user: "You", points: carbon },
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
        <h2 style={{marginLeft:"20px"}}>Team Scoreboard {month[date.getMonth()]}</h2>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{ backgroundColor: "white", height: "10vh" }}
        >
          <Button variant="outlined" component="label">
            This month
          </Button>
          {/*<Button variant="outlined" component="label">*/}
          {/*  YTD*/}
          {/*</Button>*/}
        </Grid>

        {/*Here starts the list users and points
         */}

        <Grid item xs={12}>
          <Paper style={{ width: "90%", padding:"12px 35px" }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Carbon Saved Points</TableCell>
                    {/*<TableCell align="center">Current Team rank</TableCell>*/}

                  </TableRow>
                </TableHead>

                <TableBody>
                  {userMonthlyData?.map((res) => (
                    <TableRow>
                      <TableCell component="th" scope="rh">
                        {`${userIdAndNameList?.find(obj => obj.id == res.UserId).name } ` || null}
                      </TableCell>
                      <TableCell align="center">{res.Carbon_Saving.toFixed(2) ?? 0}</TableCell>
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
