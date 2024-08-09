"use client"
import Link from "next/link";
import DiscordStatus from "/components/DiscordStatus.js"

export default function Home() {

  return (
    <>

      <div className="flex justify-center items-center min-h-screen" >
        <Link href={"https://github.com/SujalAgre"} target="_blank">My Discord Status:</Link> 
        <div className="w-4 mt-1 ml-1">
           <DiscordStatus  />
        </div>
      </div>

    </>

  );

}

