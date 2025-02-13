
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import PhoneList from "./PhoneList";
import AddNewPhone from "./AddNewPhone";
import ShoppingCart from "./ShoppingCart";
import { PhoneProvider } from './PhoneContext';


function App() {
  const theme = 'dark';
  const [counter, setCounter] = useState(10);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");



  return (
    <PhoneProvider>
      <Router>
        <Routes>
          {/* กำหนดเส้นทางสำหรับแต่ละหน้า */}
          <Route path="/" element={<ShoppingCart />} />
          <Route path="/phone-list" element={<PhoneList />} />
          <Route path="/add-new-phone" element={<AddNewPhone />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </PhoneProvider>
  );
}


export default App;
