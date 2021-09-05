import React from "react";    
import { useHistory } from "react-router-dom";

import "./index.css";
import { Modal, Button, Form, InputGroup } from "react-bootstrap"; 
import { default as PiggyFront } from '../../../../img/piggyfront.svg';  
 

function WalletSavings(props) {

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
            <Modal.Title>Add Savings to <span><img alt="" src={PiggyFront} style={{marginTop: "-13px", width: 30, height: 30}} /> </span> Piggy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="number" placeholder="Amount" />
                    </Form.Group>

                    {/* <Form.Group className="mb-3" >
                        <Form.Select aria-label="Default select example">
                            
                        </Form.Select>
                    </Form.Group> */}

                    <InputGroup className="mb-3"> 
                        <select 
                            className="form-control" 
                            name="role"     
                        >
                            <option value="">Select Category</option>
                            <option value="cash">Cash</option>
                            <option value="salary">Salary</option>
                            <option value="business">Business</option>
                            <option value="others">Others</option>
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

export default WalletSavings;
 
 