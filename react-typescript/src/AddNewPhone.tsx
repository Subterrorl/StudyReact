import { useState } from 'react';
import './App.scss';
import Head from './component/Head/Head';
import SideBarAddNewPhone from './component/SideBarAddNewPhone/SideBarAddNewPhone';
import FirstRowContainAddNewPhone from './component/FirstRowContainAddNewPhone/FirstRowContainAddNewPhone';
import EnterBoxAddNewPhone from './component/EnterBoxAddNewPhone/EnterBoxAddNewPhone';
import FinalRowContainAddNewPhone from './component/FinalRowContainAddNewPhone/FinalRowContainAddNewPhone';



function AddNewPhone() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarVisible((prev) => !prev);
    };
  return (
    

    <div className="flex-container">
        <Head toggleSidebar={toggleSidebar} /> {/* ส่ง toggleSidebar ไปที่ Head */}
        <div className="main-content">
        <SideBarAddNewPhone isVisible={isSidebarVisible} /> {/* ส่ง isVisible ไปที่ SideBar */}
            <div className="content">
                <div className="containerin"> 
                    <FirstRowContainAddNewPhone/>
                    <EnterBoxAddNewPhone/> 
                    <FinalRowContainAddNewPhone/> 
                </div>
            </div>
        
        </div>
  </div>
  );
}

export default AddNewPhone;
