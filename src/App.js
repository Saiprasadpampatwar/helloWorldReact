
import './App.css';
import logo from '../src/assets/images/logo.jpg'
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "HelloWorld Demo App  from Bridgelabz !!"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img
          src={logo}
          alt="The BridgeLabz logo: A Bridge to Employement through lab works"
        />
      </div>
    );
  }
}

export default App;
