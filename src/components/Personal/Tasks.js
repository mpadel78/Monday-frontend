import React from "react";
import { useEffect,useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "monday-ui-react-core/dist/Button";
import { toast } from 'react-toastify';
import Activities from "./Activities";
import 'react-toastify/dist/ReactToastify.css';
import "monday-ui-react-core/dist/main.css";
import {
    postUserActivity,
    getSingleUserTotalPoints,
    getSingleUserTotalPointsPerMonthByWeek,
    getSingleUserTotalPointsPerYearByMonth,
    getSingleUserTotalPointsPerWeekPerActivity,
    getSingleUserTotalPointsYTDByActivity
} from "../../services/userService";
import {
    GetTeamsPoints,
    GetTeamWeeklyStats,
    getSingleTeamMonthlyStats,
    getUserLeaderboardMonthlyStats,
    getUserLeaderboardYearlyStats,
    getTeamLeaderboardMonthlyStats,
    getTeamLeaderboardYearlyStats
} from "../../services/teamService";
import {getUserDetailsMAPI, getTeamDetailsMAPI} from "../../services/mondayService"

const colors = ['#D6FFEB','#D6EAFF','#FFECD6', '#D7D6FF','#ECD6FF']

export default function Tasks( {carbon, setCarbon, setCheck, task, setTask } ) {
  const tasks = [
    { name: "Carpool", points: 1, color: colors[0]},
    { name: "Use an electric car", points: 2, color: colors[0]},
    { name: "Use public transportation", points: 4, color: colors[0]},
    { name: "Cycle", points: 3, color: colors[0]},
    { name: "Have a vegetarian meal", points:4, color: colors[3]},
    { name: "Eat a vegan meal", points: 5, color: colors[3]},
    { name: "Avoid food waste", points: 1, color: colors[3]},
    { name: "Recycle", points: 2, color: colors[1]},
    { name: "Avoid single-use plastic", points:2, color: colors[4]},
    { name: "Airdrying clothes", points: 2.35, color: colors[2]},
  ];

  const [view2, setView2] = useState("")
  const [value, onChange] = useState(new Date());
  const [list, setList] = useState({});

  // MondayUsertest function 
  useEffect(() => {
    getUserDetailsMAPI()
     .then((val) => {
       setList(val);
       })
  }, [list.userId])

  const handleClick2 = (e) => {
    e.preventDefault();

    if (view2 === "") setView2("Login Another Day");
    else setView2("");
  };

  const submitTask = (e) => {
    let body ={};
    UserTotalPointsPerWeekPerActivity();

    //Don't need set carbon, will create an API call to update carbon.
      if (carbon !== 0)
      {
        //setCarbon(getSingleUserTotalPoints(list.userId));

        body = {
          userId: String(list.userId),
          Activity: e.name,
          Date: value.toISOString().split('T')[0],
          Carbon_Savings: e.points,
          TeamId: String(list.teamId),
          AccountId: String(list.accountId)
        }
      }
      else 
      {
         body = {
        userId: String(list.userId),
        Activity: e.name,
        Date: value.toISOString().split('T')[0],
        Carbon_Savings: e.points,
        TeamId: String(list.teamId),
        AccountId: String(list.accountId)
    };

      }

    postUserActivity(body);
    setCheck(true);

    

    setTask(e.name); // set task name 
    setCarbon(carbon + e.points); // update carbon saved based on task

    console.log(body);

    if (view2 === "")
    {
      onChange(new Date()); // set date back to current 
    }
    
  }

    const getSingleUserPoints = () => {
        let userId = list.userId;

        let userTotalPoints = getSingleUserTotalPoints(userId);
        console.log(userTotalPoints);
    }

    const UserTotalPointsPerMonthByWeek = () => {
        let userId = list.userId;

        let userTotalPoints = getSingleUserTotalPointsPerMonthByWeek(userId);
        console.log(userTotalPoints);
    }

    const UserTotalPointsPerYearByMonth = () => {
        let userId = list.userId;

        let userTotalPoints = getSingleUserTotalPointsPerYearByMonth(userId);
        console.log(userTotalPoints);
    }

    const UserTotalPointsPerWeekPerActivity = () => {
        let userId = list.userId;

        let userTotalPoints = getSingleUserTotalPointsPerWeekPerActivity(userId);
        console.log(userTotalPoints);
    }

    const UserTotalPointsYTDByActivity = () => {
        let userId = list.userId;

        let userTotalPoints = getSingleUserTotalPointsYTDByActivity(userId);
        console.log(userTotalPoints);
    }


    const GetTeamsPointsFunc = () => {
        let SeparateTeamsResults = GetTeamsPoints();
        console.log(SeparateTeamsResults);
    }

    const GetTeamWeeklyStatsFunc = () => {
        let teamId = list.teamId;
        let SeparateTeamsResults = GetTeamWeeklyStats(teamId);
        console.log(SeparateTeamsResults);
    }

    const getSingleTeamMonthlyStatsFunc = () => {
        let teamId = list.teamId;
        let SeparateTeamsResults = getSingleTeamMonthlyStats(teamId);
        console.log(SeparateTeamsResults);
    }

    const getUserLeaderboardMonthlyStatsFunc = () => {
        let accountId = list.accountId;
        let SeparateTeamsResults = getUserLeaderboardMonthlyStats(accountId);
        console.log(SeparateTeamsResults);
    }

    const getUserLeaderboardYearlyStatsFunct = () => {
        let accountId = list.accountId;
        let SeparateTeamsResults = getUserLeaderboardYearlyStats(accountId);
        console.log(SeparateTeamsResults);
    }

    const getTeamLeaderboardMonthlyStatsFunc = () => {
        let accountId = list.accountId;
        let SeparateTeamsResults = getTeamLeaderboardMonthlyStats(accountId);
        console.log(SeparateTeamsResults);
    }

    const getTeamLeaderboardYearlyStatsFunct = () => {
        let accountId = list.accountId;
        let SeparateTeamsResults = getTeamLeaderboardYearlyStats(accountId);
        console.log(SeparateTeamsResults);
    }


    return (
    <div>
      <h3>What did you do today?</h3>

      <Button component="label" onClick={handleClick2}>
      <strong>
              {`${view2 === "" ? "Login action for another day" : "Close"}`}
      </strong></Button>

      {view2 === "Login Another Day" ? 
      
      <div style={{padding:'30px 0px'}}>
        <Card variant="outlined">
                <Activities value={value} onChange={onChange}/>
        </Card> 
      </div> : <></>}

      {view2 === "Login Another Day" ? 
      <>
     
      {tasks.map((data, idx) => (
        <Paper
          sx={{
            p: 2,
            flexGrow: 1,
            height: "100%",
            margin: "2vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
          style={{ backgroundColor: data.color}}
        >
          <Grid container direction="row" spacing={1}>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
            >
              <Typography gutterBottom variant="subtitle1">
                {data.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Save {`${data.points}`} kg CO2 a day
              </Typography>
            </Grid>
            <Grid item xs={5} md={12} lg={6} sm container>
              <Grid item xs>
                <Button onClick={(e) => submitTask(data, e)} component="label">
                {/*<Button onClick={() => UserTotalPointsPerWeekPerActivity()} component="label">*/}
                  Record for this date
                </Button>
                <br />
                <br />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
       </> :

       <>
          {tasks.map((data, idx) => (
          <Paper
            sx={{
              p: 2,
              flexGrow: 1,
              height: "100%",
              margin: "2vh",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
            style={{ backgroundColor: data.color}}
          >
            <Grid container direction="row" spacing={1}>
              <Grid
                item
                xs={12}
                md={12}
                lg={6}
              >
                <Typography gutterBottom variant="subtitle1">
                  {data.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Save {`${data.points}`} kg CO2 a day
                </Typography>
              </Grid>
              <Grid item xs={5} md={12} lg={6} sm container>
                <Grid item xs>
                  <Button onClick={(e) => submitTask(data, e)} component="label">
                  {/*<Button onClick={() => mondayUserTest()} component="label">*/}
                    I did this today
                  </Button>
                  <br />
                  <br />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
       </>}
    </div>
  );
}
