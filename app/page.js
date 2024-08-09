'use client';
import DiscordStatus from "@/components/DiscordStatus";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <a href="https://github.com/SujalAgre/Discord-Status-Widget-in-Next.js" target="_blank" 
        className="absolute top-4 left-4" >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      
       <p className="text-lg"> My Discord Status: </p>
       <div className='w-4 ml-1 flex items-center'><DiscordStatus /></div>
    </div>
  );
}