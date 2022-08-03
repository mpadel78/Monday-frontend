import React from 'react'
import "../App.css";

function Welcome() 
{
    const name = "Jessie"
  return (
    <div class="header">
        <h2>Welcome Back, {name}!</h2>
        <div class="btn-container">
            <button class="btn-team"><strong>Switch To Team Stats</strong></button>
        </div>
    </div>
  )
}

export default Welcome