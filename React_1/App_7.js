import React from 'react';
import './App.css';

class App extends React.Component {
  state= {
    isConfirmed: false
  }
  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed
    })
  }

  displayMessage = () => {
    if (this.state.isConfirmed){
      return <PositiveMessage/>
    } else {
      return <NegativeMessage/>
    }
    
  }
  render() {
    console.log(this.state.isConfirmed)
    return (
      <>
      <h1>Buy a ticket</h1>
      <input type="checkbox" id="age" checked={this.state.isConfirmed} onChange={this.handleCheckboxChange} />
      <label htmlFor="age">I am at least 16 years old</label>
      {this.displayMessage()}
      </>
    )
  }
}

const PositiveMessage = () => <p>You are allowed to watch the movie.</p>

const NegativeMessage = () => <p>You are not allowed to watch the movie.</p>

export default App;
