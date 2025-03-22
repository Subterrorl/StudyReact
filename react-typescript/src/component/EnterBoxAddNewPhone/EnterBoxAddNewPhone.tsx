import "./EnterBoxAddNewPhone.scss";
import { usePhoneContext } from "../../PhoneContext";

function EnterBoxAddNewPhone() {

    const { phoneData, setPhoneData } = usePhoneContext();
    console.log("Current phoneData from Context:", phoneData);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setPhoneData((prevData) => ({
            ...prevData,
            [id]: value,
          }));
    };
    
    return (
    <div className="box-large-page2">
        {/* 
        <div className="box-medium-page2">
            <div className="input-text">ID</div>
            <input
            type="text"
            className="input-box"
            id="_id"
            value={phoneData?._id || ""}
            onChange={handleInputChange}
            placeholder="Enter phone id"
            />
        </div>
        */}   
        <div className="box-medium-page2">
            <div className="input-text">Name</div>
            <input
                type="text"
                className="input-box"
                id="title"
                value={phoneData?.title || ""}
                onChange={handleInputChange}
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
  //ปุ่ม edit sidebar เปิดตลอด alert ข้อความ type item