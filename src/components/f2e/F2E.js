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
          // markers: true,
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
          // markers: true,
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
          // markers: true,
        },
      }
    );



    // let tl2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".f2e_container",
    //     start: "center-=50px top+=150px",
    //     // end: "bottom bottom-=100px",
    //     // markers: true,
    //     toggleActions: "restart none none pause",
    //     scrub: true,
    //   },
    // });
    // // tl2.to(".background_container", {
    // //   scale: 1,
    // //   // backgroundPosition: "right 250px bottom 50%",
    // //   duration: 2,
    // //   ease: "power1.easeInOut",
    // // });

    // tl2.to(".right", {
    //   left: "250%",
    // });

    // let tl3 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".f2e_container",
    //     start: "center-=50px top+=150px",
    //     // end: "bottom bottom-=100px",
    //     // markers: true,
    //     toggleActions: "restart none none pause",
    //     scrub: true,
    //   },
    // });

    // tl3.to(".left", {
    //   left: "-120%",
    // });

    // let tl4 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".bother_container",
    //     start: "top-=400px top+=100px",
    //     end: "top center",
    //     // markers: true,
    //     toggleActions: "restart none none pause",
    //     scrub: true,
    //   },
    // });
    // tl4
    //   .to(".ui_engineer", {
    //     xPercent: -50,
    //     left: "50%",
    //     opacity: 1,
    //     duration: 1,
    //   })
    //   .to(".ui_engineer", {
    //     y: -50,
    //     duration: 0.1,
    //     ease: "power1.easeInOut",
    //   })
    //   .to(".up", {
    //     y: -90,
    //     delay: 2,
    //     opacity: 1,
    //     ease: "power1.easeInOut",
    //   })
    //   .to(".engineer_up", {
    //     y: -90,
    //     delay: 2,
    //     opacity: 1,
    //     ease: "power1.easeInOut",
    //   });

    // let tl5 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".bother_container",
    //     start: "top-=250px top+=100px",
    //     // end: "bottom bottom-=100px",
    //     markers: true,
    //     toggleActions: "restart none none pause",
    //     scrub: true,
    //   },
    // });
    // tl5.to(".left_disappear", {
    //   left: "-250%",
    // });

    // let tl6 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".bother_container",
    //     start: "top-=250px top+=100px",
    //     // end: "bottom bottom-=100px",
    //     markers: true,
    //     toggleActions: "restart none none pause",
    //     scrub: true,
    //   },
    // });
    // tl6.to(".right_disappear", {
    //   left: "270%",
    // });

    // let tl7 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".bother_container",
    //     start: "top-=270px top",
    //     end: "bottom bottom-=200px",
    //     markers: true,
    //     toggleActions: "restart none none pause",
    //     scrub: true,
    //   },
    // });
    // tl7.to(".background_container", {
    //   scale: 1.2,
    //   backgroundPosition: "-20% 20%",
    //   duration: 3,
    //   ease: "power1.easeInOut",
    // });
  }, []);

  return (
    <section className="f2e_container">
      <img src={logo} alt="logo" className="logo" />
      <img src={interactive_design} alt="event theme" className="web_design" />
      <div className="scroll_down_square">
        <a>
          <p>Scroll down</p>
          <img src={arrow} alt="arrow" />
        </a>
      </div>
    </section>
  );
};

export default F2E;
