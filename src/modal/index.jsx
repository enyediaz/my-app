import React, { Component } from 'react';
import './modal.css';
import { Modal } from './modal.jsx';
import { Button } from './button.jsx';
import { Alert } from 'react-bootstrap';

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
      <div>
      <Alert bsStyle="warning">
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
        good.
      </Alert>
      </div>
      </div>
    );
  }
}

export default App;
