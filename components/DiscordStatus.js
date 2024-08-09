"use client"
import React, { useState, useEffect } from "react";


function DiscordStatus() {

    const [discordData, setData] = useState(null);

  useEffect(()=>{

    async function fetchDiscordData () {
  
      const response = await fetch("https://api.lanyard.rest/v1/users/414997646894301206");
      
      const data = await response.json();
          
      setData(data);
    }

    fetchDiscordData();

  },[]);
  

  const statusImages = {
    online: "/status/online.png",
    dnd: "/status/dnd.png",
    idle: "/status/idle.png",
    offline: "/status/offline.png"
  }

  console.log(statusImages.online);

  function getStatusImage(status)
  {
    return statusImages[status];
  };

    
  return(
    <>
        {discordData ? <img src={getStatusImage(discordData.data.discord_status)}/> : "Loading.." }
    </>
  );

}
export default DiscordStatus;