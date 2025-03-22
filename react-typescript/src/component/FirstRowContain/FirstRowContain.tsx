import "./FirstRowContain.scss";
import { useCartContext } from "../../CartContext";

function FirstRowContain() {

    const { clearCart , cart } = useCartContext();

    return (
    <div className="row"> 
        <div className="sectionPhoneList"><b>Phone list</b></div>
        <a className="section-clear" id="ClearCartBox" onClick={clearCart}>Clear Cart</a> 
    </div> 
    );
  }

  export default FirstRowContain;