import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Technology() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
    const [technology] = useState([
        {
          icon: "fa-mobile",
          title: "Html5",
          desc: "",
          // active: false,
        },
        {
          icon: "fa-bootstrap",
          title: "Bootstrap",
          // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
          active: true,
        },
        {
          icon: "fa-css3",
          title: "CSS",
          // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
          // active: false,
        },
        {
          icon: "fa-paintbrush",
          title: "Java Script",
          // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
          // active: false,
        },
        {
          icon: "fa-pen-to-square",
          title: "Tailwind Css",
          // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
          // active: false,
        },
        {
          icon: "fa-ruler",
          title: "React Js(Basic)",
          // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
          // active: false,
        },
        {
          icon: "fa-ruler",
          title: "Material UI",
          // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
          // active: false,
        },
        {
          icon: "fa-js",
          title: "Figma",
          // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
          // active: false,
        },
      ]);
  return (
    <section className="projects">
    <div className="container">
    <div className="title">
          <h2>TECHNOLOGY SKILLS</h2>
        
        </div>
      <div className="services" id="technology">
      <Slider {...settings}>
     
      {technology.map((service, i) => (
          <div
            key={i}
            className={`service ${service.active ? "active" : ""}`}
          >
            <div className=""><i className={`fas ${service.icon}`} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p></div>
            <button className="btn">Know More</button>
          </div>
        ))}
    </Slider>
      
      </div>
    
    </div>
  </section>
  );
}

export default Technology;
