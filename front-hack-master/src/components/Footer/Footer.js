import React from "react";
import './Footer.css'
import startupclub from "../assets/startupclub.png";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="row  justify-content-center">
          <div className="container my-2">
            <div className="row m-0">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 logo-part">
                    <div className="row">
                      <div className="">
                        <img src={startupclub} width="200" height="100" alt="club logos" />
                        <br />
                        <small>Organized by</small>
                        <h3 className="my-2">The Startup Club by MCKVIE</h3>
                        <h3 className="my-2">The Coders Club by TSC</h3>

                      </div>
                      <div className="row mt-4">
                        {/* <div className="order-sm-1 order-3 align-self-end">
                          <p className="social text-muted mb-0 pb-0 bold-text">
                            <span className="">
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <span className="mx-2">
                              <i
                                className="fa fa-linkedin-square"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <span className="mx-2">
                              <i
                                className="fa fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <span className="mx-2">
                              <i
                                className="fa fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 align-self-end text-lg-right">
                    <div className="my-4">
                      <a href="https://forms.gle/8kFNfoj7u3JD2EHR7" className="btn-footer">
                        {" "}
                        Register{" "}
                      </a>
                      <br />
                      <a href="https://t.me/fronthack" className="btn-footer">
                        {" "}
                        Join Telegram Group{" "}
                      </a>
                    </div>
                    <div className="row">
                      <h5> For Queries </h5>
                      <p>
                        Email Us:{" "}
                        <a href="mailhref:fronthack@thestartupclub.in">
                        fronthack@thestartupclub.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="gotopbtn" href="#header">
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
        <hr />
        <div className="row">
          <small className="rights text-center mb-2">
            Designed with 💙 by{" "}
            <a href="https://thestartupclub.in">The Startup Club</a>
          </small>
        </div>
        {/* </div> */}
        {/* </div> */}
      </footer>
    </>
  );
}
