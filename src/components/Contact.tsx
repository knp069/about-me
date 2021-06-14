import React from "react";
import Particle from "./Particle";
import "../styles/Contact.scss";
const Contact = () => {
  return (
    <div className="section">
      <Particle />
      <div className="contact">
        <div className="contact_heading">
          <h1>Get in touch</h1>
        </div>
        <div className="contact_form">
          <div className="from_input">
            <input id="from" type="text" placeholder="name"></input>
          </div>
          <div className="subject_input">
            <input id="email" type="email" placeholder="email"></input>
          </div>
          <div className="message_input">
            <textarea id="message" placeholder="Message..."></textarea>
          </div>
          <div className="controls">
            <button>
              <i className="fas fa-paper-plane"></i>send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
