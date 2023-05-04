import React from "react";
import "./form.styles.css";

const Form = () => {
  return (
    <div id="form-column">
      <form>
        <div id="form-fields-grid" className="form-fields-grid">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="input-field"
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="input-field"
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            pattern="[0-9]{10}"
            className="input-field"
          />
          <select name="help-option" id="help-option" className="input-field">
            <option value="" disabled selected hidden>
              How We Can Help You?
            </option>
            <option value="sales">Sales</option>
            <option value="press">Press</option>
            <option value="Support">Support</option>
            <option value="Demo">Demo</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
