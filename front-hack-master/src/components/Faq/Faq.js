import React, { useState } from "react";
import "./faq.css";
import { question1, question2 } from "./faq-api";
import Myfaqs from "./myfaqs";
export default function Faq() {
  const [leftdata, setleftdata] = useState(question1);
  const [rightdata, setrightdata] = useState(question2);
  return (
    <div className="faq-section" id="faq">
      <div className="container">
        <h1 className="heading">
          FAQ<span>S</span>
        </h1>
        <div className="main-section">
          <div className="qgroup">
            <div className="left-col">
              {leftdata.map((currdata) => {
                const { id } = currdata;
                return <Myfaqs key={id} data={currdata} />;
              })}
            </div>
          </div>
          <div className="qgroup">
            <div className="right-col">
              {rightdata.map((currdata) => {
                const { id } = currdata;
                return <Myfaqs key={id} data={currdata} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
