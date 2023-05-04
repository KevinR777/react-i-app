import React from "react";
import Banner from "../../components/banner/banner";
import Form from "../../components/form/form";
import ContactInfo from "../../components/contact-info/contact-info";
import "./contact-container.styles.css";

const ContactContainer = () => {
  const companyName = "Company Name";
  const contactUsText = "Contact Us";
  const contactUsDescription = "Please provide some information to get started";

  return (
    <div id="contact-container">
      <Banner message="Learn more about our latest features" />
      <h1 className="company-header" id="company-header">
        {companyName}
      </h1>
      <div id="contact-container" className="contact-container">
        <h2>{contactUsText}</h2>
        <p>{contactUsDescription}</p>
        <div className="contact-body" id="contact-body">
          <Form />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
