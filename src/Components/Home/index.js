import React from "react";    
import { useHistory } from "react-router-dom";
 
import Menu from "../Menu"
import Wallet from "./Wallet"
import Transaction from "./Transaction"

import "./index.css";
import { Container, Row } from "react-bootstrap";  
 

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
            <Row><h4 className="welcomelbl">Welcome, <span>Taylor Swift!</span> &#128075;</h4></Row> 

            {/* WALLET */}
            <Row><Wallet /></Row>

            {/* TRANSACTION */}
            <Row><Transaction /></Row>
        </Container>
    );
    
}

export default Home;
 
 