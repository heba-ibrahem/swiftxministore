import { Link } from "react-router-dom";

const Product = () => {

  return (
    <div className="productCont">
      <div>
        <div className="smallImg"></div>
        <div className="smallImg"></div>
        <div className="smallImg"></div>
      </div>

      <div className="largeImg"></div>
      <div className="prodData">
        <p className="prodTitle">title</p>
        <p className="prodSubTitle">subtitle</p>
        <p className="prodTitle">size</p>
        <div className="size">
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>l</button>
          </div>
        <p>price</p>
        <button>
          <Link to="/cart">Add to cart</Link>
        </button>
        <p>texxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxts </p>
      </div>
    </div>
  );
};

export default Product;
