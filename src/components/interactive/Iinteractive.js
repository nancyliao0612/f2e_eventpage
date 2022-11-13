import { useEffect } from "react";
import "./interactive.css";
// gsap
import { gsap } from "gsap";
// images
import title from "./images/title.svg";
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
      .fromTo("#interactive-svg-wrapper #uiImage", {
        opacity: 0,
      }, {
        opacity: 1,
      })
      .fromTo("#uiDesigner .text-background-border", {
        strokeDashoffset: 466,
      }, {
        strokeDashoffset: 0,
      }, '<')
      .fromTo("#uiDesigner .text-background", {
        opacity: 0,
      }, {
        opacity: 1,
      }, '<')
      .fromTo("#uiDesigner .text", {
        strokeDashoffset: 2950,
        fill: 'none',
      }, {
        strokeDashoffset: 0,
        fill: 'white',
      })

      .fromTo("#link-line .start", {
        strokeDashoffset: 94,
      }, {
        strokeDashoffset: 0,
      })
      .fromTo("#link-line .line", {
        strokeDashoffset: 406,
      }, {
        strokeDashoffset: 0,
      })
      .fromTo("#link-line .end", {
        strokeDashoffset: 94,
      }, {
        strokeDashoffset: 0,
      })

      .fromTo("#interactive-svg-wrapper #developerImage", {
        opacity: 0,
      }, {
        opacity: 1,
      })
      .fromTo("#developer .text-background-top-border", {
        strokeDashoffset: 813,
      }, {
        strokeDashoffset: 0,
      }, '<')
      .fromTo("#developer .text-background-bottom-border", {
        strokeDashoffset: 909,
      }, {
        strokeDashoffset: 0,
      }, '<')
      .fromTo("#developer .text-background", {
        opacity: 0,
      }, {
        opacity: 1,
      }, '<')
      .fromTo("#developer .text", {
        strokeDashoffset: 5155,
        fill: 'none',
      }, {
        strokeDashoffset: 0,
        fill: 'white',
      })
      ;

    return () => {
      srollTL.kill();
    };
  }, []);

  return (
    <section class="section3">
      <img src={title} alt="title" className="title" />
      <div className="ui-wrapper">
        <InteractiveItem />
      </div>

    </section>
  );
};

export default Interactive;
