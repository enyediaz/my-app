import React, { Component } from 'react';
import './App.css';


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
        <div>
          <button id="modalButton" className="button" onClick={this.handleClick} title="push me">
            <p>{this.state.isOn ? 'Pushed' : 'Push'}</p>
          </button>
        </div>
        
        {this.state.isOn === true ? 
        <div className="modal">
          <div className="modal-content">
            <div>
                <span className="closeButton" onClick={this.handleClick}>&times;</span>
                <p>this is the modal </p>
            </div>
          </div>        
        </div>
        : null
        }


      </div>
    );
  }
}

export default App;
