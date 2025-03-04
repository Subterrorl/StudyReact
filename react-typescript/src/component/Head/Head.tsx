import React from "react";
import "./Head.scss";

interface HeadProps {
  toggleSidebar: () => void;
}

function Head({ toggleSidebar }: HeadProps) {
  return (
    <div className="head">
      <div className="head-in">
        <div className="button-head-in"><button onClick={toggleSidebar}>กดปุ่ม</button></div>
      </div>
      <div className="head-in2">
        <b>Mobile Phone Shop (React)</b>
      </div>
      <div className="head-in3">Total Items: {/* your total quantity logic */}</div>
    </div>
  );
}

export default Head;
