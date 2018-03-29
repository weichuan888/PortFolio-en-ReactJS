import React from "react";
import Title from "./Title";
import Work from "./work";

export default class TroisiemeComponent extends React.Component {
  /*   var color = document.getElementsByClassName('wowo');
  color.classList.remove('wowo');

 */
  render() {
    return (
      <div className="Third" id="workwork">
        <Title h2="Work" className="wowo" />
        <Work
          h4="July 2017"
          h3="BSG du Shape"
          h5="Internship in accounting"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
        />
        <Work
          h4="October 2013-January 2017"
          h3="LS Travel Retail Benelux"
          h5="self-employed and manager of a bookstore."
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
        />
      </div>
    );
  }
}
