import React from "react";
import Title from "./Title";
import Projets from "./projets";

export default class CinquiemeComponent extends React.Component {
  render() {
    return (
      <div className="Projets" id="propro">
        <Title h2="Projets" />
        <Projets />
      </div>
    );
  }
}
