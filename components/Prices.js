import React, { useState } from "react";

const Prices = props => {
  const [currency, setCurrency] = useState("USD");

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for {props.bpi[currency].description}:{" "}
          <span className="badge-primary">{props.bpi[currency].code}</span>
          <strong>{props.bpi[currency].rate}</strong>
        </li>
      </ul>
      <div className="btn-group m-2">
        <input className="btn btn-primary" type="button" value="USD" onClick={(event) => setCurrency(event.target.value)} />
        <input className="btn btn-primary" type="button" value="GBP" onClick={(event) => setCurrency(event.target.value)} />
        <input className="btn btn-primary" type="button" value="EUR" onClick={(event) => setCurrency(event.target.value)} />
      </div>
    </div>
  );
};

export default Prices;
