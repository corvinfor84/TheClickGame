import React, { Component } from 'react';
import pets from "./Animals.json";
import Nav from "./Components/nav/theHeader";
import Animals from "./Components/animals/animals";
import Wrapper from "./Components/Wrapper/Wrapper";


class App extends Component {
  // Setting this.state.pets to the pets json array
  state = {
    pets,
    score: 0,
    highscore: 0
  };

  
  // Map over this.state.pets and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} highscore={this.state.highscore}></Nav>
         {this.state.pets.map(card => (
          <Animals
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
        
      </Wrapper>
    );
  }
}

export default App;
