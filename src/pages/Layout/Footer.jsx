import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className="footer-section pt-3 pt-md-5">
      <div className="container">
        <div className="row mb--2 mb-md-5">
          <div className="col-md-7">
            <h3 className='text-white'><span className='color-a9ff03'>2022 GOAL:</span> BECOME THE MAIN SOURCE OF INCOME FOR 1000 ENGINEERS</h3>
            <h5 className='text-white'>We document every step. Subscribe to lurk.
            </h5>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Enter Your Email" aria-label="Search" />
              <button className="btn btn-subscribe" type="submit">subscribe</button>
            </form>
          </div>
          <div className="col-md-5 mt-5 mt-md-0">
            <div className="social-icons">
              <ul className='p-0'>
                <li>
                  <a href="/">
                    <FaFacebookF /></a>
                </li>
                <li>
                  <a href="/"><BsTwitter /></a>
                </li>
                <li>
                  <a href="/"><RiInstagramFill /></a>
                </li>
                <li>
                  <a href="/"><FaLinkedinIn /></a>
                </li>
              </ul>




            </div>
          </div>
        </div>
      </div>

      <div className="footer-menu pty-3 py-md-5">
        <div className="container">
        <ul className='p-0 d-flex flex-wrap justify-content-between'>
          <li><a href="/">terms of use</a></li>
          <li><a href="/">privacy policy</a></li>
          <li><a href="/">job descriptions</a></li>
          <li><a href="/">hire devs</a></li>
          <li><a href="/">faq</a></li>
          <li><a href="/">careers</a></li>
        </ul>
        </div>
      </div>

      <div className="copyright py-2">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between">
              <div className="footer-logo d-flex align-items-center">
                <img src="assets/logo-footer.svg" className='img-fluid' alt="" />
              </div>
              <div className="copyright text-white py-3 text-center">
                <p className='mb-0'>copyright © 2023 lemon.io, all rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer