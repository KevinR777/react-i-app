import React from "react";
import "./footer.styles.css";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div id="footer-content" className="footer-content">
        <div id="footer-column-1" className="footer-column">
          <br />
          +1 (877) 777-7777
          <br />
          123 Main st, San Francisco, CA, 94107
        </div>
        <div id="footer-column-2" className="footer-column">
          <br />
          <b>Free Trial</b> <br /> <br />
          Azure <br /> <br />
          AWS <br /> <br />
          Google
        </div>
        <div id="footer-column-3" className="footer-column">
          <br />
          <b>Resources</b> <br /> <br />
          Terms Of Service <br /> <br />
          Privacy Policy <br /> <br />
          Support
        </div>
      </div>
    </div>
  );
};

export default Footer;
