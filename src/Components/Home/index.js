import React from "react";    
import { useHistory } from "react-router-dom";


import Menu from "../Menu"

import "./index.css";
import { Container, Row, Form, Button } from "react-bootstrap";  
 

function Home() {

    let history = useHistory();

    const routeChange = (location) =>{ 
        history.push(location); 
    }


    return(
        <Container> 
            <Row><Menu /></Row>
            <Row>
                <div className="walletbox">
                    <h4>Sign into your Account</h4>
                </div>
            </Row>
        </Container>
    );
    
}

export default Home;
 
 