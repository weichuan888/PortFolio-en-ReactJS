import React from "react";

export default class Projets extends React.Component {
  render() {
    return (
      <div className="Liste">
        <div className="rectangle">
          <h2>
            <a href="https://github.com/weichuan888/Exercice-Cadavre-Exquis-Weichuan">
              Cadavre Exquis{" "}
            </a>
          </h2>
          <p>Technologies: markdown, git et atom.</p>
        </div>
        <div className="rectangle" />
        <div className="rectangle" />
      </div>
    );
  }
}
