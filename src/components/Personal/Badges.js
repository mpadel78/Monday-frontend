import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

function Badges() 
{
  const img = [
    "car_badge.svg",

  ];
  const badges = [
    { name: "Tree hugger", description:"", img: img[0]},
    { name: "Eco-friend", description:"", img: img[0]},
    { name: "Conscious Earthling", description:"", img: img[0]},
    { name: "Planet ally", description:"", img: img[0]},
    { name: "Zero waste advocate", description:"", img: img[0]},
    { name: "Ocean Patrol", description:"", img: img[0]},
    { name: "Guardian of reefs", description:"", img: img[0]},
    { name: "Climate fighter", description:"", img: img[0]},
    { name: "Greta Thunberg", description:"", img: img[0]},
    
  ];
  return (
    <div>
      <Grid container direction="row" spacing={2}>
            <Grid
              item
              xs={1}
              md={1}
              lg={10}
            >
      {badges.map((data, idx) => (
          <> 
                <div style={{display: 'flex', direction:'column'}} >
                  <img src="mascot.jpg" alt="mascot" width="150" height="200"></img>
                  {data.name}
                </div>
          </>     
      ))} 
      </Grid>
          </Grid>
    </div>
  );
}

export default Badges;
