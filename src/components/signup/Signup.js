import { useEffect } from "react";
// css
import "./signup.css";
// images
import line_one from "./images/line_one.svg";
import line_two from "./images/line_two.svg";
import line_three from "./images/line_three.svg";
import signup_date from "./images/signup_date.svg";
import team_group from "./images/team_group.svg";
import ui_group from "./images/ui_group.svg";
import engineer_group from "./images/engineer_group.svg";
// import { ReactComponent as TeamGroupTag } from "./images/Union.svg";
import teamGroupTag from "./images/teamgroup_tag_focus.png";
import uiGroupTag from "./images/uigroup_focus_tag.svg";
import engineerGroupTag from "./images/engineer_focus_tag.svg";

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Signup = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".signup_container",
        pin: true,
        scrub: true,
      },
    });

    scrollTL
      .fromTo(
        ".line_one",
        {
          xPercent: -100,
        },
        {
          xPercent: 149,
          duration: 100,
        }
      )
      .fromTo(
        ".line_two",
        {
          xPercent: -500,
        },
        {
          xPercent: 0,
          duration: 100,
        }
      )
      .fromTo(
        ".line_three",
        {
          xPercent: -800,
        },
        {
          xPercent: -188,
          duration: 100,
        }
      )
      .fromTo(
        ".signup_date",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 50,
          duration: 200,
        }
      )

      .fromTo(
        ".team",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 50,
          duration: 500,
        }
      )
      .fromTo(
        ".team",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          delay: 50,
          duration: 200,
        }
      )
      .fromTo(
        ".ui_next",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 50,
          duration: 500,
        }
      )
      .fromTo(
        ".ui",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          delay: 50,
          duration: 200,
        }
      )
      .fromTo(
        ".engineer_next",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 50,
          duration: 500,
        }
      )
      // 關門特效
      .fromTo(
        ".black_left",
        {
          opacity: 0,
          x: -1500,
        },
        {
          opacity: 1,
          x: 0,
          ease: "power3.easeInOut",
          delay: 500,
          duration: 500,
          scrollTrigger: {
            trigger: ".signup_container",
            toggleActions: "restart none none reverse", // 當滑鼠往上滑動時，reverse 讓門可以反向打開
          },
        }
      )
      .fromTo(
        ".black_right",
        {
          opacity: 0,
          x: 1500,
        },
        {
          opacity: 1,
          x: 0,
          ease: "power3.easeInOut",
          delay: 500,
          duration: 500,
          scrollTrigger: {
            trigger: ".signup_container",
            toggleActions: "restart none none reverse",
          },
        }
      );

    return () => {
      scrollTL.kill();
    };
  }, []);

  return (
    <section className="signup_container">
      <img src={line_one} alt="line" className="line_one line" />
      <img src={line_two} alt="line" className="line_two line" />
      <img src={line_three} alt="line" className="line_three line" />
      <img src={signup_date} alt="signup date" className="signup_date " />

      {/* 組別 */}
      <img
        src={teamGroupTag}
        alt="team group tag"
        className="team_group_tag tag team"
      />
      <img
        src={uiGroupTag}
        alt="ui team group tag"
        className="ui_group_tag tag ui ui_next"
      />
      <img
        src={engineerGroupTag}
        alt="engineer team group tag"
        className="engineer_group_tag tag engineer_next"
      />

      {/* 組別資訊 */}
      <img src={team_group} alt="team group" className="team_group team" />
      <img src={ui_group} alt="ui group" className="ui_group ui ui_next" />
      <img
        src={engineer_group}
        alt="engineer group"
        className="engineer_group engineer_next"
      />
    </section>
  );
};

export default Signup;
