import { useSidebar } from "./SidebarContext";
import './App.scss';
import Head from './component/Head/Head';
import SideBar from './component/SideBar/SideBar';
import FirstRowContain from './component/FirstRowContain/FirstRowContain';
import BoxMedium from './component/BoxMedium/BoxMedium';
import MainTable from './component/MainTable/MainTable';
import FinalRowContain from './component/FinalRowContain/FinalRowContain';

function PhoneList() {
  const { isSidebarVisible } = useSidebar(); // ใช้ค่า isSidebarVisible จาก Context

  return (
    <div className="flex-container">
      <Head />
      <div className="main-content">
        <SideBar isVisible={isSidebarVisible} />
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
