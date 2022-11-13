import { useEffect } from "react";
import "./interactive.css";
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// images
import title from "./images/title.svg";
import uiImage from "./images/ui.png";
import uiBoard from "./images/ui_board.png";
import InteractiveItem from "../../svg/InteractiveItem";

const Interactive = () => {

  useEffect(() => {
    const srollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section3",
        pin: true,
        scrub: 1,
      },
    });

    srollTL
      .fromTo(".section3 > .title", {
        opacity: 0,
        xPercent: 100,
        y: 250,
      }, {
        opacity: 1,
        xPercent: 0,
      })
      .to(".section3 > .title", {
        y: 0,
      })
      .fromTo(".section3 .uiImage", {
        opacity: 0,
        y: 250,
      }, {
        opacity: 1,
        y: 0,
      }, '<')
      .fromTo(".section3 .uiBoard", {
        opacity: 0,
      }, {
        opacity: 1,
      }, '<')
      ;

    return () => {
      srollTL.kill();
    };
  }, []);

  return (
    <section class="section3">
      <img src={title} alt="title" className="title" />
      <div className="ui-wrapper">
        <img src={uiImage} alt="uiImage" className="uiImage" />
        <img src={uiBoard} alt="uiBoard" className="uiBoard" />
      </div>

      {/* <InteractiveItem /> */}
    </section>
  );
};

export default Interactive;
