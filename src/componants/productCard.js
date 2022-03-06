import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

//Error due to ID .. search for it why id make an error here and works on apollographql server
const QUERY_ALL_PRODUCTS = gql`
query GetProducts($productId: String) {
    product(id: $productId) {
    id
    name
    gallery
    prices {
      currency {
        label
        symbol
      }
      amount
    }
    inStock
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
        
        <div className="card">
            <Link to="/product">
            <img src="" alt="" className="prodImg"
            // src="{data.gallery}"
            />
            </Link>
            <div className="data">
            <p>name 
                {/* {data.name} */}
                </p>
            <p>$ 50.00
                {/* {data.prices.currency.symbol}
                {data.prices.amount} */}

            </p>
            </div>
        </div>
        
    )
}

export default ProductCard;