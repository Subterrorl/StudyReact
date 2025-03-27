import "./EnterBoxAddNewPhone.scss";
import { usePhoneContext } from "../../PhoneContext";
import { useEffect, useState } from "react";

function EnterBoxAddNewPhone() {
    const { phoneData, setPhoneData } = usePhoneContext();
    const [itemTypes, setItemTypes] = useState<{ id: number; typename: string }[]>([]);

    useEffect(() => {
        fetch("http://localhost:3002/get-itemtypes")
            .then((res) => res.json())
            .then((data) => {
              console.log("Item types:", data);
              setItemTypes(data);
            })
            .catch((error) => console.error("Error fetching item types:", error));
        }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setPhoneData((prevData) => ({
            ...prevData,
            [id]: value,
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

        <div className="box-medium-page2">
            <div className="input-text">Type</div>
            <select id="item_type_id" 
                    onChange={handleInputChange} 
                    value={phoneData?.item_type_id || ""}
                    >
                <option>Select a type</option>
                {itemTypes.map((item) => (
                    <option key={item.id} 
                            value={item.id}>
                            {item.typename}
                    </option>
                ))}
            </select>
        </div>
    </div> 
    );
  }

  export default EnterBoxAddNewPhone;
  //left join
  //inner join
  //sidebar เป็น state จำค่าเปิดปิด
  //ทำตัวที่คล้ายๆ alart
  //ทำให้กด save แล้วจำ id ด้วยเพื่อให้ไม่เซฟซ้ำ