import Cart from "./cart";

const CartPopUp = () => {
    return (
      <div className="popUpCont">
        <h3>My Bag, <span>0 Items</span></h3>
        {/* <Cart/>
        <Cart/> */}
        <div className="checkOut">
            <div className="popTxt">
                <p>Total</p>
                <p>$ 100.00</p>
            </div>
            <div>
                <button className="bagBtn">view bag</button>
                <button className="checkBtn">check Out</button>
            </div>
        </div>

      </div>
    );
  };
  export default CartPopUp;