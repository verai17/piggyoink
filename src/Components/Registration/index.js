import React from "react";    
import { useHistory } from "react-router-dom";

import "./index.css";
import { Container, Row, Form, Button } from "react-bootstrap";  
 

function Registration() {

    let history = useHistory();

    const routeChange = (location) =>{ 
        history.push(location); 
    }


    return(
        <Container> 
           <label>Registration Page</label>
        </Container>
    );
    
}

export default Registration;
 
 