const Cart = () => {
  return (
    <div className="cartCont">
      <h1>Cart</h1>
      <div className="cartProd">
        <div className="cartTxt">
          <h2>title</h2>
          <p>subtitle subtitle</p>
          <h4>$ 50.00</h4>
          <div className="size">
            <button>S</button>
            <button>M</button>
          </div>
        </div>
        <div className="cartDetail">
          <div className="cartQuntity">
            <button>+</button>
            <p>0</p>
            <button>-</button>
          </div>
          <div className="cartImg">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="cartProd">
        <div className="cartTxt">
          <h2>title</h2>
          <p>subtitle subtitle</p>
          <h4>$ 50.00</h4>
          <div className="size">
            <button>S</button>
            <button>M</button>
          </div>
        </div>
        <div className="cartDetail">
          <div className="cartQuntity">
            <button>+</button>
            <p>0</p>
            <button>-</button>
          </div>
          <div className="cartImg">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
