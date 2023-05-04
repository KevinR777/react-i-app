import React from "react";
import "./contact-info.styles.css";

const ContactInfo = () => {
  return (
    <div id="contact-info-column" className="contact-info-column">
      <div className="info-text">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available.
      </div>
      <b className="info-text">
        Phone:
        <br />
        <b className="phone-number-text info-text">+1 (877) 777-7777</b>
      </b>
      <b className="info-text">Hours:</b>
      <div className="info-text">
        Monday - Sunday:
        <b className="info-text"> 7am - 11pm EST</b>
      </div>
    </div>
  );
};

export default ContactInfo;
