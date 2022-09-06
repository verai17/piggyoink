import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { format, parseISO } from "date-fns";

import { getTransactions } from "../../../Services/transaction.service";

import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 5;
  let history = useHistory();
  const [cookies] = useCookies(["token"], ["user"]);

  useEffect(() => {
    if (cookies.token) {
      history.push("/home");
    }
  }, [history, cookies]);

  useEffect(() => {
    //get transactions list
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const queryParam = {
      limit: limit,
      page: page,
    };
    const { data } = await getTransactions(cookies.token, queryParam);
    setTransactions(data.transaction);
  };

  const itemscom = transactions.map((item, index) => {
    return (
      <Row
        key={item.id}
        className="txnitem"
        onClick={(e) => {
          toggletransactiondetails(index);
        }}
      >
        <Col xs={4}>
          <h2 className="txnitem-desc">{item.category_type.toUpperCase()}</h2>
        </Col>
        <Col xs={8}>
          {item.transaction_type === "expense" ? (
            <h2 className="txnitem-deduct">(PHP {item.amount.toFixed(2)})</h2>
          ) : (
            <h2 className="txnitem-add">PHP {item.amount.toFixed(2)}</h2>
          )}
        </Col>
        <Row
          className="txnitem-details"
          style={{ display: item.showdetails ? "block" : "none" }}
        >
          <label>
            Date/Time: {format(parseISO(item.createdAt), "MMMM d, yyyy p")}
          </label>
          {/* <label>
            Running Balance:{" "}
            <span className="txnitem-runbalamnt">
              PHP {item.runningbal.toFixed(2)}
            </span>
          </label> */}
        </Row>
        <hr />
      </Row>
    );
  });

  const toggletransactiondetails = (index) => {
    let newtxnarr = [...transactions];
    newtxnarr[index].showdetails = !newtxnarr[index].showdetails;
    setTransactions(newtxnarr);
  };

  return (
    <Container className="transactionbox">
      <Row>
        <h3 className="txnlbl">
          Transactions{" "}
          <span>
            <FontAwesomeIcon icon={faHistory} />
          </span>
        </h3>
      </Row>

      {/* display all items */}
      {itemscom}
    </Container>
  );
}

export default Transaction;
