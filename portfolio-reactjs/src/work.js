import React from "react";

export default class Work extends React.Component {
  render() {
    return (
      <div className="work_Contenu">
        <div className="work_Left">
          <h4>{this.props.h4}</h4>
          <h3>{this.props.h3}</h3>
        </div>
        <div className="work_Right">
          <h5>{this.props.h5}</h5>
          <p>{this.props.paragraph}</p>
        </div>
      </div>
    );
  }
}
