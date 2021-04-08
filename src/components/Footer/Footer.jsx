import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithubSquare, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer-container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-8">
                <h2 className="foooter-h2 pt-2">About</h2>
                <p className="footer-p">
                  Working as a Professional Web Developer in Bangladesh for almost 3+ years. I have experience in all expect of web
                  development using JavaScript and PHP.
                </p>
              </div>
              <div class="col-md-4"></div>
            </div>
          </div>
          <div className="col-md-6 pt-2">
            <h1 className="social-heading"> SOCIAL MEDIA</h1>
            <div className="socializer a sr-32px sr-squircle-2 sr-zoom sr-fluid sr-font-lg sr-icon-white sr-sw-2 sr-pad">
              <span className="sr-facebook sr-text-hover">
                <a href="https://www.facebook.com/" rel="noReferrer" target="_blank" title="Facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <span class="text">Facebook</span>
              </span>

              {/* <span className="sr-googleplus sr-text-hover">
                <a href="https://plus.google.com/" rel="noReferrer" target="_blank" title="Google Plus">
                  <i class="fab fa-google-plus"></i>
                </a>
                <span class="text">Google Plus</span>
              </span> */}

              {/* <span className="sr-email sr-text-hover">
                <a
                  rel="noReferrer"
                  href="mailto:?to=&amp;subject=Free%20social%20buttons%20sharebar%20generator%20-%20Aakash%20Web&amp;body=%20-%20https%3A%2F%2Fwww.aakashweb.com%2Fapps%2Fsocial-buttons-generator%2F"
                  target="_blank"
                  title="Email"
                >
                  <i class="fa fa-envelope"></i>
                </a>
                <span class="text">Email</span>
              </span> */}

              <span className="sr-github sr-text-hover">
                <a rel="noReferrer" href="https://www.github.com/" target="_blank" title="Github">
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
              {/* <span className="sr-youtube sr-text-hover">
                <a rel="noReferrer" href="https://youtube.com/" target="_blank" title="Youtube">
                  <i class="fab fa-youtube"></i>
                </a>
                <span className="text">Youtube</span>
              </span> */}

              {/* <span className="sr-twitter sr-text-hover">
                <a rel="noReferrer" href="https://twitter.com/" target="_blank" title="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <span class="text">Twitter</span>
              </span> */}

              <span className="sr-linkedin sr-text-hover">
                <a rel="noReferrer" href="https://www.linkedin.com/" target="_blank" title="linkedin">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <span class="text">linkedin</span>
              </span>
            </div>
          </div>
        </div>
        <div className="copyrights text-center ">
          <p className="para">
            Copyright ©2020 All rights reserved | DESIGN BY
            <span>SULTAN MAHMUD SAIMON</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
