import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantList, setPlantList] = useState([])
  const [search, setSearch] = useState('')



  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then((resp)=> resp.json())
    .then((list)=> setPlantList(list))
  },[])


  const handleAddPlant = (plant)=>{
    setPlantList([...plantList, plant])
  }

  const handleSearch = (searchTerm)=>{
   setSearch(searchTerm)
  }



  return (
    <main>
      <NewPlantForm  handleAddPlant={handleAddPlant}/>
      <Search search={search} onSearch={handleSearch} />
      <PlantList plants={plantList} search={search}/>
    </main>
  );
}

export default PlantPage;
