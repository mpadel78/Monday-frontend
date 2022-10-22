import React,{useEffect,useState} from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Popups from "../Popups/Popups";

function Badges({ carbon, setBadge }) 

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
    { name: "Tree Hugger", description:"", got: 3, need:7 ,img: img[0]},
    { name: "Eco-friend", description:"", got: 5, need: 6, img: img[1]},
    { name: "Conscious Earthling", description:"", got: 10, need: 180, img: img[2]},
    { name: "Planet Ally", description:"", got: 15, need: 100, img: img[3]},
    { name: "Zero Waste Advocate", description:"",got: 20, need:200, img: img[4]},
    { name: "Ocean Patrol", description:"", got: 30, need:312, img: img[5]},
    { name: "Guardian of Reefs", description:"", got: 40, need: 406, img: img[6]},
    { name: "Climate Fighter", description:"", got: 50, need:407, img: img[7]},
    { name: "Greta Thunberg", description:"", got: 60, img: img[8]},

    useEffect(() => {
  
      if (carbon >=3 && carbon < 5)
      {
        setStatus("1");
      }
      else if (carbon >= 5 && carbon < 10)
      {
        setStatus("2");
      }
      else if (carbon >= 10 && carbon < 15)
      {
        setStatus("3");
      }
      else if (carbon >= 15 && carbon < 20)
      {
        setStatus("4");        
      }
      else if (carbon >= 20 && carbon < 30)
      {
        setStatus("5");
      }
      else if (carbon >= 30 && carbon < 40)
      {
        setStatus("6");
      }
      else if (carbon >= 40 && carbon < 50)
      {
        setStatus("7");
      }
      else if (carbon >= 50 && carbon < 60)
      {
        setStatus("8");
      }
      else if (carbon >= 60)
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
              <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'20%', height:'90%'}}>
                          <img src={data.img} alt="mascot" width="150" height="150"></img>
                          <h2 style={{color:'green'}}>{data.name}</h2>
                          <strong><p>{data.got} Kg Carbon Saved</p></strong>
                          <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                          <span>next badge.</span>
              </Card>
            )}
             {badges.slice(2,9).map((data) =>       
                                    <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                              <div className="overlay">
                                                <img  className="blur" src={data.img} alt="mascot" width="150" height="150" />
                                                <h2 style={{color:'green'}}>{data.name}</h2>
                                                <strong><p>{data.got} kg Carbon Saved</p></strong>
                                                <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                                <span>next badge.</span>
                                              </div>
                                    </Card>
                                  )}
          </div>
      ) : (status.includes("2")) ? (
        <div>  
            {badges.slice(0,2).map((data) =>       
              <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                          <img src={data.img} alt="mascot" width="150" height="150"></img>
                          <h2 style={{color:'green'}}>{data.name}</h2>
                          <strong><p>{data.got} Kg Carbon Saved</p></strong>
                          <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                          <span>next badge.</span>
              </Card>
            )}
             {badges.slice(3,9).map((data) =>       
                                    <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                              <div className="overlay">
                                                <img className="blur" src={data.img} alt="mascot" width="150" height="150" />
                                                <h2 style={{color:'green'}}>{data.name}</h2>
                                                <strong><p>{data.got} kg Carbon Saved</p></strong>
                                                <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                                <span>next badge.</span>
                                              </div>
                                    </Card>
                                  )}
          </div>
        ) : (status.includes("3")) ? (
          <div>  
              {badges.slice(0,3).map((data) =>       
                <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                            <img src={data.img} alt="mascot" width="150" height="150"></img>
                            <h2 style={{color:'green'}}>{data.name}</h2>
                            <strong><p>{data.got} Kg Carbon Saved</p></strong>
                            <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                            <span>next badge.</span>
                </Card>
              )}
               {badges.slice(3,9).map((data) =>       
                                    <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                              <div className="overlay">
                                                <img className="blur" src={data.img} alt="mascot" width="150" height="150" />
                                                <h2 style={{color:'green'}}>{data.name}</h2>
                                                <strong><p>{data.got} kg Carbon Saved</p></strong>
                                                <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                                <span>next badge.</span>
                                              </div>
                                    </Card>
                                  )}
            </div>
            ) : (status.includes("4")) ? (
              <div>  
                  {badges.slice(0,4).map((data) =>       
                    <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                <img src={data.img} alt="mascot" width="150" height="150"></img>
                                <h2 style={{color:'green'}}>{data.name}</h2>
                                <strong><p>{data.got} Kg Carbon Saved</p></strong>
                                <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                <span>next badge.</span>
                    </Card>
                  )}
                   {badges.slice(4,9).map((data) =>       
                                    <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                              <div className="overlay">
                                                <img className="blur" src={data.img} alt="mascot" width="150" height="150" />
                                                <h2 style={{color:'green'}}>{data.name}</h2>
                                                <strong><p>{data.got} kg Carbon Saved</p></strong>
                                                <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                                <span>next badge.</span>
                                              </div>
                                    </Card>
                                  )}
                </div>
                ) : (status.includes("5")) ? (
                  <div>  
                      {badges.slice(0,5).map((data) =>       
                        <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                    <img src={data.img} alt="mascot" width="150" height="150"></img>
                                    <h2 style={{color:'green'}}>{data.name}</h2>
                                    <strong><p>{data.got} kg Carbon Saved</p></strong>
                                    <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                    <span>next badge.</span>
                        </Card>
                      )}
                       {badges.slice(5,9).map((data) =>       
                                    <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                              <div className="overlay">
                                                <img className="blur" src={data.img} alt="mascot" width="150" height="150" />
                                                <h2 style={{color:'green'}}>{data.name}</h2>
                                                <strong><p>{data.got} kg Carbon Saved</p></strong>
                                                <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                                <span>next badge.</span>
                                              </div>
                                    </Card>
                                  )}
                    </div>
                    ) : (status.includes("6")) ? (
                      <div>  
                          {badges.slice(0,6).map((data) =>       
                            <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                        <img src={data.img} alt="mascot" width="150" height="150"></img>
                                        <h2 style={{color:'green'}}>{data.name}</h2>
                                        <strong><p>{data.got} kg Carbon Saved</p></strong>
                                        <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                        <span>next badge.</span>
                            </Card>
                          )}
                           {badges.slice(6,9).map((data) =>       
                                    <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                              <div className="overlay">
                                                <img className="blur" src={data.img} alt="mascot" width="150" height="150" />
                                                <h2 style={{color:'green'}}>{data.name}</h2>
                                                <strong><p>{data.got} kg Carbon Saved</p></strong>
                                                <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                                <span>next badge.</span>
                                              </div>
                                    </Card>
                                  )}
                        </div>
                        ) : (status.includes("7")) ? (
                          <div>  
                              {badges.slice(0,7).map((data) =>       
                                <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                            <img src={data.img} alt="mascot" width="150" height="150"></img>
                                            <h2 style={{color:'green'}}>{data.name}</h2>
                                            <strong><p>{data.got} kg Carbon Saved</p></strong>
                                            <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                            <span>next badge.</span>
                                </Card>
                              )}

                              {badges.slice(7,9).map((data) =>       
                                    <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                              <div className="overlay">
                                                <img className="blur" src={data.img} alt="mascot" width="150" height="150" />
                                                <h2 style={{color:'green'}}>{data.name}</h2>
                                                <strong><p>{data.got} kg Carbon Saved</p></strong>
                                                <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                                <span>next badge.</span>
                                              </div>
                                    </Card>
                                  )}
                            </div>
                            ) : (status.includes("8")) ? (
                              <div>  
                                  {badges.slice(0,8).map((data) =>       
                                    <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                                <img src={data.img} alt="mascot" width="150" height="150"></img>
                                                <h2 style={{color:'green'}}>{data.name}</h2>
                                                <strong><p>{data.got} kg Carbon Saved</p></strong>
                                                <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                                <span>next badge.</span>
                                    </Card>
                                  )}
                                  {badges.slice(8,9).map((data) =>       
                                    <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                              <div className="overlay">
                                                <img className="blur" src={data.img} alt="mascot" width="150" height="150" />
                                                <h2 style={{color:'green'}}>{data.name}</h2>
                                                <strong><p>{data.got} kg Carbon Saved</p></strong>
                                                <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                                <span>next badge.</span>
                                              </div>
                                    </Card>
                                  )}
                                </div>
                                ) : (status.includes("9")) ? (
                                  <div>  
                                      {badges.slice(0,9).map((data) =>       
                                        <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                                    <img src={data.img} alt="mascot" width="150" height="150" />
                                                    <h2 style={{color:'green'}}>{data.name}</h2>
                                                    <strong><p>{data.got} kg Carbon Saved</p></strong>
                                                    <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                                    <span>next badge.</span>
                                        </Card>
                                      )}
                                    </div>
                                    ) : (
                                  <div>  
                                      {badges.slice(0,9).map((data) =>       
                                        <Card style={{display: "inline-block", flexDirection:'column', textAlign:'center', padding:'6px 6px', marginLeft:'10px', width:'294px', height:'402px'}}>
                                                  <div className="overlay">
                                                    <img className="blur" src={data.img} alt="mascot" width="150" height="150" />
                                                    <h2 style={{color:'green'}}>{data.name}</h2>
                                                    <strong><p>{data.got} kg Carbon Saved</p></strong>
                                                    <span style={{whiteSpace: 'normal'}}>Congrats, you have earned the {data.name} badge. Save {data.need} kg more of carbon to unlock the </span>
                                                    <span>next badge.</span>
                                                  </div>
                                        </Card>
                                      )}
                                    </div>)
      }  
     
      </Grid>
          </Grid>
    </div>
  );
}

export default Badges;
