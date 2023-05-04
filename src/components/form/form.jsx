import React from "react";
import "./form.styles.css";
import { useToggle } from "../../hooks/use-toggle";

const Form = ({ hideForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    hideForm();
  };
  return (
    <div id="form-column">
      <form onSubmit={handleSubmit} id="form">
        <div id="form-fields-grid" className="form-fields-grid">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="input-field"
            pattern="^((?!gmail).)*$"
            required
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="input-field"
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            pattern="[0-9]{10}"
            className="input-field"
            required
          />
          <select
            name="help-option"
            id="help-option"
            className="input-field"
            required
          >
            <option value="" disabled selected hidden>
              How We Can Help You?
            </option>
            <option value="sales">Sales</option>
            <option value="press">Press</option>
            <option value="Support">Support</option>
            <option value="Demo">Demo</option>
          </select>
          <input type="submit" id="submit-button" className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default Form;
