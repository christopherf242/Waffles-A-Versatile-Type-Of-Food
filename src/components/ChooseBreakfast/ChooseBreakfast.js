import React from 'react';
import blueberryWaffles from './Blueberry-Eggo-Waffles-pic.png';
import classicCrispyWaffles from './Food-Network-Classic-Crispy-Waffles.jpeg'
import chocolateWafflesWithPeanutButterSauce from './Cosmopolitan-Chocolate-Waffles-With-Peanut-Butter-Sauce.jpg'
//import './ChooseBreakfast.css'; Note: Since this component is a container component, it doesn't directly display any elements.
                                  //Thus we don't need a CSS file to style this component(it renders another component).
import { DisplayWaffles } from '../DisplayWaffles/DisplayWaffles';
const breakfastNames = ["Eggo Blueberry Waffles", "Classic Crispy Waffles", "Chocolate Waffles With Peanut Butter Sauce"];
const breakfastDescriptions = ["Eggo Blueberry Waffles are some of my favorite waffles because it's healthy and still tastes great.",
                              "These Classic Crispy Waffles from the Food Network look like great homestyle waffles.",
                              "Here's some waffles from the Cosmopolitan website. Wait, Chocolate Waffles? Sign Me Up! Peanut Butter sauce is cool too."];
const breakfastImages = [blueberryWaffles, classicCrispyWaffles, chocolateWafflesWithPeanutButterSauce];
const breakfastQuickDescriptions = ["Eggo Blueberry Waffles from Target's store website", "Classic Crispy Waffles from the Food Network that look nice, regular waffles",
                                    "Chocolate Waffles with Peanut Butter Sauce looks very cool."]


export class ChooseBreakfast extends React.Component {
  constructor(props){
    super(props); //Notes:Like in java, the first line in javascript component class constructors are constuctor(props)
    this.state = {
      imageSize: "Small",
      name: breakfastNames,
      wafflesImage: breakfastImages,
      wafflesDescription: breakfastDescriptions,
      wafflesImageAltAttribute: breakfastQuickDescriptions,
    }

    this.handleToggleImageSize = this.handleToggleImageSize.bind(this);
  }

  handleToggleImageSize(event) {
  // Note: I used event.target.style.nameOfProperty to edit the style: let image = event.target.value;
    //Testing output used for dubugging(before): console.log("In beginning of handleToggleImageSize function");
    if(this.state.imageSize === "Small"){
      this.setState({imageSize: "Large"});
      event.target.style.width = "40%"; //In JavaScript, any units that aren't px(pixels), we have to use a string.
      event.target.style.height = "50%";  // We set the height to 50% of it's parent container

    }else{
      this.setState({imageSize: "Small"});
      event.target.style.width = "30%";
      event.target.style.height = "30%";
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
      </div>);
  }
}

//Notes(works cited): I made the name of the image blueberryWaffles. For webpack
//(reactjs uses it), we do import howWeWantToNameImage from 'imagefilename'. Unlike css files, importing a file
// returns a string.For files with less than 10,000 bytes, it returns a data
// URI(Uniform Resource Identifier, ex. URL). This applies to the following file extensions: bmp, gif,jpg, jpeg, and
// png. source: Hawkeye Parker's answer, https://stackoverflow.com/questions/34582405/react-wont-load-local-images
