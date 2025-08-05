import React from "react";
import "./Relatedproduct.css";
import data_product from "../../assets/data";
import Items from "../Items/Items";

const Relatedproducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Product</h1>
      <hr />
      <div className="relatedproduct-items">
        {data_product.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Relatedproducts;
