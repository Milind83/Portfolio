import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

function Works() {
  return (
    <div className="work">
      <div className="awsome">
        <span>Works for All these </span>
        <span>Brands & ClientsS</span>
        <spane>
          Lorem, ipsum dolor sit amet consectetur adipi
          <br />
          sicing elit. Voluptate, sapiente.
          <br />Lorem, ipsum dolor sit amet consectetur Voluptate, sapiente.
          <br />
          sicing elit. Voluptate, sapiente.
        </spane>
          <button className="button s-button">HIre Me</button>
        <div className="blur s-blur1"></div>
      </div>

      {/* ....right side.... */}
      <div className="w-right">
          <div className="w-maincircle">
              <div className="w-seccircle">
                  <img src={Upwork} alt="" />
              </div>
              <div className="w-seccircle">
                  <img src={Fiverr} alt="" />
              </div>
              <div className="w-seccircle">
                  <img src={Amazon} alt="" />
              </div>
              <div className="w-seccircle">
                  <img src={Shopify} alt="" />
              </div>
              <div className="w-seccircle">
                  <img src={Facebook} alt="" />
              </div>
          </div>
      </div>
    </div>
  );
}

export default Works;
