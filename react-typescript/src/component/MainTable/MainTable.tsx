import "./MainTable.scss";
import "../BoxMedium/BoxMedium.scss";
import "../../interface.tsx";
//import testData from '../../data'; //อาจไม่ใช้
import idata from "../../interface";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import { useCartContext } from "../../CartContext";
import { usePhoneContext } from "../../PhoneContext";

const MainTable = () => {

  const { updateCart } = useCartContext();
  const { setPhoneData } = usePhoneContext();

  //const dataPhone = JSON.parse(testData) as idata[]; //อาจไม่ใช้

  const [dataPhone, setDataPhone] = useState<idata[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3002/phonedata")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch phone list");
        }
        return response.json();
      })
      .then((data) => {
        setDataPhone(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  // แสดงข้อความขณะโหลด
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // แสดงข้อความเมื่อเกิดข้อผิดพลาด
  if (error) {
    return <div>Error: {error}</div>;
  }


  
  const handleEditClick = (title: string, price: number) => {
    setPhoneData({ title, price });
  };

  const handleBuyClick = (item: idata) => {
    updateCart(item);
  };

  return (
    <div id="mainTable" className="box-large">
      {dataPhone.map((item) => (
        <div key={item._id} className="phoneList">
          <div className="phone-name">{item.title}</div>
          <div className="price">{item.price}</div>
          <div className="over-button">
            
            <Link to="/add-new-phone" className="button-edit" onClick={() => handleEditClick(item.title, item.price)}>Edit</Link>
            <Link to="" className="button-buy" onClick={() => handleBuyClick(item)}>Buy</Link>
            
          </div>
        </div>
      ))}
    </div>
  );
};

  export default MainTable;