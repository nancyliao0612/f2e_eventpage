import { useLayoutEffect, useRef, useEffect } from "react";
import "./bother.css";
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// images
import title from "./images/title.png";
import square_one from "./images/square_one.svg";
import square_two from "./images/square_two.svg";
import square_three from "./images/square_three.svg";
import banner_one from "./images/banner_one.svg";
import banner_two from "./images/banner_two.svg";
import banner_three from "./images/banner_three.svg";
import interactive_design from "../f2e/images/interactive_design.png";
import graphic_designer from "../bother/images/graphic_designer.svg";
import ui_board from "../bother/images/ui_board.png";
import engineer_board from "../bother/images/engineer_board.png";
import engineer from "../bother/images/engineer.png";

const Bother = () => {
  const botherRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  // useLayoutEffect(() => {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".img_zoom_in",
  //       start: "+=100px center",
  //       // markers: true,
  //       toggleActions: "restart none none pause",
  //     },
  //   });
  //   tl.to(".img_zoom_in", {
  //     // scale: 1.15,
  //     backgroundPosition: "-200px 110%",
  //     duration: 1.5,
  //     ease: "ease-in-out",
  //   })
  //     .to(".title", {
  //       xPercent: -50,
  //       left: "50%",
  //       opacity: 1,
  //     })
  //     .to(".square_one", {
  //       opacity: 1,
  //       delay: 1,
  //     })
  //     .to(".banner_one", {
  //       opacity: 1,
  //       duration: 1,
  //     })
  //     .to(".square_two", {
  //       opacity: 1,
  //       duration: 1,
  //     })
  //     .to(".banner_two", {
  //       opacity: 1,
  //       duration: 1,
  //     })
  //     .to(".square_three", {
  //       opacity: 1,
  //       duration: 1,
  //     })
  //     .to(".banner_three", {
  //       opacity: 1,
  //       duration: 1,
  //     });

  //   return () => tl.scrollTrigger.kill();
  // }, []);

  return (
    <div ref={botherRef} id="bother" className="bother_container">
      <section className="img_zoom_in">
        <img src={title} alt="title" className="title right" />
        <img src={square_one} alt="square" className="square_one left" />
        <img src={banner_one} alt="banner" className="banner_one left" />
        <img src={square_two} alt="square" className="square_two right" />
        <img src={banner_two} alt="banner" className="banner_two right" />
        <img src={square_three} alt="square" className="square_three left" />
        <img src={banner_three} alt="banner" className="banner_three left" />
        <img
          src={interactive_design}
          alt="square"
          className="ui_engineer left_disappear"
        />
        <img
          src={graphic_designer}
          alt="square"
          className="designer up right_disappear"
        />
        <img
          src={ui_board}
          alt="square"
          className="ui_board up right_disappear"
        />
        <img
          src={engineer_board}
          alt="square"
          className="engineer_board engineer_up right_disappear"
        />
        <img
          src={engineer}
          alt="square"
          className="engineer engineer_up right_disappear"
        />
      </section>
    </div>
  );
};

export default Bother;
