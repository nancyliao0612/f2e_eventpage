import { useEffect } from "react";
import "./topic.css";
// gsap
import { gsap } from "gsap";
// images
import TopicItem from "../../svg/TopicItem";

const Topic = () => {

  useEffect(() => {
    const scrollSetting = {
      trigger: ".section4",
      pin: true,
      scrub: 1,
    };
    const outerWidth = window.outerWidth || 1920;
    if (outerWidth < 800) {
      scrollSetting.start = "bottom-=870px center";
      scrollSetting.end = "bottom center";
    }

    const srollTL = gsap.timeline({
      scrollTrigger: scrollSetting,
    });

    srollTL
      .fromTo("#topic-svg-wrapper #title-grey", {
        fill: 'none',
      }, {
        fill: 'white',
      })
      .fromTo("#topic-svg-wrapper .title-slash", {
        fill: 'none',
      }, {
        fill: '#DEFE47',
      })
      .fromTo("#topic-svg-wrapper .title-text", {
        strokeDashoffset: 6650,
        fill: 'none',
      }, {
        strokeDashoffset: 0,
        fill: '#DEFE47',
      }, '<')
      .fromTo("#topic-svg-wrapper .sub-title path", {
        opacity: 0,
      }, {
        opacity: 1,
      })
      .fromTo("#topic-svg-wrapper .week1 path", {
        opacity: 0,
      }, {
        opacity: 1,
      })
      .fromTo("#topic-svg-wrapper .week2 path", {
        opacity: 0,
      }, {
        opacity: 1,
      })
      .fromTo("#topic-svg-wrapper .week3 path", {
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
    <section class="section4">
      <div className="ui-wrapper">
        <TopicItem />
      </div>

    </section>
  );
};

export default Topic;
