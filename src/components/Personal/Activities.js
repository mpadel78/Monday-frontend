import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from "monday-ui-react-core/dist/Button";
import "monday-ui-react-core/dist/main.css"
import "../../App.css";

function Activities( {value, onChange} ){

  return (
    <div style={{ padding:'10px'}}>
        <h3>Activities</h3>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',border:'none'}}>
          <Calendar onChange={onChange} value={value} />
        </div>
        <div style={{padding:'10px 0px'}}>
          <strong>{value.toDateString()}</strong>
        </div>
    </div>
  )
}

export default Activities