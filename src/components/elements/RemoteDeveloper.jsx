import React from 'react'

const RemoteDeveloper = () => {
    return (
        <div className='Remote-developer-section bg-dark py-5'>
            <div className="container">
                <h2>RESTORE YOUR FAITH IN REMOTE DEVELOPERS</h2>
                <div className="desc-sec mt-2 mt-md-5">
                    <p>Software developers from Lemon need no keeper. You’ll get exalted programmers who onboard quickly, without sacrificing product quality. Plus, they’re as devoted to your project’s success as you are.</p>
                </div>
                <div className="row mt-3 mt-md-5">
                    <div className="col-md-6">
                        <div className="video-section1 position-relative">
                            <img src="assets/Video1.png" className='img-fluid' alt="" />
                            <div className="play-btn position-absolute">
                                <img src="assets/button-play-video.svg" className='img-fluid' alt="" />
                            </div>
                        </div>
                        <p className='mt-3 mt-md-4'>// ann, full-stack javascript developer</p>
                    </div>
                    <div className="col-md-6">
                        <div className="video-section1 position-relative">
                            <img src="assets/Video2.png" className='img-fluid' alt="" />
                            <div className="play-btn position-absolute">
                                <img src="assets/button-play-video.svg" className='img-fluid' alt="" />
                            </div>
                        </div>
                        <p className='mt-3 mt-md-4'>// roman, senior python developer</p>
                    </div>
                </div>
                <div className="content-btn mt-2 mt-md-5">
                <a href="/" className="custom-btn text-decoration-none">
                Restore my faith
                </a>
              </div>
            </div>
        </div>
    )
}

export default RemoteDeveloper