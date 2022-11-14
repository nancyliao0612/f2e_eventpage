import { useEffect, useLayoutEffect, useState } from "react";
// css
import "./f2e.css";
// images
import logo from "./images/logo.svg";
import interactive_design from "./images/interactive_design.png";
import arrow from "./images/arrow.svg";
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const F2E = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".logo",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: ".f2e_container",
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".web_design",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: ".f2e_container",
          start: "bottom-=370px center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".scroll_down_square",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        y: -50,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".f2e_container",
          start: "+=10px top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="f2e_container">
      <img src={logo} alt="logo" className="logo" />
      <img src={interactive_design} alt="event theme" className="web_design" />
      <div className="scroll_down_square">
        <a href="#bother">
          <p>Scroll down</p>
          <img src={arrow} alt="arrow" />
        </a>
      </div>
    </section>
  );
};

export default F2E;
