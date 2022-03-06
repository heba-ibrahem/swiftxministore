import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

//Error due to ID .. search for it why id make an error here and works on apollographql server
const QUERY_ALL_PRODUCTS = gql`
query GetProducts($productId: String) {
  product(id: $productId) {
    id
    gallery
    description
    brand
    inStock
    name
    prices {
      currency {
        symbol
      }
      amount
    }
    attributes {
      id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
  }
}

 `;

const Product = () => {

  return (
    <div className="productCont">

      <div className="prodImgCont">
      <div className="smallImgCont">
        <div className="smallImg">
        <img src="" alt="" className="prodImg"
            // src="{data.gallery}"
            /></div>
        <div className="smallImg">
        <img src="" alt="" className="prodImg"
            // src="{data.gallery}"
            /></div>
        <div className="smallImg">
        <img src="" alt="" className="prodImg"
            // src="{data.gallery}"
            /></div>
      </div>

      <div className="largeImg">
      <img src="" alt="" className="prodImg"
            // src="{data.gallery}"
            /></div>
      </div>
      <div className="prodData">
        <p className="prodTitle">title
        {/* {data.name} */}
        </p>
        <p className="prodSubTitle">subtitle
        {/* {data.brand} */}
        </p>
        <p className="smallTitle">size</p>
        <div className="size">
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>l</button>
            {/* <button>{data.attributes.items.displayValue}</button> */}

          </div>
        <p className="smallTitle">price</p>
        <p>$ 50.00</p>
        <button className="addCartBtn">
          <Link to="/cart">Add to cart</Link>
        </button>
        <p>texxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxts
           {/* {data.description} */}
           </p>
      </div>
    </div>
  );
};

export default Product;
