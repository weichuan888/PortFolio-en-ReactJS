import React from 'react';

export default class Head extends React.Component{
  render() {
    return(
      <div className="headUp">
        <p><a id="FirstAnchor" href='#'>Who I am</a></p>
        <p><a href='#'>Skills</a></p>
        <p><a href="#">Projets</a></p>
      </div>
    )
  }
}
