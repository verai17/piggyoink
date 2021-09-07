import React from "react";    
import { useHistory } from "react-router-dom";

import "./index.css";
import { Modal, Button, Form, InputGroup } from "react-bootstrap"; 
import { default as PiggyFront } from '../../../../img/piggyfront.svg';  
 

function WalletExpense(props) {

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
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title>Select Expense for <span><img alt="" src={PiggyFront} style={{marginTop: "-13px", width: 30, height: 30}} /> </span> Piggy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="number" placeholder="Amount" />
                    </Form.Group>
 
                    <InputGroup className="mb-3"> 
                        <select 
                            className="form-control" 
                            name="role"     
                        >
                            <option value="">Select Category</option>
                            <option value="rent">Rent</option>
                            <option value="transportation">Transportation</option>
                            <option value="food">Food</option>
                            <option value="groceries">Groceries</option>
                        </select> 
                    </InputGroup>  
                    
                </Form>
            </Modal.Body> 
            <Modal.Footer>
                <Button variant="secondary" type="button" className="mdlfooterbtn"
                        onClick={props.handleClose}>
                    CANCEL
                </Button>
                <br/>
                <Button variant="primary" type="button" className="mdlfooterbtn mdlsubmitbtn"
                    onClick={props.handleExpenseShow}>
                    SUBMIT
                </Button>
            </Modal.Footer> 
        </Modal>  
    );
    
}

export default WalletExpense;
 
 