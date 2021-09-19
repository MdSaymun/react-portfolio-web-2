import React from "react";
import "../styles/componentsStyle/_loading.scss";
const Loading = () => {
  return (
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};
export default Loading;
