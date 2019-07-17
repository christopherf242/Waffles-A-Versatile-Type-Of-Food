import React from 'react';
import './DisplayWaffles.css'

export class DisplayWaffles extends React.Component {
  //Notes: The instructions for this stateless component class is below. It's called a presentational component,
  //which basically is used to render html-like JSX elements.
  render(){
    return(
    <div>
      <div className="flexboxWaffles">
        <h2>{this.props.name}</h2>
        <img src={this.props.wafflesImage} alt={this.props.altAttribute} onClick={this.props.handleToggleImageSize}/>
        <h4>{this.props.wafflesDescription}</h4>
      </div>
      <br/>
    </div>);
  }
}
