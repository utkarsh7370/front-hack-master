import React from "react";
import "./theme.css";

export default function Business() {
  return (
    <div className="business">
      <h1>Business Landing Site</h1>
      <div className="row">
        <p>
          A standalone web page that potential customers can “land” on when they click through from an
          email, ad, or other digital location. A landing page aims to capture information from contacts
          in exchange for something of value, such as a retail offer code or business-to-business (B2B)
          insights in the form of a white paper.
        </p>
        <ul>
          <li>
            <b>Service Landing Page</b>
            <p>
              Your are a software consultancy company which provides services related to
              Web Development, App Development, Game Development, Web Design, SEO and many more.
              Develop a landing page for your business giving all informations including serices,
              prices specification, client review etc.
            </p>
          </li>
          <li>
            <b>Application Landing Page</b>
            <p>
              Create a landing page for an Application that is published on Google Play Store.
              The Application may be a chat app, a photo editing app or maybe just a note taking app
              it's upto your imagination. Tell all about your app in the site and tell people to download it. 
            </p>
          </li>
          <li>
            <b>Resturant Website</b>
            <p>
              You have to develop a landing page for a renowned Resturant chain.
              They have their outlets all over India. You have to advertise their 
              Resturant.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
