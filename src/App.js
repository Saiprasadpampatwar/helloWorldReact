
import './App.css';
import logo from '../src/assets/images/logo.jpg'
import React from "react";

class App extends React.Component {
  url = "https://www.bridgelabz.com/";
  constructor() {
    super();
    this.state = {
      title: "HelloWorld Demo App  from Bridgelabz !!"
    };
  }
   // onClick function
  clickOnBL_Page = (e) => {
    console.log("Click event works",e)
    window.open(this.url)
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img
          src={logo} onClick ={this.clickOnBL_Page}
          alt="The BridgeLabz logo: A Bridge to Employement through lab works"
        />
      </div>
    );
  }
}

export default App;
