import './App.scss';
import Head from './component/Head/Head';
import SideBar from './component/SideBar/SideBar';
import FirstRowContain from './component/FirstRowContain/FirstRowContain';
import BoxMedium from './component/BoxMedium/BoxMedium';
import MainTable from './component/MainTable/MainTable';
import FinalRowContain from './component/FinalRowContain/FinalRowContain';


function App() {
  return (
    <div className="flex-container">
      <Head />
      <div className="main-content">
        <SideBar/>
        <div className="content">
            <div className="containerin"> 
            <FirstRowContain/>
            <BoxMedium/>
            <MainTable/> 
            <FinalRowContain/> 
          </div>        
        </div>
      </div>
    </div>
  );
}


export default App;
