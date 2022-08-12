import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import Typography from "@mui/material/Typography";
import 'react-calendar/dist/Calendar.css';
import "../../App.css";

function Activities(){

const [value, onChange] = useState(new Date());

  return (
    <div style={{ padding:'10px'}}>
        <h3>Activities</h3>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',border:'none'}}>
          <Calendar onChange={onChange} value={value} />
        </div>
        <div style={{paddingTop:'10px'}}>
          <strong>{value.toDateString()}</strong>
        </div>
        <div>
          <p>Biking, 200 points</p>
          <p>Tree planting, 200 points</p>
        </div>
    </div>
  )
}

export default Activities