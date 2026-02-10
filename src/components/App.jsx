import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        else {
          console.log("Error: could not load toys")
        }
      })
      .then(data => {
        setToys(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(toyData) {
    setToys([...toys, toyData])
  }

  function handleUpdateToy(updatedToy) {
    setToys(toys.map(toy => 
      toy.id === updatedToy.id ? updatedToy : toy
    ))
  }

  function handleDeleteToy(deletedToy) {
    setToys(toys.filter(toy =>
      toy.id !== deletedToy.id
    ))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onUpdateToy={handleUpdateToy} onDeleteToy={handleDeleteToy} />
    </>
  );
}

export default App;
