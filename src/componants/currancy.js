import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_CURRENCIES = gql`
  query GetCurrencies {
    currencies {
      label
      symbol
    }
  }
`;
const Currency = () => {
  const { data, error } = useQuery(QUERY_CURRENCIES);
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }

  return (
        <div className="dropdownList">
      {data &&
        data.currencies.map((currency, index) => {
          console.log(index, "index");
          return (
            <ul>
              <li key={index}>
                {currency.symbol} {currency.label}
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default Currency;
