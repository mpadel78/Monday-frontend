import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

function Badges({ carbon }) 
{
  const img = [
    "treehugger_badgeimage.png",
    "ecofriend_badge.png",
    "consciousearthling_badge.png",
    "planetally_badgeimage.png",
    "zerowasteadvocate_badgeimage.png",
    "oceanpatrol_badgeimage.png",
    "guardiansofthereefs_badgeimage.png",
    "climatefighter_badgeimage.png",
    "gretathunberg_badge.png"

  ];
  const badges = [
    { name: "Tree hugger", description:"", got: 385, need:7 ,img: img[0]},
    { name: "Eco-friend", description:"", got: 389, need: 6, img: img[1]},
    { name: "Conscious Earthling", description:"", need: 180, got: 395, img: img[2]},
    { name: "Planet ally", description:"", got: 575, need: 100, img: img[3]},
    { name: "Zero waste advocate", description:"",got: 675, need:200, img: img[4]},
    { name: "Ocean Patrol", description:"", got: 875, need:312, img: img[5]},
    { name: "Guardian of reefs", description:"", got: 1187, need: 406, img: img[6]},
    { name: "Climate fighter", description:"", got: 1593, need:407, img: img[7]},
    { name: "Greta Thunberg", description:"", got: 2, img: img[8]},
    
  ];
  return (
    <div>
      <Grid container direction="column" spacing={40}>
            <Grid
              item
              xs={1}
              md={5}
              lg={10}
            >
     {(carbon >= 385) ?
          <>         
      {badges.map((data, idx) => (
          <> 
          
          <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                  <img src={data.img} alt="mascot" width="150" height="150"></img>
                  <h2 style={{color:'green'}}>{data.name}</h2>
                  <strong><p>{data.got} Carbon Saved</p></strong>
                  <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name}. Save {data.need} kg more of carbon to unlock the </span>
                  <span>next badge.</span>
          </Card>
          </> 
          ))} 
          </>
          :
          <>
          <span style={{ fontSize:"30px"}}> Save 385 kg of CO2 to earn your first badge</span>
          
          </> 
      }  
     
      </Grid>
          </Grid>
    </div>
  );
}

export default Badges;
