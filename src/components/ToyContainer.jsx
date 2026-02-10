import React, {useEffect, useState} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onUpdateToy, onDeleteToy }) {

  return (
    <div id="toy-collection">{toys.map(toy => (
      <ToyCard 
        key={toy.id}
        id={toy.id}
        name={toy.name}
        image={toy.image}
        likes={toy.likes}
        onUpdateToy={onUpdateToy}
        onDeleteToy={onDeleteToy}
      />
    ))}
    </div>
  );
}

export default ToyContainer;
