import "./MainTable.scss";
import "../BoxMedium/BoxMedium.scss";
import "../../interface.tsx";
import testData from '../../data';
import { Link } from "react-router-dom";
import idata from "../../interface";

import { usePhoneContext } from "../../PhoneContext";

const MainTable = () => {

  const dataPhone = JSON.parse(testData) as idata[];


  const { setPhoneData } = usePhoneContext(); // ดึงฟังก์ชัน setPhoneData จาก Context

  const handleEditClick = (title: string, price: number) => {
    setPhoneData({ title, price }); // เก็บข้อมูล item ลงใน Context
  };


  return (
    <div id="mainTable" className="box-large">
      {dataPhone.map((item) => (
        <div key={item._id} className="phoneList">
          <div className="phone-name">{item.title}</div>
          <div className="price">{item.price}</div>
          <div className="over-button">
            
            <Link to="/add-new-phone" className="button-edit" onClick={() => handleEditClick(item.title, item.price)}>Edit</Link>
            <Link to="" className="button-buy">Buy</Link>
            
          </div>
        </div>
      ))}
    </div>
  );
};

  export default MainTable;