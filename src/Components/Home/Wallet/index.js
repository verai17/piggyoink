import React, { useState }from "react";    
import { useHistory } from "react-router-dom";

import WalletOption from "./Modal/option"
import WalletSavings from "./Modal/savings"
import WalletExpense from "./Modal/expense"

import "./index.css";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { default as PiggyWallet } from '../../../img/piggywallet.svg';  
 

function Wallet() {

    const [showOptionModal, setShowOptionModal] = useState(false);
    const [showSavingModal, setShowSavingModal] = useState(false);
    const [showExpenseModal, setShowExpenseModal] = useState(false);
    let history = useHistory();

    const routeChange = (location) =>{ 
        history.push(location); 
    }

     ////////////////////////// EVENTS HERE

    const handleClose = () => setShowOptionModal(false);
    const handleSavingClose = () => setShowSavingModal(false);
    const handleExpenseClose = () => setShowExpenseModal(false);

    const handleShow = () => setShowOptionModal(true);
    const handleSavingShow = () => {
        setShowOptionModal(false)
        setShowSavingModal(true);
    };
    const handleExpenseShow = () => {
        setShowOptionModal(false)
        setShowExpenseModal(true);
    };
 

    return(
        <>
        <div className="walletbox" onClick={(e)=>handleShow()}>
            <Row>
                <Col xs={4}>
                <img alt="" src={PiggyWallet} style={{marginTop: "-10px"}}  width="100" height="100"/> 
                </Col>
                <Col xs={8}>
                    <h2 className="walletamount">PHP 10,000.00</h2>
                    <h6 className="walletlbl">Current Balance</h6>
                </Col>
            </Row> 
        </div>
        
        {/* // MODAL HERE */}
        <WalletOption 
            showModal = {showOptionModal}
            handleClose = {handleClose} 
            handleSavingShow = {handleSavingShow}
            handleExpenseShow = {handleExpenseShow}  />

        <WalletSavings 
            showModal = {showSavingModal}
            handleClose = {handleSavingClose}   />
 
        <WalletExpense 
            showModal = {showExpenseModal}
            handleClose = {handleExpenseClose}   />
         
       </>
    );
    
}

export default Wallet;
 
 