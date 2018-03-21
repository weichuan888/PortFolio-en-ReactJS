import React from "react";

export default class Head extends React.Component {
  scrollUn() {
    var elementEducation = document.getElementById("eduedu");
    elementEducation.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  scrollDeux() {
    var elementWork = document.getElementById("workwork");
    elementWork.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  scrollTrois() {
    var element = document.getElementById("skillskill");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  scrollQuatre() {
    var elementProj = document.getElementById("propro");
    elementProj.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render() {
    return (
      <div className="headUp">
        <p>
          <a onClick={this.scrollUn}>Education</a>
        </p>
        <p>
          <a onClick={this.scrollDeux}>Work</a>
        </p>
        <p>
          <a onClick={this.scrollTrois}>Skills</a>
        </p>
        <p>
          <a onClick={this.scrollQuatre}>Projets</a>
        </p>
      </div>
    );
  }
}
