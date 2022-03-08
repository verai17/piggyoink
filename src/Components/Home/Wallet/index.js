import React, { useState }from "react";    
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

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
    const [cookies, setCookie] = useCookies(['wallet']);  
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

    const wallet = (!cookies.wallet.currentbalance ? 0 : cookies.wallet.currentbalance )
 

    return(
        <>
        <div className="walletbox" onClick={(e)=>handleShow()}>
            <Row>
                <Col xs={4}>
                <img alt="" src={PiggyWallet} style={{marginTop: "-10px"}}  width="100" height="100"/> 
                </Col>
                <Col xs={8}>
                    <h2 className="walletamount">PHP {wallet.toFixed(2)}</h2>
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
 
 