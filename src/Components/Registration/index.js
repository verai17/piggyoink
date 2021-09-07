import React from "react";    
import { useHistory } from "react-router-dom";

import "./index.css";
import { Container, Row, Form, Button } from "react-bootstrap"; 
import { default as PiggyBank } from '../../img/piggy-bank.svg';
 

function Login() {

    let history = useHistory();

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
                <div className="registrationbox">
                    <h4>Create an Account</h4>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group> 

                    <Button variant="primary" type="submit" className="registersubmit"
                            onClick={(e) => {routeChange("/home")}}>
                        SUBMIT
                    </Button>
                    </Form>
                    <br/> 
                    <p className="backhomelink" onClick={(e) => {routeChange("/")}}>go back to Home Page</p>   
                </div>
            </Row>
        </Container>
    );
    
}

export default Login;
 
 