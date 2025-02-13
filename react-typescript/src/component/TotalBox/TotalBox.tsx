import "./TotalBox.scss";
import { useCartContext } from "../../CartContext";

function TotalBox() {

    const { getTotalQuantity , cart } = useCartContext();

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="box-total">
            <div className="in-box-cala">
                <div className="phone-name-total-box">Total</div>
                <div className="price-total-box" id="totalPhone">{getTotalQuantity()} phones</div>
                <div>
                    <span>&nbsp;&nbsp;</span>
                    <span className="box-green-total-box"><b id="totalPhonePrice">{totalPrice}</b></span>
                </div>
            </div>
        </div> 
    );
  }

  export default TotalBox;