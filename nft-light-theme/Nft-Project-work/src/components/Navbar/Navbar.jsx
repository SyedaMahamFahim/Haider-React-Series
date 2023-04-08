import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white mb-3 fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex" href="/">
            <h3 style={{ fontWeight: "bold" }}>NFT project</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav" style={{ marginLeft: "4%" }}>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark"
                    href="/"
                    style={{
                      marginRight: "40px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    routerlink="/"
                    fragment="about"
                    className="nav-link text-dark"
                    href="/#about"
                    style={{
                      marginRight: "40px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    routerlink="/"
                    fragment="features"
                    className="nav-link text-dark"
                    href="/#features"
                    style={{
                      marginRight: "40px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    routerlink="/"
                    fragment="nfts"
                    className="nav-link text-dark"
                    href="/#nfts"
                    style={{
                      marginRight: "40px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Top NFTs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    routerlink="/"
                    fragment="team"
                    className="nav-link text-dark"
                    href="/#team"
                    style={{
                      marginRight: "40px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    routerlink="/"
                    fragment="contact"
                    className="nav-link text-dark"
                    href="/#contact"
                    style={{
                      marginRight: "40px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Contact
                  </a>
                </li>
                {/**/}
              </ul>
              <div className="col-sm d-flex align-items-center justify-content-end d-none-nav">
                <button
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    backgroundColor: "rgb(45, 115, 255)",
                    color: "white",
                    borderRadius: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Connect Wallet{" "}
                </button>
              </div>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
