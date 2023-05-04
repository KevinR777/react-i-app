import React from "react";
import Banner from "../../components/banner/banner";
import Form from "../../components/form/form";
import ContactInfo from "../../components/contact-info/contact-info";
import { useToggle } from "../../hooks/use-toggle";
import "./contact-container.styles.css";
import Footer from "../../components/footer/footer";

const ContactContainer = () => {
  const { toggle, switchToggle } = useToggle(true);

  const companyName = "Company Name";
  const contactUsText = "Contact Us";
  const contactUsDescription = "Please provide some information to get started";
  const thankYouMsg = "Thank You! Form Submitted Successfully!";
  return (
    <div id="contact-container">
      <Banner message="Learn more about our latest features" />
      <h1 className="company-header" id="company-header">
        {companyName}
      </h1>
      {toggle ? (
        <div id="contact-container" className="contact-container">
          <h2>{contactUsText}</h2>
          <p>{contactUsDescription}</p>
          <div className="contact-body" id="contact-body">
            <Form hideForm={switchToggle} />
            <ContactInfo />
          </div>
        </div>
      ) : (
        <h1 id="thank-you-msg" className="thank-you-msg">
          {thankYouMsg}
        </h1>
      )}
      <Footer />
    </div>
  );
};

export default ContactContainer;
