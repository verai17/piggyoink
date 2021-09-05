import React from "react";    
import { useHistory } from "react-router-dom";

import "./index.css";
import { default as Settings } from '../../img/settings.svg';
import { Navbar, Container, Nav, NavDropdown, MenuItem } from "react-bootstrap";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Home() {

    const navDropdownTitle = (<FontAwesomeIcon icon={faBars} />);
    let history = useHistory();

    const routeChange = (location) =>{ 
        history.push(location); 
    }


    return(
        <> 
        <Navbar collapseOnSelect className="shadow-sm">
            <Navbar.Brand href="#home"> 
                <h2>PiggyOink!</h2>
            </Navbar.Brand>
            <Nav className="ml-auto">  
                <NavDropdown title={navDropdownTitle} eventKey={3} id="basic-nav-dropdown">
                    <NavDropdown.Item eventKey={3.1}>ACCOUNT</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey={3.2}>CHANGE PASSWORD</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey={3.2} onClick={(e)=>routeChange("/")}>LOGOUT</NavDropdown.Item>
                </NavDropdown>
            </Nav>
    
        </Navbar> 
        </>
    );
    
}

export default Home;
 
 