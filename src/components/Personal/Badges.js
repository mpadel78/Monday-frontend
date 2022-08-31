import React,{useEffect,useState} from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

function Badges({ carbon }) 

{
  const [status, setStatus] = useState("0");

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
    { name: "Conscious Earthling", description:"", got: 395, need: 180, img: img[2]},
    { name: "Planet ally", description:"", got: 575, need: 100, img: img[3]},
    { name: "Zero waste advocate", description:"",got: 675, need:200, img: img[4]},
    { name: "Ocean Patrol", description:"", got: 875, need:312, img: img[5]},
    { name: "Guardian of reefs", description:"", got: 1187, need: 406, img: img[6]},
    { name: "Climate fighter", description:"", got: 1593, need:407, img: img[7]},
    { name: "Greta Thunberg", description:"", got: 2000, img: img[8]},

    useEffect(() => {
  
      if (carbon >=385)
      {
        setStatus("1");
      }
      else if (carbon >= 389)
      {
        setStatus("2");
      }
      else if (carbon >= 395)
      {
        setStatus("3");
      }
      else if (carbon >= 575)
      {
        setStatus("4");        
      }
      else if (carbon >= 675)
      {
        setStatus("5");
      }
      else if (carbon >= 875)
      {
        setStatus("6");
      }
      else if (carbon >= 1187)
      {
        setStatus("7");
      }
      else if (carbon >= 1593)
      {
        setStatus("8");
      }
      else if (carbon >= 2000)
      {
        setStatus("9");
      }
      else 
      {
        
      }
    
    }, [carbon])
    
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
     {(status.includes("1")) ? (
          <div>  
            {badges.slice(0,1).map((data) =>       
              <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                          <img src={data.img} alt="mascot" width="150" height="150"></img>
                          <h2 style={{color:'green'}}>{data.name}</h2>
                          <strong><p>{data.got} Carbon Saved</p></strong>
                          <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name}. Save {data.need} kg more of carbon to unlock the </span>
                          <span>next badge.</span>
              </Card>
            )}
          </div>
      ) : (status.includes("2")) ? (
        <div>  
            {badges.slice(0,2).map((data) =>       
              <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                          <img src={data.img} alt="mascot" width="150" height="150"></img>
                          <h2 style={{color:'green'}}>{data.name}</h2>
                          <strong><p>{data.got} Carbon Saved</p></strong>
                          <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name}. Save {data.need} kg more of carbon to unlock the </span>
                          <span>next badge.</span>
              </Card>
            )}
          </div>
        ) : (
          <>
          <span style={{ fontSize:"30px"}}> Save 385 kg of CO2 to earn your first badge</span>
          
          </> 
      )
      }  
     
      </Grid>
          </Grid>
    </div>
  );
}

export default Badges;
