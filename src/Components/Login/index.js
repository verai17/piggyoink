import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import { login } from "../../Services/account.service";

import "./index.css";
import { Container, Row, Form, Button } from "react-bootstrap";
import { default as PiggyBank } from "../../img/piggy-bank.svg";

const initialValue = {
  emailaddress: "",
  password: "",
};

function Login() {
  const [values, setValues] = useState(initialValue);
  const [cookies, setCookie] = useCookies(["token"], ["user"]);
  let history = useHistory();

  useEffect(() => {
    if (cookies.token) {
      history.push("/home");
    }
  }, [history, cookies]);

  const routeChange = (location) => {
    history.push(location);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (event) => {
    console.log(`values: ${JSON.stringify(values)}`);
    let response = await login({
      body: values,
    });

    console.log(`response: ${JSON.stringify(response)}`);

    if (response.error) {
      alert(`ERROR: ${response.error}`);
    } else {
      setCookie("token", response.data.token, { path: "/" });
      setCookie("user", response.data.user, { path: "/" });
      setCookie("wallet", response.data.wallet, { path: "/" });

      //goto next page
      routeChange("/home");
    }
  };

  return (
    <Container>
      <Row className="md-center">
        <img alt="" src={PiggyBank} width="250" height="250" />
        <br />
        <h1 className="logolbl">PiggyOink!</h1>
      </Row>

      <Row>
        <div className="loginbox">
          <h4>Sign into your Account</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
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
            <Button
              variant="primary"
              type="button"
              className="loginsubmit"
              onClick={handleLogin}
            >
              SUBMIT
            </Button>
          </Form>
          <br />
          <h6>
            Don't have an account?{" "}
            <span
              className="registerlink"
              onClick={(e) => {
                routeChange("/register");
              }}
            >
              Register Now
            </span>
          </h6>
        </div>
      </Row>
    </Container>
  );
}

export default Login;
