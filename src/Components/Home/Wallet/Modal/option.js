import React from "react";    
import { useHistory } from "react-router-dom";

import "./index.css";
import { Modal, Button } from "react-bootstrap"; 
import { default as PiggyFront } from '../../../../img/piggyfront.svg';  
 

function WalletOption(props) {

    let history = useHistory();

    const routeChange = (location) =>{ 
        history.push(location); 
    }
 
    return( 
         <Modal
            className="walletoptionmdl"
            show={props.showModal}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
            size="sm"
            aria-labelledby="example-modal-sizes-title-sm"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title>Select Transaction for <span><img alt="" src={PiggyFront} style={{marginTop: "-13px", width: 30, height: 30}} /> </span> Piggy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant="primary" type="button" className="optionbtn savingoptbtn"
                        onClick={props.handleSavingShow}>
                    SAVINGS
                </Button>
                <br/>
                <Button variant="primary" type="button" className="optionbtn expenseoptbtn"
                    onClick={props.handleExpenseShow}>
                    EXPENSE
                </Button>
            </Modal.Body> 
        </Modal>  
    );
    
}

export default WalletOption;
 
 