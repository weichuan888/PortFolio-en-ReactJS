import React from "react";
import Title from "./Title";

export default class DeuxiemeComponent extends React.Component {
  render() {
    return (
      <div id="Edu" className="Second">
        <Title h2="Education" />
        <div className="border-right">
          <div className="round" onclick="Educat()">
            <p id="rond1"> </p>
            <div className="triangle" />
          </div>
          <div className="round2" />
          <div className="round3" />
          <div className="round4" />
        </div>
        <div className="border-left" />
      </div>
    );
  }
}
