import React from "react";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SocialIconLink({ url, icon, label }) {
    return (
      <a className="social-icons" href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {icon}
      </a>
    );
  }
  
export default function Appbar() {
    return (
        <div className="app-bar">
            <SocialIconLink url="https://twitter.com/Kalana_indusara" icon={<FontAwesomeIcon icon={faTwitterSquare}/>} label="Twitter" />
            <SocialIconLink url="https://www.facebook.com/profile.php?id=100080024841570" icon={<FontAwesomeIcon icon={faFacebookSquare}/>} label="Facebook" />
            <SocialIconLink url="https://www.instagram.com/kalana_irl/" icon={<FontAwesomeIcon icon={faInstagramSquare}/>} label="Instagram" />
            <SocialIconLink url="https://github.com/kalanarathnayak" icon={<FontAwesomeIcon icon={faGithubSquare}/>} label="Github" />
        </div>
    );
}