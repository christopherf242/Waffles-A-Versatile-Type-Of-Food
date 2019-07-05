import React from 'react';
//import './ChooseDinner.css';
import { DisplayWaffles } from '../DisplayWaffles/DisplayWaffles'; // we don't need to put js since it puts the js there automatically(unless we specify it).
import ihopWaffles from './IHOP-chicken-and-waffles.jpg';
import waffledChorizoCheeseQuesadila from './Food-NetworkWaffledChorizo-CheeseQuesadila.jpeg';
import cornbreadWaffles from './Cornbread-Waffles-Photo-by-Allrecipes-Magazine.jpg'

const dinnerNames = ["Chicken with Waffles", "Waffled Chorizo-Cheeze Quesadila", "Cornbread Waffles"];
const dinnerImages = [ihopWaffles, waffledChorizoCheeseQuesadila, cornbreadWaffles];
const dinnerDescriptions = ["Here's some chicken and waffles from IHOP. I think it can be considered a lunch or dinner because of the addition of the chicken strips.",
'This Waffled Chorizo-Cheeze Quesadila from the Food Network looks like a great option for dinner.',
"These cornbread waffles from Dish's All Recipe website almost look like spaghetti, which is a great thing."];

export class ChooseDinner extends React.Component {
  constructor(props){
    super(props); //Notes:Like in java, the first line in javascript component class constructors are constuctor(props)
    this.state = {
      name: dinnerNames,
      wafflesImage: dinnerImages,
      wafflesDescription: dinnerDescriptions,
    }

    this.handleToggleImageSize = this.handleToggleImageSize.bind(this); //We bind every method/function that we add to the component class.
  }

  handleToggleImageSize(event) {
  // Note: I used event.target.style.nameOfProperty to edit the style instead of: let image = event.target.value;
  //Testing output used for dubugging(before): console.log("In beginning of handleToggleImageSize function");
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

  render(){
    return(
      <div>
        <DisplayWaffles name={this.state.name[0]} wafflesImage={this.state.wafflesImage[0]} handleToggleImageSize={this.handleToggleImageSize}
         wafflesDescription={this.state.wafflesDescription[0]} />
        <DisplayWaffles name={this.state.name[1]} wafflesImage={this.state.wafflesImage[1]} handleToggleImageSize={this.handleToggleImageSize}
         wafflesDescription={this.state.wafflesDescription[1]} />
         <DisplayWaffles name={this.state.name[2]} wafflesImage={this.state.wafflesImage[2]} handleToggleImageSize={this.handleToggleImageSize}
          wafflesDescription={this.state.wafflesDescription[2]} />
      </div>
    );
  }
}
