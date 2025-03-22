import "./TopTotalBox.scss";
import { useCartContext } from "../../CartContext";

function TopTotalBox() {

  const { cart } = useCartContext(); // ดึงรายการสินค้าในตะกร้า

  return (
    <div className="top-total-box">         
      <div className="in-box-cala">
        <div className="phone-name-shopping"><b>Name</b></div>
        <div className="price-top-total-box"><b>Quantity</b></div>
        <div><span><b>Price</b></span></div>
      </div> 

      {cart.map((item) => (
        <div key={item._id} className="in-box-cala">
          <div className="phone-name-shopping">{item.title}</div>
          <div className="price-top-total-box">{item.quantity} x {item.price}</div>
          <div><span>{(item.price * item.quantity).toFixed(2)}</span></div>
        </div>
      ))}
    </div>
  );
}

export default TopTotalBox;
