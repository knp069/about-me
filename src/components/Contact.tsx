import React from "react";
import Particle from "./Particle";
import "../styles/Contact.scss";
const Contact = () => {
  return (
    <div className="section contact">
      <Particle />
      <div className="contact_form">
        <div className="from_input">
          <input id="from" type="text" placeholder="email address"></input>
        </div>
        <div className="subject_input">
          <input
            id="subject"
            type="text"
            placeholder="what is it about ?"
          ></input>
        </div>
        <div className="message_input">
          <textarea id="message" placeholder="Message..."></textarea>
        </div>
        <div className="controls">
          <button>send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
