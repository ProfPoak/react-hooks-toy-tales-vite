import React, {useEffect, useState} from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
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

  return (
    <div id="toy-collection">{toys.map(toy => (
      <ToyCard 
        key={toy.id}
        name={toy.name}
        image={toy.image}
        likes={toy.likes}
      />
    ))}
    </div>
  );
}

export default ToyContainer;
