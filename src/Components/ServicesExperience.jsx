import React, { useState } from "react";


function ServicesExperience() {
    const [services] = useState([
        {
          icon: "fa-computer",
          title: "Web Design",
          desc: "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.",
          active: false,
        },
        {
          icon: "fa-mobile",
          title: "Mobile Responsive",
          desc: "When a website is responsive, the layout and/or content responds or adapts based on the size of screen they are presented on.A responsive website automatically changes to fit the device you’re reading it on..",
          active: true,
        },
        {
          icon: "fa-pen-to-square",
          title: "Figma Design",
          desc: "Figma is an interface design application that runs in the browser—but it’s actually much more than that. I would go so far as to say it’s probably the best application for team-based collaborative design projects.",
          active: false,
        },
       
      ]);
  return (
    <section className="services-experience">
    <div className="container">
      <div className="services" id="services">
        {services.map((service, i) => (
          <div
            key={i}
            className={`service ${service.active ? "active" : ""}`}
          >
            <i className={`fas ${service.icon}`} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button className="btn">Know More</button>
          </div>
        ))}
      </div>
      <div className="experiences" id="experiences">
        <div className="experience">
          <h3>3</h3>
          <p>Year Experience</p>
        </div>
        <div className="portfolios">
          <div className="portfolio">
            <h4>7+</h4>
            <p>Clients</p>
          </div>
          <div className="portfolio">
            <h4>03</h4>
            <p>Years Experience</p>
          </div>
          <div className="portfolio">
            <h4>7+</h4>
            <p>Completed Projects</p>
          </div>
          <div className="portfolio">
            <h4>1</h4>
            <p>Achievements</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default ServicesExperience;
