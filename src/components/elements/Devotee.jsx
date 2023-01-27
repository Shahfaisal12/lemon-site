import React from 'react'

const Devotee = () => {
    return (
        <div className='Devotee-section bg-dark py-5'>
            <div className="container mt-5 pt-5">
                <div className="row mt-5 pt-0 pt-md-5">
                    <h2 className='mt-5 pt-5'>AND IF YOUR DEV TURNS INTO A DEVIL?
                        WE’LL BESTOW A NEW DEVOTEE ON YOU.</h2>
                    <div className="row">
                        <div className="col-md-7">
                            <p>Should your Lemon developer miss deadlines or fail to meet expectations, we’ll match you with a new developer. Without shifting your project schedule or cost. Admittedly, we’ve never had to do this. But it’s our promise. Just in case.</p>
                            <div className="content-btn mt-2 mt-md-5">
                                <a href="/" className="custom-btn text-decoration-none">
                                    chate with us now
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5 mt-5 mt-md-0">
                            <div className="img-sec">
                                <img src="assets/devotee-devil.svg" className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Devotee