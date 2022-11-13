import { useEffect } from "react";
import "./topic.css";
// gsap
import { gsap } from "gsap";
// images
import TopicItem from "../../svg/TopicItem";

const Topic = () => {

  useEffect(() => {
    const srollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section4",
        pin: true,
        scrub: 1,
      },
    });

    // srollTL
    //   .fromTo(".section4 > .title", {
    //     opacity: 0,
    //     xPercent: 100,
    //     y: 250,
    //   }, {
    //     opacity: 1,
    //     xPercent: 0,
    //   })
    //   .to(".section4 > .title", {
    //     y: 0,
    //   })
    //   .fromTo("#interactive-svg-wrapper #uiImage", {
    //     opacity: 0,
    //   }, {
    //     opacity: 1,
    //   })
    //   .fromTo("#uiDesigner .text-background-border", {
    //     strokeDashoffset: 465,
    //   }, {
    //     strokeDashoffset: 0,
    //   }, '<')
    //   .fromTo("#uiDesigner .text-background", {
    //     opacity: 0,
    //   }, {
    //     opacity: 1,
    //   }, '<')
    //   .fromTo("#uiDesigner .text", {
    //     strokeDashoffset: 2950,
    //     fill: 'none',
    //   }, {
    //     strokeDashoffset: 0,
    //     fill: 'white',
    //   })

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
