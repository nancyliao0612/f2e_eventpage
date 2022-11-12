import { useEffect } from "react";
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
import BotherItem from "../../svg/BotherItem.js";

const Bother = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const srollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        pin: true,
        scrub: true,
      },
    });

    srollTL
      .fromTo(".title", {
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
