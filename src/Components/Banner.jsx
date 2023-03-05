import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web from "../assets/images/1.png";
import webone from "../assets/images/2.png";
import webtwo from "../assets/images/3.png";
import webthree from "../assets/images/4.png";
import webfour from "../assets/images/5.png";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [webimage] = useState([
    {
      icon: "fa fa-html5",
      title: "Html5",
      desc: "",
      // image: "web",
      // active: false,
    },
    {
      icon: "fa-bootstrap",
      title: "Bootstrap",
      image: "/images/.png",
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
    <div>
      <section className="banner" id="banner">
        <div className="container">
          <div className="banner-wrapper">
            <div className="banner-img">
              <Slider {...settings}>
                <div>
                  <div className="img-container">
                    <img src={web} />
                  </div>
                </div> <div>
                  <div className="img-container">
                    <img src={webone} />
                  </div>
                </div>
                <div>
                  <div className="img-container">
                    <img src={webtwo} />
                  </div>
                </div>
                <div>
                  <div className="img-container">
                    <img src={webthree} />
                  </div>
                </div>
                <div>
                  <div className="img-container">
                    <img src={webfour} />
                  </div>
                </div>
               
              </Slider>
            </div>
            <div className="banner-content">
              <h6>Hello, I'm Prachi Mathe</h6>
              <h3>Web Developer</h3>
              <p>
                I am a diligent professional front-end developer with around 3
                years of working experience in Web designing. Aim to be placed
                in a challenging organization that gives me scope to enhance my
                knowledge & skills in accordance with the latest trends and be a
                part of a team that dynamically works towards growth of
                organization.
              </p>
              <a className="btn" href="#webimage">
                About Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
