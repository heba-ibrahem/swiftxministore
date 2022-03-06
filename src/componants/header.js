import { useState } from "react";
// import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Currency from "./currancy";
import CartPopUp from "./cartPopUp";

const QUERY_CURRENCIES = gql`
  query GetCurrencies {
    currencies {
      label
      symbol
    }
  }
`;
const Header = () => {
  const { data, error } = useQuery(QUERY_CURRENCIES);
  if (data) {
    console.log("datr", data);
  }
  if (error) {
    console.log(error);
  }
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="header">
      <ul>
        <li>women</li>
        <li>men</li>
        <li>kids</li>
      </ul>
      <img src="/logo.png" alt="logo" className="logo" />
      <div className="icon">
        <div className="dropdown">
          <button className="headerBtn" onClick={() => setShow(!show)}>
            <p>$</p>
            <img
              src="/downArrow.png"
              alt="arrow"
              className="arrow"
            />
          </button>
          {show && (
            <div>
              <Currency />
            </div>
          )}
        </div>

        <button className="headerBtn" onClick={() => setShowCart(!showCart)}>
          <img src="/shoppingIcon.png" alt="shopping" className="shopping" />
        </button>
        {showCart && (
            <div>
              <CartPopUp/>
            </div>
          )}
      </div>
    </div>
  );
};

export default Header;
