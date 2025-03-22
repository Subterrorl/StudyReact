import "./MainTable.scss";
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


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleEditClick = (_id: number, title: string, price: number) => {
    setPhoneData({_id, title, price });
    console.log("Data to be set in Context:", _id, title, price);
  };

  const handleBuyClick = (item: idata) => {
    updateCart(item);
  };

  const handleDeleteClick = (_id: number) => {
    if (!window.confirm("คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลนี้?")) {
      return;
    }
  
    fetch(`http://localhost:3002/deletephonedata/${_id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete phone data");
        }
        return response.json();
      })
      .then((data) => {
        alert(data.message);
        setDataPhone((prevData) => prevData.filter((item) => item._id !== _id));
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        alert("เกิดข้อผิดพลาดในการลบข้อมูล");
      });
  };
  
  

  return (
    <div id="mainTable" className="box-large">
      {dataPhone.map((item) => (
        <div key={item._id} className="phoneList">
          <div className="phone-name">{item.title}</div>
          <div className="type-maintable">{item.typename}</div>
          <div className="price-maintable">{item.price}</div>
          <div className="over-button">
            
            <Link to="/add-new-phone" className="button-edit" onClick={() => handleEditClick(item._id,item.title, item.price)}>Edit</Link>
            <Link to="#" className="button-delete" onClick={() => handleDeleteClick(item._id)}>Delete</Link>
            <Link to="" className="button-buy" onClick={() => handleBuyClick(item)}>Buy</Link>
            
          </div>
        </div>
      ))}
    </div>
  );
};

  export default MainTable;