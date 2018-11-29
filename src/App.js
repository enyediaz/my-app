import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let modalClass = 'modal-hidden';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {isOn: true};

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.setState(state => ({
      isOn: !state.isOn
    }));
    this.state.isOn == true ? modalClass = 'modal' : modalClass = 'modal-hidden';
  }
  

  render() {
    return (
      <div className="App">

        <div>
          <button id="modalButton" className="button" onClick={this.handleClick} title="push me">
            <p>{this.state.isOn ? 'Push' : 'Pushed'}</p>
          </button>
        </div>
        
        <div className={modalClass}>
          <div className="modal-content">
            <div>
                <span className="closeButton" onClick={this.handleClick}>&times;</span>
                <p>this is the modal </p>
            </div>
          </div>        
        </div>


      </div>
    );
  }
}

export default App;


{/* <div className="App">

<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p>      

</div> */}