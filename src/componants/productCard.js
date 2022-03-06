import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_PRODUCTS = gql`
 query GetProduct($productId: String!) {
  product(id: $productId) {
    name
    inStock
    gallery
    prices {
      currency {
        symbol
        label
      }
      amount
    }
  }
}
 `;

const ProductCard = () => {
    const {data ,error} = useQuery(QUERY_ALL_PRODUCTS);
    console.log("ptoduct")
    if(data){
        console.log("datr",data)
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