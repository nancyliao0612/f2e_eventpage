import { useEffect } from "react";
import "./bother.css";
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// images
import title from "./images/title.png";
import BotherItem from "../../svg/BotherItem.js";

const Bother = () => {

  useEffect(() => {
    const srollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        pin: true,
        scrub: 1,
      },
    });

    srollTL
      .fromTo(".section2 > .title", {
        opacity: 0,
        x: -250,
      }, {
        opacity: 1,
        x: 0,
      })

      // BotherItem1
      .fromTo("#BotherItem1 #square_one path", {
        strokeDashoffset: 1010,
      }, {
        strokeDashoffset: 0,
      })
      .fromTo("#BotherItem1 #bar_one path", {
        strokeDashoffset: 1100,
      }, {
        strokeDashoffset: 0,
      })
      .fromTo("#BotherItem1 #bar_one line, #BotherItem1 #bar_one rect, #BotherItem1 #slash_one path", {
        opacity: 0,
      }, {
        opacity: 1,
      }, "<")
      .fromTo("#BotherItem1 #bar_one text", {
        opacity: 0,
      }, {
        opacity: 1,
      })

      // BotherItem2
      .fromTo("#BotherItem2 #square_two path", {
        strokeDashoffset: 1010,
      }, {
        strokeDashoffset: 0,
      })
      .fromTo("#BotherItem2 #bar_two path", {
        strokeDashoffset: 1100,
      }, {
        strokeDashoffset: 0,
      })
      .fromTo("#BotherItem2 #bar_two rect, #BotherItem2 #bar_two .rect, #BotherItem2 #slash_two path, #BotherItem2 #slash_two line", {
        opacity: 0,
      }, {
        opacity: 1,
      }, "<")
      .fromTo("#BotherItem2 #bar_two text", {
        opacity: 0,
      }, {
        opacity: 1,
      })

      // BotherItem3
      .fromTo("#BotherItem3 #square_three path", {
        strokeDashoffset: 1010,
      }, {
        strokeDashoffset: 0,
      })
      .fromTo("#BotherItem3 #bar_three path", {
        strokeDashoffset: 1221,
      }, {
        strokeDashoffset: 0,
      })
      .fromTo("#BotherItem3 #bar_three rect, #BotherItem3 #bar_three .rect, #BotherItem3 #bar_three line", {
        opacity: 0,
      }, {
        opacity: 1,
      }, "<")
      .fromTo("#BotherItem3 #bar_three text", {
        opacity: 0,
      }, {
        opacity: 1,
      })

      // transition
      .fromTo("#BotherItem1 path, #BotherItem1 rect, #BotherItem1 line, #BotherItem1 text", {
        x: 0,
        opacity: 1,
      }, {
        x: -800,
        animation: 'unset',
        opacity: 0,
      })
      .fromTo("#BotherItem3 path, #BotherItem3 rect, #BotherItem3 line, #BotherItem3 text", {
        x: 0,
        opacity: 1,
      }, {
        x: -700,
        animation: 'unset',
        opacity: 0,
      }, '<')
      .fromTo(".section2 > .title", {
        x: 0,
        opacity: 1,
      }, {
        x: 1000,
        opacity: 0,
      })
      .fromTo("#BotherItem2 path, #BotherItem2 rect, #BotherItem2 line, #BotherItem2 text", {
        x: 0,
        opacity: 1,
      }, {
        x: 800,
        animation: 'unset',
        opacity: 0,
      }, '<')
      ;

    return () => {
      srollTL.kill();
    };
  }, []);

  return (
    <section class="section2">
      <img src={title} alt="title" className="title" />

      <BotherItem />
    </section>
  );
};

export default Bother;
