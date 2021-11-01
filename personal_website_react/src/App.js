import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

import "./App.css";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

function App() {
  return (
    <div className="App">
      {/* <Home />
      <AboutMe />
      <Projects />
      <Skills /> */}
      <Router>
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/aboutme" component={AboutMe}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/skills" component={Skills}/>
      </Router>
    </div>
  );
}

export default App;
