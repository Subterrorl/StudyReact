import React from "react";
import { Link } from "react-router-dom";
import "../SideBar/SideBar.scss";

interface SideBarProps {
  isVisible: boolean;
}

function SideBarShoppingCart({ isVisible }: SideBarProps) {
  return (
    <div className={`sidebar ${isVisible ? "visible" : ""}`}>
      <Link to="/phone-list" className="phone-list-side-bar phone-list-side-bar-first">
        Phone List
      </Link>
      <Link to="/add-new-phone" className="phone-list-side-bar">Add new phone</Link>
      <Link to="/shopping-cart" className="phone-list-side-bar"><b>Shopping Cart</b></Link>
    </div>
  );
}

export default SideBarShoppingCart;
