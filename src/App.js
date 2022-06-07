import React from 'react';
import { Route } from "react-router-dom"; 
import { BrowserRouter as Router } from "react-router-dom"; 

import Login from "./Components/Login";
import Home from "./Components/Home";
import Register from "./Components/Registration";


function App() {
  
  return ( 
      <Router>   
        <Route exact path="/"><Login /> </Route> 
        <Route exact path="/register"><Register /> </Route>
        <Route exact path="/home"><Home /> </Route>
      </Router>  
  );
}

export default App;
