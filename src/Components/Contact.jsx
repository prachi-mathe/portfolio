/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Contact </h3>
        </div>
        <div>
          <div className="project">
            <div className="contact">
              <div className="contact-start">
                <div className="con-flex">
                  <div className="icon-bg">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <h3>8962283860</h3>
                </div>
              </div>
              <div className="contact-start">
                <div className="con-flex">
                  <label>Nmae</label>
                  <input type="text" placeholder="Your name" />
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="contact">
              <div className="contact-start">
                <div className="con-flex">
                  <div className="icon-bg">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <h3>Prachi.mathe0@gmail.com</h3>
                </div>
              </div>
              <div className="contact-start">
                <div className="con-flex">
                  <label>Email</label>
                  <input type="text" placeholder="Your Email" />
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="contact">
              <div className="contact-start">
                <div className="con-flex">
                  <div className="icon-bg">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <h3>Indore</h3>
                </div>
              </div>
              <div className="contact-start">
                <div className="con-flex">
                  <label>Message</label>
                  <textarea type="text" placeholder="Your Message" />
                </div>
              </div>
            </div>
          </div>
          <div className="btn-end">
            <a className="send" href="#webimage">
              Send
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;    
