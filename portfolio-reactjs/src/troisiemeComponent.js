import React from 'react';
import Title from './Title';
import Work from './work';


export default class TroisiemeComponent extends React.Component {
  render(){
    return(
      <div className="Third">
        <Title/>
        <Work/>
        <Work/>
      </div>
    );
  }
}
