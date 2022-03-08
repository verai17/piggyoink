import React from "react";    
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

import "./index.css"; 
import { Navbar, Nav, NavDropdown } from "react-bootstrap";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Home() {

    const navDropdownTitle = (<FontAwesomeIcon icon={faBars} />); 
    const [cookies, setCookie, removeCookie] = useCookies(['token'],['user'],['wallet']);
    let history = useHistory();

    const routeChange = (location) =>{ 
        history.push(location); 
    }

    const handleLogout = async (event) => { 

        if (window.confirm("Are you sure you want to logout?")) {
            removeCookie('token', { path: '/' });
            removeCookie('user', { path: '/' });
            removeCookie('wallet', { path: '/' });

            routeChange("/");
        }
   
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
                    <NavDropdown.Item eventKey={3.2} onClick={handleLogout}>LOGOUT</NavDropdown.Item>
                </NavDropdown>
            </Nav>
    
        </Navbar> 
        </>
    );
    
}

export default Home;
 
 