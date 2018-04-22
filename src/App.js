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
 
 handleIncrement = id => {
        if(this.pets.score === 0){
          this.pets.score = pets.score + 1;
          this.setState({score : this.state.score + 1});
          this.state.pets.sort(() => Math.random() - 0.5)
          return true;
        }
  }
  

  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} highscore={this.state.highscore}/>
          
         {this.state.pets.map(card => (
          <Animals
            onClick={this.handleIncrement}
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
