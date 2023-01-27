import React from 'react'

const Budget = () => {
    return (
        <div className='Budget-section bg-dark py-3 py-md-5'>
            <div className="container">
                <div className="row">
                    <h2>YOUR BUDGET WON’T BURST INTO FLAMES BEFORE YOU’VE EVEN BEGUN</h2>
                    <p>// because lemon is made for startups</p>
                    <div className="col-md-6">
                        <div className="card1-bg p-3 p-md-5 position-relative">

                            <h3>STARTUP PLAN</h3>
                            <h5>$45 to $80 / hour</h5>

                            <ul className='mt-3 mt-md-5'>
                                <li>100s of developers available</li>
                                <li>Custom Miraculous Matching™</li>
                                <li>Weekly reporting</li>
                                <li>Developer time tracking</li>
                                <li>Full-time and part-time available</li>
                                <li>On-demand support</li>
                                <li>24-hr matching</li>
                                <li>Replacement guarantee</li>
                            </ul>
                            <div className="pegion-icon position-absolute">
                                <img src="assets/card1-startup-plan.png" className='img-fluid' width={150} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card2-bg p-3 p-md-5 position-relative">

                            <h3>ADD-A-CTO PLAN</h3>
                            <h5>Custom pricing</h5>

                            <ul className='mt-3 mt-md-5'>
                                <li>100s of developers available</li>
                                <li>Custom Miraculous Matching™</li>
                                <li>Weekly reporting</li>
                                <li>Developer time tracking</li>
                                <li>Full-time and part-time available</li>
                                <li>On-demand support</li>
                                <li>24-hr matching</li>
                                <li>Replacement guarantee</li>
                            </ul>
                            <div className="text-bg position-absolute">
                                <p className='text-rotate'>+ on-demand cto</p>
                            </div>

                            <div className="pegion-icon position-absolute">
                                <img src="assets/pegion-plus-cto-plan.png" className='img-fluid' width={150} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mt-md-5">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="content-btn mt-5 mt-md-0">
                    <a href="/" className="custom-btn text-decoration-none">
                      chat with us now
                    </a>
                  </div>
                  <div className="account-manager d-flex flex-wrap align-items-center mx-2 mx-md-5 mt-5 mt-md-0">
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
    )
}

export default Budget