import React from "react";   
import { useEffect } from 'react'; 
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';
 
import Menu from "../Menu"
import Wallet from "./Wallet"
import Transaction from "./Transaction"

import "./index.css";
import { Container, Row } from "react-bootstrap";  
 

function Home() {

    const [cookies, setCookie] = useCookies(['user']); 
    let history = useHistory();
 
    useEffect(() => {
        if (cookies) {
            if (!cookies.token) {
                history.push('/');
            } 
        } 
    }, [history, cookies]);

    const routeChange = (location) =>{ 
        history.push(location); 
    }
 

    return(
        <Container> 

            {/* MENU BAR */}
            <Row><Menu /></Row> 

            {/* WELCOME LABEL */}
            <Row><h4 className="welcomelbl">Welcome, <span>{cookies.user.firstname.toUpperCase()} {cookies.user.lastname.toUpperCase()}</span> &#128075;</h4></Row> 

            {/* WALLET */}
            <Row><Wallet /></Row>

            {/* TRANSACTION */}
            <Row><Transaction /></Row>
        </Container>
    );
    
}

export default Home;
 
 