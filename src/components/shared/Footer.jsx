import React, { useState } from "react"
import { Link } from "gatsby"

import Facebook from "../../assets/icons/social-media/facebook.svg"
import Linkedin from "../../assets/icons/social-media/linkedin.svg"
import Twitter from "../../assets/icons/social-media/pintrest.svg"
import Messenger from "../../assets/icons/social-media/messenger.svg"
import Instagram from "../../assets/icons/social-media/instagram.svg"

const Footer = () => {
  const [year] = useState(new Date().getFullYear())

  return (
    <footer
      className="footer has-background-dark has-text-white is-spaced is-fixed-bottom"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="columns ">
          <div className="column is-one-quarter">
            <div>
              <h3 className="menu-label has-text-warning is-size-5 has-text-weight-semibold">
                Programs
              </h3>
              <ul className="menu-list has-text-white">
                <li>
                  <Link
                    to="/services/for-local-consumers"
                    className="has-text-white"
                  >
                    STEM ED Research Group
                  </Link>
                </li>
                <li>
                  <Link to="/services/for-producers" className="has-text-white">
                    Professional Learning Program
                  </Link>
                </li>
                <li>
                  <Link to="/services/for-ngos" className="has-text-white">
                    Student Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/for-organizations"
                    className="has-text-white"
                  >
                    Learning and Teaching Resources
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/for-organizations"
                    className="has-text-white"
                  >
                    EduTalkAfric Radio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/for-organizations"
                    className="has-text-white"
                  >
                    Postgraduate Exchange Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/for-organizations"
                    className="has-text-white"
                  >
                    Organizational Incubation{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div>
              <h3 className="menu-label has-text-warning is-size-5 has-text-weight-semibold">
                About us
              </h3>
              <ul className="menu-list">
                <li>
                  <Link to="/about/background" className="has-text-white">
                    Our vision
                  </Link>
                </li>
                <li>
                  <Link to="/about/team" className="has-text-white">
                    Our mission
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div>
              <h3 className="menu-label has-text-warning is-size-5 has-text-weight-semibold">
                Resources
              </h3>
              <ul className="menu-list">
                <li>
                  <Link to="/contact" className="has-text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="has-text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="has-text-white">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div>
              <h3 className="menu-label has-text-warning is-size-5 has-text-weight-semibold is-size-5 has-text-weight-semibold	">
                Connect
              </h3>
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <div className="columns is-mobile">
                      <div className="column">
                        <figure className="image is-32x32">
                          <img src={Facebook} alt="github" />
                        </figure>
                      </div>
                      <div className="column">
                        <figure className="image is-32x32">
                          <img src={Linkedin} alt="linkedin" />
                        </figure>
                      </div>
                      <div className="column">
                        <figure className="image is-32x32">
                          <img src={Twitter} alt="twitter" />
                        </figure>
                      </div>
                      <div className="column">
                        <figure className="image is-32x32">
                          <img src={Messenger} alt="twitter" />
                        </figure>
                      </div>
                      <div className="column">
                        <figure className="image is-32x32">
                          <img src={Instagram} alt="twitter" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        &copy; {year} EduHubAfric
      </div>
    </footer>
  )
}

export default Footer
