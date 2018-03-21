import React from "react";

export default class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <h2>{this.props.h2}</h2>
      </div>
    );
  }
}
