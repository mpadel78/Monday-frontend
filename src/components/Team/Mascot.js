import React from "react";
import {useState} from 'react';
import Grid from "@mui/material/Grid";

function Mascot({carbon}) {

  const [date, setMonth] = useState(new Date());

  var month= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

  return (
     <div>
        <div class="points2">
          <strong>
            <p>{month[date.getMonth()]} Progress</p>
            <p class="pts">{carbon} KG Carbon Saved</p>
          </strong>
        </div>
      <div>
        <img src="mascot.jpg" alt="mascot" width="400" height="480"></img>
        <h3>Help our greener habits 
          <br/>
        mascot by completing
        <br/>
        sustainable actions!</h3>
      </div>
    </div> 
  )
}
 
 

export default Mascot;
