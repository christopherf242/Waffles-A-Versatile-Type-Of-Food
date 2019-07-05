import React from 'react';
import iceCreamAndWaffles from './Ice-Cream-And-Waffles.JPG';
import waffledChocolateChipCookies from './Food-Network-Waffled-Chocolate-Chip-Cookies.jpeg';
import waffledBrownieSundae from './Food-Network-Waffle-Brownie-Sundae.jpeg';
//import './ChooseLunch.css'; Since this is a container component, we just
import { DisplayWaffles } from '../DisplayWaffles/DisplayWaffles'
const lunchNames = ["Waffles with Ice Cream", "Waffled Brownie Sundae", "Waffled Chocolate Chip Cookies"];
const lunchImages = [iceCreamAndWaffles, waffledBrownieSundae, waffledChocolateChipCookies];
const lunchDescriptions = ['Ice Cream and Waffles taste amazing, especially because of the ice cream and because of the chocolate syrup that replaces the regular syrup.',
  'This Waffled Brownie Sundae from the Food Network looks delicous too.',
   "Here's some Waffled Chocolate Chip Cookies from the Food Network. The waffles look super cool because they combine two of my favorite types of food: chocolate chip cookies and waffles."];

export class ChooseLunch extends React.Component {
  constructor(props){
    super(props); //Notes:Like in java, the first line in javascript component class constructors are super(props)
    //For the state, we make each property equal to an array variable(which I don't think we can do with arrays in C++).
    this.state = {
      name: lunchNames,
      wafflesImage: lunchImages,
      wafflesDescription: lunchDescriptions,
    }

    this.handleToggleImageSize = this.handleToggleImageSize.bind(this);
  }

  handleToggleImageSize(event) {
  // Note: I used event.target.style.nameOfProperty to edit the style instead of let image = event.target.value;
    console.log("In beginning of handleToggleImageSize function");
    if(this.state.imageSize === "Small"){
      this.setState({imageSize: "Original"});
      event.target.style.width = "40%"; //In JavaScript, any units that aren't px(pixels), we have to use a string.
      event.target.style.height = "50%"; // I made the height bigger since I think there's more space to the left and right of it

    }else{
      this.setState({imageSize: "Small"});
      event.target.style.width = "30%";
      event.target.style.height = "30%";

    }
  }
  //Notes(before I render html-like JSX elements):
  // <div className="flexboxWaffles">
  //   <h2>{this.state.name[1]}</h2>
  //   <img src={this.state.wafflesImage[1]} alt={this.state.name[1]}/>
  //   <h4>{this.state.wafflesDescription[1]}</h4>
  // </div>
  // <br />
  // <div className="flexboxWaffles">
  //   <h2>{this.state.name[2]}</h2>
  //   <img src={this.state.wafflesImage[2]} alt={this.state.name[2]}/>
  //   <h4>{this.state.wafflesDescription[2]}</h4>
  // </div>
  // <br />

  //Notes: I learned that I have to use this.handleToggleImageSize(instead of this.state...)
  // to refer the the method/funciton in this component class.
  render(){
    return(
      <div>
        <DisplayWaffles name={this.state.name[0]} wafflesImage={this.state.wafflesImage[0]} handleToggleImageSize={this.handleToggleImageSize}
         wafflesDescription={this.state.wafflesDescription[0]} />
        <DisplayWaffles name={this.state.name[1]} wafflesImage={this.state.wafflesImage[1]} handleToggleImageSize={this.handleToggleImageSize}
         wafflesDescription={this.state.wafflesDescription[1]} />
         <DisplayWaffles name={this.state.name[2]} wafflesImage={this.state.wafflesImage[2]} handleToggleImageSize={this.handleToggleImageSize}
          wafflesDescription={this.state.wafflesDescription[2]} />
      </div>);
  }
}
