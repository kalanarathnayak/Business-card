import React from "react";
import profile_pic from "../assets/profile img.png";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function Info() {
    const handleClick = () => {
        window.location.href = `mailto: kalana.kalanarathnayaka@outlook.com`;
      };
    return (
        <div className="info">
            <img src={profile_pic} alt="profile picture" className="info--profile-pic"/>
            <div className = "info--container">
                <h1 className="info--name">Kalana Ratnayake</h1>
                <h2 className="info--title">Full-Stack Developer</h2>
                <h5 className="info--location">Colombo, SL</h5>
                <div className="info--social-buttons">
                    <button onClick={handleClick} className="info--social-buttons--email">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>Email</p>
                    </button>
                    <a href="https://www.linkedin.com/in/kalana-indusara-ratnayake-37745b20a" target="_blank" rel="noopener noreferrer">
                        <button className="info--social-buttons--linkedin">
                            <FontAwesomeIcon icon={faLinkedin} />
                            <p>LinkedIn</p>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}