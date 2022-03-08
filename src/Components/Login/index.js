import React from "react";    
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

import "./index.css";
import { Container, Row, Form, Button } from "react-bootstrap"; 
import { default as PiggyBank } from '../../img/piggy-bank.svg';
 

function Login() {
 
    const [cookies, setCookie] = useCookies(['token'],['user']);
    let history = useHistory();

    useEffect(() => {
        if (cookies) {
            if (cookies.token) {
                history.push('/home');
            } 
        } 
    }, [history, cookies]);

    const routeChange = (location) =>{ 
        history.push(location); 
    }


    return(
        <Container> 
            <Row className="md-center">
                <img alt="" src={PiggyBank}  width="250" height="250"/> 
                <br/> 
                <h1 className="logolbl">PiggyOink!</h1>
            </Row>

            <Row>
                <div className="loginbox">
                    <h4>Sign into your Account</h4>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group> 
                    <Button variant="primary" type="submit" className="loginsubmit"
                            onClick={(e) => {routeChange("/home")}}>
                        SUBMIT
                    </Button>
                    </Form>
                    <br/>  
                    <h6>Don't have an account? <span className="registerlink" onClick={(e) => {routeChange("/register")}}>Register Now</span></h6> 
                </div>
            </Row>
        </Container>
    );
    
}

export default Login;
 
 