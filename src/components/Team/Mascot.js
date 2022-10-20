import React from "react";
import {useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";
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

function Mascot({carbon}) {

  const [date, setMonth] = useState(new Date());
  const [status, setStatus] = useState("Bad");
  const [userData, setUserData] = useState();
  const [accountPoints, setAccountPoints] = useState(0);

  async function getUserData(){
    let output = await getUserDetailsMAPI();
    return setUserData(output);
  };

  async function getUserMonthlyData(accountId){
    let output = await getUserLeaderboardMonthlyStats(accountId);
    let sum = 0;
    output.map(x => sum += x.Carbon_Saving)
    return setAccountPoints(sum);
  };

  useEffect(() => {
    getUserData();
  }, [])

  useEffect(() => {
    if(userData){
      let result = getUserMonthlyData(userData.accountId);
    }
  }, [userData])


  var month= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

useEffect(() => {
  
  if (accountPoints >= 1 && accountPoints < 3)
  {
    setStatus("Ok");
  }
  else if (accountPoints >= 3 && accountPoints < 8)
  {
    setStatus("Good");
  }
  else if (accountPoints >= 400)
  {
    setStatus("Excellent");
  }
  else 
  {

  }

}, [accountPoints])


  return (
     <div>
     <div style={{display:"flex",alignItems:'center',justifyContent:"center"}}>
        <div class="points2">
          <strong>
            <p>{month[date.getMonth()]} Progress</p>
            <p class="pts" style={{color:'green'}}>{accountPoints.toFixed(2) ?? 0} KG Carbon Saved</p>
          </strong>
        </div>
      </div>
        {(status.includes("Ok")) ? (
        <>

          <img src="bad2.jpg" alt="mascot-b2" width="72%" height="70%" />
          <h3>Help our greener habits 
          <br/>
          mascot by completing
          <br/>
          sustainable actions!</h3>

        </>
        ) : (status.includes("Good")) ? (
        <>
          <img src="mascot.jpg" alt="mascot-g" width="72%" height="70%" />
          <h3>Help our greener habits
            <br/>
            mascot by completing
            <br/>
            sustainable actions!</h3>

        </>
        ) :  (status.includes("Excellent")) ? (
        <>

          <img src="good2.png" alt="mascot-g2" width="72%" height="70%" />

          <h3>Help our greener habits
            <br/>
            mascot by completing
            <br/>
            sustainable actions!</h3>

        </>
        ) : (
          <>
          <img src="bad.jpg" alt="mascot-b" width="72%" height="70%"></img>
            <h3>Help our greener habits 
              <br/>
            mascot by completing
            <br/>
            sustainable actions!</h3>
          </>
        )}
    </div> 
  )
}
 
 

export default Mascot;
