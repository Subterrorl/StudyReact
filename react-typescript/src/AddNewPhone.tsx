import { useState } from 'react';
import './App.scss';
import Head from './component/Head/Head';
import SideBarAddNewPhone from './component/SideBarAddNewPhone/SideBarAddNewPhone';
import FirstRowContainAddNewPhone from './component/FirstRowContainAddNewPhone/FirstRowContainAddNewPhone';
import EnterBoxAddNewPhone from './component/EnterBoxAddNewPhone/EnterBoxAddNewPhone';
import FinalRowContainAddNewPhone from './component/FinalRowContainAddNewPhone/FinalRowContainAddNewPhone';
import { useSidebar } from "./SidebarContext";


function AddNewPhone() {
  const { isSidebarVisible } = useSidebar();

    
  return (
    

    <div className="flex-container">
        <Head />
        <div className="main-content">
        <SideBarAddNewPhone isVisible={isSidebarVisible} />
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
