import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Saved from "./pages/saved";
import NoMatch from "./pages/nomatch";
import Nav from "./components/nav";

function App() {
  return (
    <Router>
       <div>
         <Nav />
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/saved" component={Saved} />
           <Route component={NoMatch} />
         </Switch>
       </div>
     </Router>
  );
}

export default App;
