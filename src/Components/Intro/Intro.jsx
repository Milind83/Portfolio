import React from "react";
import "./Intro.css";
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hay! i am</span>
          <span> Milind Khariwale</span>
          <span> Frontend Developer | React Developer</span>
        </div>
        <button className="button i-button">Hire Me</button>
      </div>
      <div className="i-icon">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
      </div>
      <div className="i-right">I am right side</div>
    </div>
  );
}

export default Intro;
