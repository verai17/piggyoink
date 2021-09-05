import React, { useState } from "react";    
import { useHistory } from "react-router-dom";

import "./index.css";
import { Container, Row, Col } from "react-bootstrap";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from '@fortawesome/free-solid-svg-icons'
 

function Transaction() {
 
    let history = useHistory();
    const [transactions, setTransactions] = useState([{
        id: '2',
        type: 'expense',
        category: 'rent',
        amount: 500,
        datetime: "September 5, 2020",
        runningbal: 500,
        showdetails: false
    },
    {
        id: '3',
        type: 'savings',
        category: 'cash',
        amount: 1200,
        datetime: "September 7, 2020",
        runningbal: 1700,
        showdetails: false
    }]);
 
    const itemscom = transactions.map((item, index)  =>{
        return <Row key={item.id} className="txnitem" onClick={(e)=>{toggletransactiondetails(index)}}>
                    <Col xs={4}>
                        <h2 className="txnitem-desc">{item.category.toUpperCase()}</h2> 
                    </Col>
                    <Col xs={8}>
                        <h2 className={ item.type === "expense" ? "txnitem-deduct" : "txnitem-add"}>PHP {item.amount.toFixed(2)}</h2> 
                    </Col>
                    <Row className="txnitem-details" style={{ display: (item.showdetails ? 'block' : 'none') }} >
                        <label>Date/Time: {item.datetime}</label>
                        <label>Running Balance: <span className="txnitem-runbalamnt">PHP {item.runningbal.toFixed(2)}</span></label>
                    </Row>
                    <hr/>
                </Row>
    });

    ////////////////////////// EVENTS HERE
    const routeChange = (location) =>{ 
        history.push(location); 
    }

    const toggletransactiondetails = (index) =>{ 
        let newtxnarr = [...transactions]; 
        newtxnarr[index].showdetails = !newtxnarr[index].showdetails; 
        setTransactions(newtxnarr);
    }
  


    return(
        <Container className="transactionbox"> 
            <Row>
            <h3 className="txnlbl">Transactions <span><FontAwesomeIcon icon={faHistory} /></span></h3> 
            </Row>

            {/* display all items */}
            {itemscom}


            {/* sample */}
            {/* <Row key={1} className="txnitem" onClick={(e)=>{}}>
                <Col xs={4}>
                    <h2 className="txnitem-desc">RENT</h2> 
                </Col>
                <Col xs={8}>
                    <h2 className="txnitem-deduct">PHP 500.00</h2> 
                </Col>
                <Row className="txnitem-details">
                    <label>Date/Time: September 5, 2020</label>
                    <label>Running Balance: <span className="txnitem-runbalamnt">PHP 500.00</span></label>
                </Row>
                <hr/>
            </Row>
            <Row key={2} className="txnitem">
                <Col xs={4}>
                    <h2>CASH</h2> 
                </Col>
                <Col xs={8}>
                    <h2 className="txnitem-add">PHP 1,200.00</h2> 
                </Col> 
                <Row className="txnitem-details" style={{display: "block"}}>
                    <label>Date/Time: September 7, 2020</label>
                    <label>Running Balance: <span className="txnitem-runbalamnt">PHP 1,700.00</span></label>
                </Row>
                <hr/>
            </Row> */}
        </Container>
    );
    
}

export default Transaction;
 
 