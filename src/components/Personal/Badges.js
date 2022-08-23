import React from "react";
import Grid from "@mui/material/Grid";

function Badges() {
  return (
    <div>
      <div style={{padding:"8px"}}>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={6} md={8} lg={8}>
          <img style={{paddingRight:'15px'}} src="car_badge.svg" alt="mascot" width="100" height="150"/> 
          <img style={{paddingRight:'15px'}} src="compost_badge.svg" alt="mascot" width="100" height="150"/>
          <img style={{paddingRight:'15px'}}src="hangingsock_badge.svg" alt="mascot" width="100" height="150"/>
          <img style={{paddingRight:'15px'}} src="recycling_badge.svg" alt="mascot" width="100" height="150"/>
          <img style={{paddingRight:'15px'}} src="usedclothing_badge.svg" alt="mascot" width="100" height="150"/>
          <img style={{paddingRight:'15px'}} src="vegetarianmeal_badge.svg" alt="mascot" width="100" height="150"/>
          <img style={{paddingRight:'15px'}} src="waterbottle_badge.svg" alt="mascot" width="100" height="150"/>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default Badges;
