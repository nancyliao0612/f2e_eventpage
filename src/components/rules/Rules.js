import { useEffect } from "react";
// css
import "./rules.css";
// images
import race_title from "./images/race_title.png";
import frame_one from "./images/frame_one.png";
import frame_one_bg from "./images/frame_one_bg.png";
import frame_two from "./images/frame_two.png";
import frame_two_bg from "./images/frame_two_bg.png";
import evaluation_content from "./images/evaluation_content.png";
import price_content from "./images/price_content.png";
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Rules = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".black_left",
      {
        opacity: 0,
        x: -1500,
      },
      {
        opacity: 1,
        x: 0,
        ease: "power3.easeInOut",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".rules_container",
          start: "top top",
          toggleActions: "restart none none reverse", // 當滑鼠往上滑動時，reverse 讓門可以反向打開
          markers: true,
        },
      }
    );
    gsap.fromTo(
      ".black_right",
      {
        opacity: 0,
        x: 1500,
      },
      {
        opacity: 1,
        x: 0,
        ease: "power3.easeInOut",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".rules_container",
          start: "top top",
          toggleActions: "restart none none reverse",
        },
      }
    );

    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".rules_container",
        pin: true,
        markers: true,
        scrub: true,
      },
    });

    scrollTL
      .fromTo(
        ".race_title",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          delay: 1,
        }
      )
      .fromTo(
        ".frame",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 1,
        }
      )
      .fromTo(
        ".frame_bg",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        ".content",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );

    return () => {
      scrollTL.kill();
    };
  }, []);

  return (
    <>
      <section className="rules_container">
        <div className="title_img_container">
          <img src={race_title} alt="title" className="race_title" />
        </div>

        <img src={frame_one} alt="frame" className="frame_one frame" />
        <img src={frame_two} alt="frame" className="frame_two frame" />
        <img
          src={frame_one_bg}
          alt="yellow block"
          className="frame_one_bg frame_bg"
        />
        <img
          src={frame_two_bg}
          alt="yellow block"
          className="frame_two_bg frame_bg"
        />
        <img
          src={evaluation_content}
          alt="evaluation content"
          className="evaluation_content content"
        />
        <img
          src={price_content}
          alt="price content"
          className="price_content content"
        />
      </section>
      <div className="blackBg_container">
        <div className="black_left" />
        <div className="black_right" />
      </div>
    </>
  );
};

export default Rules;
