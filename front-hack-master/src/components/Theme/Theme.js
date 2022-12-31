import React, { useState } from "react";
import Business from "./Business";
import Informative from "./Informative";

import "./theme.css";

import themeImg from '../assets/themes.png';

export default function Theme() {
  const [option, setOption] = useState("business");
  return (
    <div className="theme-section" id="theme">
      <div className="container">
        <h2 className="heading">
          Our <span>Themes</span>
        </h2>
        <div className="theme-content">
          <div className="col-left">
            <div
              className={option === "business" ? "item active" : "item"}
              onClick={() => setOption("business")}
            >
              Business Landing Site
            </div>
            <div
              className={option === "information" ? "item active" : "item"}
              onClick={() => setOption("information")}
            >
              Informative site
            </div>
          </div>

          <div className="col-right" id="column">
            {option === "business" && <Business />}
            {option === "information" && <Informative />}
          </div>
        </div>
        <img src={themeImg} alt='themebg' className="theme-img" />
      </div>
    </div>
  );
}
