import React from 'react';
import { Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import Login from "./Components/Login";
import Home from "./Components/Home";
import Register from "./Components/Registration";


function App() {
  return ( 
      <CookiesProvider> 
      <Route exact path="/"><Login /> </Route> 
      <Route exact path="/home"><Home /> </Route> 
      <Route exact path="/register"><Register /> </Route> 
      </CookiesProvider>  
  );
}

export default App;
