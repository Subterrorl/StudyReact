import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.scss";

interface SideBarProps {
  isVisible: boolean;
}

function SideBar({ isVisible }: SideBarProps) {
  return (
    <div className={`sidebar ${isVisible ? "visible" : ""}`}>
      <Link to="/phone-list" className="phone-list-side-bar phone-list-side-bar-first">
        <b>Phone List</b>
      </Link>
      <Link to="/add-new-phone" className="phone-list-side-bar">Add new phone</Link>
      <Link to="/shopping-cart" className="phone-list-side-bar">Shopping Cart</Link>
    </div>
  );
}

export default SideBar;
