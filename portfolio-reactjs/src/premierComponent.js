import React from "react";
import Logo from "./logo";

export default class PremierComponent extends React.Component {
  render() {
    return (
      <div className="First">
        <div className="HeadPic">
          <img
            src="https://image.flaticon.com/icons/png/512/33/33900.png"
            alt="y-y"
          />
        </div>
        <h1>Weichuan Tran</h1>
        <h2 class="text">Junior Web Developer</h2>
        <p>
          I am a Junior Web Developer who wants to develop in Front-End.<br />
          I like challenges and learning new technologies to deepen my skills.<br />
          Motivation, rigor and listening are the watchwords of my professional
          behavior.
        </p>
        <Logo />
      </div>
    );
  }
}
