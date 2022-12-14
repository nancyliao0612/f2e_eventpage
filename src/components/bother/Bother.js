import { useEffect } from "react";
import "./bother.css";
// gsap
import { gsap } from "gsap";
// images
import title from "./images/title.png";
import BotherItem from "../../svg/BotherItem.js";

const Bother = () => {
  useEffect(() => {
    const scrollSetting = {
      trigger: ".section2",
      pin: true,
      scrub: 1,
    };
    const outerWidth = window.outerWidth || 1920;
    if (outerWidth < 800) {
      scrollSetting.start = "bottom-=770px center";
      scrollSetting.end = "bottom center";
    }

    const srollTL = gsap.timeline({
      scrollTrigger: scrollSetting,
    });

    srollTL
      .fromTo(
        ".section2 > .title",
        {
          opacity: 0,
          x: -250,
        },
        {
          opacity: 1,
          x: 0,
        }
      )

      // BotherItem1
      .fromTo(
        "#BotherItem1 #bar_one path",
        {
          strokeDashoffset: 1100,
        },
        {
          strokeDashoffset: 0,
        }
      )
      .fromTo(
        "#BotherItem1 #bar_one line, #BotherItem1 #bar_one rect, #BotherItem1 #slash_one path",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "<"
      )
      .fromTo(
        "#BotherItem1 #bar_one text",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )

      // BotherItem2
      .fromTo(
        "#BotherItem2 #bar_two path",
        {
          strokeDashoffset: 1100,
        },
        {
          strokeDashoffset: 0,
        }
      )
      .fromTo(
        "#BotherItem2 #bar_two rect, #BotherItem2 #bar_two .rect, #BotherItem2 #slash_two path, #BotherItem2 #slash_two line",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "<"
      )
      .fromTo(
        "#BotherItem2 #bar_two text",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )

      // BotherItem3
      .fromTo(
        "#BotherItem3 #bar_three path",
        {
          strokeDashoffset: 1221,
        },
        {
          strokeDashoffset: 0,
        }
      )
      .fromTo(
        "#BotherItem3 #bar_three rect, #BotherItem3 #bar_three .rect, #BotherItem3 #bar_three line",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "<"
      )
      .fromTo(
        "#BotherItem3 #bar_three text",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );

    return () => {
      srollTL.kill();
    };
  }, []);

  return (
    <section class="section2" id="bother">
      <img src={title} alt="title" className="title" />

      <BotherItem />
    </section>
  );
};

export default Bother;
