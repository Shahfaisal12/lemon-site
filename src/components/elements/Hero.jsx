import React from "react";

const Hero = () => {
  return (
    <div className="Hero-section py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="content-sec">
              <h1 className="text-uppercase">Behold! The almighty devs</h1>
              <p className="content-para text-uppercase mt-3">
                you’ve been searching for
              </p>
              <p className="content-desc">
                "// Why squander time and money on developers who aren’t perfect
                for your startup? Let Lemon match you with engineers that can
                transform your vision into reality — diabolically fast"
              </p>

              <div className="content-btn mt-2 mt-md-5">
                <a href="/" className="custom-btn text-decoration-none">
                  Match me with a dev
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center mt-5 mt-md-0">
            <img
              src="https://lemon.io/wp-content/themes/lemon/assets/images/content/home_new/webp/illustration-hero-main.webp"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
