import "./EnterBoxAddNewPhone.scss";
import { useLocation } from "react-router-dom";


function EnterBoxAddNewPhone() {



    const location = useLocation();
    const { title, price } = location.state || {}; // รับข้อมูลจาก state ที่ส่งมา


    return (
    <div className="box-large-page2">
        <div className="box-medium-page2">
            <div className="input-text">Name</div>
            <input
                type="text"
                className="input-box"
                id="title"
                value={title}
                placeholder="Enter phone name"
                />
        </div>
        <div className="box-medium-page2">
            <div className="input-text">Price</div>
            <input
                type="text"
                className="input-box"
                id="price"
                value={price}
                placeholder="Enter phone price"
                />
        </div>
    </div> 
    );
  }

  export default EnterBoxAddNewPhone;