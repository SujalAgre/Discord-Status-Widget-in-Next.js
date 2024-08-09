# Discord Status Widget in Next.js

Create a new folder named components in the project root directory.
then create a new component and name it "DiscordStatus.js" and paste the following inside it

```
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
```

Now inside "page.js" file. You will need to import the component created above.

Paste the following at the top of the code inorder to import the component
```
import DiscordStatus from "/components/DiscordStatus.js"
```

Use "DiscordStatus" to use the component.

If you want the widget to show your own status, just [join this Discord server](https://discord.gg/UrXF2cfJ7F)
and inside "DiscordStatus.js" put your discord user id here ```https://api.lanyard.rest/v1/users/[your_id_here]```

[Learn more](https://github.com/Phineas/lanyard?tab=readme-ov-file) about the api.
