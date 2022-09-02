import React from 'react'

function Popups(props) {
  return (props.triggr) ? (
    <div class="popup">
        <div class="popuo-inner">
            <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {props.name} badge.</span>
            <button>close</button> 
        </div>
    </div>
  ) : ("");
}

export default Popups