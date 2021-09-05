import React from "react";    
import { useHistory } from "react-router-dom";


import Menu from "../Menu"
import Wallet from "./Wallet"

import "./index.css";
import { Container, Row, Form, Button } from "react-bootstrap";  
 

function Home() {

    let history = useHistory();

    const routeChange = (location) =>{ 
        history.push(location); 
    }


    return(
        <Container> 

            {/* MENU BAR */}
            <Row><Menu /></Row> 

            {/* WELCOME LABEL */}
            <Row><h4 className="welcomelbl">Welcome, <span>Vewa!</span> &#128075;</h4></Row> 

            {/* WALLET */}
            <Row><Wallet /></Row>
        </Container>
    );
    
}

export default Home;
 
 