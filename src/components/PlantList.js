import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {

  const filteredList = plants.filter((plant)=> plant.name.includes(search))


  return (
    <ul className="cards">{filteredList.map((plant)=> <PlantCard key={plant.id} plant={plant}/>)}</ul>
  );
}

export default PlantList;
