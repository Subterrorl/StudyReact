import Head from './component/Head/Head';
import { useState } from 'react';
import SideBarShoppingCart from './component/SideBarShoppingCart/SideBarShoppingCart';
import FirstRowContainShoppingCart from './component/FirstRowContainShoppingCart/FirstRowContainShoppingCart';
import FinalRowContainShoppingCart from './component/FinalRowContainShoppingCart/FinalRowContainShoppingCart';
import TopTotalBox from './component/TopTotalBox/TopTotalBox';
import TotalBox from './component/TotalBox/TotalBox';



function ShoppingCart() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false); // สร้าง state สำหรับควบคุมการแสดงผลของ sidebar
    const toggleSidebar = () => {
        setIsSidebarVisible((prev) => !prev);
      };

  return (

    <div className="flex-container">
        <Head toggleSidebar={toggleSidebar} /> {/* ส่ง toggleSidebar ไปที่ Head */}
        <div className="main-content">
        <SideBarShoppingCart isVisible={isSidebarVisible} /> {/* ส่ง isVisible ไปที่ SideBar */}
            <div className="content">
                <div className="containerin"> 
                    <FirstRowContainShoppingCart/>
                    <TopTotalBox/>
                    <TotalBox/>
                    <FinalRowContainShoppingCart/> 
                </div>
            </div>
        
        </div>
  </div>
        

    
  );
}

export default ShoppingCart;
