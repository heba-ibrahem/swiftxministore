import ProductCard from "./productCard";
// import { BrowserRouter , Routes, Link, Route, Switch } from "react-router-dom";
// import Product from "./product";

const Catagory = () => {
  return (
    <div className="cont">
      <div className="title">
        <p>Catagory name</p>
      </div>
      <div className="cardCont">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

    </div>
  );
};

export default Catagory;
