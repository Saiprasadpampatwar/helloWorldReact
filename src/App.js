
import './App.css';
import logo from '../src/assets/images/logo.jpg'
import React from "react";

class App extends React.Component {
  url = "https://www.bridgelabz.com/";
  constructor() {
    super();
    this.state = {
      userName: "",
      nameError: ""
    };
  }
  // onClick function
  onclick = (event) => {
    console.log("save button is clicked ", { event });
    window.open(this.url, "_blank");
  };
  //onChange Event function
  onNameChangeHandler = (event) => {
    console.log("value is ", event.target.value);
    // see the title using setState Method
    const nameRegex = RegExp("^[A-Z]{1}[a-z\\s]{2,}$");
    this.setState({ userName: event.target.value });
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: `` });
    } else {
      this.setState({ nameError: `Name is incorrect` });
    }
  };
  render() {
    return (
      <div>
        <div>
          <h1>Hello {this.state.userName} from BridgeLabz</h1>
          <img
            src={logo}
            onClick={this.onClick}
            alt="The BridgeLabz logo: A Bridge to Employement through lab works"
          />
        </div>
        <div className="text-box">
          <input onChange={this.onNameChangeHandler} />
          <span className="error-output">{this.state.nameError}</span>
        </div>
      </div>
    );
  }
}

export default App;
