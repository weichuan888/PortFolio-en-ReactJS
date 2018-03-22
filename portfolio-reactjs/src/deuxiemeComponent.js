import React from "react";
import Title from "./Title";

export default class DeuxiemeComponent extends React.Component {
  more() {
    var RedRound = document.getElementsByClassName("round2");
    if (RedRound.style.display === "none") {
      RedRound.style.display = "block";
    } else {
      RedRound.style.display = "none";
    }
  }

  render() {
    return (
      <div className="Second" id="eduedu">
        <Title h2="Education" />
        <div className="Timeline">
          <div className="border-right">
            <div className="EduTexteUn">
              <div className="EduArea" id="areaUn">
                <h3>2017-2018 (Sep-Apr) BECODE - BXL</h3>
                <p>Training course : Junior Web Developer</p>
              </div>
            </div>
            <div className="round" />
            <div className="EduTexteUn" />

            <div className="round">
              <div className="triangle" />
            </div>
            <div className="EduTexteUn">
              <div className="EduArea">
                <h3>2011-2013: Umons</h3>
                <p>1st year Bachelor of Medecine.</p>
              </div>
            </div>
            <div className="round2" onclick="more()" />

            <div className="round3" />

            <div className="round4" />
          </div>
          <div className="border-left">
            <div className="EduTexteUn" />
            <div className="EduTexteUn">
              <div className="EduArea">
                <h3>2013-2017: IRAMPS Mons</h3>
                <p>
                  Bachelor of Accounting option management. With Satisfaction.
                </p>
              </div>
            </div>
            <div className="EduTexteUn" />
            <div className="EduTexteUn">
              <div className="EduArea">
                <h3>2005-2011: "Sainte Famille" Institute of Mons</h3>
                <p>Ursulines - CESS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
