import React from "react";
import "./comStyles/loading.scss";
const Loading = () => {
  return (
    <div className="h-screen flex">
      <div className="lds-ripple m-auto">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loading;
