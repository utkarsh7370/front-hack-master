import React from "react";
import './Header.css';
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <>
      <section id="header" className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid col-lg-10">
            <h1 className="navbar-brand brand heading my-1">
              {/* Front-<span>Hack</span> */}
              <img src={logo} alt="logo" width="70" height="70" style={{backgroundColor:"#fff", borderRadius:"20%"}} />
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{backgroundColor: '#fff'}}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item pe-4 pw-4">
                  <a className="links nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item pe-4 pw-4">
                  <a className="links nav-link" href="#theme">
                    Theme
                  </a>
                </li>
                <li className="nav-item pe-4 pw-4">
                  <a className="links nav-link" href="https://drive.google.com/file/d/1yPwCeCpXTiDqqbNuSOIpa6r-tCfOe9zx/view?usp=sharing" target="_blank">
                    Rules
                  </a>
                </li>
                <li className="nav-item pe-4 pw-4">
                  <a className="links nav-link" href="#webinars">
                    Webinars
                  </a>
                </li>
                <li className="nav-item pe-4 pw-4">
                  <a className="links nav-link" href="#prizes">
                    Prizes
                  </a>
                </li>
                {/* <li className="nav-item pe-4 pw-4">
                  <a className="links nav-link" href="/">
                    sponcer
                  </a>
                </li> */}
                <li className="nav-item pe-4 pw-4">
                  <a className="links nav-link" href="#faq">
                    faq
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar End Header */}

        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-10 header-div">
              {/* <Font family="Ultra"> */}
              <h1 className="brand-name heading">
                Front-<span>Hack</span>
              </h1>
              {/* </Font> */}

              <h2 className="header-paragraph">
                Join us for the Front End hackathon. Build attractive
                and userfriendly websites alongside thousands of developers,
                creators, artists, and mentors.
              </h2>
              <div className="mt-3 header-button">
                <a href="https://forms.gle/8kFNfoj7u3JD2EHR7" class="contact-btn mt-2">
                  Register Now
                </a>
                <a href="https://t.me/fronthack" class="contact-btn mt-2">
                  Join Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
