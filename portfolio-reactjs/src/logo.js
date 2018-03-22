import React from "react";

export default class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <a href="https://github.com/weichuan888">
          <i className="fab fa-github fa-3x" />
        </a>
        <a href="https://www.linkedin.com/in/weichuan-tran-581690150/">
          <i className="fab fa-linkedin fa-3x" />
        </a>
        <a href="tel:0472326551">
          <i className="fas fa-phone fa-3x" />
        </a>
        <a href="mailto:weichuan.tran@gmail.com">
          <i className="far fa-envelope fa-3x" />
        </a>
      </div>
    );
  }
}
