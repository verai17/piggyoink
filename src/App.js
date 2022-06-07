import React from 'react';
import { Route } from "react-router-dom"; 
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useCookies } from 'react-cookie';

import Login from "./Components/Login";
import Home from "./Components/Home";
import Register from "./Components/Registration";


function App() {
  const [cookies] = useCookies(['session']);

  console.log('app.js - cookies.token: ', cookies.token);
  return ( 
      <Router>   
        <Route exact path="/"><Login /> </Route> 
        <Route exact path="/register"><Register /> </Route>
        <Route exact path="/home"><Home /> </Route>
      </Router>  
  );
}

export default App;
