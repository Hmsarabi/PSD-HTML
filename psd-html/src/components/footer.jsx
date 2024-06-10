import React from "react";

import "./CSS/footer.css";

const Footer = () => {
  return (
    <div>
      <section className="future-section">
        <div className="img-container">
          <img src="../img/5.png" alt="picture" className="img-itself" />
        </div>
        <div className="second-section">
          <div className="future-section-h1">DESIGN FOR</div>
          <div className="future-section-h2">THE FUTURE</div>
          <div className="future-section-p">
            The focus is in creating excellent digital solutions that are clear,
            user friendly, and aesthetically pleasing. The company gives
            importance to come up with simple and clear flows and systems of
            design for all users.
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-section">
          <div>
            <h3>THE COMPANY</h3>
            <ul>
              <li>New Designs</li>
              <li>Weekly Insights</li>
              <li>Collaborations</li>
            </ul>
          </div>
          <div>
            <h3>THE TEAM</h3>
            <ul>
              <li>Meet the Team</li>
              <li>Our Designers</li>
              <li>The Principals</li>
            </ul>
          </div>
          <div>
            <h3>OUR DESIGN</h3>
            <ul>
              <li>International Research</li>
              <li>Digital Solutions</li>
              <li>Innocations</li>
            </ul>
          </div>
          <div>
            <h3>LEGAL</h3>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Copyright</li>
            </ul>
          </div>
        </div>
        <div className="footer-end">
          Copyright 2021 Fashion with Ethics All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};


export default Footer;
