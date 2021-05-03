import React from "react";
import "./MostUseLangusge.css";
import { SiHtml5, SiCss3, SiMaterialUi, SiJavascript, SiNodeDotJs, SiMongodb } from "react-icons/si";
import { DiSass, DiReact } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";

import { VscFileCode } from "react-icons/vsc";

const MostUseLangusge = () => {
  return (
    <div id="MostUseLangusge">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-light mostusesLanguage-heading">
              <VscFileCode /> Most Useses &nbsp;
              <h2 className="d-inline " style={{ color: "#20c997" }}>
                Languages and Tools
              </h2>
            </h2>
          </div>
          <div className="col-12 d-flex justify-content-center languagelogoContainer">
            <SiHtml5 className="language-icon html"></SiHtml5>
            <SiCss3 className="language-icon css"></SiCss3>
            <DiSass className="language-icon sass"></DiSass>
            <BsFillBootstrapFill className="language-icon bootstarp"></BsFillBootstrapFill>
            <SiMaterialUi className="language-icon metarialui"></SiMaterialUi>
            <SiJavascript className="language-icon javascript"></SiJavascript>
            <DiReact className="language-icon react "></DiReact>
            <SiNodeDotJs className="language-icon nodejs"></SiNodeDotJs>
            <SiMongodb className="language-icon mongodb"></SiMongodb>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostUseLangusge;
