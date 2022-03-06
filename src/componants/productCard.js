import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_PRODUCTS = gql`
query GetCurrencies($productId: String) {
  product(id: $productId) {
    id
    name
    inStock
    gallery
    description
    category
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
    prices {
      currency {
        label
        symbol
      }
      amount
    }
    brand
  }
}

 `;

const ProductCard = () => {
    const {data ,error} = useQuery(QUERY_ALL_PRODUCTS);
    if(data){
        console.log("data",data)
    }
    // if(error){
    //     console.log(error)
    // }
    return (
        <Link to="/product">
        <div className="card">
            <img src="" alt="" className="prodImg"/>
            <div className="data">
            <p>name</p>
            <p>$ 50.00</p>
            </div>
        </div>
        </Link>
    )
}

export default ProductCard;