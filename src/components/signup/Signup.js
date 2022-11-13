import { useEffect, useState } from "react";
// css
import "./signup.css";
// images
import line_one from "./images/line_one.svg";
import line_two from "./images/line_two.svg";
import line_three from "./images/line_three.svg";
import signup_date from "./images/signup_date.svg";
import team_group from "./images/team_group.svg";
import team_group_tag from "./images/team_group_tag.svg";
import ui_group from "./images/ui_group.svg";
import ui_group_tag from "./images/ui_group_tag.svg";
import engineer_group from "./images/engineer_group.svg";
import engineer_group_tag from "./images/engineer_group_tag.svg";
import { ReactComponent as TeamGroupTag } from "./images/team_group_tag.svg";

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Signup = () => {
  const [value, setValue] = useState("");

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".signup_container",
        pin: true,
        markers: true,
        scrub: true,
      },
    });

    scrollTL
      .fromTo(
        ".line_one",
        {
          x: -370,
        },
        {
          x: 285,
        }
      )
      .fromTo(
        ".line_two",
        {
          x: -420,
        },
        {
          x: -25,
        }
      )
      .fromTo(
        ".line_three",
        {
          x: -630,
        },
        {
          x: -400,
        }
      )
      .fromTo(
        ".signup",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
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
          duration: 0.5,
          scrollTrigger: {
            trigger: ".signup_container",
            toggleActions: "restart none none reverse", // 當滑鼠往上滑動時，reverse 讓門可以反向打開
            markers: true,
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
          duration: 0.5,
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
      <img src={signup_date} alt="signup date" className="signup_date signup" />

      {/* 組別 */}
      {/* <Try className="try" /> */}
      {/* <TeamGroupTag className="try" /> */}
      <img
        src={team_group_tag}
        alt="team group tag"
        className="team_group_tag tag signup"
        onClick={() => setValue("team")}
      />
      <img
        src={ui_group_tag}
        alt="ui group tag"
        className="ui_group_tag tag signup"
        onClick={() => setValue("ui")}
      />
      <img
        src={engineer_group_tag}
        alt="engineer group tag"
        className="engineer_group_tag tag signup"
        onClick={() => setValue("engineer")}
      />

      {/* 組別資訊 */}
      {value === "team" && (
        <img
          src={team_group}
          alt="team group"
          className="team_group timeline"
        />
      )}
      {value === "ui" && (
        <img src={ui_group} alt="ui group" className="ui_group timeline" />
      )}
      {value === "engineer" && (
        <img
          src={engineer_group}
          alt="engineer group"
          className="engineer_group timeline"
        />
      )}
    </section>
  );
};

export default Signup;
