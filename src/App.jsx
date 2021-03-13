import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Mapping from "./Components/Mapping";
import Contact from "./Components/Contact";
import BackgroundVideo from "./Components/BackgroundVideo";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={BackgroundVideo} />
          <Route path='/map' component={Mapping} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
