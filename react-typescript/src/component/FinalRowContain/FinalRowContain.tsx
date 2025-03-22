import "./FinalRowContain.scss";
import "../FirstRowContain/FirstRowContain.scss";
function FinalRowContain() {
    return (
    <div className="row"> 
        <div className="sectionPhoneList"></div> 
        <a href="/add-new-phone" className="sectionNew">New</a> 
    </div> 
    );
  }

  export default FinalRowContain;