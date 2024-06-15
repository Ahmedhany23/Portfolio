import React from "react";
import "./styles.scss";
import Inner from "../../components/inner";
import Stairs from "../../components/stairs/stairs";
import Curve from "../../components/curve/curve";
export default function About() {
  return (
    <Inner>
      <div className="main">
        <div className="container">
          <img src="Ahmed.jpg" alt="" className="image" />

          <div className="section">
            <h1 className="heading lucky">About Me</h1>
            <p className="prime">
              Hi there! I'm Ahmed, a front-end developer with a passion for
              crafting clean code and user-centric experiences. I love working
              collaboratively to solve problems and build beautiful, responsive
              websites across all devices. My expertise lies in leveraging
              React.js and Next.js to create pixel-perfect interfaces. Whether
              it's a massive responsive build, stunning hover effects, or even
              RTL Arabic sites, I've got the experience to tackle it. My tech
              stack is strong, with JavaScript, React.js & Next.js at the core,
              backed by powerful UI libraries like MUI, Tailwind, and
              Styled-components, all working seamlessly with the foundation of
              HTML & CSS. Looking forward to connecting!
            </p>
          </div>
        </div>
      </div>
    </Inner>
  );
}
