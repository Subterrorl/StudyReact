import React, { useEffect, useState } from "react";
import "./Head.scss";
import { useCartContext } from "../../CartContext";

interface HeadProps {
  toggleSidebar: () => void;
}

function Head({ toggleSidebar }: HeadProps) {
  
  const { getTotalQuantity , cart } = useCartContext();

  const [shopName, setShopName] = useState("Loading...");

    useEffect(() => {
    fetch("http://localhost:3002/webname")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setShopName(data.testColumn);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setShopName("Error Loading Data");
      });
  }, []);

  return (
    <div className="head">
      <div className="head-in">
        <div className="button-head-in"><button onClick={toggleSidebar}>กดปุ่ม</button></div>
      </div>
      <div className="head-in2">
        <b>{shopName}</b>
      </div>
      <div className="head-in3">Total Items: {getTotalQuantity()}</div>
    </div>
  );
}

export default Head;