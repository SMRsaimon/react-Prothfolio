import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithubSquare, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer-container">
        <div className="row">
          <div className="col-12 pt-5 d-flex justify-content-center">
            <div className="social-container">
              <h4 className="social-heading text-center"> SOCIAL MEDIA</h4>
              <div className="mx-auto socializer a sr-32px sr-squircle-2 sr-zoom sr-fluid sr-font-lg sr-icon-white sr-sw-2 sr-pad">
                <span className="sr-facebook sr-text-hover">
                  <a href="https://www.facebook.com/profile.php?id=100007366064691" rel="noReferrer" target="_blank" title="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <span class="text">Facebook</span>
                </span>

                <span className="sr-github sr-text-hover">
                  <a rel="noReferrer" href="https://github.com/SMRsaimon" target="_blank" title="Github">
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </a>
                  <span class="text">Github</span>
                </span>
                <span className="sr-instagram sr-text-hover">
                  <a rel="noReferrer" href="https://instagram.com" target="_blank" title="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>

                  <span class="text">Instagram</span>
                </span>

                <span className="sr-linkedin sr-text-hover">
                  <a rel="noReferrer" href="https://www.linkedin.com/in/sultan-mahmud-44069a20b/" target="_blank" title="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <span class="text">linkedin</span>
                </span>
              </div>
            </div>
          </div>
          <div className=" col-12 d-flex justify-content-center copyrights pt-5">
            <p className="para text-center">
              Copyright ©2021 All rights reserved | DESIGN && Build BY &nbsp; <span className="brandName">SULTAN MAHMUD</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
