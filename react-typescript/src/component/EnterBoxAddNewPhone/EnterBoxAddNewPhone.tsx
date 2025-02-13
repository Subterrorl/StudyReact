import "./EnterBoxAddNewPhone.scss";
import { usePhoneContext } from "../../PhoneContext";

function EnterBoxAddNewPhone() {

    const { phoneData, setPhoneData } = usePhoneContext(); // ดึงทั้ง phoneData และ setPhoneData จาก Context

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target; // ดึง id และ value จาก input
        setPhoneData((prevData) => ({
            ...prevData,
            [id]: value, // อัปเดตค่าที่ตรงกับ id ของ input
          }));
    };

    return (
    <div className="box-large-page2">
        <div className="box-medium-page2">
            <div className="input-text">Name</div>
            <input
                type="text"
                className="input-box"
                id="title"
                value={phoneData?.title || ""} // แสดงค่าจาก Context
                onChange={handleInputChange} // อัปเดตค่าเมื่อพิมพ์
                placeholder="Enter phone name"
                />
        </div>
        <div className="box-medium-page2">
            <div className="input-text">Price</div>
            <input
                type="text"
                className="input-box"
                id="price"
                value={phoneData?.price || ""}
                onChange={handleInputChange}
                placeholder="Enter phone price"
                />
        </div>
    </div> 
    );
  }

  export default EnterBoxAddNewPhone;