import React from "react";
// css
import "./f2e.css";
// images
import logo from "./images/logo.svg";
import interactive_design from "./images/interactive_design.svg";
import arrow from "./images/arrow.svg";

const F2E = () => {
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
