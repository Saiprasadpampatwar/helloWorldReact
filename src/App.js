
import './App.css';
import React from "react";
import Home from './Components/Home';
import Welcome from './Pages/Welcome';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {
  render(){
    return(
      <div>
        <Router>
          <div>
            <Route path="/" component={Home} exact></Route>
            <Route path="/welcome" component={Welcome}></Route>
          </div>

        </Router>
      </div>
    )
  }
}

export default App;
