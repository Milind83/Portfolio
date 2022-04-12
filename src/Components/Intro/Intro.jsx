import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../../Components/FlotingDiv/FloatingDiv'

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello! I am</span>
          <span> Milind Khariwale</span>
          <span> Frontend Developer | React Developer</span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icon">
          <a href="https://github.com/">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/milind-khariwale-195827214">
            <img src={LinkedIn} alt="" />
          </a>
          {/* <a href="https://www.instagram.com/"> */}
            <img src={Instagram} alt="" />
          {/* </a> */}
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div className="i-floatingdiv1">
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </div>
        <div className="i-floatingdiv2">
          <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </div>
        {/* blur divs */}
        <div className="blur-pink"></div>
        <div className="blur-blue"></div>
      </div>
    </div>
  );
}

export default Intro;
