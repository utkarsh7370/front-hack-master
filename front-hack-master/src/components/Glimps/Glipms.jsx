import React from "react";
import "./glimps.css";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png";

function Glipms() {
  return (
    <div className="glimps-section">
      <div className="container">
        <h1 className="heading">
          Glimps of Previous <span>Hackathon</span>
        </h1>
        <div className="card-row">
          <div className="glimps-col">
            <div className="image_row down">
              <img src={pic1} />
            </div>
            <div className="image_row up">
              <img src={pic7} />
            </div>
          </div>
          <div className="glimps-col">
            <div className="image_row equal">
              <img src={pic2} />
            </div>
            <div className="image_row equal">
              <img src={pic4} />
            </div>
            <div className="image_row equal">
              <img src={pic5} />
            </div>
          </div>
          <div className="big-col">
            <div className="image_row up">
              <img src={pic8} />
              <div className="layer">
                <h3>EurekaThon 2021</h3>
              </div>
            </div>
            <div className="image_row down" id="last-row">
              <div className="img-col">
                <img src={pic3} />
              </div>
              <div className="img-col">
                <img src={pic6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Glipms;
