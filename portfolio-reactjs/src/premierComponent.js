import React from "react";
import Logo from "./logo";
import photoPro from "./asset/profilweichuan.png";

export default class PremierComponent extends React.Component {
  render() {
    return (
      <div className="First">
        <div className="HeadPic">
          <img src={photoPro} alt="y-y" />
        </div>
        <h1>Weichuan Tran</h1>
        <h2>Junior Web Developer</h2>

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
