import React, { useState }from "react";     
import { useCookies } from 'react-cookie';
 
import { getSaveCategory, getExpenseCategory } from '../../../Services/transaction.service';

import WalletOption from "./Modal/option"
import WalletSavings from "./Modal/savings"
import WalletExpense from "./Modal/expense"

import "./index.css";
import { Row, Col } from "react-bootstrap";
import { default as PiggyWallet } from '../../../img/piggywallet.svg';  
 

function Wallet() {

    const [showOptionModal, setShowOptionModal] = useState(false);
    const [showSavingModal, setShowSavingModal] = useState(false);
    const [showExpenseModal, setShowExpenseModal] = useState(false);
    const [cookies, setCookie] = useCookies(['token','wallet']); 
    const [saveCategory, setSaveCategory] = useState([]);
    const [expenseCategory, setExpenseCategory] = useState([]);
 
     ////////////////////////// EVENTS HERE

    const handleClose = () => setShowOptionModal(false); 
    const handleSavingClose = () => setShowSavingModal(false);
    const handleExpenseClose = () => setShowExpenseModal(false);

    const handleShow = () => setShowOptionModal(true);
    const handleSavingShow = async () => {

        const { data } = await getSaveCategory(cookies.token); 
        setSaveCategory(data.category);

        setShowOptionModal(false);
        setShowSavingModal(true);
    };

    const handleExpenseShow = async () => {

        const { data } = await getExpenseCategory(cookies.token); 
        setExpenseCategory(data.category);

        setShowOptionModal(false);
        setShowExpenseModal(true);
    };

    const handleSaveSubmit = () =>{ 
            //     //submit request
    //     //get wallet request
        setShowSavingModal(false);
    }

    const handleExpenseSubmit = () =>{ 
            //     //submit request
    //     //get wallet request
        setShowExpenseModal(false);
    }
 
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
            categoryList = {saveCategory}
            showModal = {showSavingModal}
            handleClose = {handleSavingClose} 
            handleSubmit = {handleSaveSubmit} />
 
        <WalletExpense 
            categoryList = {expenseCategory}
            showModal = {showExpenseModal}
            handleClose = {handleExpenseClose}    
            handleSubmit = {handleExpenseSubmit}   />
         
       </>
    );
    
}

export default Wallet;
 
 