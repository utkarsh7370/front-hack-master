import React from "react";
import "./About.css";
import aboutSide from '../assets/aboutSide.png';

export default function About() {
  return (
    <>
      <section className="about_bg" id="about">
        <div class="container">
          <div class="row">
            <div class="abt-left col-lg-6 col-md-12 col-10 offset-1 offset-lg-0">
              {/* About Video Here */}
              <img className="abt-img" src={aboutSide} alt="abtImg" />
              <div className="abt-glow"></div>
            </div>

            <div class="col-lg-6 col-md-12 col-12 about-div">
              <h1 className="heading about">
                About Front-<span>Hack</span>
              </h1>

              <h5 className="about-paragraph">
                It is a front end web development competition for all the learners out
                there who aspire to shape their creativity into websites. This event is designed
                to boost your learning of basic web development through a more practical approach,
                something which our current education system lacks.
                <br />
                There will also be a series of Technical Webinars where who will get advices and learn
                from industry experts.
                <br />
                Participate for a better learning experience. Participate to showcase your skills.
                <br />
                <br />
                <a href="https://forms.gle/8kFNfoj7u3JD2EHR7" target="_BLANK" style={{ color: "#FFFFFF" }}>
                  <strong>Register Now!</strong>
                </a>
              </h5>

              <h3 className="about-date">15 MAY - 30 JULY</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
