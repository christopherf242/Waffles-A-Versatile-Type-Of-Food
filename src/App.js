import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChooseBreakfast } from './components/ChooseBreakfast/ChooseBreakfast'; // Here we use name imports. In Breakfast.js, we use named export to export it
import { ChooseLunch } from './components/ChooseLunch/ChooseLunch';
import { ChooseDinner } from './components/ChooseDinner/ChooseDinner';

//Note: Check if I should make this function a stateless functional component.
function App(props) {
  return (
    <div>
      <header>
        <div>
          <h1 id="intro">Introduction</h1>
          <h2 id="intro-paragraph">
            Before when I thought of waffles, I only thought of the classic plain waffles that I often had for breakfast. But more recently,
            I've been having the Blueberry Eggo Waffles for breakfast or even one big jumbo-size waffle by itself.
            Not only that, but there's even chicken and waffles for dinner and waffles with ice cream for lunch or dessert. Below, you can click
            on the images of waffles to make them bigger or smaller.
          </h2>
        </div>
      </header>
      <br />
      <br />
      <div id ="breakfast">
        <h1>Waffles For Breakfast</h1>
        <ChooseBreakfast />
      </div>
      <br />
      <div id="lunch">
        <h1>Waffles For Lunch or Dessert</h1>
        <ChooseLunch />
      </div>
      <br/>
      <div id="dinner">
        <h1>Waffles For Dinner</h1>
        <ChooseDinner />
      </div>
    </div>
  );
}

export default App;
