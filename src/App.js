// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header.js"; 
import { About } from './components/About';
import { Skills } from './components/Skills';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/about" component={About} /> 
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
