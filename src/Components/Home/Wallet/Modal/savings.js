import React, { useState, useEffect } from "react";    

import "./index.css";
import { Modal, Button, Form, InputGroup } from "react-bootstrap"; 
import { default as PiggyFront } from '../../../../img/piggyfront.svg';  
 
const initialValue = { 
    amount: '', 
    category: '',
}

function WalletSavings(props) {

    const [values, setValues] = useState(initialValue);  
 
    useEffect(() => {   
        if (props.showModal) { 
            //reset the modal inputs
            setValues(initialValue);
        } 
    }, [props.showModal]);
   
    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        })
    }

    const validateSubmit = (event) => {

        if(values.amount === '' || values.amount == null || values.amount === 0 || 
           values.category === '' || values.category == null){
            alert('Invalid data. Please check.');
        } 
        else{ 
            props.handleSubmit(values); 
        }
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
                        <Form.Control 
                            type="number" 
                            name="amount" 
                            placeholder="Amount" 
                            value={values.amount}
                            onChange={handleChange} 
                        />
                    </Form.Group>
 
                    <InputGroup className="mb-3"> 
                        <select 
                            className="form-control"  
                            name="category"  
                            value={values.category}
                            onChange={handleChange} 
                        >
                            <option key={0} value="">Select Category</option>
                            { 
                                props.categoryList.map(({ id, name }) => 
                                    <option key={id} value={name}>{name}</option>
                                )
                            } 
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
                    onClick={validateSubmit}>
                    SUBMIT
                </Button>
            </Modal.Footer> 
        </Modal>  
    );
    
}

export default WalletSavings;
 
 