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
const dinnerQuickDescriptions = ["Chicken and Waffles from IHOP looks like a great dinner meal", "This Waffled Chorizo-Cheese Quesadila that's from the Food Network comes together for a great meal",
"Cornbread Waffles from Dish's All Recipe website looks like a really big meal."]

export class ChooseDinner extends React.Component {
  constructor(props){
    super(props); //Notes:Like in java, the first line in javascript component class constructors are constuctor(props)
    this.state = {
      imageSize: "Small",
      name: dinnerNames,
      wafflesImage: dinnerImages,
      wafflesDescription: dinnerDescriptions,
      wafflesImageAltAttribute: dinnerQuickDescriptions,
    }

    this.handleToggleImageSize = this.handleToggleImageSize.bind(this); //We bind every method/function that we add to the component class.
  }

  handleToggleImageSize(event) {
  // Note: I used event.target.style.nameOfProperty to edit the style: let image = event.target.value;
    //Testing output used for dubugging(before): console.log("In beginning of handleToggleImageSize function");
    if(this.state.imageSize === "Small"){
      this.setState({imageSize: "Large"}); //We make the image size property in the state object equal to "Large".
      event.target.style.width = "60%"; //In JavaScript, any units that aren't px(pixels), we have to use a string.
      event.target.style.height = "60%";  // We set the height to 50% of it's parent container

    }else{
      this.setState({imageSize: "Small"});
      event.target.style.width = "45%";
      event.target.style.height = "45%";
    }
  }

  render(){
    return(
      <div>
        <DisplayWaffles name={this.state.name[0]} wafflesImage={this.state.wafflesImage[0]} altAttribute={this.state.wafflesImageAltAttribute[0]} handleToggleImageSize={this.handleToggleImageSize}
         wafflesDescription={this.state.wafflesDescription[0]}  />
        <DisplayWaffles name={this.state.name[1]} wafflesImage={this.state.wafflesImage[1]} altAttribute={this.state.wafflesImageAltAttribute[1]} handleToggleImageSize={this.handleToggleImageSize}
         wafflesDescription={this.state.wafflesDescription[1]} />
        <DisplayWaffles name={this.state.name[2]} wafflesImage={this.state.wafflesImage[2]} altAttribute={this.state.wafflesImageAltAttribute[2]} handleToggleImageSize={this.handleToggleImageSize}
         wafflesDescription={this.state.wafflesDescription[2]} />
      </div>
    );
  }
}
