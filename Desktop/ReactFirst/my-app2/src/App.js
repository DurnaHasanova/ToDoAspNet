import React, { Component } from 'react';

import './App.css';
// import CategoryList from './Components/CategoryList';
import FlipCoin from './Components/FlipCoin';

//import Counter from './Components/Counter';

class  App extends Component {
  state={
    categories :['books', 'cars', 'electronics'],
    
  }
  render(){
  return (
    <div>
      {/* <Counter></Counter> */}

      {/* <CategoryList key='key' categoryName={this.state.categories}></CategoryList> */}
      <FlipCoin></FlipCoin>
    </div>
  );
}
}
export default App;
