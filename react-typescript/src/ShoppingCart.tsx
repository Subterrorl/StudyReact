import Head from './component/Head/Head';
import SideBarShoppingCart from './component/SideBarShoppingCart/SideBarShoppingCart';
import FirstRowContainShoppingCart from './component/FirstRowContainShoppingCart/FirstRowContainShoppingCart';
import FinalRowContainShoppingCart from './component/FinalRowContainShoppingCart/FinalRowContainShoppingCart';
import TopTotalBox from './component/TopTotalBox/TopTotalBox';
import TotalBox from './component/TotalBox/TotalBox';



function ShoppingCart() {
  return (

    <div className="flex-container">
        <Head />
        <div className="main-content">
            <SideBarShoppingCart/>
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
