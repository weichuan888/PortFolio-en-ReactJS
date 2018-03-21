import React from "react";
import Title from "./Title";

export default class DeuxiemeComponent extends React.Component {
  render() {
    return (
      <div className="Second" id="eduedu">
        <Title h2="Education" />
        <div className="border-right">
          <div className="round">
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
