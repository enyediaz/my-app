import React, { Component } from 'react';
import './App.css';
import {Modal} from './modal.jsx';
import {Button} from './button.jsx';



class App extends Component {  
  constructor(props){
    super(props);
    this.state = {isOn: false};

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.setState(state => ({
      isOn: !state.isOn      
    }));    
  }
  
  render() {    
    return (
      <div className="App">
        <Button handleClick={this.handleClick} />
        <Modal handleClick={this.handleClick} isOn={this.state.isOn} />
      </div>
    );
  }
}

export default App;
