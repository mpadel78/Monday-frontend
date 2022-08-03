import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../App.css";

function Activities(){

const [value, onChange] = useState(new Date());

  return (
    <div class="activites-container">
        <h3>Activities</h3>
        <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default Activities