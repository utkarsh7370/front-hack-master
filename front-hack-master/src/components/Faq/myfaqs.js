import React, { useState } from "react";
import "./faq.css";

function Myfaqs({ data }) {
  const [show, setShow] = useState(false);
  return (
    <div className="qbox">
      <div className="question">
        {data.question}
        <span onClick={() => setShow(!show)}>{show ? "-" : "+"}</span>
      </div>
      <div className={show ? "answer" : ""}>{show && data.answer}</div>
    </div>
  );
}

export default Myfaqs;
