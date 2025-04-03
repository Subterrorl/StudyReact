import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import PhoneList from "./PhoneList";
import AddNewPhone from "./AddNewPhone";
import ShoppingCart from "./ShoppingCart";
import { PhoneProvider } from './PhoneContext';
import { SidebarProvider } from "./SidebarContext";


function App() {


  return (
    <PhoneProvider>
      <SidebarProvider>
        <Router>

          <Routes>
            {/* กำหนดเส้นทางสำหรับแต่ละหน้า */}
            <Route path="/" element={<PhoneList />} />
            <Route path="/phone-list" element={<PhoneList />} />
            <Route path="/add-new-phone" element={<AddNewPhone />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Routes>
        </Router>
      </SidebarProvider>
    </PhoneProvider>
  );
}

export default App;
