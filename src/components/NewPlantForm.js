import React, {useState} from "react";

function NewPlantForm({handleAddPlant}) {

  const [plantData, setPlantData] = useState({
    name:'',
    image:'',
    price: 0,
  })

  const handleChange = (event)=>{
    setPlantData({
      ...plantData,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    console.log(plantData)
    fetch('http://localhost:6001/plants',{
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(plantData)
    })
    .then((resp)=> resp.json())
    .then((plant)=> handleAddPlant(plant))
    setPlantData({
      name:'',
      image:'',
      price: 0,
    })
  }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name" 
        value={plantData.name} 
        onChange={handleChange}
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={plantData.image} 
        onChange={handleChange}
        />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price"
        value={plantData.price}
        onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
