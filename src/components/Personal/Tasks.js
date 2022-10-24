import React from "react";
import { useEffect,useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "monday-ui-react-core/dist/Button";
import Activities from "./Activities";
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

export default function Tasks( {carbon, setCarbon, setCheck, task, setTask, setPts } ) {
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

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

  const submitTask = (e) => {
    let body ={};

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
    setPts(e.points); // points from current task
    setCarbon(carbon + e.points); // update carbon saved based on task


    if (view2 === "")
    {
      onChange(new Date()); // set date back to current 
    }
  }

    const getSingleUserPoints = () => {
        let userId = list.userId;

        let userTotalPoints = getSingleUserTotalPoints(userId);
    }

    const UserTotalPointsPerMonthByWeek = () => {
        let userId = list.userId;

        let userTotalPoints = getSingleUserTotalPointsPerMonthByWeek(userId);
    }

    const UserTotalPointsPerYearByMonth = () => {
        let userId = list.userId;

        let userTotalPoints = getSingleUserTotalPointsPerYearByMonth(userId);
    }

    const UserTotalPointsPerWeekPerActivity = () => {
        let userId = list.userId;

        let userTotalPoints = getSingleUserTotalPointsPerWeekPerActivity(userId);

    }

    const UserTotalPointsYTDByActivity = () => {
        let userId = list.userId;

        let userTotalPoints = getSingleUserTotalPointsYTDByActivity(userId);
    }


    const GetTeamsPointsFunc = () => {
        let SeparateTeamsResults = GetTeamsPoints();

    }

    const GetTeamWeeklyStatsFunc = () => {
        let teamId = list.teamId;
        let SeparateTeamsResults = GetTeamWeeklyStats(teamId);
    }

    const getSingleTeamMonthlyStatsFunc = () => {
        let teamId = list.teamId;
        let SeparateTeamsResults = getSingleTeamMonthlyStats(teamId);
    }

    const getUserLeaderboardMonthlyStatsFunc = () => {
        let accountId = list.accountId;
        let SeparateTeamsResults = getUserLeaderboardMonthlyStats(accountId);
    }

    const getUserLeaderboardYearlyStatsFunct = () => {
        let accountId = list.accountId;
        let SeparateTeamsResults = getUserLeaderboardYearlyStats(accountId);
    }

    const getTeamLeaderboardMonthlyStatsFunc = () => {
        let accountId = list.accountId;
        let SeparateTeamsResults = getTeamLeaderboardMonthlyStats(accountId);
    }

    const getTeamLeaderboardYearlyStatsFunct = () => {
        let accountId = list.accountId;
        let SeparateTeamsResults = getTeamLeaderboardYearlyStats(accountId);
    }


    return (
    <div>
      <h3>What did you do today?</h3>

      <Button component="label" onClick={handleClick2}>
      <strong>
              {`${view2 === "" ? "Login action for another day" : "Back"}`}
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
              xs={14}
              md={14}
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
