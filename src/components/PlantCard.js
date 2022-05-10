import React, {useState} from "react";

function PlantCard({plant}) {

  const [inStock, setInStock]= useState(true)

  const {name, image, price} = plant

  const handleInStock = ()=>{
    setInStock((inStock)=> !inStock)

  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {inStock ? (
        <button className="primary" onClick={handleInStock}>In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
