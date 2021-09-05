import React from "react";    
import { useHistory } from "react-router-dom";

import "./index.css";
import { Row, Col } from "react-bootstrap";
import { default as PiggyWallet } from '../../../img/piggywallet.svg';  
 

function Wallet() {

    let history = useHistory();

    const routeChange = (location) =>{ 
        history.push(location); 
    }


    return(
        <div className="walletbox">
            <Row>
                <Col xs={4}>
                <img alt="" src={PiggyWallet}  width="90" height="90"/> 
                </Col>
                <Col xs={8}>
                    <h2 className="walletamount">PHP 10,000.00</h2>
                    <h6 className="walletlbl">Current Balance</h6>
                </Col>
            </Row> 
        </div>
    );
    
}

export default Wallet;
 
 