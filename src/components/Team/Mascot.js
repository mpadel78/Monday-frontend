import React from "react";
import {useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";

function Mascot({carbon}) {

  const [date, setMonth] = useState(new Date());
  const [status, setStatus] = useState("Bad");

  var month= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

useEffect(() => {
  
  if (carbon > 150 && carbon < 385)
  {
    setStatus("Ok");
  }
  else if (carbon >= 385 && carbon < 395)
  {
    setStatus("Good");
  }
  else if (carbon >= 395)
  {
    setStatus("Excellent");
  }
  else 
  {

  }

}, [carbon])

console.log(status)

  return (
     <div>
        <div class="points2">
          <strong>
            <p>{month[date.getMonth()]} Progress</p>
            <p class="pts" style={{color:'green'}}>{carbon} KG Carbon Saved</p>
          </strong>
        </div>
        {(status.includes("Ok")) ? (
        <>

          <img src="bad2.jpg" alt="mascot" width="400" height="480" />
          <h3>Help our greener habits 
          <br/>
          mascot by completing
          <br/>
          sustainable actions!</h3>

        </>
        ) : (status.includes("Good")) ? (
        <>
          <img src="mascot.jpg" alt="mascot" width="400" height="480" />
          <h3>Keep up the good work!
          <br/> 
          Your team saved 400 kg more 
          <br/>
          carbon than last month!</h3>

        </>
        ) :  (status.includes("Excellent")) ? (
        <>

          <img src="good2.jpg" alt="mascot" width="400" height="480" />
          
          <h3>Keep up the good work!
          <br/> 
          Your team saved 400 kg more 
          <br/>
          carbon than last month!</h3>

        </>
        ) : (
          <>
          <img src="bad.jpg" alt="mascot" width="400" height="480"></img>
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
