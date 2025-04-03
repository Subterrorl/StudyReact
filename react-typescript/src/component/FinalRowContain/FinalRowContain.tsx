import "./FinalRowContain.scss";
import "../FirstRowContain/FirstRowContain.scss";
import { Link } from "react-router-dom";
function FinalRowContain() {
    return (
    <div className="row"> 
        <div className="sectionPhoneList"></div> 
        <Link to="/add-new-phone" className="sectionNew">New</Link>
    </div> 
    );
  }

  export default FinalRowContain;