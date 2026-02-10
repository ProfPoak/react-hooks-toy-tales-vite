import React from "react";

function ToyCard({ id, name, image, likes, onUpdateToy }) {
  function handleLikeClick() {
    
    const updatedLikes = {
      likes: likes + 1
    }
    
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedLikes)
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      else{
        console.log("Could not like image")
      }
    })
    .then(updatedToy => {
      onUpdateToy(updatedToy)
    })
    .catch(error => console.log(error))
  }
  
  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
