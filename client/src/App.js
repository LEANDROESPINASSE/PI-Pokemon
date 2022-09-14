import './App.css';
import React from "react"
import { Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import About from "./components/About"
import Detail from "./components/Detail"
import Create from "./components/Create"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/details/:id" component={Detail} />
      <Route path="/create" component={Create} />
    </div>
  );
}

export default App;