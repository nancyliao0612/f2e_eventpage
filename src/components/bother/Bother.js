import { useLayoutEffect, useRef } from "react";
import "./bother.css";
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// images
import title from "./images/title.svg";
import square_one from "./images/square_one.svg";
import square_two from "./images/square_two.svg";
import square_three from "./images/square_three.svg";
import banner_one from "./images/banner_one.svg";
import banner_two from "./images/banner_two.svg";
import banner_three from "./images/banner_three.svg";

const Bother = () => {
  const botherRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".img_zoom_in",
        start: "+=100px center",
        // markers: true,
        toggleActions: "restart none none pause",
      },
    });
    tl.to(".img_zoom_in", {
      scale: 1.15,
      backgroundPosition: "-200px 110%",
      duration: 1.5,
      ease: "ease-in-out",
    })
      .to(".title", {
        xPercent: -50,
        left: "50%",
        opacity: 1,
      })
      .to(".square_one", {
        opacity: 1,
        delay: 1,
      })
      .to(".banner_one", {
        opacity: 1,
        duration: 1,
      })
      .to(".square_two", {
        opacity: 1,
        duration: 1,
      })
      .to(".banner_two", {
        opacity: 1,
        duration: 1,
      })
      .to(".square_three", {
        opacity: 1,
        duration: 1,
      })
      .to(".banner_three", {
        opacity: 1,
        duration: 1,
      });

    return () => tl.scrollTrigger.kill();
  }, []);

  return (
    <div ref={botherRef} id="bother" className="bother_container">
      <section className="img_zoom_in">
        <img src={title} alt="title" className="title" />
        <img src={square_one} alt="square" className="square_one" />
        <img src={banner_one} alt="square" className="banner_one" />
        <img src={square_two} alt="square" className="square_two" />
        <img src={banner_two} alt="square" className="banner_two" />
        <img src={square_three} alt="square" className="square_three" />
        <img src={banner_three} alt="square" className="banner_three" />
      </section>
    </div>
  );
};

export default Bother;
