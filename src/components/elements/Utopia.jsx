import React from "react";

const Utopia = () => {
  return (
    <div className="Utopia-section bg-dark py-5">
      <div className="container">
        <div className="row">
          <h2 className="text-white">
            A UTOPIA OF <br /> OUTSTAFFED <br /> SOFTWARE ENGINEERS
          </h2>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 mt-5">
            <div className="pic-combination position-relative">
              <div className="right-hand position-absolute">
                <img
                  src="assets/pigeon-hand-right.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="pigeon position-relative">
                <img
                  src="assets/img-pigeon.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="left-hand position-absolute">
                <img
                  src="assets/pigeon-hand-left.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="skill position-absolute">
                <img
                  src="assets/skills-label.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="pic-combination position-relative">
              <div className="beard position-relative">
                <img src="assets/img-beard.webp" className="img-fluid" alt="" />
              </div>
              <div className="beard-hand position-absolute">
                <img src="assets/beard-hand.svg" className="img-fluid" alt="" />
              </div>
              <div className="communication position-absolute">
                <img
                  src="assets/communication-label.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="dog-pic-combination position-relative">
              <div className="dog-pic position-relative">
                <img src="assets/img-dog.webp" className="img-fluid" alt="" />
              </div>
              <div className="dog-hand-left position-absolute">
                <img src="assets/dog-hand-left.svg" className="img-fluid" alt="" />
              </div>
              <div className="dog-hand-right position-absolute">
                <img src="assets/dog-hand-right.svg" className="img-fluid" alt="" />
              </div>
              <div className="communication position-absolute">
                <img
                  src="assets/dog-ambitions-label.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="rex-pic-combination position-relative">
              <div className="rex-pic position-relative">
                <img src="assets/img-t-rex.webp" className="img-fluid" alt="" />
              </div>
              <div className="rex-hand-left position-absolute">
                <img src="assets/rex-hand-left.svg" className="img-fluid" alt="" />
              </div>
              <div className="rex-hand-right position-absolute">
                <img src="assets/rex-hand-right.svg" className="img-fluid" alt="" />
              </div>
              <div className="communication position-absolute">
                <img
                  src="assets/rex-awesomeness-label.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utopia;
