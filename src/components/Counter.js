import React from "react";
import CountUp from "react-countup";
import "../styles/componentsStyle/_counter.scss";
const Counter = (props) => {
  const { counterValue, heading, amount, isCounterPosition } = props;
  return (
    <>
      <span className="font-bold text-3xl">
        {isCounterPosition && <CountUp start={0} end={counterValue} duration={5} />}
        {amount}
      </span>
      <h3 className="text-gray-600 text-lg capitalize font-semibold">{heading}</h3>
    </>
  );
};

export default Counter;
