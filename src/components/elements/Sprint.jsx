import React from "react";

const Sprint = () => {
  return (
    <div className="Sprint-section py-5 bg-dark d-none d-md-block">
      <div className="container">
        <div className="row">
          <h2>
            IT IS YOUR DIVINE RIGHT TO HAVE FULL VISIBILITY INTO PROGRESS ACROSS
            A SPRINT
          </h2>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card-1-report">
              <div className="weeekly-report">
                <h3>
                  <span className="text-white">Weekly reports</span> keep you
                  all-knowing
                </h3>
                <p>
                  you’ll get a list of tasks your developer has conquered as
                  well as total time dedicated to your project to date.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-2-report">
              <div className="weeekly-support">
                <h3>
                  Seek and ye shall find
                  <span className="text-white">on-the-spot support</span>
                </h3>
                <p className="mt-2 mt-md-3">
                  to keep your project on track and destined for greatness,
                  we’re only an email away.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2 mt-md-5">
          <div className="d-flex flex-wrap align-items-center">
            <div className="content-btn mt-2 mt-md-0">
              <a href="/" className="custom-btn text-decoration-none">
                restore my faith
              </a>
            </div>
            <div className="account-manager d-flex flex-wrap align-items-center mx-2 mx-md-5 mt-3 mt-md-0">
              <img src="assets/pic-account-manager.svg" alt="" />
              <div className="dev mx-2 mx-md-5 text-white">
                <p className="mb-0">
                  Account manager <br />
                  <span className="color-a9ff03">Kate</span> is online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sprint;
