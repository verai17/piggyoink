import React from "react";    
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

import "./index.css";
import { Container, Row, Form, Button } from "react-bootstrap"; 
import { default as PiggyBank } from '../../img/piggy-bank.svg';

import { register } from '../../Services/account.service';
 

const initialValue = {
    firstname: 'vera',
    lastname: 'piollo',
    emailaddress: 'vera@yahoo.com',
    password: 'password1',
}

  
function Login() {

    const [values, setValues] = useState(initialValue);
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

    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        })
    }
 
    const handleSave = async (event) => { 
        let response = await register({
            body: values
        }); 

        if(response.error){
            alert(`ERROR: ${response.error}`);
        }
        else{
            setCookie('token', response.data.token, { path: '/' });
            setCookie('user', response.data.user, { path: '/' });
            setCookie('wallet', response.data.user, { path: '/' });

            //goto next page
            routeChange("/home")
        }
 
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
                        <Form.Control 
                            type="text" 
                            name="firstname" 
                            placeholder="First Name" 
                            value={values.firstname}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control 
                            type="text"
                            name="lastname" 
                            placeholder="Last Name" 
                            value={values.lastname}
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control 
                            type="text" 
                            name="emailaddress" 
                            placeholder="Email Address"  
                            value={values.emailaddress}
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control 
                            type="password"
                            name="password" 
                            placeholder="Password"  
                            value={values.password}
                            onChange={handleChange} 
                        />
                    </Form.Group> 

                    {/* onClick={(e) => {routeChange("/home")}} */}
                    <Button 
                        variant="primary" 
                        type="button" 
                        className="registersubmit" 
                        onClick={handleSave} 
                    >
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
 
 