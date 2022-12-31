import React from "react";
import "./prizes.css";
export default function Prizes() {
  return (
    <div className="prize-section" id="prizes">
      <div className="container">
        <h1 className="heading">
          Exciting <span> Prizes</span>
        </h1>
        <div className="card-row">
          <div className="card-col">
            <div className="thecard">
              <div className="stars"></div>
            </div>
            <div className="prize-content">
              <h2>First Prize</h2>
              <div className="prizes">
                <p> • Exciting Prizes</p>
              </div>
              <div className="prizes">
                <p>• Certificates</p>
              </div>
            </div>
          </div>
          <div className="card-col">
            <div className="thecard">
              <div className="stars"></div>
            </div>
            <div className="prize-content">
              <h2>Second Prize</h2>
              <div className="prizes">
                <p>• Exciting Prizes</p>
              </div>
              <div className="prizes">
                <p>• Certificates</p>
              </div>
            </div>
          </div>
          <div className="card-col">
            <div className="thecard">
              <div className="stars"></div>
            </div>
            <div className="prize-content">
              <h2>Third Prize</h2>
              <div className="prizes">
                <p>• Exciting Prizes</p>
              </div>
              <div className="prizes">
                <p>• Certificates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
