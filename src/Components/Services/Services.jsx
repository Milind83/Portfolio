import React from 'react'
import './Services.css'
import HeardEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'



function Services() {
  return (
    <div className="services">
      {/* ..........left side.......... */}
      <div className="awsome">
        <span>My Awsome</span>
        <span>Services</span>
        <spane>
          Lorem, ipsum dolor sit amet consectetur adipi
          <br />
          sicing elit. Voluptate, sapiente.
        </spane>

        {/* ........For Download Cv..... */}
        {/* <a href="https://drive.google.com/file/d/1BzFmmpu_AdqEraSM9vSU09Ar2tC-zDe9/view?usp=" download> */}
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1"></div>
      </div>
      {/* .........right side.......... */}
      <div className="cards">
        {/* .....First Card..... */}
        <div>
          <Card
            emoji={HeardEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </div>
        {/* ......Second Card........ */}
        <div>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, javaScript, React"}
          />
        </div>
        {/* .....Third Card..... */}
        <div>
          <Card
            emoji={Humble}
            heading={"Ui/UX"}
            detail={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sapiente."
            }
          />
        </div>
        <div className="blur s-blur2"></div>
      </div>
    </div>
  );
}

export default Services
