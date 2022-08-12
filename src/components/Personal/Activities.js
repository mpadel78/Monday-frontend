import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import Typography from "@mui/material/Typography";
import 'react-calendar/dist/Calendar.css';
import Button from "monday-ui-react-core/dist/Button";
import "monday-ui-react-core/dist/main.css"
import "../../App.css";

function Activities(){

const [value, onChange] = useState(new Date());

  return (
    <div style={{ padding:'10px'}}>
        <h3>Activities</h3>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',border:'none'}}>
          <Calendar onChange={onChange} value={value} />
        </div>
        <div style={{padding:'10px 0px'}}>
          <strong>{value.toDateString()}</strong>
        </div>
        <div>
          <p>Biking, 200 points</p>
          <p>Tree planting, 200 points</p>
        </div> 
        <Button component="label">Record for a different day</Button>
    </div>
  )
}

export default Activities