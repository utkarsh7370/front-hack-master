import React from "react";
import './Event.css';
import Event_img from "../assets/Event_img.png";
import Workflow from "../assets/workflow.png";
import CyberImg from "../assets/cyberimg.png";
import WebDev from "../assets/webdev.png";
import WebDesign from "../assets/webdesign.png";

export default function Event() {
  return (
    <>
      <section className="event_bg" id="webinars">
        <div className="container">
          <h1 className="heading m-5">
            ONLINE<span> WEBINARS</span>
          </h1>
        </div>
        <div className="bg">
          <div className="cont">
            <div className="box">
              <img src={Workflow} alt="" />
              <div className="text">
                <p>Team Front-Hack Presents</p>
                <h2>
                  PROJECT
                  <br />
                  MANAGEMENT
                </h2>
                <p>
                  WORKFLOW
                  <br />
                  <br />
                  June 5, 2022
                  <br />
                  11:00am - 12:00 noon
                  <br />
                  <a href="https://www.youtube.com/watch?v=8Fo-wa4-VnU">Youtube Live</a> 
                </p>
              </div>
            </div>
            <div className="box">
              <img src={WebDesign} alt="" />
              <div className="text">
                <p>Team Front-Hack Presents</p>
                <h2>
                  WEB
                  <br />
                  DESIGN
                </h2>
                <p>
                  BASICS
                  <br />
                  <br />
                  <small>Tentative</small>
                  <br />
                  June 10, 2022
                  <br />
                  4:30-6:00 PM
                  <br />
                  Youtube Live
                </p>
              </div>
            </div>
          </div>
          <div className="cont text-center">
            <div className="box_down">
              <img src={WebDev} alt="" />
              <div className="text_down text_down2">
                <p>Team Front-Hack Presents</p>
                <h2>
                  WEB
                  <br />
                  DEVELOPMENT
                </h2>
                <p>
                  BEST PRACTICES
                  <br />
                  <br />
                  <small>Tentative</small>
                  <br />
                  June 11, 2022
                  <br />
                  4:30-6:00 PM
                  <br />
                  Youtube Live
                </p>
              </div>
            </div>
            <div className="box_down">
              <img src={CyberImg} alt="" />
              <div className="text_down text_down2">
                <p>Team Front-Hack Presents</p>
                <h2>
                  SECURING
                  <br />
                  WEBSITES
                </h2>
                <p>
                  FROM CYBER THREATS
                  <br />
                  <br />
                  June 13, 2022
                  <br />
                  4:30-6:00 PM
                  <br />
                  MCKVIE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
