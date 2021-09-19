import React from "react";
import { Col, Row } from "react-bootstrap";
import Counter from "./Counter";

const CounterCom = ({ isCounterPosition }) => {
  const coutnerData = [
    { counterValue: 900, heading: "happy client", amount: "+" },
    { counterValue: 30, heading: "Downloads", amount: "M" },
    { counterValue: 10000, heading: "happy users", amount: "+" },
    { counterValue: 20, heading: "years of experience", amount: "+" },
  ];
  return (
    <>
      <Row>
        {coutnerData.map((item, i) => {
          return (
            <Col lg={3} md={4} sm={6} key={i}>
              <div className="info-single px-4 py-10 text-center my-4">
                <Counter {...item} isCounterPosition={isCounterPosition} />
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default CounterCom;
