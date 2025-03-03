import { useState } from 'react'; // ต้องนำเข้า useState
import './App.scss';
import Head from './component/Head/Head';
import SideBar from './component/SideBar/SideBar';
import FirstRowContain from './component/FirstRowContain/FirstRowContain';
import BoxMedium from './component/BoxMedium/BoxMedium';
import MainTable from './component/MainTable/MainTable';
import FinalRowContain from './component/FinalRowContain/FinalRowContain';

function PhoneList() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // state สำหรับควบคุมการแสดงผลของ sidebar

  const toggleSidebar = function () {
    setIsSidebarVisible(function (prev) {
      return !prev;
    });
  };


  return (
    <div className="flex-container">
      <Head toggleSidebar={toggleSidebar} /> {/* ส่ง toggleSidebar ไปที่ Head */}
      <div className="main-content">
        <SideBar isVisible={isSidebarVisible} /> {/* ส่ง isVisible ไปที่ SideBar */}
        <div className="content">
          <div className="containerin">
            <FirstRowContain />
            <BoxMedium />
            <MainTable />
            <FinalRowContain />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneList;
