import React, { useState } from "react";
import { usePhoneContext } from "../../PhoneContext";
import "./FinalRowContainAddNewPhone.scss";
import AlertPopup from "../../AlertPopup";

function FinalRowContainAddNewPhone() {
  const [alertMessage, setAlertMessage] = useState("");
  const { phoneData } = usePhoneContext(); // ดึงข้อมูลจาก Context
  const { setPhoneData } = usePhoneContext();

  const showAlert = (message: string) => {
    setAlertMessage("");
    setTimeout(() => setAlertMessage(message), 1);
  };

  const handleSave = () => {
    const { _id, title, price, item_type_id } = phoneData;

    if (!title || !price ||!item_type_id) {
      showAlert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    fetch('http://localhost:3002/savephonedata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id, title, price, item_type_id }),
    })
    .then(async (response) => {
      const data = await response.json();
      
      if (!response.ok) {
          throw new Error(data.error || "เกิดข้อผิดพลาดในการบันทึกข้อมูล"); 
      }
      
      return data;
    })
    .then((data) => {
      showAlert(data.message);
      console.log("Response3:", data);
      console.log("Response6:", data.data.id);

      const newid = data.data.id;
      console.log("Response7",newid)
      if(newid != undefined){
        setPhoneData({
          _id:newid, 
          title, 
          price ,
          item_type_id: ""});
      }
      
      console.log("PhoneData",phoneData)
    })
    .catch((error) => {
      showAlert(error.message);
      console.error("Error:", error);
    });
  };
    
    
  return (
  <div className="row"> 
      <div className="sectionPhoneList"></div> 
      <div className="section-save" onClick={handleSave}>Save</div>
      <AlertPopup message={alertMessage} />
  </div> 
  );
}

  export default FinalRowContainAddNewPhone;