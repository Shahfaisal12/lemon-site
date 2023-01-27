import React from 'react'

const Header = () => {
  return (
    <div className="header-section bg-dark text-white">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="/"><img src='https://lemon.io/wp-content/uploads/2020/02/logo-lemon@2x.png' width='200' alt='' /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="/">blog</a>
                </li>
                <li className="nav-item mx-5">
                  <a className="nav-link text-white" href="/">for dev</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">about us</a>
                </li>
                <li className="nav-item mx-5">
                  <a className="nav-link text-white" href="/">resources</a>
                </li>
              </ul>
                <a href='/' className="btn btn-apply" type="submit">apply as dev</a>
                <a href='/' className="btn btn-talent" type="submit">hire talent</a>
                <a href='/' className="btn btn-login text-white" type="submit"><span>login</span></a>
            </div>
          </div>
        </nav>
      </div>
    </div>

  )
}

export default Header