import "./MainTable.scss";
import "../BoxMedium/BoxMedium.scss";
import testData from '../../data';
import { Link } from "react-router-dom";


const MainTable = () => {

  const dataPhone = JSON.parse(testData) as { _id: number; title: string; price: number }[];


  return (
    <div id="mainTable" className="box-large">
      {dataPhone.map((item) => (
        <div key={item._id} className="phoneList">
          <div className="phone-name">{item.title}</div>
          <div className="price">{item.price}</div>
          <div className="over-button">
            
            <Link to="/add-new-phone" className="button-edit" state={{ title: item.title, price: item.price }}>Edit</Link>
            <Link to="" className="button-buy">Buy</Link>
            
          </div>
        </div>
      ))}
    </div>
  );
};

  export default MainTable;