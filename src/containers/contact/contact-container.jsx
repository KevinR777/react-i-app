import React from "react";
import Banner from "../../components/banner/banner";
import "./contact-container.styles.css";

const ContactContainer = () => {
  const companyName = "Company Name";
  return (
    <div id="contact-container">
      <Banner message="Learn more about our latest features" />
      <div>
        <h1 className="company-header" id="company-header">
          {companyName}
        </h1>
      </div>
    </div>
  );
};

export default ContactContainer;
