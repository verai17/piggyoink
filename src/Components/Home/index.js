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

    const [cookies, setCookie, removeCookie] = useCookies(['token','wallet','user']); 
    let history = useHistory();
  
    useEffect(() => {  
 
        if (!cookies.token) { 
            removeCookie('token', { path: '/' });
            removeCookie('user', { path: '/' });
            removeCookie('wallet', { path: '/' });

            history.push('/'); 
        } 
    }, [history, cookies, removeCookie]);
 
    return(
        <>
        { !cookies.token ? 
            ""
          : 
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
        }
        </>  
    );
    
}

export default Home;
 
 