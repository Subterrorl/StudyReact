import "./Head.scss";
import { useCartContext } from "../../CartContext";
function Head() {

   const { getTotalQuantity } = useCartContext();

    return (
    <div className="head">
        <div className="head-in"></div>
        <div className="head-in2"><b>Moblie Phone Shop</b></div>
        <div className="head-in3">Total Items: {getTotalQuantity()}</div> 
    </div>
    );
  }

  export default Head;