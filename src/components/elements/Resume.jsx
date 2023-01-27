import React from "react";

const Resume = () => {
    return (
        <div className="Resume-section py-3 py-md-5 bg-dark">
            <div className="container py-0 py-md-4">
                <div className="row mb-0 mb-md-5">
                    <div className="col-md-7">
                        <div className="content-sec text-white">
                            <h1 className="text-uppercase mt-5 mt-md-0">BECAUSE A GREAT RESUMÉ DOTH NOT ALWAYS BEGET A GREAT DEVELOPER</h1>
                            <p className="mt-2 mt-md-4">As a startup founder, your cup runneth over with tasks. You feel rushed to find applicants, desperate to hire and doubtful at every turn. And you lack the time to summon righteous software engineer applications from the hoards of wicked ones.</p>
                            <p className="mt-2 mt-md-4">That’s why you’re called to try Lemon for your next dev hire. When 1,000 developers step forth to join the Lemon Developerhood, only 300 are appointed. Chosen Devs endure 4 levels of judgment on the path to ascension</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src="assets/resume.webp" className="img-fluid" alt="" />
                    </div>
                </div>

                <div className="row mt-2 mt-md-5">
                    <div className="Resume-type-sec d-flex">
                        <div className="review">
                            <h3>The Resumé Review</h3>
                            <p className="k text-white">After CV and LinkedIn check, we cut devs who offer an inglorious portfolio and lack outstanding experience</p>
                        </div>
                        <div className="personal-sec">
                            <img src="assets/animation-prince.svg" className="img-fluid" alt="" />
                            <div className="personal">
                                <h3>Personal Prostration</h3>
                                <p className="k text-white">All the survivors undergo the screening call (soft skills and language proficiency check)</p>
                            </div>
                        </div>
                        <div className="hard-skill">
                            <h3>Hard Skills Check</h3>
                            <p className="k text-white">Our top devs check the remaining heroes (Heroes sent by partner companies are checked by their onsite team management)</p>
                        </div>
                        <div className="advocate">
                            <h3>The Dev’s Advocate</h3>
                            <p className="k text-white">The final reckoning! We accept those passionately committed to the startup hustle with the work ethics of a deity</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
