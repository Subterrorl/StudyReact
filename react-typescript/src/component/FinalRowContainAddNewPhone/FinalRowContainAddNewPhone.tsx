import React from 'react';
import { usePhoneContext } from "../../PhoneContext";
import './FinalRowContainAddNewPhone.scss';

function FinalRowContainAddNewPhone() {

    const { phoneData } = usePhoneContext(); // ดึงข้อมูลจาก Context
    
    const handleSave = () => {
        const { _id, title, price } = phoneData;
    
        if (!title || !price) {
          alert("กรุณากรอกข้อมูลให้ครบถ้วน");
          return;
        }
    
        fetch('http://localhost:3002/savephonedata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ _id, title, price }),
        })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
          console.log("Response:", data);
        })
        .catch((error) => {
          alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
          console.error("Error:", error);
        });
      };
    

    return (
    <div className="row"> 
        <div className="sectionPhoneList"></div> 
        <div className="section-save" onClick={handleSave}>Save</div>
    </div> 
    );
  }

  export default FinalRowContainAddNewPhone;