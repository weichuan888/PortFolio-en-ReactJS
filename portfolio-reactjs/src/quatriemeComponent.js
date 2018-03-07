import React from 'react';
import Title from './Title';
import Polygones from './polygones';

export default class QuatriemeComponent extends React.Component {
  render(){
    return(
      <div className="Skill">
        <Title h2="Skills"/>
        <Polygones/>
      </div>
    );
  }
}
