import React from "react";
import { Navigate } from "react-router-dom";
import "./DogDetails.css";

function DogDetails({dog}) {
  if(!dog) {
    return <Navigate to="/dogs" />
  }

  return (
    <div className="row DogDetails">
      <img src={`/${dog.src}.jpg`} alt={dog.name} />
      <h2>{dog.name}</h2>
      <h3>{dog.age} years old</h3>
      <p className="fact-title">Some Fun Facts about {dog.name}</p>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;